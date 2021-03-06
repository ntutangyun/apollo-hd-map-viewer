// source: modules/dreamview/proto/chart.proto
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

goog.provide('proto.apollo.dreamview.Line');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Map');
goog.require('jspb.Message');
goog.require('proto.apollo.common.Point2D');

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
proto.apollo.dreamview.Line = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.apollo.dreamview.Line.repeatedFields_, null);
};
goog.inherits(proto.apollo.dreamview.Line, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.dreamview.Line.displayName = 'proto.apollo.dreamview.Line';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.apollo.dreamview.Line.repeatedFields_ = [3];



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
proto.apollo.dreamview.Line.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.dreamview.Line.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.dreamview.Line} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.dreamview.Line.toObject = function(includeInstance, msg) {
  var f, obj = {
    label: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    hideLabelInLegend: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    pointList: jspb.Message.toObjectList(msg.getPointList(),
    proto.apollo.common.Point2D.toObject, includeInstance),
    propertiesMap: (f = msg.getPropertiesMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Line as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.dreamview.Line.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.label;

  /** @type {?|undefined} */
  this.hideLabelInLegend;

  /** @type {?|undefined} */
  this.pointList;

  /** @type {?|undefined} */
  this.propertiesMap;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.dreamview.Line.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.dreamview.Line}
 */
proto.apollo.dreamview.Line.fromObject = function(obj) {
  var msg = new proto.apollo.dreamview.Line();
  obj.label != null && jspb.Message.setField(msg, 1, obj.label);
  obj.hideLabelInLegend != null && jspb.Message.setField(msg, 2, obj.hideLabelInLegend);
  obj.pointList && jspb.Message.setRepeatedWrapperField(
      msg, 3, obj.pointList.map(
          proto.apollo.common.Point2D.fromObject));
  obj.propertiesMap && jspb.Message.setField(msg, 4, obj.propertiesMap);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.dreamview.Line}
 */
proto.apollo.dreamview.Line.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.dreamview.Line;
  return proto.apollo.dreamview.Line.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.dreamview.Line} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.dreamview.Line}
 */
proto.apollo.dreamview.Line.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLabel(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHideLabelInLegend(value);
      break;
    case 3:
      var value = new proto.apollo.common.Point2D;
      reader.readMessage(value,proto.apollo.common.Point2D.deserializeBinaryFromReader);
      msg.addPoint(value);
      break;
    case 4:
      var value = msg.getPropertiesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
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
proto.apollo.dreamview.Line.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.dreamview.Line.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.dreamview.Line} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.dreamview.Line.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getPointList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.apollo.common.Point2D.serializeBinaryToWriter
    );
  }
  f = message.getPropertiesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional string label = 1;
 * @return {string}
 */
proto.apollo.dreamview.Line.prototype.getLabel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.apollo.dreamview.Line} returns this
 */
proto.apollo.dreamview.Line.prototype.setLabel = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.dreamview.Line} returns this
 */
proto.apollo.dreamview.Line.prototype.clearLabel = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.dreamview.Line.prototype.hasLabel = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool hide_label_in_legend = 2;
 * @return {boolean}
 */
proto.apollo.dreamview.Line.prototype.getHideLabelInLegend = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.dreamview.Line} returns this
 */
proto.apollo.dreamview.Line.prototype.setHideLabelInLegend = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.dreamview.Line} returns this
 */
proto.apollo.dreamview.Line.prototype.clearHideLabelInLegend = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.dreamview.Line.prototype.hasHideLabelInLegend = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated apollo.common.Point2D point = 3;
 * @return {!Array<!proto.apollo.common.Point2D>}
 */
proto.apollo.dreamview.Line.prototype.getPointList = function() {
  return /** @type{!Array<!proto.apollo.common.Point2D>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.apollo.common.Point2D, 3));
};


/**
 * @param {!Array<!proto.apollo.common.Point2D>} value
 * @return {!proto.apollo.dreamview.Line} returns this
*/
proto.apollo.dreamview.Line.prototype.setPointList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.apollo.common.Point2D=} opt_value
 * @param {number=} opt_index
 * @return {!proto.apollo.common.Point2D}
 */
proto.apollo.dreamview.Line.prototype.addPoint = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.apollo.common.Point2D, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.dreamview.Line} returns this
 */
proto.apollo.dreamview.Line.prototype.clearPointList = function() {
  return this.setPointList([]);
};


/**
 * map<string, string> properties = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.apollo.dreamview.Line.prototype.getPropertiesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.apollo.dreamview.Line} returns this
 */
proto.apollo.dreamview.Line.prototype.clearPropertiesMap = function() {
  this.getPropertiesMap().clear();
  return this;};


