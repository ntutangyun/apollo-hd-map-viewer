// source: modules/map/relative_map/proto/relative_map_config.proto
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

goog.provide('proto.apollo.relative_map.MapGenerationParam');

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
proto.apollo.relative_map.MapGenerationParam = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.relative_map.MapGenerationParam, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.relative_map.MapGenerationParam.displayName = 'proto.apollo.relative_map.MapGenerationParam';
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
proto.apollo.relative_map.MapGenerationParam.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.relative_map.MapGenerationParam.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.relative_map.MapGenerationParam} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.relative_map.MapGenerationParam.toObject = function(includeInstance, msg) {
  var f, obj = {
    defaultLeftWidth: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 1.75),
    defaultRightWidth: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 1.75),
    defaultSpeedLimit: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 29.0576)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of MapGenerationParam as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.relative_map.MapGenerationParam.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.defaultLeftWidth;

  /** @type {?|undefined} */
  this.defaultRightWidth;

  /** @type {?|undefined} */
  this.defaultSpeedLimit;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.relative_map.MapGenerationParam.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.relative_map.MapGenerationParam}
 */
proto.apollo.relative_map.MapGenerationParam.fromObject = function(obj) {
  var msg = new proto.apollo.relative_map.MapGenerationParam();
  obj.defaultLeftWidth != null && jspb.Message.setField(msg, 1, obj.defaultLeftWidth);
  obj.defaultRightWidth != null && jspb.Message.setField(msg, 2, obj.defaultRightWidth);
  obj.defaultSpeedLimit != null && jspb.Message.setField(msg, 3, obj.defaultSpeedLimit);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.relative_map.MapGenerationParam}
 */
proto.apollo.relative_map.MapGenerationParam.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.relative_map.MapGenerationParam;
  return proto.apollo.relative_map.MapGenerationParam.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.relative_map.MapGenerationParam} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.relative_map.MapGenerationParam}
 */
proto.apollo.relative_map.MapGenerationParam.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDefaultLeftWidth(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDefaultRightWidth(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDefaultSpeedLimit(value);
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
proto.apollo.relative_map.MapGenerationParam.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.relative_map.MapGenerationParam.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.relative_map.MapGenerationParam} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.relative_map.MapGenerationParam.serializeBinaryToWriter = function(message, writer) {
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
};


/**
 * optional double default_left_width = 1;
 * @return {number}
 */
proto.apollo.relative_map.MapGenerationParam.prototype.getDefaultLeftWidth = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 1.75));
};


/**
 * @param {number} value
 * @return {!proto.apollo.relative_map.MapGenerationParam} returns this
 */
proto.apollo.relative_map.MapGenerationParam.prototype.setDefaultLeftWidth = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.relative_map.MapGenerationParam} returns this
 */
proto.apollo.relative_map.MapGenerationParam.prototype.clearDefaultLeftWidth = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.relative_map.MapGenerationParam.prototype.hasDefaultLeftWidth = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double default_right_width = 2;
 * @return {number}
 */
proto.apollo.relative_map.MapGenerationParam.prototype.getDefaultRightWidth = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 1.75));
};


/**
 * @param {number} value
 * @return {!proto.apollo.relative_map.MapGenerationParam} returns this
 */
proto.apollo.relative_map.MapGenerationParam.prototype.setDefaultRightWidth = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.relative_map.MapGenerationParam} returns this
 */
proto.apollo.relative_map.MapGenerationParam.prototype.clearDefaultRightWidth = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.relative_map.MapGenerationParam.prototype.hasDefaultRightWidth = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional double default_speed_limit = 3;
 * @return {number}
 */
proto.apollo.relative_map.MapGenerationParam.prototype.getDefaultSpeedLimit = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 29.0576));
};


/**
 * @param {number} value
 * @return {!proto.apollo.relative_map.MapGenerationParam} returns this
 */
proto.apollo.relative_map.MapGenerationParam.prototype.setDefaultSpeedLimit = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.relative_map.MapGenerationParam} returns this
 */
proto.apollo.relative_map.MapGenerationParam.prototype.clearDefaultSpeedLimit = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.relative_map.MapGenerationParam.prototype.hasDefaultSpeedLimit = function() {
  return jspb.Message.getField(this, 3) != null;
};

