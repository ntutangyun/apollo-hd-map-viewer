// source: modules/common/monitor_log/proto/monitor_log.proto
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

goog.provide('proto.apollo.common.monitor.MonitorMessageItem');
goog.provide('proto.apollo.common.monitor.MonitorMessageItem.LogLevel');
goog.provide('proto.apollo.common.monitor.MonitorMessageItem.MessageSource');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.apollo.common.monitor.MonitorMessageItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.common.monitor.MonitorMessageItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.common.monitor.MonitorMessageItem.displayName = 'proto.apollo.common.monitor.MonitorMessageItem';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.apollo.common.monitor.MonitorMessageItem.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.common.monitor.MonitorMessageItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.common.monitor.MonitorMessageItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.common.monitor.MonitorMessageItem.toObject = function(includeInstance, msg) {
  var f, obj = {
    source: jspb.Message.getFieldWithDefault(msg, 1, 1),
    msg: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    logLevel: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.common.monitor.MonitorMessageItem}
 */
proto.apollo.common.monitor.MonitorMessageItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.common.monitor.MonitorMessageItem;
  return proto.apollo.common.monitor.MonitorMessageItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.common.monitor.MonitorMessageItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.common.monitor.MonitorMessageItem}
 */
proto.apollo.common.monitor.MonitorMessageItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.apollo.common.monitor.MonitorMessageItem.MessageSource} */ (reader.readEnum());
      msg.setSource(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    case 3:
      var value = /** @type {!proto.apollo.common.monitor.MonitorMessageItem.LogLevel} */ (reader.readEnum());
      msg.setLogLevel(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.apollo.common.monitor.MonitorMessageItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.common.monitor.MonitorMessageItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.common.monitor.MonitorMessageItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.common.monitor.MonitorMessageItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.apollo.common.monitor.MonitorMessageItem.MessageSource} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {!proto.apollo.common.monitor.MonitorMessageItem.LogLevel} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.apollo.common.monitor.MonitorMessageItem.MessageSource = {
  UNKNOWN: 1,
  CANBUS: 2,
  CONTROL: 3,
  DECISION: 4,
  LOCALIZATION: 5,
  PLANNING: 6,
  PREDICTION: 7,
  SIMULATOR: 8,
  HWSYS: 9,
  ROUTING: 10,
  MONITOR: 11,
  HMI: 12,
  RELATIVE_MAP: 13,
  GNSS: 14,
  CONTI_RADAR: 15,
  RACOBIT_RADAR: 16,
  ULTRASONIC_RADAR: 17,
  MOBILEYE: 18,
  DELPHI_ESR: 19,
  STORYTELLING: 20,
  TASK_MANAGER: 21
};

/**
 * @enum {number}
 */
proto.apollo.common.monitor.MonitorMessageItem.LogLevel = {
  INFO: 0,
  WARN: 1,
  ERROR: 2,
  FATAL: 3
};

/**
 * optional MessageSource source = 1;
 * @return {!proto.apollo.common.monitor.MonitorMessageItem.MessageSource}
 */
proto.apollo.common.monitor.MonitorMessageItem.prototype.getSource = function() {
  return /** @type {!proto.apollo.common.monitor.MonitorMessageItem.MessageSource} */ (jspb.Message.getFieldWithDefault(this, 1, 1));
};


/**
 * @param {!proto.apollo.common.monitor.MonitorMessageItem.MessageSource} value
 * @return {!proto.apollo.common.monitor.MonitorMessageItem} returns this
 */
proto.apollo.common.monitor.MonitorMessageItem.prototype.setSource = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.common.monitor.MonitorMessageItem} returns this
 */
proto.apollo.common.monitor.MonitorMessageItem.prototype.clearSource = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.common.monitor.MonitorMessageItem.prototype.hasSource = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string msg = 2;
 * @return {string}
 */
proto.apollo.common.monitor.MonitorMessageItem.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.apollo.common.monitor.MonitorMessageItem} returns this
 */
proto.apollo.common.monitor.MonitorMessageItem.prototype.setMsg = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.common.monitor.MonitorMessageItem} returns this
 */
proto.apollo.common.monitor.MonitorMessageItem.prototype.clearMsg = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.common.monitor.MonitorMessageItem.prototype.hasMsg = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional LogLevel log_level = 3;
 * @return {!proto.apollo.common.monitor.MonitorMessageItem.LogLevel}
 */
proto.apollo.common.monitor.MonitorMessageItem.prototype.getLogLevel = function() {
  return /** @type {!proto.apollo.common.monitor.MonitorMessageItem.LogLevel} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.apollo.common.monitor.MonitorMessageItem.LogLevel} value
 * @return {!proto.apollo.common.monitor.MonitorMessageItem} returns this
 */
proto.apollo.common.monitor.MonitorMessageItem.prototype.setLogLevel = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.common.monitor.MonitorMessageItem} returns this
 */
proto.apollo.common.monitor.MonitorMessageItem.prototype.clearLogLevel = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.common.monitor.MonitorMessageItem.prototype.hasLogLevel = function() {
  return jspb.Message.getField(this, 3) != null;
};

