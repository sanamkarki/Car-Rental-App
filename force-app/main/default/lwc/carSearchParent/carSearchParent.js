import { LightningElement, track } from "lwc";

export default class CarSearchParent extends LightningElement {
  @track carTypeId;
  connectedCallback() {
    console.log("hey.......");
    console.log("checking id holder", this.carTypeId);
  }
  carSelectedParentHandler(event) {
    console.log("HELLO PARENT");
    this.carTypeId = event.detail; // ID PASSED FROM THE CHILD
    console.log("this is the carTypeId IN parent", this.carTypeId);
  }
}
