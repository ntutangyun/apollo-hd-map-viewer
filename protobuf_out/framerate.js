// source: modules/map/tools/map_datachecker/proto/collection_check_message.proto
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

goog.provide('proto.apollo.hdmap.FrameRate');

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
proto.apollo.hdmap.FrameRate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.apollo.hdmap.FrameRate.repeatedFields_, null);
};
goog.inherits(proto.apollo.hdmap.FrameRate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.hdmap.FrameRate.displayName = 'proto.apollo.hdmap.FrameRate';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.apollo.hdmap.FrameRate.repeatedFields_ = [4];



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
proto.apollo.hdmap.FrameRate.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.hdmap.FrameRate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.hdmap.FrameRate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.hdmap.FrameRate.toObject = function(includeInstance, msg) {
  var f, obj = {
    topic: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    expectedRate: (f = jspb.Message.getOptionalFloatingPointField(msg, 2)) == null ? undefined : f,
    currentRate: (f = jspb.Message.getOptionalFloatingPointField(msg, 3)) == null ? undefined : f,
    badRecordNameList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.apollo.hdmap.FrameRate}
 */
proto.apollo.hdmap.FrameRate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.hdmap.FrameRate;
  return proto.apollo.hdmap.FrameRate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.hdmap.FrameRate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.hdmap.FrameRate}
 */
proto.apollo.hdmap.FrameRate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTopic(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setExpectedRate(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCurrentRate(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addBadRecordName(value);
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
proto.apollo.hdmap.FrameRate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.hdmap.FrameRate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.hdmap.FrameRate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.hdmap.FrameRate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
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
  f = message.getBadRecordNameList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
};


/**
 * optional string topic = 1;
 * @return {string}
 */
proto.apollo.hdmap.FrameRate.prototype.getTopic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.apollo.hdmap.FrameRate} returns this
 */
proto.apollo.hdmap.FrameRate.prototype.setTopic = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.hdmap.FrameRate} returns this
 */
proto.apollo.hdmap.FrameRate.prototype.clearTopic = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.hdmap.FrameRate.prototype.hasTopic = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double expected_rate = 2;
 * @return {number}
 */
proto.apollo.hdmap.FrameRate.prototype.getExpectedRate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.hdmap.FrameRate} returns this
 */
proto.apollo.hdmap.FrameRate.prototype.setExpectedRate = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.hdmap.FrameRate} returns this
 */
proto.apollo.hdmap.FrameRate.prototype.clearExpectedRate = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.hdmap.FrameRate.prototype.hasExpectedRate = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional double current_rate = 3;
 * @return {number}
 */
proto.apollo.hdmap.FrameRate.prototype.getCurrentRate = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.hdmap.FrameRate} returns this
 */
proto.apollo.hdmap.FrameRate.prototype.setCurrentRate = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.hdmap.FrameRate} returns this
 */
proto.apollo.hdmap.FrameRate.prototype.clearCurrentRate = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.hdmap.FrameRate.prototype.hasCurrentRate = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated string bad_record_name = 4;
 * @return {!Array<string>}
 */
proto.apollo.hdmap.FrameRate.prototype.getBadRecordNameList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.apollo.hdmap.FrameRate} returns this
 */
proto.apollo.hdmap.FrameRate.prototype.setBadRecordNameList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.apollo.hdmap.FrameRate} returns this
 */
proto.apollo.hdmap.FrameRate.prototype.addBadRecordName = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.hdmap.FrameRate} returns this
 */
proto.apollo.hdmap.FrameRate.prototype.clearBadRecordNameList = function() {
  return this.setBadRecordNameList([]);
};


