
package com.fingisdk.config;

import com.fingi.android.sdk.DefaultTimeoutConfig;

public class TryHarderTimeoutConfig extends DefaultTimeoutConfig {

  @Override
  public int getHttpConnectionTimeout() {
    return 1 * MINUTE;
  }

  @Override
  public int getHttpReadTimeout() {
    return 1 * MINUTE;
  }

  @Override
  public int getMaximumRetries(Throwable error) {
        /*
        if (error instanceof JsonParseException ||
                error instanceof UnknownHostException
                || error instanceof SocketTimeoutException
                || error instanceof SSLException
                ) {
            return 0;
        }*/
    return 16;
  }

  @Override
  public int getRetryDelay(Throwable error) {
    return 15 * SECOND;
  }

  @Override
  public int getRetryDelayFactor(Throwable error) {
    return 2;
  }

  @Override
  public int getTlsSocketConnectionTimeout() {
    return 7 * SECOND;
  }

  @Override
  public int getTlsSocketHeartbeatTimeout() {
    return 60 * SECOND;
  }

  @Override
  public int getTlsSocketMaximumRetries() {
    return -1; // infinite
  }

  @Override
  public int getTlsSocketRetryDelay() {
    return 10 * SECOND;
  }

  @Override
  public int getTlsSocketRetryDelayFactor() {
    return 2;
  }

  @Override
  public int getFolioRequestTimeout() {
    //return 30 * SECOND;
    //Disabled, maybe change for something more realistic (5 minutes)
    return -1;
  }
}
