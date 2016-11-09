/**
 * Created by KHAN on 11/7/2016.
 */

var React = require('react-native');
var {NativeModules} = React;
var sdkManager = NativeModules.FingiSdkManager;

// export default {
//
//   connect: async(login, password)=> {
//     try {
//       await sdkManager.preconnect();
//       return await sdkManager.connect(login, password);
//     } catch (e) {
//       throw e;
//     }
//   }
// }


class FingiSdk {

  sdkManager = NativeModules.FingiSdkManager;

  isPreconnected = false;

  constructor() {
    var _myself = this;
    (async function () {
      try {
        var result = await _myself.sdkManager.preconnect();
        console.log("Preconnection successful...")
        if (result.success === true) {
          _myself.isPreconnected = true;
        }
      } catch (e) {
        console.log("Preconnection failed . error : " + e.message)
      }
    })();//call myself !
  }

  connect(login, password) {
    try {
      //this returns a promise!
      return this.sdkManager.connect(login, password);
    } catch (e) {
      throw e;
    }
  }

  guestServices() {
    try {
      //this returns a promise!
      return this.sdkManager.guestServices();
    } catch (e) {
      throw e;
    }
  }




}


export default FingiSdk = new FingiSdk();

