package com.okkamidemo;

import android.app.Application;
import android.location.Address;
import android.util.Log;

import com.facebook.react.ReactApplication;
import com.fingi.android.sdk.location.ProvideLocationListener;
import com.fingisdk.FingiSdkPackage;
import com.peel.react.TcpSocketsModule;
import com.oblador.vectoricons.VectorIconsPackage;
import com.i18n.reactnativei18n.ReactNativeI18n;
import com.learnium.RNDeviceInfo.RNDeviceInfo;
import com.lugg.ReactNativeConfig.ReactNativeConfigPackage;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.BV.LinearGradient.LinearGradientPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication,ProvideLocationListener {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    protected boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
        new MainReactPackage(),
        new TcpSocketsModule(),
        new VectorIconsPackage(),
        new ReactNativeI18n(),
        new RNDeviceInfo(),
        new ReactNativeConfigPackage(),
        new FingiSdkPackage(),
        new LinearGradientPackage()
      );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public String getLastKnownLocation() {
    return null;
  }

  @Override
  public Address getLastKnownAddress() {
    return null;
  }
}
