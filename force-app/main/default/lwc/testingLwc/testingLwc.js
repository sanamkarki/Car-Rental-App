import { LightningElement, wire } from "lwc";
import testingMethod from "@salesforce/apex/testingApex.testingMethod";
export default class TestingLwc extends LightningElement {
  dataHolder;
  @wire(testingMethod)
  wiredFunction(data, error) {
    if (data) {
      this.dataHolder = data;
      console.log("this is the data", data);
    } else if (error) {
      console.error(error);
    }
  }
}
