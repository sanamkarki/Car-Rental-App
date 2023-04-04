import { LightningElement, track } from "lwc";

export default class CarSearchParent extends LightningElement {
  @track carTypeId;
  carSelectedParentHandler(event) {
    this.carTypeId = event.detail; // ID PASSED FROM THE CHILD
  }
}
