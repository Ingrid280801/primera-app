const { Device } = require("@tago-io/sdk");

const myDevice = new Device({ token: "618f3f98-bb51-4cd9-8981-c3716d5e7888" });

const myData = {
  variable: "temperature",
  location: { lat: 42.2974279, lng: -85.628292 },
  time: new Date(),
  unit: "C",
  value: 63,
};

async function sendMyData() {
  const result = await myDevice.sendData(myData);

  console.log(result);
  // 1 Data Added
}

async function getMyData() {
  const result = await myDevice.getData({ variables: ["temperature"], query: "last_item" });

  console.info("Current Temperature is:", result[0] ? result[0].value : "N/A");
  // Current Temperature is: 63
}

// -> See full documentation at: http://sdk.js.tago.io/