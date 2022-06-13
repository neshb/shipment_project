const createShipment = require("./src/create_shipment");
const display = require("./src/display");

const all_packages = [];
let selected_shipment = {};

const all_carrier_detail = [
  {
    name: "FedEx",
    rating: 4.5,
    id: "1",
  },
  {
    name: "BlueDart",
    rating: 4,
    id: "2",
  },
  {
    name: "Delhivery",
    rating: 5,
    id: "3",
  },
];

const ship_to = {
  user_name: "Amanda Miller",
  phone: "555-555-5555",
  address_line1: "525 S Winchester Blvd",
  city_locality: "San Jose",
  state_province: "CA",
  postal_code: "95128",
  country_code: "US",
  address_residential_indicator: "yes",
};

const ship_from = {
  store_name: "Example Corp.",
  owner_name: "John Doe",
  phone: "111-111-1111",
  address_line1: "4009 Marathon Blvd",
  address_line2: "Suite 300",
  city_locality: "Austin",
  state_province: "TX",
  postal_code: "78756",
  country_code: "US",
  address_residential_indicator: "no",
};

const displayAllCarrier = () => display(all_carrier_detail);
const displaySelectedCarrier = () => display(selected_shipment);
const displayAllPackages = () => display(all_packages);

const selectCarrier = (carrierId) => {
  const data = all_carrier_detail.filter((obj) => {
    if (obj.id == carrierId) return obj;
  });
  selected_shipment = data[0];
  display(`selected carrier ${selected_shipment.name}`);
};

const dispatchShipment = (shipmentId) => {
  all_packages.forEach((package) => {
    if (package.shipment_id == shipmentId) {
      package.isDispatched = true;
    }
  });
  display("package is dispatched");
};
const deliverShipment = (shipmentId) => {
  all_packages.forEach((package) => {
    if (package.shipment_id == shipmentId) {
      package.isDelivered = true;
    }
  });
  display("package is delivered successfully");
};

const rateCarrier = (carrierId, rating) => {
  all_carrier_detail.forEach((carrier) => {
    if (carrier.id == carrierId) {
      carrier.rating = rating;
    }
  });
};

selectCarrier(1);
createShipment(all_packages, 123, selected_shipment, ship_from, ship_to);
dispatchShipment(123);
deliverShipment(123);
rateCarrier(1, 4.9);
displayAllPackages();

selectCarrier(2);
createShipment(all_packages, 1234, selected_shipment, ship_from, ship_to);
dispatchShipment(1234);
deliverShipment(1234);
rateCarrier(2, 4.9);
displayAllPackages();