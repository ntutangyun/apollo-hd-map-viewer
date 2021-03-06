// source: modules/map/proto/map_road.proto
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

goog.provide('proto.apollo.hdmap.Road');
goog.provide('proto.apollo.hdmap.Road.Type');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.apollo.hdmap.Id');
goog.require('proto.apollo.hdmap.RoadSection');

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
proto.apollo.hdmap.Road = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.apollo.hdmap.Road.repeatedFields_, null);
};
goog.inherits(proto.apollo.hdmap.Road, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.hdmap.Road.displayName = 'proto.apollo.hdmap.Road';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.apollo.hdmap.Road.repeatedFields_ = [2];



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
proto.apollo.hdmap.Road.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.hdmap.Road.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.hdmap.Road} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.hdmap.Road.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = msg.getId()) && proto.apollo.hdmap.Id.toObject(includeInstance, f),
    sectionList: jspb.Message.toObjectList(msg.getSectionList(),
    proto.apollo.hdmap.RoadSection.toObject, includeInstance),
    junctionId: (f = msg.getJunctionId()) && proto.apollo.hdmap.Id.toObject(includeInstance, f),
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
 * The raw object form of Road as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.hdmap.Road.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.id;

  /** @type {?|undefined} */
  this.sectionList;

  /** @type {?|undefined} */
  this.junctionId;

  /** @type {?|undefined} */
  this.type;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.hdmap.Road.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.hdmap.Road}
 */
proto.apollo.hdmap.Road.fromObject = function(obj) {
  var msg = new proto.apollo.hdmap.Road();
  obj.id && jspb.Message.setWrapperField(
      msg, 1, proto.apollo.hdmap.Id.fromObject(obj.id));
  obj.sectionList && jspb.Message.setRepeatedWrapperField(
      msg, 2, obj.sectionList.map(
          proto.apollo.hdmap.RoadSection.fromObject));
  obj.junctionId && jspb.Message.setWrapperField(
      msg, 3, proto.apollo.hdmap.Id.fromObject(obj.junctionId));
  obj.type != null && jspb.Message.setField(msg, 4, obj.type);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.hdmap.Road}
 */
proto.apollo.hdmap.Road.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.hdmap.Road;
  return proto.apollo.hdmap.Road.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.hdmap.Road} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.hdmap.Road}
 */
proto.apollo.hdmap.Road.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.apollo.hdmap.RoadSection;
      reader.readMessage(value,proto.apollo.hdmap.RoadSection.deserializeBinaryFromReader);
      msg.addSection(value);
      break;
    case 3:
      var value = new proto.apollo.hdmap.Id;
      reader.readMessage(value,proto.apollo.hdmap.Id.deserializeBinaryFromReader);
      msg.setJunctionId(value);
      break;
    case 4:
      var value = /** @type {!proto.apollo.hdmap.Road.Type} */ (reader.readEnum());
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
proto.apollo.hdmap.Road.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.hdmap.Road.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.hdmap.Road} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.hdmap.Road.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.apollo.hdmap.Id.serializeBinaryToWriter
    );
  }
  f = message.getSectionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.apollo.hdmap.RoadSection.serializeBinaryToWriter
    );
  }
  f = message.getJunctionId();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.apollo.hdmap.Id.serializeBinaryToWriter
    );
  }
  f = /** @type {!proto.apollo.hdmap.Road.Type} */ (jspb.Message.getField(message, 4));
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
proto.apollo.hdmap.Road.Type = {
  UNKNOWN: 0,
  HIGHWAY: 1,
  CITY_ROAD: 2,
  PARK: 3
};

/**
 * optional Id id = 1;
 * @return {?proto.apollo.hdmap.Id}
 */
proto.apollo.hdmap.Road.prototype.getId = function() {
  return /** @type{?proto.apollo.hdmap.Id} */ (
    jspb.Message.getWrapperField(this, proto.apollo.hdmap.Id, 1));
};


/**
 * @param {?proto.apollo.hdmap.Id|undefined} value
 * @return {!proto.apollo.hdmap.Road} returns this
*/
proto.apollo.hdmap.Road.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.hdmap.Road} returns this
 */
proto.apollo.hdmap.Road.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.hdmap.Road.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated RoadSection section = 2;
 * @return {!Array<!proto.apollo.hdmap.RoadSection>}
 */
proto.apollo.hdmap.Road.prototype.getSectionList = function() {
  return /** @type{!Array<!proto.apollo.hdmap.RoadSection>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.apollo.hdmap.RoadSection, 2));
};


/**
 * @param {!Array<!proto.apollo.hdmap.RoadSection>} value
 * @return {!proto.apollo.hdmap.Road} returns this
*/
proto.apollo.hdmap.Road.prototype.setSectionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.apollo.hdmap.RoadSection=} opt_value
 * @param {number=} opt_index
 * @return {!proto.apollo.hdmap.RoadSection}
 */
proto.apollo.hdmap.Road.prototype.addSection = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.apollo.hdmap.RoadSection, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.hdmap.Road} returns this
 */
proto.apollo.hdmap.Road.prototype.clearSectionList = function() {
  return this.setSectionList([]);
};


/**
 * optional Id junction_id = 3;
 * @return {?proto.apollo.hdmap.Id}
 */
proto.apollo.hdmap.Road.prototype.getJunctionId = function() {
  return /** @type{?proto.apollo.hdmap.Id} */ (
    jspb.Message.getWrapperField(this, proto.apollo.hdmap.Id, 3));
};


/**
 * @param {?proto.apollo.hdmap.Id|undefined} value
 * @return {!proto.apollo.hdmap.Road} returns this
*/
proto.apollo.hdmap.Road.prototype.setJunctionId = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.hdmap.Road} returns this
 */
proto.apollo.hdmap.Road.prototype.clearJunctionId = function() {
  return this.setJunctionId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.hdmap.Road.prototype.hasJunctionId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Type type = 4;
 * @return {!proto.apollo.hdmap.Road.Type}
 */
proto.apollo.hdmap.Road.prototype.getType = function() {
  return /** @type {!proto.apollo.hdmap.Road.Type} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.apollo.hdmap.Road.Type} value
 * @return {!proto.apollo.hdmap.Road} returns this
 */
proto.apollo.hdmap.Road.prototype.setType = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.hdmap.Road} returns this
 */
proto.apollo.hdmap.Road.prototype.clearType = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.hdmap.Road.prototype.hasType = function() {
  return jspb.Message.getField(this, 4) != null;
};


