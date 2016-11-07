import {put} from 'redux-saga/effects'
import LoginActions from '../Redux/LoginRedux'


let React = require('react-native');
let {NativeModules} = React;


// attempts to login
export function * connectToRoom(api, action) {

  try {
    var result = api.connect(action.username, action.password);
    yield put(LoginActions.loginSuccess(result));
  } catch (e) {
    yield put(LoginActions.loginFailure(e));
  }


  // (async function () {
  //   try {
  //     var result = await fingiSdk.connect(action.username, action.password);
  //     yield put(LoginActions.loginSuccess(result))
  //   } catch (e) {
  //     console.log("Connection failed . error : " + e.message)
  //     yield put(LoginActions.loginFailure(e))
  //   }
  // })();//call myself !

  // try {
  //   var result = await fingiSdk.connect(action.username, action.password);
  //   yield put(LoginActions.loginSuccess(result))
  // } catch (e) {
  //   yield put(LoginActions.loginFailure(e))
  // }
}
