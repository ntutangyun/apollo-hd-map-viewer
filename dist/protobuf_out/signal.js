// source: modules/map/proto/map_signal.proto
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

goog.provide('proto.apollo.hdmap.Signal');
goog.provide('proto.apollo.hdmap.Signal.Type');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.apollo.hdmap.Curve');
goog.require('proto.apollo.hdmap.Id');
goog.require('proto.apollo.hdmap.Polygon');
goog.require('proto.apollo.hdmap.SignInfo');
goog.require('proto.apollo.hdmap.Subsignal');

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
proto.apollo.hdmap.Signal = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.apollo.hdmap.Signal.repeatedFields_, null);
};
goog.inherits(proto.apollo.hdmap.Signal, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.hdmap.Signal.displayName = 'proto.apollo.hdmap.Signal';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.apollo.hdmap.Signal.repeatedFields_ = [3,4,6,7];



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
proto.apollo.hdmap.Signal.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.hdmap.Signal.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.hdmap.Signal} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.hdmap.Signal.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = msg.getId()) && proto.apollo.hdmap.Id.toObject(includeInstance, f),
    boundary: (f = msg.getBoundary()) && proto.apollo.hdmap.Polygon.toObject(includeInstance, f),
    subsignalList: jspb.Message.toObjectList(msg.getSubsignalList(),
    proto.apollo.hdmap.Subsignal.toObject, includeInstance),
    overlapIdList: jspb.Message.toObjectList(msg.getOverlapIdList(),
    proto.apollo.hdmap.Id.toObject, includeInstance),
    type: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    stopLineList: jspb.Message.toObjectList(msg.getStopLineList(),
    proto.apollo.hdmap.Curve.toObject, includeInstance),
    signInfoList: jspb.Message.toObjectList(msg.getSignInfoList(),
    proto.apollo.hdmap.SignInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Signal as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.hdmap.Signal.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.id;

  /** @type {?|undefined} */
  this.boundary;

  /** @type {?|undefined} */
  this.subsignalList;

  /** @type {?|undefined} */
  this.overlapIdList;

  /** @type {?|undefined} */
  this.type;

  /** @type {?|undefined} */
  this.stopLineList;

  /** @type {?|undefined} */
  this.signInfoList;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.hdmap.Signal.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.hdmap.Signal}
 */
proto.apollo.hdmap.Signal.fromObject = function(obj) {
  var msg = new proto.apollo.hdmap.Signal();
  obj.id && jspb.Message.setWrapperField(
      msg, 1, proto.apollo.hdmap.Id.fromObject(obj.id));
  obj.boundary && jspb.Message.setWrapperField(
      msg, 2, proto.apollo.hdmap.Polygon.fromObject(obj.boundary));
  obj.subsignalList && jspb.Message.setRepeatedWrapperField(
      msg, 3, obj.subsignalList.map(
          proto.apollo.hdmap.Subsignal.fromObject));
  obj.overlapIdList && jspb.Message.setRepeatedWrapperField(
      msg, 4, obj.overlapIdList.map(
          proto.apollo.hdmap.Id.fromObject));
  obj.type != null && jspb.Message.setField(msg, 5, obj.type);
  obj.stopLineList && jspb.Message.setRepeatedWrapperField(
      msg, 6, obj.stopLineList.map(
          proto.apollo.hdmap.Curve.fromObject));
  obj.signInfoList && jspb.Message.setRepeatedWrapperField(
      msg, 7, obj.signInfoList.map(
          proto.apollo.hdmap.SignInfo.fromObject));
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.hdmap.Signal}
 */
proto.apollo.hdmap.Signal.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.hdmap.Signal;
  return proto.apollo.hdmap.Signal.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.hdmap.Signal} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.hdmap.Signal}
 */
proto.apollo.hdmap.Signal.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.apollo.hdmap.Polygon;
      reader.readMessage(value,proto.apollo.hdmap.Polygon.deserializeBinaryFromReader);
      msg.setBoundary(value);
      break;
    case 3:
      var value = new proto.apollo.hdmap.Subsignal;
      reader.readMessage(value,proto.apollo.hdmap.Subsignal.deserializeBinaryFromReader);
      msg.addSubsignal(value);
      break;
    case 4:
      var value = new proto.apollo.hdmap.Id;
      reader.readMessage(value,proto.apollo.hdmap.Id.deserializeBinaryFromReader);
      msg.addOverlapId(value);
      break;
    case 5:
      var value = /** @type {!proto.apollo.hdmap.Signal.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 6:
      var value = new proto.apollo.hdmap.Curve;
      reader.readMessage(value,proto.apollo.hdmap.Curve.deserializeBinaryFromReader);
      msg.addStopLine(value);
      break;
    case 7:
      var value = new proto.apollo.hdmap.SignInfo;
      reader.readMessage(value,proto.apollo.hdmap.SignInfo.deserializeBinaryFromReader);
      msg.addSignInfo(value);
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
proto.apollo.hdmap.Signal.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.hdmap.Signal.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.hdmap.Signal} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.hdmap.Signal.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.apollo.hdmap.Id.serializeBinaryToWriter
    );
  }
  f = message.getBoundary();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.apollo.hdmap.Polygon.serializeBinaryToWriter
    );
  }
  f = message.getSubsignalList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.apollo.hdmap.Subsignal.serializeBinaryToWriter
    );
  }
  f = message.getOverlapIdList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.apollo.hdmap.Id.serializeBinaryToWriter
    );
  }
  f = /** @type {!proto.apollo.hdmap.Signal.Type} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getStopLineList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.apollo.hdmap.Curve.serializeBinaryToWriter
    );
  }
  f = message.getSignInfoList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.apollo.hdmap.SignInfo.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.apollo.hdmap.Signal.Type = {
  UNKNOWN: 1,
  MIX_2_HORIZONTAL: 2,
  MIX_2_VERTICAL: 3,
  MIX_3_HORIZONTAL: 4,
  MIX_3_VERTICAL: 5,
  SINGLE: 6
};

/**
 * optional Id id = 1;
 * @return {?proto.apollo.hdmap.Id}
 */
proto.apollo.hdmap.Signal.prototype.getId = function() {
  return /** @type{?proto.apollo.hdmap.Id} */ (
    jspb.Message.getWrapperField(this, proto.apollo.hdmap.Id, 1));
};


/**
 * @param {?proto.apollo.hdmap.Id|undefined} value
 * @return {!proto.apollo.hdmap.Signal} returns this
*/
proto.apollo.hdmap.Signal.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.hdmap.Signal} returns this
 */
proto.apollo.hdmap.Signal.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.hdmap.Signal.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Polygon boundary = 2;
 * @return {?proto.apollo.hdmap.Polygon}
 */
proto.apollo.hdmap.Signal.prototype.getBoundary = function() {
  return /** @type{?proto.apollo.hdmap.Polygon} */ (
    jspb.Message.getWrapperField(this, proto.apollo.hdmap.Polygon, 2));
};


/**
 * @param {?proto.apollo.hdmap.Polygon|undefined} value
 * @return {!proto.apollo.hdmap.Signal} returns this
*/
proto.apollo.hdmap.Signal.prototype.setBoundary = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.hdmap.Signal} returns this
 */
proto.apollo.hdmap.Signal.prototype.clearBoundary = function() {
  return this.setBoundary(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.hdmap.Signal.prototype.hasBoundary = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated Subsignal subsignal = 3;
 * @return {!Array<!proto.apollo.hdmap.Subsignal>}
 */
proto.apollo.hdmap.Signal.prototype.getSubsignalList = function() {
  return /** @type{!Array<!proto.apollo.hdmap.Subsignal>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.apollo.hdmap.Subsignal, 3));
};


/**
 * @param {!Array<!proto.apollo.hdmap.Subsignal>} value
 * @return {!proto.apollo.hdmap.Signal} returns this
*/
proto.apollo.hdmap.Signal.prototype.setSubsignalList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.apollo.hdmap.Subsignal=} opt_value
 * @param {number=} opt_index
 * @return {!proto.apollo.hdmap.Subsignal}
 */
proto.apollo.hdmap.Signal.prototype.addSubsignal = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.apollo.hdmap.Subsignal, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.hdmap.Signal} returns this
 */
proto.apollo.hdmap.Signal.prototype.clearSubsignalList = function() {
  return this.setSubsignalList([]);
};


/**
 * repeated Id overlap_id = 4;
 * @return {!Array<!proto.apollo.hdmap.Id>}
 */
proto.apollo.hdmap.Signal.prototype.getOverlapIdList = function() {
  return /** @type{!Array<!proto.apollo.hdmap.Id>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.apollo.hdmap.Id, 4));
};


/**
 * @param {!Array<!proto.apollo.hdmap.Id>} value
 * @return {!proto.apollo.hdmap.Signal} returns this
*/
proto.apollo.hdmap.Signal.prototype.setOverlapIdList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.apollo.hdmap.Id=} opt_value
 * @param {number=} opt_index
 * @return {!proto.apollo.hdmap.Id}
 */
proto.apollo.hdmap.Signal.prototype.addOverlapId = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.apollo.hdmap.Id, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.hdmap.Signal} returns this
 */
proto.apollo.hdmap.Signal.prototype.clearOverlapIdList = function() {
  return this.setOverlapIdList([]);
};


/**
 * optional Type type = 5;
 * @return {!proto.apollo.hdmap.Signal.Type}
 */
proto.apollo.hdmap.Signal.prototype.getType = function() {
  return /** @type {!proto.apollo.hdmap.Signal.Type} */ (jspb.Message.getFieldWithDefault(this, 5, 1));
};


/**
 * @param {!proto.apollo.hdmap.Signal.Type} value
 * @return {!proto.apollo.hdmap.Signal} returns this
 */
proto.apollo.hdmap.Signal.prototype.setType = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.hdmap.Signal} returns this
 */
proto.apollo.hdmap.Signal.prototype.clearType = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.hdmap.Signal.prototype.hasType = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated Curve stop_line = 6;
 * @return {!Array<!proto.apollo.hdmap.Curve>}
 */
proto.apollo.hdmap.Signal.prototype.getStopLineList = function() {
  return /** @type{!Array<!proto.apollo.hdmap.Curve>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.apollo.hdmap.Curve, 6));
};


/**
 * @param {!Array<!proto.apollo.hdmap.Curve>} value
 * @return {!proto.apollo.hdmap.Signal} returns this
*/
proto.apollo.hdmap.Signal.prototype.setStopLineList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.apollo.hdmap.Curve=} opt_value
 * @param {number=} opt_index
 * @return {!proto.apollo.hdmap.Curve}
 */
proto.apollo.hdmap.Signal.prototype.addStopLine = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.apollo.hdmap.Curve, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.hdmap.Signal} returns this
 */
proto.apollo.hdmap.Signal.prototype.clearStopLineList = function() {
  return this.setStopLineList([]);
};


/**
 * repeated SignInfo sign_info = 7;
 * @return {!Array<!proto.apollo.hdmap.SignInfo>}
 */
proto.apollo.hdmap.Signal.prototype.getSignInfoList = function() {
  return /** @type{!Array<!proto.apollo.hdmap.SignInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.apollo.hdmap.SignInfo, 7));
};


/**
 * @param {!Array<!proto.apollo.hdmap.SignInfo>} value
 * @return {!proto.apollo.hdmap.Signal} returns this
*/
proto.apollo.hdmap.Signal.prototype.setSignInfoList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.apollo.hdmap.SignInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.apollo.hdmap.SignInfo}
 */
proto.apollo.hdmap.Signal.prototype.addSignInfo = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.apollo.hdmap.SignInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.hdmap.Signal} returns this
 */
proto.apollo.hdmap.Signal.prototype.clearSignInfoList = function() {
  return this.setSignInfoList([]);
};


