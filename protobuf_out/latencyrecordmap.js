// source: modules/common/latency_recorder/proto/latency_record.proto
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

goog.provide('proto.apollo.common.LatencyRecordMap');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.apollo.common.Header');
goog.require('proto.apollo.common.LatencyRecord');

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
proto.apollo.common.LatencyRecordMap = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.apollo.common.LatencyRecordMap.repeatedFields_, null);
};
goog.inherits(proto.apollo.common.LatencyRecordMap, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.common.LatencyRecordMap.displayName = 'proto.apollo.common.LatencyRecordMap';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.apollo.common.LatencyRecordMap.repeatedFields_ = [3];



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
proto.apollo.common.LatencyRecordMap.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.common.LatencyRecordMap.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.common.LatencyRecordMap} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.common.LatencyRecordMap.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.apollo.common.Header.toObject(includeInstance, f),
    moduleName: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    latencyRecordsList: jspb.Message.toObjectList(msg.getLatencyRecordsList(),
    proto.apollo.common.LatencyRecord.toObject, includeInstance)
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
 * @return {!proto.apollo.common.LatencyRecordMap}
 */
proto.apollo.common.LatencyRecordMap.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.common.LatencyRecordMap;
  return proto.apollo.common.LatencyRecordMap.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.common.LatencyRecordMap} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.common.LatencyRecordMap}
 */
proto.apollo.common.LatencyRecordMap.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setModuleName(value);
      break;
    case 3:
      var value = new proto.apollo.common.LatencyRecord;
      reader.readMessage(value,proto.apollo.common.LatencyRecord.deserializeBinaryFromReader);
      msg.addLatencyRecords(value);
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
proto.apollo.common.LatencyRecordMap.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.common.LatencyRecordMap.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.common.LatencyRecordMap} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.common.LatencyRecordMap.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.apollo.common.Header.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLatencyRecordsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.apollo.common.LatencyRecord.serializeBinaryToWriter
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.apollo.common.Header}
 */
proto.apollo.common.LatencyRecordMap.prototype.getHeader = function() {
  return /** @type{?proto.apollo.common.Header} */ (
    jspb.Message.getWrapperField(this, proto.apollo.common.Header, 1));
};


/**
 * @param {?proto.apollo.common.Header|undefined} value
 * @return {!proto.apollo.common.LatencyRecordMap} returns this
*/
proto.apollo.common.LatencyRecordMap.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.common.LatencyRecordMap} returns this
 */
proto.apollo.common.LatencyRecordMap.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.common.LatencyRecordMap.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string module_name = 2;
 * @return {string}
 */
proto.apollo.common.LatencyRecordMap.prototype.getModuleName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.apollo.common.LatencyRecordMap} returns this
 */
proto.apollo.common.LatencyRecordMap.prototype.setModuleName = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.common.LatencyRecordMap} returns this
 */
proto.apollo.common.LatencyRecordMap.prototype.clearModuleName = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.common.LatencyRecordMap.prototype.hasModuleName = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated LatencyRecord latency_records = 3;
 * @return {!Array<!proto.apollo.common.LatencyRecord>}
 */
proto.apollo.common.LatencyRecordMap.prototype.getLatencyRecordsList = function() {
  return /** @type{!Array<!proto.apollo.common.LatencyRecord>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.apollo.common.LatencyRecord, 3));
};


/**
 * @param {!Array<!proto.apollo.common.LatencyRecord>} value
 * @return {!proto.apollo.common.LatencyRecordMap} returns this
*/
proto.apollo.common.LatencyRecordMap.prototype.setLatencyRecordsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.apollo.common.LatencyRecord=} opt_value
 * @param {number=} opt_index
 * @return {!proto.apollo.common.LatencyRecord}
 */
proto.apollo.common.LatencyRecordMap.prototype.addLatencyRecords = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.apollo.common.LatencyRecord, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.common.LatencyRecordMap} returns this
 */
proto.apollo.common.LatencyRecordMap.prototype.clearLatencyRecordsList = function() {
  return this.setLatencyRecordsList([]);
};


