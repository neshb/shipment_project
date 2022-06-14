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

module.exports = { userInfo, distance, shipFrom, productInfo };