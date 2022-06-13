const display = require("./display")

const createShipment = (all_packages,shipment_id, selected_shipment, ship_from, ship_to) => {
    all_packages.push({
      selected_shipment: selected_shipment,
      ship_from: ship_from,
      ship_to: ship_to,
      isDispatched: false,
      isDelivered: false,
      shipment_id: shipment_id, // it will be unique id
    });
    display("package is ready to dispatch");
  };

module.exports = createShipment