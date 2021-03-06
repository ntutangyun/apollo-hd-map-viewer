// source: modules/common/proto/error_code.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

goog.provide('proto.apollo.common.ErrorCode');

/**
 * @enum {number}
 */
proto.apollo.common.ErrorCode = {
  OK: 0,
  CONTROL_ERROR: 1000,
  CONTROL_INIT_ERROR: 1001,
  CONTROL_COMPUTE_ERROR: 1002,
  CONTROL_ESTOP_ERROR: 1003,
  PERFECT_CONTROL_ERROR: 1004,
  CANBUS_ERROR: 2000,
  CAN_CLIENT_ERROR_BASE: 2100,
  CAN_CLIENT_ERROR_OPEN_DEVICE_FAILED: 2101,
  CAN_CLIENT_ERROR_FRAME_NUM: 2102,
  CAN_CLIENT_ERROR_SEND_FAILED: 2103,
  CAN_CLIENT_ERROR_RECV_FAILED: 2104,
  LOCALIZATION_ERROR: 3000,
  LOCALIZATION_ERROR_MSG: 3100,
  LOCALIZATION_ERROR_LIDAR: 3200,
  LOCALIZATION_ERROR_INTEG: 3300,
  LOCALIZATION_ERROR_GNSS: 3400,
  PERCEPTION_ERROR: 4000,
  PERCEPTION_ERROR_TF: 4001,
  PERCEPTION_ERROR_PROCESS: 4002,
  PERCEPTION_FATAL: 4003,
  PERCEPTION_ERROR_NONE: 4004,
  PERCEPTION_ERROR_UNKNOWN: 4005,
  PREDICTION_ERROR: 5000,
  PLANNING_ERROR: 6000,
  PLANNING_ERROR_NOT_READY: 6001,
  HDMAP_DATA_ERROR: 7000,
  ROUTING_ERROR: 8000,
  ROUTING_ERROR_REQUEST: 8001,
  ROUTING_ERROR_RESPONSE: 8002,
  ROUTING_ERROR_NOT_READY: 8003,
  END_OF_INPUT: 9000,
  HTTP_LOGIC_ERROR: 10000,
  HTTP_RUNTIME_ERROR: 10001,
  RELATIVE_MAP_ERROR: 11000,
  RELATIVE_MAP_NOT_READY: 11001,
  DRIVER_ERROR_GNSS: 12000,
  DRIVER_ERROR_VELODYNE: 13000,
  STORYTELLING_ERROR: 14000
};

