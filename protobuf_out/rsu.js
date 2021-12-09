// source: modules/map/proto/map_rsu.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

goog.provide('proto.apollo.hdmap.RSU');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
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
proto.apollo.hdmap.RSU = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.apollo.hdmap.RSU.repeatedFields_, null);
};
goog.inherits(proto.apollo.hdmap.RSU, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.hdmap.RSU.displayName = 'proto.apollo.hdmap.RSU';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.apollo.hdmap.RSU.repeatedFields_ = [3];



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
proto.apollo.hdmap.RSU.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.hdmap.RSU.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.hdmap.RSU} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.hdmap.RSU.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: (f = msg.getId()) && proto.apollo.hdmap.Id.toObject(includeInstance, f),
    junctionId: (f = msg.getJunctionId()) && proto.apollo.hdmap.Id.toObject(includeInstance, f),
    overlapIdList: jspb.Message.toObjectList(msg.getOverlapIdList(),
    proto.apollo.hdmap.Id.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.hdmap.RSU}
 */
proto.apollo.hdmap.RSU.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.hdmap.RSU;
  return proto.apollo.hdmap.RSU.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.hdmap.RSU} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.hdmap.RSU}
 */
proto.apollo.hdmap.RSU.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.apollo.hdmap.Id;
      reader.readMessage(value,proto.apollo.hdmap.Id.deserializeBinaryFromReader);
      msg.setJunctionId(value);
      break;
    case 3:
      var value = new proto.apollo.hdmap.Id;
      reader.readMessage(value,proto.apollo.hdmap.Id.deserializeBinaryFromReader);
      msg.addOverlapId(value);
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
proto.apollo.hdmap.RSU.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.hdmap.RSU.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.hdmap.RSU} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.hdmap.RSU.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.apollo.hdmap.Id.serializeBinaryToWriter
    );
  }
  f = message.getJunctionId();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.apollo.hdmap.Id.serializeBinaryToWriter
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
};


/**
 * optional Id id = 1;
 * @return {?proto.apollo.hdmap.Id}
 */
proto.apollo.hdmap.RSU.prototype.getId = function() {
  return /** @type{?proto.apollo.hdmap.Id} */ (
    jspb.Message.getWrapperField(this, proto.apollo.hdmap.Id, 1));
};


/**
 * @param {?proto.apollo.hdmap.Id|undefined} value
 * @return {!proto.apollo.hdmap.RSU} returns this
*/
proto.apollo.hdmap.RSU.prototype.setId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.hdmap.RSU} returns this
 */
proto.apollo.hdmap.RSU.prototype.clearId = function() {
  return this.setId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.hdmap.RSU.prototype.hasId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Id junction_id = 2;
 * @return {?proto.apollo.hdmap.Id}
 */
proto.apollo.hdmap.RSU.prototype.getJunctionId = function() {
  return /** @type{?proto.apollo.hdmap.Id} */ (
    jspb.Message.getWrapperField(this, proto.apollo.hdmap.Id, 2));
};


/**
 * @param {?proto.apollo.hdmap.Id|undefined} value
 * @return {!proto.apollo.hdmap.RSU} returns this
*/
proto.apollo.hdmap.RSU.prototype.setJunctionId = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.hdmap.RSU} returns this
 */
proto.apollo.hdmap.RSU.prototype.clearJunctionId = function() {
  return this.setJunctionId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.hdmap.RSU.prototype.hasJunctionId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated Id overlap_id = 3;
 * @return {!Array<!proto.apollo.hdmap.Id>}
 */
proto.apollo.hdmap.RSU.prototype.getOverlapIdList = function() {
  return /** @type{!Array<!proto.apollo.hdmap.Id>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.apollo.hdmap.Id, 3));
};


/**
 * @param {!Array<!proto.apollo.hdmap.Id>} value
 * @return {!proto.apollo.hdmap.RSU} returns this
*/
proto.apollo.hdmap.RSU.prototype.setOverlapIdList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.apollo.hdmap.Id=} opt_value
 * @param {number=} opt_index
 * @return {!proto.apollo.hdmap.Id}
 */
proto.apollo.hdmap.RSU.prototype.addOverlapId = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.apollo.hdmap.Id, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.hdmap.RSU} returns this
 */
proto.apollo.hdmap.RSU.prototype.clearOverlapIdList = function() {
  return this.setOverlapIdList([]);
};


