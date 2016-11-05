
package com.fingisdk.config;

import android.content.Context;


import com.fingi.android.sdk.AndroidIdIdentificationStrategy;
import com.fingi.android.sdk.IdentificationStrategy;
import com.fingi.android.sdk.Logger;
import com.fingi.android.sdk.PersistenceStrategy;
import com.fingi.android.sdk.TimeoutConfig;
import com.fingi.android.sdk.internal.domain.Authentication;
import com.fingisdk.AndroidPersistenceStrategy;
import com.fingisdk.log.SDKLogger;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;


enum Flavor {
  DEVELOPMENT,
  PRODUCTION,
  STAGING,
}

public class ProductConfig implements com.fingi.android.sdk.Config {

  private static ProductConfig INSTANCE;
  private String mProduct;
  private String mSentryDsn;
  private Flavor mFlavor = Flavor.DEVELOPMENT;

  private boolean mAlwaysRegistered;

  private String mFosHost;

  private String mAssetsHost;

  private String mDoorHost;
  private String mCompId;
  private boolean mIsDigitalKeySupported;

  private String mAuthToken;

  private String mAuthSecret;

  private int mBrandId;

  private int mPropertyId;

  private String mCloudinaryCloudName;

  private Logger mLogger;

  private boolean mLoggingEnabled;

  private Context mCtx;

  private boolean mFosLoggingEnabled;

  private boolean mDimStatusBar;

  private boolean mForceKeepWifiOn;

  private boolean mLogToFile;

  private String mWifiSSID;

  private String mGCMProjectNumber;

  private boolean mHasDockClock;

  private int mCompanyId;

  private boolean mV3Lobby;
  private boolean mShouldUseCaslonFont;
  private boolean mTopBarVisible;
  private String mCustomLang;
  private boolean mOkkamiApp;
  private boolean mLocationEnabled;
  private boolean mCrmEnabled;
  private IdentificationStrategy mIdentificationStrategy;
  private PersistenceStrategy mPersistenceStrategy;

  public static void init(Context ctx) {

    try {
      INSTANCE = new ProductConfig(ctx);
    } catch (IOException e) {
      e.printStackTrace();
    }
  }

  public static ProductConfig get() {

    return INSTANCE;
  }

  private ProductConfig(Context ctx) throws IOException {
    mCtx = ctx;
    Properties p = new Properties();
    InputStream is = mCtx.getAssets().open("productconfig.properties");
    p.load(is);
    mProduct = p.getProperty("deliverable_filename_prefix");
    mSentryDsn = p.getProperty("sentry_dsn");

    mFosHost = p.getProperty("fos_host");
    mAssetsHost = p.getProperty("assets_host");

    mDoorHost = p.getProperty("door_host");
    mIsDigitalKeySupported = Boolean.parseBoolean(p.getProperty("support_digital_key"));
    mCompId = p.getProperty("comp_id");

    mAuthToken = p.getProperty("auth_token");
    mAuthSecret = p.getProperty("auth_secret");

    try {
      mCompanyId = Integer.parseInt(p.getProperty("company_id"));
    } catch (Exception e) {
      mCompanyId = -1;
    }
    try {
      mBrandId = Integer.parseInt(p.getProperty("brand_id"));
    } catch (Exception e) {
      mBrandId = -1;
    }
    try {
      mPropertyId = Integer.parseInt(p.getProperty("property_id"));
    } catch (Exception e) {
      mPropertyId = -1;
    }

    mCloudinaryCloudName = p.getProperty("cloudinary_cloud_name");

    String sFlavor = p.getProperty("flavor");
    if (Flavor.DEVELOPMENT.name().equals(sFlavor)) {
      mFlavor = Flavor.DEVELOPMENT;
    } else if (Flavor.STAGING.name().equals(sFlavor)) {
      mFlavor = Flavor.STAGING;
    } else if (Flavor.PRODUCTION.name().equals(sFlavor)) {
      mFlavor = Flavor.PRODUCTION;
    }

    mAlwaysRegistered = "true".equals(p.getProperty("is_always_registered", "false").trim());
    mDimStatusBar = "true".equals(p.getProperty("is_dim_statusbar", "false").trim());
    mForceKeepWifiOn = "true".equals(p.getProperty("is_keep_wifi_on", "false").trim());
    mWifiSSID = p.getProperty("wifi_ssid");
    mLogToFile = "true".equals(p.getProperty("is_log_to_file", "false").trim());
    mGCMProjectNumber = p.getProperty("gcm_project_number");

    mLoggingEnabled = "true".equals(p.getProperty("logging_enabled", "false").trim());
    mFosLoggingEnabled = "true".equals(p.getProperty("fos_logging_enabled", "false").trim());
    mLogger = new SDKLogger(ctx, mFosLoggingEnabled);
    mHasDockClock = "true".equals(p.getProperty("dock_clock", "false").trim());
    mV3Lobby = "true".equals(p.getProperty("v3_lobby", "true").trim());
    mShouldUseCaslonFont = "true".equals(p.getProperty("use_caslon_font", "false").trim());
    mTopBarVisible = "true".equals(p.getProperty("top_bar_visible", "false").trim());
    mCustomLang = p.getProperty("lang", "en").trim();
    mOkkamiApp = "true".equals(p.getProperty("is_okkami_app", "false").trim());
    mLocationEnabled = "true".equals(p.getProperty("location_enabled", "false").trim());
    mCrmEnabled = "true".equals(p.getProperty("crm_enabled", "false").trim());

    mIdentificationStrategy = new AndroidIdIdentificationStrategy();

    mPersistenceStrategy = new AndroidPersistenceStrategy(ctx);

  }

  public String getCustomLang() {
    return mCustomLang;
  }

  public boolean isProduction() {
    return mFlavor == Flavor.PRODUCTION;
  }

  public boolean isDevelopment() {
    return mFlavor == Flavor.DEVELOPMENT;
  }

  public String getProduct() {
    return mProduct;
  }

  public String getSentryDsn() {
    return mSentryDsn;
  }

  public Flavor getFlavor() {
    return mFlavor;
  }

  public boolean isAlwaysRegistered() {
    return mAlwaysRegistered;
  }

  public String getFosHost() {
    return mFosHost;
  }

  public String getAssetsHost() {
    return mAssetsHost;
  }

  public String getAuthToken() {
    return mAuthToken;
  }

  public String getAuthSecret() {
    return mAuthSecret;
  }

  @Override
  public int getBrandId() {
    return mBrandId;
  }

  @Override
  public int getPropertyId() {
    return mPropertyId;
  }

  @Override
  public String getHttpUserAgent() {
    return "AgentOrange";
  }

  @Override
  public Authentication getCompanyAuthInfo() {
    return new Authentication(mAuthToken, mAuthSecret);
  }

  @Override
  public IdentificationStrategy getIdentification() {
    return this.mIdentificationStrategy;
  }

  @Override
  public PersistenceStrategy getPersistence() {
    return mPersistenceStrategy;
  }

  @Override
  public TimeoutConfig getTimeoutConfig() {
    return new TryHarderTimeoutConfig();
  }

  public Logger getLogger() {
    return mLogger;
  }

  public boolean isLoggingEnabled() {

    return mLoggingEnabled;
  }

  public boolean isDimStatusBar() {
    return mDimStatusBar;
  }

  public boolean isLogToFile() {
    return mLogToFile;
  }

  public boolean isForceKeepWifiOn() {
    return mForceKeepWifiOn;
  }

  public String getCloudinaryCloudName() {
    return mCloudinaryCloudName;
  }

  public String getWifiSSID() {
    return mWifiSSID;
  }

  public String getGCMProjectNumber() {
    return mGCMProjectNumber;
  }

  public boolean hasDockClock() {
    return mHasDockClock;
  }

  public boolean isOkkamiApp() {
    return mOkkamiApp;
  }

  @Override
  public int getCompanyId() {
    return mCompanyId;
  }

  public void setEntity(int company_id, int brand_id, int property_id) {
    mCompanyId = company_id;
    mBrandId = brand_id;
    mPropertyId = property_id;
  }

  @Override
  public String getDoorHost() {
    return mDoorHost;
  }

  @Override
  public String getCompId() {
    return mCompId;
  }

  @Override
  public boolean isDigitalKeySupported() {
    return mIsDigitalKeySupported;
  }

  public boolean isV3Lobby() {
    return mV3Lobby;
  }

  public boolean shouldUseCaslonFont() {
    return mShouldUseCaslonFont;
  }

  public boolean isTopBarVisible() {
    return mTopBarVisible;
  }

  public boolean isLocationEnabled() {
    return mLocationEnabled;
  }

  public boolean isCrmEnabled() {
    return mCrmEnabled;
  }
}
