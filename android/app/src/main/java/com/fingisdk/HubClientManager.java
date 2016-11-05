package com.fingisdk;

import android.location.Address;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.List;


import com.fasterxml.jackson.databind.JsonNode;
import com.fingi.android.sdk.Fingi;
import com.fingi.android.sdk.FingiSdk;
import com.fingi.android.sdk.internal.domain.Presets;
import com.fingi.android.sdk.location.ProvideLocationListener;
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

/**
 * Created by KHAN on 11/5/2016.
 */

public class HubClientManager extends ReactContextBaseJavaModule implements SessionListener,
  SessionPresetsListener, SessionHubListener,
  SessionGuestServicesListener, SessionTvListener,
  MailboxListener, DoorListener, OpenWaysCommListener, SipExtensionListener,
  PreconnectListener, CrmSignInListener, CrmCredentialsListener, ExternalAdapterServiceRequestListener, ExternalAdapterGetListener,
  SessionErrorListener, ProvideLocationListener {

  private ReactApplicationContext _reactContxt;
  private static final String TAG = "fingi-app" + ".HubClientManager";
  public HubClientManager(ReactApplicationContext reactContext) {
    super(reactContext);

    this._reactContxt = reactContext;

    //

    ProductConfig.init(this._reactContxt);
    ProductConfig mProductConfig = ProductConfig.get();
    FingiSdk f = Fingi.initialize(this._reactContxt, mProductConfig);
    f.getSession().addListener(this);
    if(!f.getSession().isRegistered()){
      f.getSession().register();
    }
//    if(f.getSession().isRegistered()){
//      f.getSession().addPresetsListener(this);
//      f.getSession().reloadEverything();
//    }
//
//
//    if(f.getSession().hasGuestAuth()){
//
//
//
//    }
  }

  @Override
  public String getName() {
    return "HubClientManager";
  }

  private static FingiSdk INSTANCE;

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
  public void onPreconnectSuccess() {

  }

  @Override
  public void onPreconnectError(Throwable e) {

  }

  @Override
  public void onErrorHappened(Throwable e) {

  }

  @Override
  public void onGuestServicesUpdated() {

  }

  @Override
  public void onGuestServicesError(Throwable e) {

  }

  @Override
  public void onHubPingPong(PingPongResult pong) {

  }

  @Override
  public void onHubConnected() {

  }

  @Override
  public void onHubCommandReceived(Command command) {

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

    LOG.d(TAG,"Got registered. " + auth.toString());

  }

  @Override
  public void onRegisterError(Throwable e) {
    LOG.d(TAG,"Register error! " + e.getMessage());

  }

  @Override
  public void onGuestCheckIn(boolean firstTimeCheckedin, Room room) {

  }

  @Override
  public void onGuestCheckOut() {

  }

  @Override
  public void onConnected(Room room) {

  }

  @Override
  public void onConnectError(Throwable e) {

  }

  @Override
  public void onDisconnected() {

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


