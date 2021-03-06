// source: modules/dreamview/proto/simulation_world.proto
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

goog.provide('proto.apollo.dreamview.RoutePath');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.apollo.dreamview.PolygonPoint');

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
proto.apollo.dreamview.RoutePath = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.apollo.dreamview.RoutePath.repeatedFields_, null);
};
goog.inherits(proto.apollo.dreamview.RoutePath, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.dreamview.RoutePath.displayName = 'proto.apollo.dreamview.RoutePath';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.apollo.dreamview.RoutePath.repeatedFields_ = [1];



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
proto.apollo.dreamview.RoutePath.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.dreamview.RoutePath.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.dreamview.RoutePath} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.dreamview.RoutePath.toObject = function(includeInstance, msg) {
  var f, obj = {
    pointList: jspb.Message.toObjectList(msg.getPointList(),
    proto.apollo.dreamview.PolygonPoint.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of RoutePath as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.dreamview.RoutePath.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.pointList;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.dreamview.RoutePath.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.dreamview.RoutePath}
 */
proto.apollo.dreamview.RoutePath.fromObject = function(obj) {
  var msg = new proto.apollo.dreamview.RoutePath();
  obj.pointList && jspb.Message.setRepeatedWrapperField(
      msg, 1, obj.pointList.map(
          proto.apollo.dreamview.PolygonPoint.fromObject));
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.dreamview.RoutePath}
 */
proto.apollo.dreamview.RoutePath.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.dreamview.RoutePath;
  return proto.apollo.dreamview.RoutePath.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.dreamview.RoutePath} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.dreamview.RoutePath}
 */
proto.apollo.dreamview.RoutePath.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.apollo.dreamview.PolygonPoint;
      reader.readMessage(value,proto.apollo.dreamview.PolygonPoint.deserializeBinaryFromReader);
      msg.addPoint(value);
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
proto.apollo.dreamview.RoutePath.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.dreamview.RoutePath.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.dreamview.RoutePath} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.dreamview.RoutePath.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPointList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.apollo.dreamview.PolygonPoint.serializeBinaryToWriter
    );
  }
};


/**
 * repeated PolygonPoint point = 1;
 * @return {!Array<!proto.apollo.dreamview.PolygonPoint>}
 */
proto.apollo.dreamview.RoutePath.prototype.getPointList = function() {
  return /** @type{!Array<!proto.apollo.dreamview.PolygonPoint>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.apollo.dreamview.PolygonPoint, 1));
};


/**
 * @param {!Array<!proto.apollo.dreamview.PolygonPoint>} value
 * @return {!proto.apollo.dreamview.RoutePath} returns this
*/
proto.apollo.dreamview.RoutePath.prototype.setPointList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.apollo.dreamview.PolygonPoint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.apollo.dreamview.PolygonPoint}
 */
proto.apollo.dreamview.RoutePath.prototype.addPoint = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.apollo.dreamview.PolygonPoint, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.dreamview.RoutePath} returns this
 */
proto.apollo.dreamview.RoutePath.prototype.clearPointList = function() {
  return this.setPointList([]);
};


