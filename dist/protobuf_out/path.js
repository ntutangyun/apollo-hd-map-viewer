// source: modules/common/proto/pnc_point.proto
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

goog.provide('proto.apollo.common.Path');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.apollo.common.PathPoint');

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
proto.apollo.common.Path = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.apollo.common.Path.repeatedFields_, null);
};
goog.inherits(proto.apollo.common.Path, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.common.Path.displayName = 'proto.apollo.common.Path';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.apollo.common.Path.repeatedFields_ = [2];



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
proto.apollo.common.Path.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.common.Path.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.common.Path} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.common.Path.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    pathPointList: jspb.Message.toObjectList(msg.getPathPointList(),
    proto.apollo.common.PathPoint.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Path as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.common.Path.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.name;

  /** @type {?|undefined} */
  this.pathPointList;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.common.Path.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.common.Path}
 */
proto.apollo.common.Path.fromObject = function(obj) {
  var msg = new proto.apollo.common.Path();
  obj.name != null && jspb.Message.setField(msg, 1, obj.name);
  obj.pathPointList && jspb.Message.setRepeatedWrapperField(
      msg, 2, obj.pathPointList.map(
          proto.apollo.common.PathPoint.fromObject));
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.common.Path}
 */
proto.apollo.common.Path.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.common.Path;
  return proto.apollo.common.Path.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.common.Path} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.common.Path}
 */
proto.apollo.common.Path.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new proto.apollo.common.PathPoint;
      reader.readMessage(value,proto.apollo.common.PathPoint.deserializeBinaryFromReader);
      msg.addPathPoint(value);
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
proto.apollo.common.Path.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.common.Path.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.common.Path} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.common.Path.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPathPointList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.apollo.common.PathPoint.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.apollo.common.Path.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.apollo.common.Path} returns this
 */
proto.apollo.common.Path.prototype.setName = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.common.Path} returns this
 */
proto.apollo.common.Path.prototype.clearName = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.common.Path.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated PathPoint path_point = 2;
 * @return {!Array<!proto.apollo.common.PathPoint>}
 */
proto.apollo.common.Path.prototype.getPathPointList = function() {
  return /** @type{!Array<!proto.apollo.common.PathPoint>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.apollo.common.PathPoint, 2));
};


/**
 * @param {!Array<!proto.apollo.common.PathPoint>} value
 * @return {!proto.apollo.common.Path} returns this
*/
proto.apollo.common.Path.prototype.setPathPointList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.apollo.common.PathPoint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.apollo.common.PathPoint}
 */
proto.apollo.common.Path.prototype.addPathPoint = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.apollo.common.PathPoint, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.common.Path} returns this
 */
proto.apollo.common.Path.prototype.clearPathPointList = function() {
  return this.setPathPointList([]);
};


