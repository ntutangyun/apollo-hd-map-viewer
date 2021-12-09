// source: modules/common/proto/pnc_point.proto
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

goog.provide('proto.apollo.common.FrenetFramePoint');

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
proto.apollo.common.FrenetFramePoint = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.common.FrenetFramePoint, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.common.FrenetFramePoint.displayName = 'proto.apollo.common.FrenetFramePoint';
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
proto.apollo.common.FrenetFramePoint.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.common.FrenetFramePoint.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.common.FrenetFramePoint} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.common.FrenetFramePoint.toObject = function(includeInstance, msg) {
  var f, obj = {
    s: (f = jspb.Message.getOptionalFloatingPointField(msg, 1)) == null ? undefined : f,
    l: (f = jspb.Message.getOptionalFloatingPointField(msg, 2)) == null ? undefined : f,
    dl: (f = jspb.Message.getOptionalFloatingPointField(msg, 3)) == null ? undefined : f,
    ddl: (f = jspb.Message.getOptionalFloatingPointField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.apollo.common.FrenetFramePoint}
 */
proto.apollo.common.FrenetFramePoint.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.common.FrenetFramePoint;
  return proto.apollo.common.FrenetFramePoint.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.common.FrenetFramePoint} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.common.FrenetFramePoint}
 */
proto.apollo.common.FrenetFramePoint.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setS(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setL(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDl(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDdl(value);
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
proto.apollo.common.FrenetFramePoint.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.common.FrenetFramePoint.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.common.FrenetFramePoint} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.common.FrenetFramePoint.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional double s = 1;
 * @return {number}
 */
proto.apollo.common.FrenetFramePoint.prototype.getS = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.common.FrenetFramePoint} returns this
 */
proto.apollo.common.FrenetFramePoint.prototype.setS = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.common.FrenetFramePoint} returns this
 */
proto.apollo.common.FrenetFramePoint.prototype.clearS = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.common.FrenetFramePoint.prototype.hasS = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double l = 2;
 * @return {number}
 */
proto.apollo.common.FrenetFramePoint.prototype.getL = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.common.FrenetFramePoint} returns this
 */
proto.apollo.common.FrenetFramePoint.prototype.setL = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.common.FrenetFramePoint} returns this
 */
proto.apollo.common.FrenetFramePoint.prototype.clearL = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.common.FrenetFramePoint.prototype.hasL = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional double dl = 3;
 * @return {number}
 */
proto.apollo.common.FrenetFramePoint.prototype.getDl = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.common.FrenetFramePoint} returns this
 */
proto.apollo.common.FrenetFramePoint.prototype.setDl = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.common.FrenetFramePoint} returns this
 */
proto.apollo.common.FrenetFramePoint.prototype.clearDl = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.common.FrenetFramePoint.prototype.hasDl = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double ddl = 4;
 * @return {number}
 */
proto.apollo.common.FrenetFramePoint.prototype.getDdl = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.common.FrenetFramePoint} returns this
 */
proto.apollo.common.FrenetFramePoint.prototype.setDdl = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.common.FrenetFramePoint} returns this
 */
proto.apollo.common.FrenetFramePoint.prototype.clearDdl = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.common.FrenetFramePoint.prototype.hasDdl = function() {
  return jspb.Message.getField(this, 4) != null;
};


