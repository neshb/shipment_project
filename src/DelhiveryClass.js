class Delhivery {
    constructor() {
      this.name = "Delhivery";
      this.per_kilometer_price = 20;
      this.mode = "train";
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

module.exports = {Delhivery}