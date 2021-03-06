// source: modules/map/tools/map_datachecker/proto/collection_check_message.proto
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

goog.provide('proto.apollo.hdmap.ChannelVerifyResponse');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.apollo.hdmap.VerifyResult');

goog.forwardDeclare('proto.apollo.hdmap.ErrorCode');
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
proto.apollo.hdmap.ChannelVerifyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.hdmap.ChannelVerifyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.hdmap.ChannelVerifyResponse.displayName = 'proto.apollo.hdmap.ChannelVerifyResponse';
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
proto.apollo.hdmap.ChannelVerifyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.hdmap.ChannelVerifyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.hdmap.ChannelVerifyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.hdmap.ChannelVerifyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    result: (f = msg.getResult()) && proto.apollo.hdmap.VerifyResult.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of ChannelVerifyResponse as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.hdmap.ChannelVerifyResponse.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.code;

  /** @type {?|undefined} */
  this.result;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.hdmap.ChannelVerifyResponse.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.hdmap.ChannelVerifyResponse}
 */
proto.apollo.hdmap.ChannelVerifyResponse.fromObject = function(obj) {
  var msg = new proto.apollo.hdmap.ChannelVerifyResponse();
  obj.code != null && jspb.Message.setField(msg, 1, obj.code);
  obj.result && jspb.Message.setWrapperField(
      msg, 2, proto.apollo.hdmap.VerifyResult.fromObject(obj.result));
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.hdmap.ChannelVerifyResponse}
 */
proto.apollo.hdmap.ChannelVerifyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.hdmap.ChannelVerifyResponse;
  return proto.apollo.hdmap.ChannelVerifyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.hdmap.ChannelVerifyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.hdmap.ChannelVerifyResponse}
 */
proto.apollo.hdmap.ChannelVerifyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.apollo.hdmap.ErrorCode} */ (reader.readEnum());
      msg.setCode(value);
      break;
    case 2:
      var value = new proto.apollo.hdmap.VerifyResult;
      reader.readMessage(value,proto.apollo.hdmap.VerifyResult.deserializeBinaryFromReader);
      msg.setResult(value);
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
proto.apollo.hdmap.ChannelVerifyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.hdmap.ChannelVerifyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.hdmap.ChannelVerifyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.hdmap.ChannelVerifyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.apollo.hdmap.ErrorCode} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.apollo.hdmap.VerifyResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional ErrorCode code = 1;
 * @return {!proto.apollo.hdmap.ErrorCode}
 */
proto.apollo.hdmap.ChannelVerifyResponse.prototype.getCode = function() {
  return /** @type {!proto.apollo.hdmap.ErrorCode} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.apollo.hdmap.ErrorCode} value
 * @return {!proto.apollo.hdmap.ChannelVerifyResponse} returns this
 */
proto.apollo.hdmap.ChannelVerifyResponse.prototype.setCode = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.hdmap.ChannelVerifyResponse} returns this
 */
proto.apollo.hdmap.ChannelVerifyResponse.prototype.clearCode = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.hdmap.ChannelVerifyResponse.prototype.hasCode = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional VerifyResult result = 2;
 * @return {?proto.apollo.hdmap.VerifyResult}
 */
proto.apollo.hdmap.ChannelVerifyResponse.prototype.getResult = function() {
  return /** @type{?proto.apollo.hdmap.VerifyResult} */ (
    jspb.Message.getWrapperField(this, proto.apollo.hdmap.VerifyResult, 2));
};


/**
 * @param {?proto.apollo.hdmap.VerifyResult|undefined} value
 * @return {!proto.apollo.hdmap.ChannelVerifyResponse} returns this
*/
proto.apollo.hdmap.ChannelVerifyResponse.prototype.setResult = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.hdmap.ChannelVerifyResponse} returns this
 */
proto.apollo.hdmap.ChannelVerifyResponse.prototype.clearResult = function() {
  return this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.hdmap.ChannelVerifyResponse.prototype.hasResult = function() {
  return jspb.Message.getField(this, 2) != null;
};


