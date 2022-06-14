const userInfo = {
  user_name: "Amanda Miller",
  phone: "555-555-5555",
  address_line1: "525 S Winchester Blvd",
  city_locality: "San Jose",
  state_province: "CA",
  postal_code: "95128",
  country_code: "US",
  address_residential_indicator: "yes",
}

const distance = 200 // in kilometer

const shipFrom = {
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

const productInfo = [
  {
    dimension: {
      height:"50cm",
      width:"100cm"
    },
    weigth : "700gm",
    productName :"product 01"
  },
  {
    dimension: {
      height:"150cm",
      width:"500cm"
    },
    weigth : "950gm",
    productName :"product 02"
  }
]
class FedEx {
  constructor(){
    this.name = "FedEx"
    this.perKilometerPrice = 10
    this.mode = "road"
  }
  display(message){
    console.log(message)
  }
  dispatchedShipment(packageData){
    packageData.isDispatched = true
    this.display(`package is dispatched via ${this.name}`)
    return packageData
  }
  deliveredShipment(packageData){
    packageData.isDelivered = true
    this.display(`package is delivered via ${this.name}`)
    return packageData
  }
}

class Delhivery {
  constructor(){
    this.name = "Delhivery"
    this.perKilometerPrice = 20
    this.mode = "train"
  }
  display(message){
    console.log(message)
  }
  dispatchedShipment(packageData){
    packageData.isDispatched = true
    this.display(`package is dispatched via ${this.name}`)
    return packageData
  }
  deliveredShipment(packageData){
    packageData.isDelivered = true
    this.display(`package is delivered via ${this.name}`)
    return packageData
  }
}

class BlueDart {
  constructor(){
    this.name = "BlueDart"
    this.perKilometerPrice = 30
    this.mode = "air"
  }
  display(message){
    console.log(message)
  }
  dispatchedShipment(packageData){
    packageData.isDispatched = true
    this.display(`package is dispatched via ${this.name}`)
    return packageData
  }
  deliveredShipment(packageData){
    packageData.isDelivered = true
    this.display(`package is delivered via ${this.name}`)
    return packageData
  }
}
class CarrierProcessor{
  constructor(userInfo,distance,ship_from){
    this.distance = distance
    this.ship_from = ship_from
    this.user_info = userInfo
    this.productInfo = productInfo
    this.selected_carrier = {}
    this.createdShipment = {}
  }
  selectCarrier(fedExCarrier,blueDartCarrier,delhiveryCarrier) {
    this.selected_carrier = blueDartCarrier
    return this.selected_carrier
  }
  createShipment(){
    this.createdShipment = {
      shipment_id : "1234",
      ship_to : this.user_info,
      ship_from : this.ship_from,
      product_info :this.productInfo,
      isCreated: true,
      isDelivered : false,
      isDispatched : false,
    }
    console.log(`Shipment is created with shipment_is ${this.createdShipment.shipment_id}`)
    return this.createdShipment
  }
}
class Store {
  constructor(userInfo){
    this.userInfo = userInfo;
    this.carrierProcessor = {}
  }
  enterDetail(distance,shipFrom,productInfo){
    this.carrierProcessor = new CarrierProcessor(this.userInfo,distance,shipFrom,productInfo)
  }
  displayUserInfo(){
    console.log("user info", userInfo)
  }
}

const package = new Store(userInfo);
package.enterDetail(distance,shipFrom,productInfo)
const carrierProcessor = package.carrierProcessor
const selectedCarrier = carrierProcessor.selectCarrier(new FedEx(distance),new BlueDart(distance),new Delhivery(distance));
const generatedLebal = carrierProcessor.createShipment()
let productData = selectedCarrier.dispatchedShipment(generatedLebal)
productData = selectedCarrier.deliveredShipment(productData)
// console.log(productData)