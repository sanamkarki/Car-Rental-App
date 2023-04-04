import { LightningElement, api, wire, track } from "lwc";
import getCars from "@salesforce/apex/displayApexController.getCars";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
export default class CarSearchDisplay extends LightningElement {
  @api carTypeId;
  @track carsInfo;
  @wire(getCars, { carTypeId: "$carTypeId" })
  wiredCars({ data, error }) {
    if (data) {
      this.carsInfo = data;
      console.log("this is the car info", this.carsInfo);
      console.log("this is the data", data);
    } else if (error) {
      this.showToast();
    }
  }
  // show toast when error occurs
  showToast() {
    const event = new ShowToastEvent({
      title: "Toast message",
      message: "Toast Message",
      variant: "Error"
    });
    this.dispatchEvent(event);
  }
}
