// source: modules/common/vehicle_model/proto/vehicle_model_config.proto
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

goog.provide('proto.apollo.common.ComCenteredDynamicBicycleModelConfig');

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
proto.apollo.common.ComCenteredDynamicBicycleModelConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.common.ComCenteredDynamicBicycleModelConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.common.ComCenteredDynamicBicycleModelConfig.displayName = 'proto.apollo.common.ComCenteredDynamicBicycleModelConfig';
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
proto.apollo.common.ComCenteredDynamicBicycleModelConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.common.ComCenteredDynamicBicycleModelConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.common.ComCenteredDynamicBicycleModelConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.common.ComCenteredDynamicBicycleModelConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    dt: (f = jspb.Message.getOptionalFloatingPointField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of ComCenteredDynamicBicycleModelConfig as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.common.ComCenteredDynamicBicycleModelConfig.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.dt;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.common.ComCenteredDynamicBicycleModelConfig.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.common.ComCenteredDynamicBicycleModelConfig}
 */
proto.apollo.common.ComCenteredDynamicBicycleModelConfig.fromObject = function(obj) {
  var msg = new proto.apollo.common.ComCenteredDynamicBicycleModelConfig();
  obj.dt != null && jspb.Message.setField(msg, 1, obj.dt);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.common.ComCenteredDynamicBicycleModelConfig}
 */
proto.apollo.common.ComCenteredDynamicBicycleModelConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.common.ComCenteredDynamicBicycleModelConfig;
  return proto.apollo.common.ComCenteredDynamicBicycleModelConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.common.ComCenteredDynamicBicycleModelConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.common.ComCenteredDynamicBicycleModelConfig}
 */
proto.apollo.common.ComCenteredDynamicBicycleModelConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDt(value);
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
proto.apollo.common.ComCenteredDynamicBicycleModelConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.common.ComCenteredDynamicBicycleModelConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.common.ComCenteredDynamicBicycleModelConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.common.ComCenteredDynamicBicycleModelConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeDouble(
      1,
      f
    );
  }
};


/**
 * optional double dt = 1;
 * @return {number}
 */
proto.apollo.common.ComCenteredDynamicBicycleModelConfig.prototype.getDt = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.common.ComCenteredDynamicBicycleModelConfig} returns this
 */
proto.apollo.common.ComCenteredDynamicBicycleModelConfig.prototype.setDt = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.common.ComCenteredDynamicBicycleModelConfig} returns this
 */
proto.apollo.common.ComCenteredDynamicBicycleModelConfig.prototype.clearDt = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.common.ComCenteredDynamicBicycleModelConfig.prototype.hasDt = function() {
  return jspb.Message.getField(this, 1) != null;
};


