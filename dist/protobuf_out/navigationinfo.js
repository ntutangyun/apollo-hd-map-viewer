// source: modules/map/relative_map/proto/navigation.proto
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

goog.provide('proto.apollo.relative_map.NavigationInfo');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.apollo.common.Header');
goog.require('proto.apollo.relative_map.NavigationPath');

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
proto.apollo.relative_map.NavigationInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.apollo.relative_map.NavigationInfo.repeatedFields_, null);
};
goog.inherits(proto.apollo.relative_map.NavigationInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.relative_map.NavigationInfo.displayName = 'proto.apollo.relative_map.NavigationInfo';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.apollo.relative_map.NavigationInfo.repeatedFields_ = [2];



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
proto.apollo.relative_map.NavigationInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.relative_map.NavigationInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.relative_map.NavigationInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.relative_map.NavigationInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.apollo.common.Header.toObject(includeInstance, f),
    navigationPathList: jspb.Message.toObjectList(msg.getNavigationPathList(),
    proto.apollo.relative_map.NavigationPath.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of NavigationInfo as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.relative_map.NavigationInfo.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.header;

  /** @type {?|undefined} */
  this.navigationPathList;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.relative_map.NavigationInfo.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.relative_map.NavigationInfo}
 */
proto.apollo.relative_map.NavigationInfo.fromObject = function(obj) {
  var msg = new proto.apollo.relative_map.NavigationInfo();
  obj.header && jspb.Message.setWrapperField(
      msg, 1, proto.apollo.common.Header.fromObject(obj.header));
  obj.navigationPathList && jspb.Message.setRepeatedWrapperField(
      msg, 2, obj.navigationPathList.map(
          proto.apollo.relative_map.NavigationPath.fromObject));
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.relative_map.NavigationInfo}
 */
proto.apollo.relative_map.NavigationInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.relative_map.NavigationInfo;
  return proto.apollo.relative_map.NavigationInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.relative_map.NavigationInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.relative_map.NavigationInfo}
 */
proto.apollo.relative_map.NavigationInfo.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.apollo.relative_map.NavigationPath;
      reader.readMessage(value,proto.apollo.relative_map.NavigationPath.deserializeBinaryFromReader);
      msg.addNavigationPath(value);
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
proto.apollo.relative_map.NavigationInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.relative_map.NavigationInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.relative_map.NavigationInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.relative_map.NavigationInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.apollo.common.Header.serializeBinaryToWriter
    );
  }
  f = message.getNavigationPathList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.apollo.relative_map.NavigationPath.serializeBinaryToWriter
    );
  }
};


/**
 * optional apollo.common.Header header = 1;
 * @return {?proto.apollo.common.Header}
 */
proto.apollo.relative_map.NavigationInfo.prototype.getHeader = function() {
  return /** @type{?proto.apollo.common.Header} */ (
    jspb.Message.getWrapperField(this, proto.apollo.common.Header, 1));
};


/**
 * @param {?proto.apollo.common.Header|undefined} value
 * @return {!proto.apollo.relative_map.NavigationInfo} returns this
*/
proto.apollo.relative_map.NavigationInfo.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.relative_map.NavigationInfo} returns this
 */
proto.apollo.relative_map.NavigationInfo.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.relative_map.NavigationInfo.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated NavigationPath navigation_path = 2;
 * @return {!Array<!proto.apollo.relative_map.NavigationPath>}
 */
proto.apollo.relative_map.NavigationInfo.prototype.getNavigationPathList = function() {
  return /** @type{!Array<!proto.apollo.relative_map.NavigationPath>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.apollo.relative_map.NavigationPath, 2));
};


/**
 * @param {!Array<!proto.apollo.relative_map.NavigationPath>} value
 * @return {!proto.apollo.relative_map.NavigationInfo} returns this
*/
proto.apollo.relative_map.NavigationInfo.prototype.setNavigationPathList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.apollo.relative_map.NavigationPath=} opt_value
 * @param {number=} opt_index
 * @return {!proto.apollo.relative_map.NavigationPath}
 */
proto.apollo.relative_map.NavigationInfo.prototype.addNavigationPath = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.apollo.relative_map.NavigationPath, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.relative_map.NavigationInfo} returns this
 */
proto.apollo.relative_map.NavigationInfo.prototype.clearNavigationPathList = function() {
  return this.setNavigationPathList([]);
};


