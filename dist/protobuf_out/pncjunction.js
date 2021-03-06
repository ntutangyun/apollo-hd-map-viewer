// source: modules/map/proto/map_pnc_junction.proto
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

goog.provide('proto.apollo.hdmap.PNCJunction');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.apollo.hdmap.Id');
goog.require('proto.apollo.hdmap.PassageGroup');
goog.require('proto.apollo.hdmap.Polygon');

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
proto.apollo.hdmap.PNCJunction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.apollo.hdmap.PNCJunction.repeatedFields_, null);
};
goog.inherits(proto.apollo.hdmap.PNCJunction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.hdmap.PNCJunction.displayName = 'proto.apollo.hdmap.PNCJunction';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.apollo.hdmap.PNCJunction.repeatedFields_ = [3,4];



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
proto.apollo.hdmap.PNCJunction.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.hdmap.PNCJunction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.hdmap.PNCJunction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.hdmap.PNCJunction.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = msg.getId()) && proto.apollo.hdmap.Id.toObject(includeInstance, f),
    polygon: (f = msg.getPolygon()) && proto.apollo.hdmap.Polygon.toObject(includeInstance, f),
    overlapIdList: jspb.Message.toObjectList(msg.getOverlapIdList(),
    proto.apollo.hdmap.Id.toObject, includeInstance),
    passageGroupList: jspb.Message.toObjectList(msg.getPassageGroupList(),
    proto.apollo.hdmap.PassageGroup.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of PNCJunction as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.hdmap.PNCJunction.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.id;

  /** @type {?|undefined} */
  this.polygon;

  /** @type {?|undefined} */
  this.overlapIdList;

  /** @type {?|undefined} */
  this.passageGroupList;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.hdmap.PNCJunction.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.hdmap.PNCJunction}
 */
proto.apollo.hdmap.PNCJunction.fromObject = function(obj) {
  var msg = new proto.apollo.hdmap.PNCJunction();
  obj.id && jspb.Message.setWrapperField(
      msg, 1, proto.apollo.hdmap.Id.fromObject(obj.id));
  obj.polygon && jspb.Message.setWrapperField(
      msg, 2, proto.apollo.hdmap.Polygon.fromObject(obj.polygon));
  obj.overlapIdList && jspb.Message.setRepeatedWrapperField(
      msg, 3, obj.overlapIdList.map(
          proto.apollo.hdmap.Id.fromObject));
  obj.passageGroupList && jspb.Message.setRepeatedWrapperField(
      msg, 4, obj.passageGroupList.map(
          proto.apollo.hdmap.PassageGroup.fromObject));
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.hdmap.PNCJunction}
 */
proto.apollo.hdmap.PNCJunction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.hdmap.PNCJunction;
  return proto.apollo.hdmap.PNCJunction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.hdmap.PNCJunction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.hdmap.PNCJunction}
 */
proto.apollo.hdmap.PNCJunction.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setPolygon(value);
      break;
    case 3:
      var value = new proto.apollo.hdmap.Id;
      reader.readMessage(value,proto.apollo.hdmap.Id.deserializeBinaryFromReader);
      msg.addOverlapId(value);
      break;
    case 4:
      var value = new proto.apollo.hdmap.PassageGroup;
      reader.readMessage(value,proto.apollo.hdmap.PassageGroup.deserializeBinaryFromReader);
      msg.addPassageGroup(value);
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
proto.apollo.hdmap.PNCJunction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.hdmap.PNCJunction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.hdmap.PNCJunction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.hdmap.PNCJunction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.apollo.hdmap.Id.serializeBinaryToWriter
    );
  }
  f = message.getPolygon();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.apollo.hdmap.Polygon.serializeBinaryToWriter
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
  f = message.getPassageGroupList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.apollo.hdmap.PassageGroup.serializeBinaryToWriter
    );
  }
};


/**
 * optional Id id = 1;
 * @return {?proto.apollo.hdmap.Id}
 */
proto.apollo.hdmap.PNCJunction.prototype.getId = function() {
  return /** @type{?proto.apollo.hdmap.Id} */ (
    jspb.Message.getWrapperField(this, proto.apollo.hdmap.Id, 1));
};


/**
 * @param {?proto.apollo.hdmap.Id|undefined} value
 * @return {!proto.apollo.hdmap.PNCJunction} returns this
*/
proto.apollo.hdmap.PNCJunction.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.hdmap.PNCJunction} returns this
 */
proto.apollo.hdmap.PNCJunction.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.hdmap.PNCJunction.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Polygon polygon = 2;
 * @return {?proto.apollo.hdmap.Polygon}
 */
proto.apollo.hdmap.PNCJunction.prototype.getPolygon = function() {
  return /** @type{?proto.apollo.hdmap.Polygon} */ (
    jspb.Message.getWrapperField(this, proto.apollo.hdmap.Polygon, 2));
};


/**
 * @param {?proto.apollo.hdmap.Polygon|undefined} value
 * @return {!proto.apollo.hdmap.PNCJunction} returns this
*/
proto.apollo.hdmap.PNCJunction.prototype.setPolygon = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.hdmap.PNCJunction} returns this
 */
proto.apollo.hdmap.PNCJunction.prototype.clearPolygon = function() {
  return this.setPolygon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.hdmap.PNCJunction.prototype.hasPolygon = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated Id overlap_id = 3;
 * @return {!Array<!proto.apollo.hdmap.Id>}
 */
proto.apollo.hdmap.PNCJunction.prototype.getOverlapIdList = function() {
  return /** @type{!Array<!proto.apollo.hdmap.Id>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.apollo.hdmap.Id, 3));
};


/**
 * @param {!Array<!proto.apollo.hdmap.Id>} value
 * @return {!proto.apollo.hdmap.PNCJunction} returns this
*/
proto.apollo.hdmap.PNCJunction.prototype.setOverlapIdList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.apollo.hdmap.Id=} opt_value
 * @param {number=} opt_index
 * @return {!proto.apollo.hdmap.Id}
 */
proto.apollo.hdmap.PNCJunction.prototype.addOverlapId = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.apollo.hdmap.Id, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.hdmap.PNCJunction} returns this
 */
proto.apollo.hdmap.PNCJunction.prototype.clearOverlapIdList = function() {
  return this.setOverlapIdList([]);
};


/**
 * repeated PassageGroup passage_group = 4;
 * @return {!Array<!proto.apollo.hdmap.PassageGroup>}
 */
proto.apollo.hdmap.PNCJunction.prototype.getPassageGroupList = function() {
  return /** @type{!Array<!proto.apollo.hdmap.PassageGroup>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.apollo.hdmap.PassageGroup, 4));
};


/**
 * @param {!Array<!proto.apollo.hdmap.PassageGroup>} value
 * @return {!proto.apollo.hdmap.PNCJunction} returns this
*/
proto.apollo.hdmap.PNCJunction.prototype.setPassageGroupList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.apollo.hdmap.PassageGroup=} opt_value
 * @param {number=} opt_index
 * @return {!proto.apollo.hdmap.PassageGroup}
 */
proto.apollo.hdmap.PNCJunction.prototype.addPassageGroup = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.apollo.hdmap.PassageGroup, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.hdmap.PNCJunction} returns this
 */
proto.apollo.hdmap.PNCJunction.prototype.clearPassageGroupList = function() {
  return this.setPassageGroupList([]);
};


