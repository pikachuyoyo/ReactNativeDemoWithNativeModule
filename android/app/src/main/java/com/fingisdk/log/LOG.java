package com.fingisdk.log;

import android.content.Context;
import android.util.Log;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.IOException;

import ch.qos.logback.classic.LoggerContext;
import ch.qos.logback.classic.joran.JoranConfigurator;
import ch.qos.logback.core.joran.spi.JoranException;

public class LOG {

	private static final boolean DOLOG = true;
	private static Logger mlog;

	public static void enableLogToFile(Context ctx) {

		mlog = LoggerFactory.getLogger("fingi");
		LoggerContext lc = (LoggerContext) LoggerFactory.getILoggerFactory();
		lc.reset();

		  JoranConfigurator config = new JoranConfigurator();
		  config.setContext(lc);
		  try {
			config.doConfigure(ctx.getAssets().open("logging.xml"));
		} catch (JoranException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}
//
//		PatternLayoutEncoder encoder1 = new PatternLayoutEncoder();
//		encoder1.setContext(lc);
//		encoder1.setPattern("%d{HH:mm:ss.SSS} [%thread] %-5level %logger{36} - %msg%n");
//		encoder1.start();
//
//		RollingFileAppender<ILoggingEvent> fileAppender = new RollingFileAppender<ILoggingEvent>();
//		fileAppender.setContext(lc);
//		fileAppender.setFile(ctx.getFileStreamPath("app.log").getAbsolutePath());
//		fileAppender.setEncoder(encoder1);
//
//		TimeBasedRollingPolicy<ILoggingEvent> timeBasedRollingPolicy = new TimeBasedRollingPolicy<ILoggingEvent>();
//		timeBasedRollingPolicy.setMaxHistory(7);
//		timeBasedRollingPolicy.setTimeBasedFileNamingAndTriggeringPolicy(new DefaultTimeBasedFileNamingAndTriggeringPolicy<ILoggingEvent>());
//		// timeBasedRollingPolicy.setFileNamePattern("fingi.%d{yyyy-MM-dd}.log.gz");
//		timeBasedRollingPolicy.setFileNamePattern("foo%d{yyyy-MM-dd_HH-mm}.log.gz");
//
//		timeBasedRollingPolicy.setParent(fileAppender);
//
//		fileAppender.setRollingPolicy(timeBasedRollingPolicy);
//		fileAppender.start();
//
//		ch.qos.logback.classic.Logger root = (ch.qos.logback.classic.Logger) LoggerFactory.getLogger(Logger.ROOT_LOGGER_NAME);
//		root.addAppender(fileAppender);
v("YES","logging initialized");

	}

	private static String getLogMessage(String tag, String msg) {
		return tag + "|" + msg;
	}

	public static void v(String tag, String msg) {
		if (DOLOG) {
			Log.v(tag, msg);
			if (mlog != null) {
				mlog.trace(getLogMessage(tag, msg));
			}
		}
	}

	public static void v(String tag, String msg, Throwable e) {
		if (DOLOG) {
			Log.v(tag, msg, e);
			if (mlog != null) {
				mlog.trace(getLogMessage(tag, msg), e);
			}
		}

	}

	public static void w(String tag, String msg) {
		if (DOLOG) {
			Log.w(tag, msg);
			if (mlog != null) {
				mlog.warn(getLogMessage(tag, msg));
			}
		}
	}

	public static void w(String tag, String msg, Throwable e) {
		if (DOLOG) {
			Log.w(tag, msg, e);
			if (mlog != null) {
				mlog.warn(getLogMessage(tag, msg), e);
			}
		}
	}

	public static void d(String tag, String msg) {
		if (DOLOG) {
			Log.d(tag, msg);
			if (mlog != null) {
				mlog.debug(getLogMessage(tag, msg));
			}
		}
	}

	public static void d(String tag, String msg, Throwable e) {
		if (DOLOG) {
			Log.d(tag, msg, e);
			if (mlog != null) {
				mlog.debug(getLogMessage(tag, msg), e);
			}
		}
	}

	public static void e(String tag, String msg) {
		if (DOLOG) {
			Log.e(tag, msg);
			if (mlog != null) {
				mlog.error(getLogMessage(tag, msg));
			}
		}
	}

	public static void e(String tag, String msg, Throwable e) {
		if (DOLOG) {
			Log.e(tag, msg, e);
			if (mlog != null) {
				mlog.error(getLogMessage(tag, msg), e);
			}
		}
	}

	public static void i(String tag, String msg) {
		if (DOLOG) {
			Log.i(tag, msg);
			if (mlog != null) {
				mlog.info(getLogMessage(tag, msg));
			}
		}

	}

	public static void i(String tag, String msg, Throwable e) {
		if (DOLOG) {
			Log.i(tag, msg, e);
			if (mlog != null) {
				mlog.info(getLogMessage(tag, msg), e);
			}
		}

	}

}
