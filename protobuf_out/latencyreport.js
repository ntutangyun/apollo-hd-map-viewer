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

goog.provide('proto.apollo.common.LatencyReport');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.apollo.common.Header');
goog.require('proto.apollo.common.LatencyTrack');

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
proto.apollo.common.LatencyReport = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.common.LatencyReport, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.common.LatencyReport.displayName = 'proto.apollo.common.LatencyReport';
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
proto.apollo.common.LatencyReport.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.common.LatencyReport.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.common.LatencyReport} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.common.LatencyReport.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.apollo.common.Header.toObject(includeInstance, f),
    e2esLatency: (f = msg.getE2esLatency()) && proto.apollo.common.LatencyTrack.toObject(includeInstance, f),
    modulesLatency: (f = msg.getModulesLatency()) && proto.apollo.common.LatencyTrack.toObject(includeInstance, f)
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
 * @return {!proto.apollo.common.LatencyReport}
 */
proto.apollo.common.LatencyReport.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.common.LatencyReport;
  return proto.apollo.common.LatencyReport.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.common.LatencyReport} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.common.LatencyReport}
 */
proto.apollo.common.LatencyReport.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.apollo.common.LatencyTrack;
      reader.readMessage(value,proto.apollo.common.LatencyTrack.deserializeBinaryFromReader);
      msg.setE2esLatency(value);
      break;
    case 3:
      var value = new proto.apollo.common.LatencyTrack;
      reader.readMessage(value,proto.apollo.common.LatencyTrack.deserializeBinaryFromReader);
      msg.setModulesLatency(value);
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
proto.apollo.common.LatencyReport.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.common.LatencyReport.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.common.LatencyReport} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.common.LatencyReport.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.apollo.common.Header.serializeBinaryToWriter
    );
  }
  f = message.getE2esLatency();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.apollo.common.LatencyTrack.serializeBinaryToWriter
    );
  }
  f = message.getModulesLatency();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.apollo.common.LatencyTrack.serializeBinaryToWriter
    );
  }
};


/**
 * optional Header header = 1;
 * @return {?proto.apollo.common.Header}
 */
proto.apollo.common.LatencyReport.prototype.getHeader = function() {
  return /** @type{?proto.apollo.common.Header} */ (
    jspb.Message.getWrapperField(this, proto.apollo.common.Header, 1));
};


/**
 * @param {?proto.apollo.common.Header|undefined} value
 * @return {!proto.apollo.common.LatencyReport} returns this
*/
proto.apollo.common.LatencyReport.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.common.LatencyReport} returns this
 */
proto.apollo.common.LatencyReport.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.common.LatencyReport.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional LatencyTrack e2es_latency = 2;
 * @return {?proto.apollo.common.LatencyTrack}
 */
proto.apollo.common.LatencyReport.prototype.getE2esLatency = function() {
  return /** @type{?proto.apollo.common.LatencyTrack} */ (
    jspb.Message.getWrapperField(this, proto.apollo.common.LatencyTrack, 2));
};


/**
 * @param {?proto.apollo.common.LatencyTrack|undefined} value
 * @return {!proto.apollo.common.LatencyReport} returns this
*/
proto.apollo.common.LatencyReport.prototype.setE2esLatency = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.common.LatencyReport} returns this
 */
proto.apollo.common.LatencyReport.prototype.clearE2esLatency = function() {
  return this.setE2esLatency(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.common.LatencyReport.prototype.hasE2esLatency = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional LatencyTrack modules_latency = 3;
 * @return {?proto.apollo.common.LatencyTrack}
 */
proto.apollo.common.LatencyReport.prototype.getModulesLatency = function() {
  return /** @type{?proto.apollo.common.LatencyTrack} */ (
    jspb.Message.getWrapperField(this, proto.apollo.common.LatencyTrack, 3));
};


/**
 * @param {?proto.apollo.common.LatencyTrack|undefined} value
 * @return {!proto.apollo.common.LatencyReport} returns this
*/
proto.apollo.common.LatencyReport.prototype.setModulesLatency = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.common.LatencyReport} returns this
 */
proto.apollo.common.LatencyReport.prototype.clearModulesLatency = function() {
  return this.setModulesLatency(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.common.LatencyReport.prototype.hasModulesLatency = function() {
  return jspb.Message.getField(this, 3) != null;
};


