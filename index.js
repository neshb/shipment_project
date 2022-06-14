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
class FedEx {
  constructor() {
    this.name = "FedEx";
    this.per_kilometer_price = 10;
    this.mode = "road";
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
class CarrierProcessor {
  constructor(userInfo, distance, ship_from) {
    this.distance = distance;
    this.ship_from = ship_from;
    this.user_info = userInfo;
    this.product_info = productInfo;
    this.selected_carrier = {};
    this.created_shipment = {};
  }
  selectCarrier(fedExCarrier, blueDartCarrier, delhiveryCarrier) {
    // we can write logic which choose carrier,
    this.selected_carrier = fedExCarrier;
    return this.selected_carrier;
  }
  createShipment() {
    this.created_shipment = {
      shipmentId: "1234",
      shipTo: this.user_info,
      shipFrom: this.ship_from,
      productInfo: this.product_info,
      isCreated: true,
      isDelivered: false,
      isDispatched: false,
    };
    console.log(
      `Shipment is created with shipment_is ${this.created_shipment.shipmentId}`
    );
    return this.created_shipment;
  }
}
class Store {
  constructor(userInfo) {
    this.user_info = userInfo;
    this.carrier_processor = {};
  }
  enterDetail(distance, shipFrom, productInfo) {
    this.carrier_processor = new CarrierProcessor(
      this.userInfo,
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