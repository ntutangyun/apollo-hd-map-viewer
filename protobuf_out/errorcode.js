// source: modules/map/tools/map_datachecker/proto/collection_error_code.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

goog.provide('proto.apollo.hdmap.ErrorCode');

/**
 * @enum {number}
 */
proto.apollo.hdmap.ErrorCode = {
  SUCCESS: 0,
  ERROR: 1,
  ERROR_REQUEST: 2,
  ERROR_SERVICE_NO_RESPONSE: 3,
  ERROR_REPEATED_START: 4,
  ERROR_CHECK_BEFORE_START: 5,
  ERROR_GPSBIN_LACK: 101,
  ERROR_DISKINFO_ERROR: 102,
  ERROR_DISK_UNMOUNT: 103,
  ERROR_SPEED_LACK: 105,
  WARNING_ODOMETER_LACK: 106,
  ERROR_RTKSTATUS_EMPTY: 107,
  ERROR_MAPGRPC_NOT_CONNECT: 201,
  WARNING_NOT_STRAIGHT: 212,
  WARNING_PROGRESS_ROLLBACK: 213,
  ERROR_NOT_EIGHT_ROUTE: 221,
  ERROR_CHANNEL_VERIFY_TOPIC_LACK: 231,
  ERROR_CHANNEL_VERIFY_RATES_ABNORMAL: 232,
  ERROR_VERIFY_NO_RECORDERS: 233,
  ERROR_LOOPS_NOT_REACHED: 234,
  ERROR_VERIFY_NO_GNSSPOS: 235,
  ERROR_NOT_STATIC: 241,
  ERROR_GNSS_SIGNAL_FAIL: 242,
  SUCCESS_TASK_EMPTY: 301,
  SUCCESS_TASK_STOCK: 302
};

