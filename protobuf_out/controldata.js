// source: modules/dreamview/proto/simulation_world.proto
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

goog.provide('proto.apollo.dreamview.ControlData');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.apollo.common.TrajectoryPoint');

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
proto.apollo.dreamview.ControlData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.dreamview.ControlData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.dreamview.ControlData.displayName = 'proto.apollo.dreamview.ControlData';
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
proto.apollo.dreamview.ControlData.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.dreamview.ControlData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.dreamview.ControlData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.dreamview.ControlData.toObject = function(includeInstance, msg) {
  var f, obj = {
    timestampSec: (f = jspb.Message.getOptionalFloatingPointField(msg, 1)) == null ? undefined : f,
    stationError: (f = jspb.Message.getOptionalFloatingPointField(msg, 2)) == null ? undefined : f,
    lateralError: (f = jspb.Message.getOptionalFloatingPointField(msg, 3)) == null ? undefined : f,
    headingError: (f = jspb.Message.getOptionalFloatingPointField(msg, 4)) == null ? undefined : f,
    currentTargetPoint: (f = msg.getCurrentTargetPoint()) && proto.apollo.common.TrajectoryPoint.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of ControlData as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.dreamview.ControlData.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.timestampSec;

  /** @type {?|undefined} */
  this.stationError;

  /** @type {?|undefined} */
  this.lateralError;

  /** @type {?|undefined} */
  this.headingError;

  /** @type {?|undefined} */
  this.currentTargetPoint;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.dreamview.ControlData.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.dreamview.ControlData}
 */
proto.apollo.dreamview.ControlData.fromObject = function(obj) {
  var msg = new proto.apollo.dreamview.ControlData();
  obj.timestampSec != null && jspb.Message.setField(msg, 1, obj.timestampSec);
  obj.stationError != null && jspb.Message.setField(msg, 2, obj.stationError);
  obj.lateralError != null && jspb.Message.setField(msg, 3, obj.lateralError);
  obj.headingError != null && jspb.Message.setField(msg, 4, obj.headingError);
  obj.currentTargetPoint && jspb.Message.setWrapperField(
      msg, 5, proto.apollo.common.TrajectoryPoint.fromObject(obj.currentTargetPoint));
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.dreamview.ControlData}
 */
proto.apollo.dreamview.ControlData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.dreamview.ControlData;
  return proto.apollo.dreamview.ControlData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.dreamview.ControlData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.dreamview.ControlData}
 */
proto.apollo.dreamview.ControlData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTimestampSec(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setStationError(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLateralError(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setHeadingError(value);
      break;
    case 5:
      var value = new proto.apollo.common.TrajectoryPoint;
      reader.readMessage(value,proto.apollo.common.TrajectoryPoint.deserializeBinaryFromReader);
      msg.setCurrentTargetPoint(value);
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
proto.apollo.dreamview.ControlData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.dreamview.ControlData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.dreamview.ControlData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.dreamview.ControlData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getCurrentTargetPoint();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.apollo.common.TrajectoryPoint.serializeBinaryToWriter
    );
  }
};


/**
 * optional double timestamp_sec = 1;
 * @return {number}
 */
proto.apollo.dreamview.ControlData.prototype.getTimestampSec = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.dreamview.ControlData} returns this
 */
proto.apollo.dreamview.ControlData.prototype.setTimestampSec = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.dreamview.ControlData} returns this
 */
proto.apollo.dreamview.ControlData.prototype.clearTimestampSec = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.dreamview.ControlData.prototype.hasTimestampSec = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double station_error = 2;
 * @return {number}
 */
proto.apollo.dreamview.ControlData.prototype.getStationError = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.dreamview.ControlData} returns this
 */
proto.apollo.dreamview.ControlData.prototype.setStationError = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.dreamview.ControlData} returns this
 */
proto.apollo.dreamview.ControlData.prototype.clearStationError = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.dreamview.ControlData.prototype.hasStationError = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional double lateral_error = 3;
 * @return {number}
 */
proto.apollo.dreamview.ControlData.prototype.getLateralError = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.dreamview.ControlData} returns this
 */
proto.apollo.dreamview.ControlData.prototype.setLateralError = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.dreamview.ControlData} returns this
 */
proto.apollo.dreamview.ControlData.prototype.clearLateralError = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.dreamview.ControlData.prototype.hasLateralError = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double heading_error = 4;
 * @return {number}
 */
proto.apollo.dreamview.ControlData.prototype.getHeadingError = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.dreamview.ControlData} returns this
 */
proto.apollo.dreamview.ControlData.prototype.setHeadingError = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.dreamview.ControlData} returns this
 */
proto.apollo.dreamview.ControlData.prototype.clearHeadingError = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.dreamview.ControlData.prototype.hasHeadingError = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional apollo.common.TrajectoryPoint current_target_point = 5;
 * @return {?proto.apollo.common.TrajectoryPoint}
 */
proto.apollo.dreamview.ControlData.prototype.getCurrentTargetPoint = function() {
  return /** @type{?proto.apollo.common.TrajectoryPoint} */ (
    jspb.Message.getWrapperField(this, proto.apollo.common.TrajectoryPoint, 5));
};


/**
 * @param {?proto.apollo.common.TrajectoryPoint|undefined} value
 * @return {!proto.apollo.dreamview.ControlData} returns this
*/
proto.apollo.dreamview.ControlData.prototype.setCurrentTargetPoint = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.dreamview.ControlData} returns this
 */
proto.apollo.dreamview.ControlData.prototype.clearCurrentTargetPoint = function() {
  return this.setCurrentTargetPoint(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.dreamview.ControlData.prototype.hasCurrentTargetPoint = function() {
  return jspb.Message.getField(this, 5) != null;
};

