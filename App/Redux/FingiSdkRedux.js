import {createReducer, createActions} from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
  connectToRoomRequest: ['username', 'password'],
  connectToRoomSuccess: ['roomData'],
  connectToRoomFailure: ['error'],

  disconnectRoomRequest: null,
  disconnectRoomSuccess: null,

  guestServicesRequest: null,
  guestServicesSuccess: ['guestServicesTree'],
  guestServicesFailure: ['guestServicesError'],

})

export const FingiSdkTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  username: null,
  error: null,
  fetching: false,
  loggedIn: false,

  //------------------

  guestServicesTree: {},
  guestServicesFetching: false,
  guestServicesError: null


})

/* ------------- Reducers ------------- */

// we're attempting to fingiSdk
export const loginRequest = state => state.merge({fetching: true, loggedIn: false, error: null})

// we've successfully logged in
export const loginSuccess = (state, {username}) =>
  state.merge({fetching: false, loggedIn: true, error: null})

// we've had a problem logging in
export const loginFailure = (state, {error}) =>
  state.merge({fetching: false, loggedIn: false, error})

// we've logged out
export const logout = state => INITIAL_STATE


// we're attempting to fingiSdk
export const guestServicesRequest = (state, action) => state.merge({
  guestServicesFetching: true,
  guestServicesError: null
})

// we've successfully logged in
export const guestServiceSuccess = (state, action) => {
  console.log(action.guestServicesTree);
  var guestServices = JSON.parse(action.guestServicesTree.data);
  console.log(guestServices);
  return state.merge({
    guestServicesFetching: false,
    guestServicesTree: guestServices
  })
}

// we've had a problem logging in
export const guestServiceFailure = (state, {guestServicesError}) =>
  state.merge({guestServicesFetching: true, guestServicesTree: {}, guestServicesError})

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CONNECT_TO_ROOM_REQUEST]: loginRequest,
  [Types.CONNECT_TO_ROOM_SUCCESS]: loginSuccess,
  [Types.CONNECT_TO_ROOM_FAILURE]: loginFailure,


  /*
   *guestServicesRequest: null,
   guestServicesSuccess: ['guestServices'],
   guestServicesFailure: ['error'],
   * */
  [Types.GUEST_SERVICES_REQUEST]: guestServicesRequest,
  [Types.GUEST_SERVICES_SUCCESS]: guestServiceSuccess,
  [Types.GUEST_SERVICES_FAILURE]: guestServiceFailure,


  [Types.LOGOUT]: logout
})

/* ------------- Selectors ------------- */

// Is the current user logged in?
export const isLoggedIn = fingiSdkState => fingiSdkState.username !== null
