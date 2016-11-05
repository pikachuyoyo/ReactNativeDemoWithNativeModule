package com.fingisdk.log;

import android.content.Context;

import com.fingi.android.sdk.Logger;

import java.io.File;
import java.io.IOException;

public class SDKLogger implements Logger {

	private boolean mEnableDumpFile;
	private Context mCtx;
	private static final String TAG = "SDKLogger";

	public SDKLogger(Context ctx, boolean enableDumpFiles) {
		mCtx = ctx;
		mEnableDumpFile = enableDumpFiles;
	}

	private String m(String msg, Object[] args) {
		return String.format(msg, args);
	}

	public void v(String msg, Object... args) {
		//LOG.v(TAG, m(msg, args));
	}

	public void v(Throwable e, String msg, Object... args) {
		LOG.v(TAG, m(msg, args), e);
	}

	public void w(String msg, Object... args) {
		LOG.w(TAG, m(msg, args));

	}

	public void w(Throwable e, String msg, Object... args) {
		LOG.w(TAG, m(msg, args), e);

	}

	public void i(String msg, Object... args) {
		LOG.i(TAG, m(msg, args));

	}

	public void i(Throwable e, String msg, Object... args) {
		LOG.i(TAG, m(msg, args), e);

	}

	public void d(String msg, Object... args) {
		LOG.d(TAG, m(msg, args));

	}

	public void d(Throwable e, String msg, Object... args) {
		LOG.d(TAG, m(msg, args), e);

	}

	public void wtf(String msg, Object... args) {
		LOG.e(TAG, m(msg, args));

	}

	public void wtf(Throwable e, String msg, Object... args) {
		LOG.e(TAG, m(msg, args), e);

	}

	public void e(String msg, Object... args) {
		LOG.e(TAG, m(msg, args));

	}

	public void e(Throwable e, String msg, Object... args) {
		LOG.e(TAG, m(msg, args), e);

	}

	public File createDumpFile(String tag, String suffix) {
		if (!mEnableDumpFile)
			return null;
		try {
			return File.createTempFile(tag, suffix, mCtx.getCacheDir());
		} catch (IOException e) {
			e.printStackTrace();
			return null;
		}
	}

}
