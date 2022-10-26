const deviceName = "Galaxy Note";
const currentPrice = 30900;
const storage = "256G";

const galaxyNote = {
  deviceName: deviceName,
  currentPrice: currentPrice,
  storage: storage,
};

console.log(galaxyNote.deviceName);

const galaxyNote2 = {
  deviceName,
  currentPrice,
  storage,
};

console.log(galaxyNote2.deviceName);
