package com.fingisdk;

import android.location.Address;
import android.support.annotation.Nullable;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.Arrays;
import java.util.List;
import java.util.Map;


import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.fasterxml.jackson.databind.JsonNode;
import com.fingi.android.sdk.Fingi;
import com.fingi.android.sdk.FingiSdk;
import com.fingi.android.sdk.internal.domain.Device;
import com.fingi.android.sdk.internal.domain.GuestServiceItem;
import com.fingi.android.sdk.internal.domain.Presets;
import com.fingi.android.sdk.location.ProvideLocationListener;
import com.fingi.android.sdk.objects.Session;
import com.fingi.android.sdk.objects.SessionListener;
import com.fingi.android.sdk.objects.SessionPresetsListener;
import com.fingi.android.sdk.door.DoorListener;
import com.fingi.android.sdk.door.openways.events.listener.OpenWaysCommListener;
import com.fingi.android.sdk.door.openways.response.CheckinOrCheckoutResponse;
import com.fingi.android.sdk.door.openways.response.GetAudioOrNFCResponse;
import com.fingi.android.sdk.door.openways.response.GetRoomResponse;
import com.fingi.android.sdk.door.openways.response.LockFixResponse;
import com.fingi.android.sdk.door.openways.response.OpenTestResponse;
import com.fingi.android.sdk.door.openways.response.ResetPwdResponse;
import com.fingi.android.sdk.door.openways.response.SubscriptionConfirmResponse;
import com.fingi.android.sdk.door.openways.response.SubscriptionResponse;
import com.fingi.android.sdk.internal.domain.Authentication;
import com.fingi.android.sdk.internal.domain.Command;
import com.fingi.android.sdk.internal.domain.ParanetGuest;
import com.fingi.android.sdk.internal.events.PingPongResult;
import com.fingi.android.sdk.internal.events.api.sip.extension.SipExtensionListener;
import com.fingi.android.sdk.objects.CrmCredentialsListener;
import com.fingi.android.sdk.objects.CrmSignInListener;
import com.fingi.android.sdk.objects.ExternalAdapterGetListener;
import com.fingi.android.sdk.objects.ExternalAdapterServiceRequestListener;
import com.fingi.android.sdk.objects.MailboxListener;
import com.fingi.android.sdk.objects.PreconnectListener;
import com.fingi.android.sdk.objects.Room;
import com.fingi.android.sdk.objects.SessionErrorListener;
import com.fingi.android.sdk.objects.SessionGuestServicesListener;
import com.fingi.android.sdk.objects.SessionHubListener;
import com.fingi.android.sdk.objects.SessionTvListener;
import com.fingisdk.config.ProductConfig;
import com.fingisdk.log.LOG;
import com.google.gson.Gson;


/**
 * Created by KHAN on 11/5/2016.
 */

public class FingiSdkManager extends ReactContextBaseJavaModule implements SessionListener,
  SessionPresetsListener, SessionHubListener,
  SessionGuestServicesListener, SessionTvListener,
  MailboxListener, DoorListener, OpenWaysCommListener, SipExtensionListener,
  PreconnectListener, CrmSignInListener, CrmCredentialsListener, ExternalAdapterServiceRequestListener, ExternalAdapterGetListener,
  SessionErrorListener, ProvideLocationListener {

  private ReactApplicationContext _reactContxt;
  private com.fingi.android.sdk.FingiSdk _fingiSdk;
  private Session _fingiSession;
  private static final String TAG = "fingi-app" + ".FingiSdkManager";

  public FingiSdkManager(ReactApplicationContext reactContext) {
    super(reactContext);

    this._reactContxt = reactContext;
    ProductConfig.init(this._reactContxt);
    ProductConfig mProductConfig = ProductConfig.get();
    this._fingiSdk = Fingi.initialize(this._reactContxt, mProductConfig);
    this._fingiSession = this._fingiSdk.getSession();
    this._fingiSession.addListener(this);
  }

  private void sendEventToJs(String eventName,
                             @Nullable WritableMap params) {
    this._reactContxt
      .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
      .emit(eventName, params);
  }

  /// react methods
  @ReactMethod
  public void setSettings(ReadableMap settings) {

  }

  //region PreConnect Wrapper

  private Promise _preconnectPromise;
  private boolean _preConnected = false;

  @ReactMethod
  public void preconnect(Promise preconnectPromise) {
    this._preconnectPromise = preconnectPromise;
    this._fingiSession.addPreconnectListener(this);
    this._preConnected = false;
    this._fingiSession.preconnect();
  }


  @Override
  public void onPreconnectSuccess() {
    this._preConnected = true;
    if (this._preconnectPromise != null) {
      WritableMap map = Arguments.createMap();
      map.putBoolean("success", true);
      this._preconnectPromise.resolve(map);
    }
  }

  @Override
  public void onPreconnectError(Throwable e) {
    this._preConnected = false;
    if (this._preconnectPromise != null) {
      this._preconnectPromise.reject(e);
    }
  }


  //endregion

  //region Connect [ Login to room wrapper ]

  private Promise _connectPromise;

  @ReactMethod
  public void connect(String username, String password, Promise preconnectPromise) {
    this._connectPromise = preconnectPromise;
    this._fingiSession.addPreconnectListener(this);
    this._fingiSession.connectToRoom(username, password);
  }

  @Override
  public void onConnected(Room room) {
    if (this._connectPromise != null) {
      WritableMap map = Arguments.createMap();
      Map<String, Device> devices = room.getDevices();

      map.putBoolean("success", true);
      this._connectPromise.resolve(null);
    }
  }

  @Override
  public void onConnectError(Throwable e) {
    if (this._connectPromise != null) {
      this._connectPromise.reject(e);
    }
  }

  //endregion

  //region Disconnect [ logout to room wrapper ]

  private Promise _disconnectPromise;

  @ReactMethod
  public void disconnect(Promise predisconnectPromise) {
    this._disconnectPromise = predisconnectPromise;
    this._fingiSession.disconnectFromRoom();
  }


  @Override
  public void onDisconnected() {
    this._fingiSession.clearAuth();
    if (this._disconnectPromise != null) {
      this._disconnectPromise.resolve(null);
    }
  }


  //endregion

  //region GuestServices [ Guest service to room wrapper ]

  private Promise _guestServicesPromise;

  @ReactMethod
  public void guestServices(Promise guestServicesPromise) {
    this._guestServicesPromise = guestServicesPromise;
    this._fingiSession.addGuestServicesListener(this);
    this._fingiSession.reloadGuestServices();
  }

  @Override
  public void onGuestServicesUpdated() {
    if (this._guestServicesPromise != null) {
      WritableMap map = Arguments.createMap();
      GuestServiceItem i = this._fingiSession.getGuestServiceRoot();

      Gson gson = new Gson();
      String json = gson.toJson(i);

      map.putBoolean("success", true);
      map.putString("data", json);
      this._guestServicesPromise.resolve(null);
    }
  }

  @Override
  public void onGuestServicesError(Throwable e) {
    if (this._guestServicesPromise != null) {
      this._guestServicesPromise.reject(e);
    }
  }


  //endregion


  //region Hub Command [ hubCommand wrapper ]

  private Promise _hubCommandPromise;

  @ReactMethod
  public void sendHubCommand(String command) {
    String[] commandArray = command.trim().split("\\s+");
    Command m;
    if (commandArray.length == 1)
      m = new Command(command.trim());
    else {
      m = new Command(commandArray[0], Arrays.copyOfRange(commandArray, 1, commandArray.length - 1));
    }
    this._fingiSession.sendCommand(m);
  }

  @Override
  public void onHubPingPong(PingPongResult pong) {

  }

  @Override
  public void onHubConnected() {

  }

  @Override
  public void onHubCommandReceived(Command command) {

    WritableMap map = Arguments.createMap();
    map.putString("command", command.toString());
    this.sendEventToJs("onHubCommand", map);
  }

  @Override
  public void onHubCommandDiscarded(Command lastCommand, List<Command> leftoverCommands) {

  }

  @Override
  public void onHubErrorReceived(Error error) {

  }

  @Override
  public void onHubDisconnected(Throwable cause) {

  }

  @Override
  public void onRegistered(Authentication auth) {

    LOG.d(TAG, "Got registered. " + auth.toString());

  }

  @Override
  public void onRegisterError(Throwable e) {
    LOG.d(TAG, "Register error! " + e.getMessage());

  }


  //endregion

  @Override
  public String getName() {
    return "FingiSdkManager";
  }

  private static com.fingi.android.sdk.FingiSdk INSTANCE;

  @ReactMethod
  public void StartSession() {
    Fingi.initialize(this._reactContxt, null);
  }

  @Override
  public String getLastKnownLocation() {
    return null;
  }

  @Override
  public Address getLastKnownAddress() {
    return null;
  }

  @Override
  public void onPresetsUpdated(Presets presets) {

    String x = presets.toString();

  }

  @Override
  public void onPresetsUpdateError(Throwable e) {
    String x = e.getMessage();
  }

  @Override
  public void onSubscriptionResponse(SubscriptionResponse response) {

  }

  @Override
  public void onSubscriptionConfirmResponse(SubscriptionConfirmResponse response) {

  }

  @Override
  public void onOpenTestResponose(OpenTestResponse response) {

  }

  @Override
  public void onGetRoomResponse(GetRoomResponse response) {

  }

  @Override
  public void onGetKeyResponse(GetAudioOrNFCResponse response) {

  }

  @Override
  public void onResetPwdResponse(ResetPwdResponse response) {

  }

  @Override
  public void onCheckinResponse(CheckinOrCheckoutResponse response) {

  }

  @Override
  public void onCheckoutResponse(CheckinOrCheckoutResponse response) {

  }

  @Override
  public void onLockFixResponse(LockFixResponse response) {

  }

  @Override
  public void onCheckinToOpenWaysResponse(boolean success) {

  }

  @Override
  public void onPutPinCodeToCoreResponse(boolean success) {

  }

  @Override
  public void onGetPinCodeFromCoreResponse(String pinCode) {

  }

  @Override
  public void onSipExtensionResponse(String username, String password) {

  }

  @Override
  public void onCrmCredentialsReceived(ParanetGuest guest) {

  }

  @Override
  public void onCrmCredentialsError(Throwable e) {

  }

  @Override
  public void onCrmSignInSuccess(ParanetGuest guest) {

  }

  @Override
  public void onCrmSignInError(Throwable e) {

  }

  @Override
  public void onExternalAdapterGetSuccess(JsonNode responseNode) {

  }

  @Override
  public void onExternalAdapterGetError(Throwable e) {

  }

  @Override
  public void onExternalAdapterServiceRequestSuccess(int id) {

  }

  @Override
  public void onExternalAdapterServiceRequestError(Throwable e) {

  }

  @Override
  public void onMailboxContentUpdated(boolean isIncoming) {

  }

  @Override
  public void onMailboxUpdateError(Throwable e) {

  }

  @Override
  public void onMessageSent() {

  }

  @Override
  public void onSendMessageError(Throwable e) {

  }


  @Override
  public void onErrorHappened(Throwable e) {

  }

  @Override
  public void onGuestCheckIn(boolean firstTimeCheckedin, Room room) {

  }

  @Override
  public void onGuestCheckOut() {

  }

  @Override
  public void onRoomMove() {

  }

  @Override
  public void onInvalidSignature() {

  }

  @Override
  public void onChannelListUpdated() {

  }

  @Override
  public void onChannelListError(Throwable e) {

  }

  @Override
  public void onProgramDataUpdated() {

  }

  @Override
  public void onProgramDataError(Throwable e) {

  }
}


