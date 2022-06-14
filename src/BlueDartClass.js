class BlueDart {
    constructor() {
      this.name = "BlueDart";
      this.per_kilometer_price = 30;
      this.mode = "air";
    }
    display(message) {
      console.log(message);
    }
    dispatchedShipment(packageData) {
      packageData.isDispatched = true;
      this.display(`package is dispatched via ${this.name}`);
      return packageData;
    }
    deliveredShipment(packageData) {
      packageData.isDelivered = true;
      this.display(`package is delivered via ${this.name}`);
      return packageData;
    }
  }
module.exports = {BlueDart}