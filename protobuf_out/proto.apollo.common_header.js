// source: modules/common/proto/header.proto
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

goog.provide('proto.apollo.common.Header');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.apollo.common.StatusPb');

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
proto.apollo.common.Header = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.common.Header, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.common.Header.displayName = 'proto.apollo.common.Header';
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
proto.apollo.common.Header.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.common.Header.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.common.Header} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.common.Header.toObject = function(includeInstance, msg) {
  var f, obj = {
    timestampSec: (f = jspb.Message.getOptionalFloatingPointField(msg, 1)) == null ? undefined : f,
    moduleName: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    sequenceNum: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    lidarTimestamp: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    cameraTimestamp: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    radarTimestamp: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    version: jspb.Message.getFieldWithDefault(msg, 7, 1),
    status: (f = msg.getStatus()) && proto.apollo.common.StatusPb.toObject(includeInstance, f),
    frameId: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f
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
 * @return {!proto.apollo.common.Header}
 */
proto.apollo.common.Header.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.common.Header;
  return proto.apollo.common.Header.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.common.Header} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.common.Header}
 */
proto.apollo.common.Header.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setModuleName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSequenceNum(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLidarTimestamp(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCameraTimestamp(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRadarTimestamp(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setVersion(value);
      break;
    case 8:
      var value = new proto.apollo.common.StatusPb;
      reader.readMessage(value,proto.apollo.common.StatusPb.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setFrameId(value);
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
proto.apollo.common.Header.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.common.Header.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.common.Header} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.common.Header.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeDouble(
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
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.apollo.common.StatusPb.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional double timestamp_sec = 1;
 * @return {number}
 */
proto.apollo.common.Header.prototype.getTimestampSec = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.common.Header} returns this
 */
proto.apollo.common.Header.prototype.setTimestampSec = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.common.Header} returns this
 */
proto.apollo.common.Header.prototype.clearTimestampSec = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.common.Header.prototype.hasTimestampSec = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string module_name = 2;
 * @return {string}
 */
proto.apollo.common.Header.prototype.getModuleName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.apollo.common.Header} returns this
 */
proto.apollo.common.Header.prototype.setModuleName = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.common.Header} returns this
 */
proto.apollo.common.Header.prototype.clearModuleName = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.common.Header.prototype.hasModuleName = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 sequence_num = 3;
 * @return {number}
 */
proto.apollo.common.Header.prototype.getSequenceNum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.common.Header} returns this
 */
proto.apollo.common.Header.prototype.setSequenceNum = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.common.Header} returns this
 */
proto.apollo.common.Header.prototype.clearSequenceNum = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.common.Header.prototype.hasSequenceNum = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint64 lidar_timestamp = 4;
 * @return {number}
 */
proto.apollo.common.Header.prototype.getLidarTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.common.Header} returns this
 */
proto.apollo.common.Header.prototype.setLidarTimestamp = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.common.Header} returns this
 */
proto.apollo.common.Header.prototype.clearLidarTimestamp = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.common.Header.prototype.hasLidarTimestamp = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional uint64 camera_timestamp = 5;
 * @return {number}
 */
proto.apollo.common.Header.prototype.getCameraTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.common.Header} returns this
 */
proto.apollo.common.Header.prototype.setCameraTimestamp = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.common.Header} returns this
 */
proto.apollo.common.Header.prototype.clearCameraTimestamp = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.common.Header.prototype.hasCameraTimestamp = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional uint64 radar_timestamp = 6;
 * @return {number}
 */
proto.apollo.common.Header.prototype.getRadarTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.common.Header} returns this
 */
proto.apollo.common.Header.prototype.setRadarTimestamp = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.common.Header} returns this
 */
proto.apollo.common.Header.prototype.clearRadarTimestamp = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.common.Header.prototype.hasRadarTimestamp = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional uint32 version = 7;
 * @return {number}
 */
proto.apollo.common.Header.prototype.getVersion = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 1));
};


/**
 * @param {number} value
 * @return {!proto.apollo.common.Header} returns this
 */
proto.apollo.common.Header.prototype.setVersion = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.common.Header} returns this
 */
proto.apollo.common.Header.prototype.clearVersion = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.common.Header.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional StatusPb status = 8;
 * @return {?proto.apollo.common.StatusPb}
 */
proto.apollo.common.Header.prototype.getStatus = function() {
  return /** @type{?proto.apollo.common.StatusPb} */ (
    jspb.Message.getWrapperField(this, proto.apollo.common.StatusPb, 8));
};


/**
 * @param {?proto.apollo.common.StatusPb|undefined} value
 * @return {!proto.apollo.common.Header} returns this
*/
proto.apollo.common.Header.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.common.Header} returns this
 */
proto.apollo.common.Header.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.common.Header.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string frame_id = 9;
 * @return {string}
 */
proto.apollo.common.Header.prototype.getFrameId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.apollo.common.Header} returns this
 */
proto.apollo.common.Header.prototype.setFrameId = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.common.Header} returns this
 */
proto.apollo.common.Header.prototype.clearFrameId = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.common.Header.prototype.hasFrameId = function() {
  return jspb.Message.getField(this, 9) != null;
};


