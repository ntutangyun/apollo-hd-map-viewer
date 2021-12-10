// source: modules/map/proto/map_overlap.proto
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

goog.provide('proto.apollo.hdmap.Overlap');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.apollo.hdmap.Id');
goog.require('proto.apollo.hdmap.ObjectOverlapInfo');
goog.require('proto.apollo.hdmap.RegionOverlapInfo');

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
proto.apollo.hdmap.Overlap = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.apollo.hdmap.Overlap.repeatedFields_, null);
};
goog.inherits(proto.apollo.hdmap.Overlap, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.hdmap.Overlap.displayName = 'proto.apollo.hdmap.Overlap';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.apollo.hdmap.Overlap.repeatedFields_ = [2,3];



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
proto.apollo.hdmap.Overlap.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.hdmap.Overlap.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.hdmap.Overlap} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.hdmap.Overlap.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = msg.getId()) && proto.apollo.hdmap.Id.toObject(includeInstance, f),
    objectList: jspb.Message.toObjectList(msg.getObjectList(),
    proto.apollo.hdmap.ObjectOverlapInfo.toObject, includeInstance),
    regionOverlapList: jspb.Message.toObjectList(msg.getRegionOverlapList(),
    proto.apollo.hdmap.RegionOverlapInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Overlap as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.hdmap.Overlap.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.id;

  /** @type {?|undefined} */
  this.objectList;

  /** @type {?|undefined} */
  this.regionOverlapList;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.hdmap.Overlap.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.hdmap.Overlap}
 */
proto.apollo.hdmap.Overlap.fromObject = function(obj) {
  var msg = new proto.apollo.hdmap.Overlap();
  obj.id && jspb.Message.setWrapperField(
      msg, 1, proto.apollo.hdmap.Id.fromObject(obj.id));
  obj.objectList && jspb.Message.setRepeatedWrapperField(
      msg, 2, obj.objectList.map(
          proto.apollo.hdmap.ObjectOverlapInfo.fromObject));
  obj.regionOverlapList && jspb.Message.setRepeatedWrapperField(
      msg, 3, obj.regionOverlapList.map(
          proto.apollo.hdmap.RegionOverlapInfo.fromObject));
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.hdmap.Overlap}
 */
proto.apollo.hdmap.Overlap.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.hdmap.Overlap;
  return proto.apollo.hdmap.Overlap.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.hdmap.Overlap} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.hdmap.Overlap}
 */
proto.apollo.hdmap.Overlap.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.apollo.hdmap.ObjectOverlapInfo;
      reader.readMessage(value,proto.apollo.hdmap.ObjectOverlapInfo.deserializeBinaryFromReader);
      msg.addObject(value);
      break;
    case 3:
      var value = new proto.apollo.hdmap.RegionOverlapInfo;
      reader.readMessage(value,proto.apollo.hdmap.RegionOverlapInfo.deserializeBinaryFromReader);
      msg.addRegionOverlap(value);
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
proto.apollo.hdmap.Overlap.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.hdmap.Overlap.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.hdmap.Overlap} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.hdmap.Overlap.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.apollo.hdmap.Id.serializeBinaryToWriter
    );
  }
  f = message.getObjectList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.apollo.hdmap.ObjectOverlapInfo.serializeBinaryToWriter
    );
  }
  f = message.getRegionOverlapList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.apollo.hdmap.RegionOverlapInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional Id id = 1;
 * @return {?proto.apollo.hdmap.Id}
 */
proto.apollo.hdmap.Overlap.prototype.getId = function() {
  return /** @type{?proto.apollo.hdmap.Id} */ (
    jspb.Message.getWrapperField(this, proto.apollo.hdmap.Id, 1));
};


/**
 * @param {?proto.apollo.hdmap.Id|undefined} value
 * @return {!proto.apollo.hdmap.Overlap} returns this
*/
proto.apollo.hdmap.Overlap.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.hdmap.Overlap} returns this
 */
proto.apollo.hdmap.Overlap.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.hdmap.Overlap.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated ObjectOverlapInfo object = 2;
 * @return {!Array<!proto.apollo.hdmap.ObjectOverlapInfo>}
 */
proto.apollo.hdmap.Overlap.prototype.getObjectList = function() {
  return /** @type{!Array<!proto.apollo.hdmap.ObjectOverlapInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.apollo.hdmap.ObjectOverlapInfo, 2));
};


/**
 * @param {!Array<!proto.apollo.hdmap.ObjectOverlapInfo>} value
 * @return {!proto.apollo.hdmap.Overlap} returns this
*/
proto.apollo.hdmap.Overlap.prototype.setObjectList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.apollo.hdmap.ObjectOverlapInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.apollo.hdmap.ObjectOverlapInfo}
 */
proto.apollo.hdmap.Overlap.prototype.addObject = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.apollo.hdmap.ObjectOverlapInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.hdmap.Overlap} returns this
 */
proto.apollo.hdmap.Overlap.prototype.clearObjectList = function() {
  return this.setObjectList([]);
};


/**
 * repeated RegionOverlapInfo region_overlap = 3;
 * @return {!Array<!proto.apollo.hdmap.RegionOverlapInfo>}
 */
proto.apollo.hdmap.Overlap.prototype.getRegionOverlapList = function() {
  return /** @type{!Array<!proto.apollo.hdmap.RegionOverlapInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.apollo.hdmap.RegionOverlapInfo, 3));
};


/**
 * @param {!Array<!proto.apollo.hdmap.RegionOverlapInfo>} value
 * @return {!proto.apollo.hdmap.Overlap} returns this
*/
proto.apollo.hdmap.Overlap.prototype.setRegionOverlapList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.apollo.hdmap.RegionOverlapInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.apollo.hdmap.RegionOverlapInfo}
 */
proto.apollo.hdmap.Overlap.prototype.addRegionOverlap = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.apollo.hdmap.RegionOverlapInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.hdmap.Overlap} returns this
 */
proto.apollo.hdmap.Overlap.prototype.clearRegionOverlapList = function() {
  return this.setRegionOverlapList([]);
};


