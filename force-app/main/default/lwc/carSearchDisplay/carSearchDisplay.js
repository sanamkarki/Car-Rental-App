import { LightningElement, api, wire, track } from "lwc";
import getCars from "@salesforce/apex/displayApexController.getCars";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
export default class CarSearchDisplay extends LightningElement {
  @api carTypeId;
  @track carsInfo;
  @wire(getCars, { carTypeId: "$carTypeId" })
  wiredCars({ data, error }) {
    console.log("this is the car info", data);
    if (data) {
      this.carsInfo = data;
      console.log("this is the car info", this.carsInfo);
      console.log("this is the data", data);
    } else if (error) {
      this.showToast();
    }
  } // first one is the para passed in apex, second is the above variable
  // show toast when error occurs
  showToast() {
    const event = new ShowToastEvent({
      title: "Toast message",
      message: "Toast Message",
      variant: "Error"
    });
    this.dispatchEvent(event);
  }
  get carsFound() {
    if (this.carsInfo) {
      return true;
    } else {
      return false;
    }
  }
}
