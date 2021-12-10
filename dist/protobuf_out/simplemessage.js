// source: modules/common/util/testdata/simple.proto
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

goog.provide('proto.apollo.common.util.test.SimpleMessage');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.apollo.common.Header');

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
proto.apollo.common.util.test.SimpleMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.common.util.test.SimpleMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.common.util.test.SimpleMessage.displayName = 'proto.apollo.common.util.test.SimpleMessage';
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
proto.apollo.common.util.test.SimpleMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.common.util.test.SimpleMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.common.util.test.SimpleMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.common.util.test.SimpleMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    integer: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    text: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    header: (f = msg.getHeader()) && proto.apollo.common.Header.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of SimpleMessage as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.common.util.test.SimpleMessage.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.integer;

  /** @type {?|undefined} */
  this.text;

  /** @type {?|undefined} */
  this.header;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.common.util.test.SimpleMessage.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.common.util.test.SimpleMessage}
 */
proto.apollo.common.util.test.SimpleMessage.fromObject = function(obj) {
  var msg = new proto.apollo.common.util.test.SimpleMessage();
  obj.integer != null && jspb.Message.setField(msg, 1, obj.integer);
  obj.text != null && jspb.Message.setField(msg, 2, obj.text);
  obj.header && jspb.Message.setWrapperField(
      msg, 3, proto.apollo.common.Header.fromObject(obj.header));
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.common.util.test.SimpleMessage}
 */
proto.apollo.common.util.test.SimpleMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.common.util.test.SimpleMessage;
  return proto.apollo.common.util.test.SimpleMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.common.util.test.SimpleMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.common.util.test.SimpleMessage}
 */
proto.apollo.common.util.test.SimpleMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setInteger(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 3:
      var value = new proto.apollo.common.Header;
      reader.readMessage(value,proto.apollo.common.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
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
proto.apollo.common.util.test.SimpleMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.common.util.test.SimpleMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.common.util.test.SimpleMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.common.util.test.SimpleMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
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
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.apollo.common.Header.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 integer = 1;
 * @return {number}
 */
proto.apollo.common.util.test.SimpleMessage.prototype.getInteger = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.common.util.test.SimpleMessage} returns this
 */
proto.apollo.common.util.test.SimpleMessage.prototype.setInteger = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.common.util.test.SimpleMessage} returns this
 */
proto.apollo.common.util.test.SimpleMessage.prototype.clearInteger = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.common.util.test.SimpleMessage.prototype.hasInteger = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string text = 2;
 * @return {string}
 */
proto.apollo.common.util.test.SimpleMessage.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.apollo.common.util.test.SimpleMessage} returns this
 */
proto.apollo.common.util.test.SimpleMessage.prototype.setText = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.common.util.test.SimpleMessage} returns this
 */
proto.apollo.common.util.test.SimpleMessage.prototype.clearText = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.common.util.test.SimpleMessage.prototype.hasText = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional apollo.common.Header header = 3;
 * @return {?proto.apollo.common.Header}
 */
proto.apollo.common.util.test.SimpleMessage.prototype.getHeader = function() {
  return /** @type{?proto.apollo.common.Header} */ (
    jspb.Message.getWrapperField(this, proto.apollo.common.Header, 3));
};


/**
 * @param {?proto.apollo.common.Header|undefined} value
 * @return {!proto.apollo.common.util.test.SimpleMessage} returns this
*/
proto.apollo.common.util.test.SimpleMessage.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.common.util.test.SimpleMessage} returns this
 */
proto.apollo.common.util.test.SimpleMessage.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.common.util.test.SimpleMessage.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 3) != null;
};


