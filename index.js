
"use strict";
// Initialization 
const Denon = require('denon-client');
/**
 * Denon is now an object containing DenonClient and Options.
 * Use the DenonClient to send requests. Use the Options to define the data.
 */
//const denonClient = new Denon.DenonClient(`${DenonAVRHost}`);
 const denonClient = new Denon.DenonClient('192.168.0.171');
 
// Subscribe to any available event 
denonClient.on('masterVolumeChanged', (volume) => {
  // This event will fire every time when the volume changes. 
  // Including non requested volume changes (Using a remote, using the volume wheel on the device). 
 
  console.log(`Volume changed to: ${volume}`);
});
 
// Connecting 
denonClient
  .connect()
  .then(() => {
    // Tasty promise chains.. 
    // 
    // You are free to send any command now. 
 
     denonClient.setVolume(59); // Destroy neighborhood 
   return denonClient
  .disconnect();
  })
 /*.then(() => {
 
    return denonClient.setSurround(Denon.Options.SurroundOptions.Stereo);
  })
  .then(() => {
 
    return denonClient.setVolume(98); // Destroy neighborhood 
  })*/
  .catch((error) => {
    // Oh noez. 
    
    console.error(error);
  });
  