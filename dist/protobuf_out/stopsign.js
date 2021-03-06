// source: modules/map/proto/map_stop_sign.proto
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

goog.provide('proto.apollo.hdmap.StopSign');
goog.provide('proto.apollo.hdmap.StopSign.StopType');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.apollo.hdmap.Curve');
goog.require('proto.apollo.hdmap.Id');

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
proto.apollo.hdmap.StopSign = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.apollo.hdmap.StopSign.repeatedFields_, null);
};
goog.inherits(proto.apollo.hdmap.StopSign, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.hdmap.StopSign.displayName = 'proto.apollo.hdmap.StopSign';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.apollo.hdmap.StopSign.repeatedFields_ = [2,3];



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
proto.apollo.hdmap.StopSign.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.hdmap.StopSign.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.hdmap.StopSign} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.hdmap.StopSign.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = msg.getId()) && proto.apollo.hdmap.Id.toObject(includeInstance, f),
    stopLineList: jspb.Message.toObjectList(msg.getStopLineList(),
    proto.apollo.hdmap.Curve.toObject, includeInstance),
    overlapIdList: jspb.Message.toObjectList(msg.getOverlapIdList(),
    proto.apollo.hdmap.Id.toObject, includeInstance),
    type: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of StopSign as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.hdmap.StopSign.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.id;

  /** @type {?|undefined} */
  this.stopLineList;

  /** @type {?|undefined} */
  this.overlapIdList;

  /** @type {?|undefined} */
  this.type;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.hdmap.StopSign.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.hdmap.StopSign}
 */
proto.apollo.hdmap.StopSign.fromObject = function(obj) {
  var msg = new proto.apollo.hdmap.StopSign();
  obj.id && jspb.Message.setWrapperField(
      msg, 1, proto.apollo.hdmap.Id.fromObject(obj.id));
  obj.stopLineList && jspb.Message.setRepeatedWrapperField(
      msg, 2, obj.stopLineList.map(
          proto.apollo.hdmap.Curve.fromObject));
  obj.overlapIdList && jspb.Message.setRepeatedWrapperField(
      msg, 3, obj.overlapIdList.map(
          proto.apollo.hdmap.Id.fromObject));
  obj.type != null && jspb.Message.setField(msg, 4, obj.type);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.hdmap.StopSign}
 */
proto.apollo.hdmap.StopSign.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.hdmap.StopSign;
  return proto.apollo.hdmap.StopSign.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.hdmap.StopSign} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.hdmap.StopSign}
 */
proto.apollo.hdmap.StopSign.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.apollo.hdmap.Id;
      reader.readMessage(value,proto.apollo.hdmap.Id.deserializeBinaryFromReader);
      msg.setId(value);
      break;
    case 2:
      var value = new proto.apollo.hdmap.Curve;
      reader.readMessage(value,proto.apollo.hdmap.Curve.deserializeBinaryFromReader);
      msg.addStopLine(value);
      break;
    case 3:
      var value = new proto.apollo.hdmap.Id;
      reader.readMessage(value,proto.apollo.hdmap.Id.deserializeBinaryFromReader);
      msg.addOverlapId(value);
      break;
    case 4:
      var value = /** @type {!proto.apollo.hdmap.StopSign.StopType} */ (reader.readEnum());
      msg.setType(value);
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
proto.apollo.hdmap.StopSign.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.hdmap.StopSign.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.hdmap.StopSign} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.hdmap.StopSign.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.apollo.hdmap.Id.serializeBinaryToWriter
    );
  }
  f = message.getStopLineList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.apollo.hdmap.Curve.serializeBinaryToWriter
    );
  }
  f = message.getOverlapIdList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.apollo.hdmap.Id.serializeBinaryToWriter
    );
  }
  f = /** @type {!proto.apollo.hdmap.StopSign.StopType} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.apollo.hdmap.StopSign.StopType = {
  UNKNOWN: 0,
  ONE_WAY: 1,
  TWO_WAY: 2,
  THREE_WAY: 3,
  FOUR_WAY: 4,
  ALL_WAY: 5
};

/**
 * optional Id id = 1;
 * @return {?proto.apollo.hdmap.Id}
 */
proto.apollo.hdmap.StopSign.prototype.getId = function() {
  return /** @type{?proto.apollo.hdmap.Id} */ (
    jspb.Message.getWrapperField(this, proto.apollo.hdmap.Id, 1));
};


/**
 * @param {?proto.apollo.hdmap.Id|undefined} value
 * @return {!proto.apollo.hdmap.StopSign} returns this
*/
proto.apollo.hdmap.StopSign.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.hdmap.StopSign} returns this
 */
proto.apollo.hdmap.StopSign.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.hdmap.StopSign.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Curve stop_line = 2;
 * @return {!Array<!proto.apollo.hdmap.Curve>}
 */
proto.apollo.hdmap.StopSign.prototype.getStopLineList = function() {
  return /** @type{!Array<!proto.apollo.hdmap.Curve>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.apollo.hdmap.Curve, 2));
};


/**
 * @param {!Array<!proto.apollo.hdmap.Curve>} value
 * @return {!proto.apollo.hdmap.StopSign} returns this
*/
proto.apollo.hdmap.StopSign.prototype.setStopLineList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.apollo.hdmap.Curve=} opt_value
 * @param {number=} opt_index
 * @return {!proto.apollo.hdmap.Curve}
 */
proto.apollo.hdmap.StopSign.prototype.addStopLine = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.apollo.hdmap.Curve, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.hdmap.StopSign} returns this
 */
proto.apollo.hdmap.StopSign.prototype.clearStopLineList = function() {
  return this.setStopLineList([]);
};


/**
 * repeated Id overlap_id = 3;
 * @return {!Array<!proto.apollo.hdmap.Id>}
 */
proto.apollo.hdmap.StopSign.prototype.getOverlapIdList = function() {
  return /** @type{!Array<!proto.apollo.hdmap.Id>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.apollo.hdmap.Id, 3));
};


/**
 * @param {!Array<!proto.apollo.hdmap.Id>} value
 * @return {!proto.apollo.hdmap.StopSign} returns this
*/
proto.apollo.hdmap.StopSign.prototype.setOverlapIdList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.apollo.hdmap.Id=} opt_value
 * @param {number=} opt_index
 * @return {!proto.apollo.hdmap.Id}
 */
proto.apollo.hdmap.StopSign.prototype.addOverlapId = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.apollo.hdmap.Id, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.hdmap.StopSign} returns this
 */
proto.apollo.hdmap.StopSign.prototype.clearOverlapIdList = function() {
  return this.setOverlapIdList([]);
};


/**
 * optional StopType type = 4;
 * @return {!proto.apollo.hdmap.StopSign.StopType}
 */
proto.apollo.hdmap.StopSign.prototype.getType = function() {
  return /** @type {!proto.apollo.hdmap.StopSign.StopType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.apollo.hdmap.StopSign.StopType} value
 * @return {!proto.apollo.hdmap.StopSign} returns this
 */
proto.apollo.hdmap.StopSign.prototype.setType = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.hdmap.StopSign} returns this
 */
proto.apollo.hdmap.StopSign.prototype.clearType = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.hdmap.StopSign.prototype.hasType = function() {
  return jspb.Message.getField(this, 4) != null;
};


