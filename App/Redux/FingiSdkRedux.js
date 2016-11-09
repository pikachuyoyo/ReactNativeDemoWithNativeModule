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

  commandToRoomRequest: ['command'],
  commandToRoomSuccess: null,
  commandToRoomFailure: ['error'],

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
  guestServicesError: null,

  //---------
  sendingCommand: false,


})

/* ------------- Reducers ------------- */

// we're attempting to fingiSdk
export const connectToRoomRequest = state => state.merge({fetching: true, loggedIn: false, error: null})

// we've successfully logged in
export const connectToRoomSuccess = (state, {username}) =>
  state.merge({fetching: false, loggedIn: true, error: null})

// we've had a problem logging in
export const connectToRoomFailure = (state, {error}) =>
  state.merge({fetching: false, loggedIn: false, error})


// we're attempting to fingiSdk
export const commandToRoomRequest = state => state.merge({sendingCommand:true})

// we've successfully logged in
export const commandToRoomSuccess = (state, action) =>
  state.merge({sendingCommand:false})

// we've had a problem logging in
export const commandToRoomFailure = (state) =>
  state.merge({sendingCommand:false})

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
  [Types.CONNECT_TO_ROOM_REQUEST]: connectToRoomRequest,
  [Types.CONNECT_TO_ROOM_SUCCESS]: connectToRoomSuccess,
  [Types.CONNECT_TO_ROOM_FAILURE]: connectToRoomFailure,

  [Types.COMMAND_TO_ROOM_REQUEST]: commandToRoomRequest,
  [Types.COMMAND_TO_ROOM_SUCCESS]: commandToRoomSuccess,
  [Types.COMMAND_TO_ROOM_FAILURE]: commandToRoomFailure,

  [Types.GUEST_SERVICES_REQUEST]: guestServicesRequest,
  [Types.GUEST_SERVICES_SUCCESS]: guestServiceSuccess,
  [Types.GUEST_SERVICES_FAILURE]: guestServiceFailure,


  [Types.LOGOUT]: logout
})

/* ------------- Selectors ------------- */

// Is the current user logged in?
export const isLoggedIn = fingiSdkState => fingiSdkState.username !== null
