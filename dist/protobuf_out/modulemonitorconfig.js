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

goog.provide('proto.apollo.dreamview.ModuleMonitorConfig');

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
proto.apollo.dreamview.ModuleMonitorConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.apollo.dreamview.ModuleMonitorConfig.repeatedFields_, null);
};
goog.inherits(proto.apollo.dreamview.ModuleMonitorConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.dreamview.ModuleMonitorConfig.displayName = 'proto.apollo.dreamview.ModuleMonitorConfig';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.apollo.dreamview.ModuleMonitorConfig.repeatedFields_ = [1];



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
proto.apollo.dreamview.ModuleMonitorConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.dreamview.ModuleMonitorConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.dreamview.ModuleMonitorConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.dreamview.ModuleMonitorConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    nodeNameList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of ModuleMonitorConfig as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.dreamview.ModuleMonitorConfig.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.nodeNameList;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.dreamview.ModuleMonitorConfig.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.dreamview.ModuleMonitorConfig}
 */
proto.apollo.dreamview.ModuleMonitorConfig.fromObject = function(obj) {
  var msg = new proto.apollo.dreamview.ModuleMonitorConfig();
  obj.nodeNameList != null && jspb.Message.setField(msg, 1, obj.nodeNameList);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.dreamview.ModuleMonitorConfig}
 */
proto.apollo.dreamview.ModuleMonitorConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.dreamview.ModuleMonitorConfig;
  return proto.apollo.dreamview.ModuleMonitorConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.dreamview.ModuleMonitorConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.dreamview.ModuleMonitorConfig}
 */
proto.apollo.dreamview.ModuleMonitorConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addNodeName(value);
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
proto.apollo.dreamview.ModuleMonitorConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.dreamview.ModuleMonitorConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.dreamview.ModuleMonitorConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.dreamview.ModuleMonitorConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNodeNameList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string node_name = 1;
 * @return {!Array<string>}
 */
proto.apollo.dreamview.ModuleMonitorConfig.prototype.getNodeNameList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.apollo.dreamview.ModuleMonitorConfig} returns this
 */
proto.apollo.dreamview.ModuleMonitorConfig.prototype.setNodeNameList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.apollo.dreamview.ModuleMonitorConfig} returns this
 */
proto.apollo.dreamview.ModuleMonitorConfig.prototype.addNodeName = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.dreamview.ModuleMonitorConfig} returns this
 */
proto.apollo.dreamview.ModuleMonitorConfig.prototype.clearNodeNameList = function() {
  return this.setNodeNameList([]);
};


