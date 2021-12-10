// source: modules/dreamview/proto/hmi_mode.proto
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

goog.provide('proto.apollo.dreamview.ProcessMonitorConfig');

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
proto.apollo.dreamview.ProcessMonitorConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.apollo.dreamview.ProcessMonitorConfig.repeatedFields_, null);
};
goog.inherits(proto.apollo.dreamview.ProcessMonitorConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.dreamview.ProcessMonitorConfig.displayName = 'proto.apollo.dreamview.ProcessMonitorConfig';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.apollo.dreamview.ProcessMonitorConfig.repeatedFields_ = [1];



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
proto.apollo.dreamview.ProcessMonitorConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.dreamview.ProcessMonitorConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.dreamview.ProcessMonitorConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.dreamview.ProcessMonitorConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    commandKeywordsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of ProcessMonitorConfig as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.dreamview.ProcessMonitorConfig.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.commandKeywordsList;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.dreamview.ProcessMonitorConfig.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.dreamview.ProcessMonitorConfig}
 */
proto.apollo.dreamview.ProcessMonitorConfig.fromObject = function(obj) {
  var msg = new proto.apollo.dreamview.ProcessMonitorConfig();
  obj.commandKeywordsList != null && jspb.Message.setField(msg, 1, obj.commandKeywordsList);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.dreamview.ProcessMonitorConfig}
 */
proto.apollo.dreamview.ProcessMonitorConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.dreamview.ProcessMonitorConfig;
  return proto.apollo.dreamview.ProcessMonitorConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.dreamview.ProcessMonitorConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.dreamview.ProcessMonitorConfig}
 */
proto.apollo.dreamview.ProcessMonitorConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addCommandKeywords(value);
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
proto.apollo.dreamview.ProcessMonitorConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.dreamview.ProcessMonitorConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.dreamview.ProcessMonitorConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.dreamview.ProcessMonitorConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommandKeywordsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string command_keywords = 1;
 * @return {!Array<string>}
 */
proto.apollo.dreamview.ProcessMonitorConfig.prototype.getCommandKeywordsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.apollo.dreamview.ProcessMonitorConfig} returns this
 */
proto.apollo.dreamview.ProcessMonitorConfig.prototype.setCommandKeywordsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.apollo.dreamview.ProcessMonitorConfig} returns this
 */
proto.apollo.dreamview.ProcessMonitorConfig.prototype.addCommandKeywords = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.dreamview.ProcessMonitorConfig} returns this
 */
proto.apollo.dreamview.ProcessMonitorConfig.prototype.clearCommandKeywordsList = function() {
  return this.setCommandKeywordsList([]);
};

