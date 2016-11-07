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
  guestServicesSuccess: ['guestServices'],
  guestServicesFailure: ['error'],

})

export const FingiSdkTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  username: null,
  error: null,
  fetching: false
})

/* ------------- Reducers ------------- */

// we're attempting to fingiSdk
export const request = state => state.merge({fetching: true})

// we've successfully logged in
export const success = (state, {username}) =>
  state.merge({fetching: false, error: null, username})

// we've had a problem logging in
export const failure = (state, {error}) =>
  state.merge({fetching: false, error})

// we've logged out
export const logout = state => INITIAL_STATE

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CONNECT_TO_ROOM_REQUEST]: request,
  [Types.CONNECT_TO_ROOM_SUCCESS]: success,
  [Types.CONNECT_TO_ROOM_FAILURE]: failure,


  [Types.LOGOUT]: logout
})

/* ------------- Selectors ------------- */

// Is the current user logged in?
export const isLoggedIn = fingiSdkState => fingiSdkState.username !== null
