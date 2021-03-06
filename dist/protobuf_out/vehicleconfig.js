// source: modules/common/configs/proto/vehicle_config.proto
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

goog.provide('proto.apollo.common.VehicleConfig');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.apollo.common.Extrinsics');
goog.require('proto.apollo.common.Header');
goog.require('proto.apollo.common.VehicleParam');

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
proto.apollo.common.VehicleConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.common.VehicleConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.common.VehicleConfig.displayName = 'proto.apollo.common.VehicleConfig';
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
proto.apollo.common.VehicleConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.common.VehicleConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.common.VehicleConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.common.VehicleConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.apollo.common.Header.toObject(includeInstance, f),
    vehicleParam: (f = msg.getVehicleParam()) && proto.apollo.common.VehicleParam.toObject(includeInstance, f),
    extrinsics: (f = msg.getExtrinsics()) && proto.apollo.common.Extrinsics.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of VehicleConfig as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.common.VehicleConfig.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.header;

  /** @type {?|undefined} */
  this.vehicleParam;

  /** @type {?|undefined} */
  this.extrinsics;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.common.VehicleConfig.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.common.VehicleConfig}
 */
proto.apollo.common.VehicleConfig.fromObject = function(obj) {
  var msg = new proto.apollo.common.VehicleConfig();
  obj.header && jspb.Message.setWrapperField(
      msg, 1, proto.apollo.common.Header.fromObject(obj.header));
  obj.vehicleParam && jspb.Message.setWrapperField(
      msg, 2, proto.apollo.common.VehicleParam.fromObject(obj.vehicleParam));
  obj.extrinsics && jspb.Message.setWrapperField(
      msg, 3, proto.apollo.common.Extrinsics.fromObject(obj.extrinsics));
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.common.VehicleConfig}
 */
proto.apollo.common.VehicleConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.common.VehicleConfig;
  return proto.apollo.common.VehicleConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.common.VehicleConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.common.VehicleConfig}
 */
proto.apollo.common.VehicleConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.apollo.common.Header;
      reader.readMessage(value,proto.apollo.common.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = new proto.apollo.common.VehicleParam;
      reader.readMessage(value,proto.apollo.common.VehicleParam.deserializeBinaryFromReader);
      msg.setVehicleParam(value);
      break;
    case 3:
      var value = new proto.apollo.common.Extrinsics;
      reader.readMessage(value,proto.apollo.common.Extrinsics.deserializeBinaryFromReader);
      msg.setExtrinsics(value);
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
proto.apollo.common.VehicleConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.common.VehicleConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.common.VehicleConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.common.VehicleConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.apollo.common.Header.serializeBinaryToWriter
    );
  }
  f = message.getVehicleParam();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.apollo.common.VehicleParam.serializeBinaryToWriter
    );
  }
  f = message.getExtrinsics();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.apollo.common.Extrinsics.serializeBinaryToWriter
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.apollo.common.Header}
 */
proto.apollo.common.VehicleConfig.prototype.getHeader = function() {
  return /** @type{?proto.apollo.common.Header} */ (
    jspb.Message.getWrapperField(this, proto.apollo.common.Header, 1));
};


/**
 * @param {?proto.apollo.common.Header|undefined} value
 * @return {!proto.apollo.common.VehicleConfig} returns this
*/
proto.apollo.common.VehicleConfig.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.common.VehicleConfig} returns this
 */
proto.apollo.common.VehicleConfig.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.common.VehicleConfig.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional VehicleParam vehicle_param = 2;
 * @return {?proto.apollo.common.VehicleParam}
 */
proto.apollo.common.VehicleConfig.prototype.getVehicleParam = function() {
  return /** @type{?proto.apollo.common.VehicleParam} */ (
    jspb.Message.getWrapperField(this, proto.apollo.common.VehicleParam, 2));
};


/**
 * @param {?proto.apollo.common.VehicleParam|undefined} value
 * @return {!proto.apollo.common.VehicleConfig} returns this
*/
proto.apollo.common.VehicleConfig.prototype.setVehicleParam = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.common.VehicleConfig} returns this
 */
proto.apollo.common.VehicleConfig.prototype.clearVehicleParam = function() {
  return this.setVehicleParam(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.common.VehicleConfig.prototype.hasVehicleParam = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Extrinsics extrinsics = 3;
 * @return {?proto.apollo.common.Extrinsics}
 */
proto.apollo.common.VehicleConfig.prototype.getExtrinsics = function() {
  return /** @type{?proto.apollo.common.Extrinsics} */ (
    jspb.Message.getWrapperField(this, proto.apollo.common.Extrinsics, 3));
};


/**
 * @param {?proto.apollo.common.Extrinsics|undefined} value
 * @return {!proto.apollo.common.VehicleConfig} returns this
*/
proto.apollo.common.VehicleConfig.prototype.setExtrinsics = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.common.VehicleConfig} returns this
 */
proto.apollo.common.VehicleConfig.prototype.clearExtrinsics = function() {
  return this.setExtrinsics(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.common.VehicleConfig.prototype.hasExtrinsics = function() {
  return jspb.Message.getField(this, 3) != null;
};


