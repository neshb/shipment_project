const { FedEx } = require("./src/FedExClass");
const { BlueDart } = require("./src/BlueDartClass");
const { Delhivery } = require("./src/DelhiveryClass");
const { CarrierProcessor } = require("./src/CarrierProcessorClass");
const { userInfo, distance, shipFrom, productInfo } = require("./src/data")

class Store {
  constructor(userInfo) {
    this.user_info = userInfo;
    this.carrier_processor = {};
  }
  enterDetail(distance, shipFrom, productInfo) {
    this.carrier_processor = new CarrierProcessor(
      this.user_info,
      distance,
      shipFrom,
      productInfo
    );
  }
  displayUserInfo() {
    console.log("user info", userInfo);
  }
}

const package = new Store(userInfo);
package.enterDetail(distance, shipFrom, productInfo);
const carrierProcessor = package.carrier_processor;
const selectedCarrier = carrierProcessor.selectCarrier(
  new FedEx(distance),
  new BlueDart(distance),
  new Delhivery(distance)
);
const generatedLebal = carrierProcessor.createShipment();
let productData = selectedCarrier.dispatchedShipment(generatedLebal);
productData = selectedCarrier.deliveredShipment(productData);
// console.log(productData)