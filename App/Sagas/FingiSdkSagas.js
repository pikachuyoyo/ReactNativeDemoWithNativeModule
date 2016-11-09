import {put} from 'redux-saga/effects'
import FingiSdkActions from '../Redux/FingiSdkRedux'



// attempts to login
export function * connectToRoom(api, action) {

  try {
    var result = yield api.connect(action.username, action.password);
    yield put(FingiSdkActions.connectToRoomSuccess(result));
  } catch (e) {
    yield put(FingiSdkActions.connectToRoomFailure(e.message));
  }

}


// attempts to login
export function * getGuestService(api) {

  try {
    var result = yield api.guestServices();
    yield put(FingiSdkActions.guestServicesSuccess(result));
  } catch (e) {
    yield put(FingiSdkActions.guestServicesFailure(e.message));
  }

}

