const { FedEx } = require("./src/FedExClass");
const { BlueDart } = require("./src/BlueDartClass");
const { Delhivery } = require("./src/DelhiveryClass");
const { CarrierProcessor } = require("./src/CarrierProcessorClass");

const userInfo = {
  userName: "Amanda Miller",
  phone: "555-555-5555",
  addressLine1: "525 S Winchester Blvd",
  cityLocality: "San Jose",
  stateProvince: "CA",
  postalCode: "95128",
  countryCode: "US",
  addressResidentialIndicator: "yes",
};

const distance = 200; // in kilometer

const shipFrom = {
  storeName: "Example Corp.",
  ownerName: "John Doe",
  phone: "111-111-1111",
  addressLine1: "4009 Marathon Blvd",
  addressLine2: "Suite 300",
  cityLocality: "Austin",
  stateProvince: "TX",
  postalCode: "78756",
  countryCode: "US",
  addressResidentialIndicator: "no",
};

const productInfo = [
  {
    dimension: {
      height: "50cm",
      width: "100cm",
    },
    weigth: "700gm",
    productName: "product 01",
  },
  {
    dimension: {
      height: "150cm",
      width: "500cm",
    },
    weigth: "950gm",
    productName: "product 02",
  },
];

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