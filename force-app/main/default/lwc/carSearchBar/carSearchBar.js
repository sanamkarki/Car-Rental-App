import { LightningElement, wire } from "lwc";
import getCarTypes from "@salesforce/apex/carSearchFormController.getCarTypes";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import { NavigationMixin } from "lightning/navigation";
export default class CarSearchBar extends NavigationMixin(LightningElement) {
  handleChange;
  typeOptions;
  @wire(getCarTypes)
  wiredCarTypes({ data, error }) {
    if (data) {
      this.typeOptions = [{ label: "All Types", value: "All Types" }];
      data.forEach(element => {
        const carTypeArray = {};
        carTypeArray.label = element.Name;
        carTypeArray.value = element.Id;
        this.typeOptions.push(carTypeArray);
      });
    } else if (error) {
      console.error("ERROR", error);
      this.showToast();
    }
  }
  handleChanges(event) {
    const carTypeId = event.target.label;
    console.log("car Id", carTypeId);
    const carTypeEvent = new CustomEvent("carSelect", { detail: carTypeId });
    this.dispatchEvent(carTypeEvent);
  }
  newButClick() {
    // navigation function
    this[NavigationMixin.Navigate]({
      type: "standard_objectPage",
      objectApiName: "Car_Type__c",
      action: "new"
    });
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
