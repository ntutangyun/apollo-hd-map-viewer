// source: modules/common/proto/pnc_point.proto
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

goog.provide('proto.apollo.common.SpeedPoint');

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
proto.apollo.common.SpeedPoint = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.common.SpeedPoint, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.common.SpeedPoint.displayName = 'proto.apollo.common.SpeedPoint';
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
proto.apollo.common.SpeedPoint.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.common.SpeedPoint.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.common.SpeedPoint} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.common.SpeedPoint.toObject = function(includeInstance, msg) {
  var f, obj = {
    s: (f = jspb.Message.getOptionalFloatingPointField(msg, 1)) == null ? undefined : f,
    t: (f = jspb.Message.getOptionalFloatingPointField(msg, 2)) == null ? undefined : f,
    v: (f = jspb.Message.getOptionalFloatingPointField(msg, 3)) == null ? undefined : f,
    a: (f = jspb.Message.getOptionalFloatingPointField(msg, 4)) == null ? undefined : f,
    da: (f = jspb.Message.getOptionalFloatingPointField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of SpeedPoint as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.common.SpeedPoint.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.s;

  /** @type {?|undefined} */
  this.t;

  /** @type {?|undefined} */
  this.v;

  /** @type {?|undefined} */
  this.a;

  /** @type {?|undefined} */
  this.da;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.common.SpeedPoint.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.common.SpeedPoint}
 */
proto.apollo.common.SpeedPoint.fromObject = function(obj) {
  var msg = new proto.apollo.common.SpeedPoint();
  obj.s != null && jspb.Message.setField(msg, 1, obj.s);
  obj.t != null && jspb.Message.setField(msg, 2, obj.t);
  obj.v != null && jspb.Message.setField(msg, 3, obj.v);
  obj.a != null && jspb.Message.setField(msg, 4, obj.a);
  obj.da != null && jspb.Message.setField(msg, 5, obj.da);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.common.SpeedPoint}
 */
proto.apollo.common.SpeedPoint.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.common.SpeedPoint;
  return proto.apollo.common.SpeedPoint.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.common.SpeedPoint} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.common.SpeedPoint}
 */
proto.apollo.common.SpeedPoint.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setT(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setV(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setA(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDa(value);
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
proto.apollo.common.SpeedPoint.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.common.SpeedPoint.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.common.SpeedPoint} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.common.SpeedPoint.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeDouble(
      5,
      f
    );
  }
};


/**
 * optional double s = 1;
 * @return {number}
 */
proto.apollo.common.SpeedPoint.prototype.getS = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.common.SpeedPoint} returns this
 */
proto.apollo.common.SpeedPoint.prototype.setS = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.common.SpeedPoint} returns this
 */
proto.apollo.common.SpeedPoint.prototype.clearS = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.common.SpeedPoint.prototype.hasS = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double t = 2;
 * @return {number}
 */
proto.apollo.common.SpeedPoint.prototype.getT = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.common.SpeedPoint} returns this
 */
proto.apollo.common.SpeedPoint.prototype.setT = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.common.SpeedPoint} returns this
 */
proto.apollo.common.SpeedPoint.prototype.clearT = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.common.SpeedPoint.prototype.hasT = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional double v = 3;
 * @return {number}
 */
proto.apollo.common.SpeedPoint.prototype.getV = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.common.SpeedPoint} returns this
 */
proto.apollo.common.SpeedPoint.prototype.setV = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.common.SpeedPoint} returns this
 */
proto.apollo.common.SpeedPoint.prototype.clearV = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.common.SpeedPoint.prototype.hasV = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double a = 4;
 * @return {number}
 */
proto.apollo.common.SpeedPoint.prototype.getA = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.common.SpeedPoint} returns this
 */
proto.apollo.common.SpeedPoint.prototype.setA = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.common.SpeedPoint} returns this
 */
proto.apollo.common.SpeedPoint.prototype.clearA = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.common.SpeedPoint.prototype.hasA = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional double da = 5;
 * @return {number}
 */
proto.apollo.common.SpeedPoint.prototype.getDa = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.common.SpeedPoint} returns this
 */
proto.apollo.common.SpeedPoint.prototype.setDa = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.common.SpeedPoint} returns this
 */
proto.apollo.common.SpeedPoint.prototype.clearDa = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.common.SpeedPoint.prototype.hasDa = function() {
  return jspb.Message.getField(this, 5) != null;
};

