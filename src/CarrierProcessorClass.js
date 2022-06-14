class CarrierProcessor {
  constructor(userInfo, distance, ship_from, productInfo) {
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

module.exports = { CarrierProcessor };
