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

  async connect(login, password) {
    try {
      return await
      this.sdkManager.connect(login, password);
    } catch (e) {
      throw e;
    }
  }

  connectX(login, password) {

    if (this.isPreconnected) {
      (async function () {
        try {
          var result = await _myself.sdkManager.connect(login, password);
          console.log("Connection successful...")
          if (result.success === true) {
            _myself.isPreconnected = true;
          }
        } catch (e) {
          console.log("Connection failed . error : " + e.message)
        }
      })();//call myself !
    } else {
      console.log("Not preconnected. so connecting to room failed...")
    }

  }

}


export default FingiSdk = new FingiSdk();

