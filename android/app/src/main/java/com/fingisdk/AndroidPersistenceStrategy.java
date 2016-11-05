
package com.fingisdk;

import android.content.Context;


import com.fingi.android.sdk.PersistenceStrategy;
import com.fingisdk.log.LOG;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;

public class AndroidPersistenceStrategy implements PersistenceStrategy {

    private Context mCtx;
    private static final String SESSION_FILENAME = "sessioncache";
    private static final String AUTH_FILENAME = "authentication";
    private static final String DEVICEID_FILENAME = "deviceid";
    private static final String TAG = "fingi-app" + ".AndroidPersistenceStrategy";

    public AndroidPersistenceStrategy(Context ctx) {
        mCtx = ctx;
    }

    @Override
    public InputStream openSessionInputStream() {
        try {
            return new FileInputStream(getSessionFile());
        } catch (Exception e) {
            e.printStackTrace();
            LOG.e(TAG, "failed to openSessionInputStream");
            return null;
        }
    }

    private File getSessionFile() {
        return new File(mCtx.getCacheDir(), SESSION_FILENAME);
    }

    @Override
    public OutputStream openSessionOutputStream() {
        try {
            return new FileOutputStream(getSessionFile());
        } catch (Exception e) {
            e.printStackTrace();
            LOG.e(TAG, "failed to openSessionOutputStream");
            return null;
        }
    }

    @Override
    public void clearSessionCache() {
        try {
            LOG.d(TAG, "clearSessionCache()");
            openSessionOutputStream().close();
            openDeviceIdOutputStream().close();
        } catch (Exception e) {
            e.printStackTrace();
            LOG.e(TAG, "failed to clear session cache");
        }
    }

    @Override
    public void clearAuth() {
        try {
            LOG.d(TAG, "clearAuth()");
            openAuthOutputStream().close();
        } catch (Exception e) {
            e.printStackTrace();
            LOG.e(TAG, "failed to clear auth");
        }
    }

    @Override
    public InputStream openAuthInputStream() {
        try {
            return mCtx.openFileInput(AUTH_FILENAME);
        } catch (Exception e) {
            e.printStackTrace();
            LOG.e(TAG, "failed to openAuthInputStream");
            return null;
        }
    }

    @Override
    public OutputStream openAuthOutputStream() {
        try {
            return mCtx.openFileOutput(AUTH_FILENAME, 0);
        } catch (Exception e) {
            e.printStackTrace();
            LOG.e(TAG, "failed to openAuthOutputStream");
            return null;
        }
    }

    @Override
    public InputStream openDeviceIdInputStream() {
        try {
            return mCtx.openFileInput(DEVICEID_FILENAME);
        } catch (Exception e) {
            e.printStackTrace();
            LOG.e(TAG, "failed to openDeviceIdInputStream");
            return null;
        }
    }

    @Override
    public OutputStream openDeviceIdOutputStream() {
        try {
            return mCtx.openFileOutput(DEVICEID_FILENAME, 0);
        } catch (Exception e) {
            e.printStackTrace();
            LOG.e(TAG, "failed to openDeviceIdOutputStream");
            return null;
        }
    }

}
