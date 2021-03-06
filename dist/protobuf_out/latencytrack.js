// source: modules/common/latency_recorder/proto/latency_record.proto
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

goog.provide('proto.apollo.common.LatencyTrack');
goog.provide('proto.apollo.common.LatencyTrack.LatencyTrackMessage');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.apollo.common.LatencyStat');

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
proto.apollo.common.LatencyTrack = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.apollo.common.LatencyTrack.repeatedFields_, null);
};
goog.inherits(proto.apollo.common.LatencyTrack, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.common.LatencyTrack.displayName = 'proto.apollo.common.LatencyTrack';
}
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
proto.apollo.common.LatencyTrack.LatencyTrackMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.common.LatencyTrack.LatencyTrackMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.common.LatencyTrack.LatencyTrackMessage.displayName = 'proto.apollo.common.LatencyTrack.LatencyTrackMessage';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.apollo.common.LatencyTrack.repeatedFields_ = [1];



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
proto.apollo.common.LatencyTrack.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.common.LatencyTrack.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.common.LatencyTrack} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.common.LatencyTrack.toObject = function(includeInstance, msg) {
  var f, obj = {
    latencyTrackList: jspb.Message.toObjectList(msg.getLatencyTrackList(),
    proto.apollo.common.LatencyTrack.LatencyTrackMessage.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of LatencyTrack as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.common.LatencyTrack.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.latencyTrackList;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.common.LatencyTrack.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.common.LatencyTrack}
 */
proto.apollo.common.LatencyTrack.fromObject = function(obj) {
  var msg = new proto.apollo.common.LatencyTrack();
  obj.latencyTrackList && jspb.Message.setRepeatedWrapperField(
      msg, 1, obj.latencyTrackList.map(
          proto.apollo.common.LatencyTrack.LatencyTrackMessage.fromObject));
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.common.LatencyTrack}
 */
proto.apollo.common.LatencyTrack.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.common.LatencyTrack;
  return proto.apollo.common.LatencyTrack.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.common.LatencyTrack} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.common.LatencyTrack}
 */
proto.apollo.common.LatencyTrack.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.apollo.common.LatencyTrack.LatencyTrackMessage;
      reader.readMessage(value,proto.apollo.common.LatencyTrack.LatencyTrackMessage.deserializeBinaryFromReader);
      msg.addLatencyTrack(value);
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
proto.apollo.common.LatencyTrack.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.common.LatencyTrack.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.common.LatencyTrack} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.common.LatencyTrack.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLatencyTrackList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.apollo.common.LatencyTrack.LatencyTrackMessage.serializeBinaryToWriter
    );
  }
};





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
proto.apollo.common.LatencyTrack.LatencyTrackMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.common.LatencyTrack.LatencyTrackMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.common.LatencyTrack.LatencyTrackMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.common.LatencyTrack.LatencyTrackMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    latencyName: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    latencyStat: (f = msg.getLatencyStat()) && proto.apollo.common.LatencyStat.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of LatencyTrackMessage as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.common.LatencyTrack.LatencyTrackMessage.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.latencyName;

  /** @type {?|undefined} */
  this.latencyStat;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.common.LatencyTrack.LatencyTrackMessage.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.common.LatencyTrack.LatencyTrackMessage}
 */
proto.apollo.common.LatencyTrack.LatencyTrackMessage.fromObject = function(obj) {
  var msg = new proto.apollo.common.LatencyTrack.LatencyTrackMessage();
  obj.latencyName != null && jspb.Message.setField(msg, 1, obj.latencyName);
  obj.latencyStat && jspb.Message.setWrapperField(
      msg, 2, proto.apollo.common.LatencyStat.fromObject(obj.latencyStat));
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.common.LatencyTrack.LatencyTrackMessage}
 */
proto.apollo.common.LatencyTrack.LatencyTrackMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.common.LatencyTrack.LatencyTrackMessage;
  return proto.apollo.common.LatencyTrack.LatencyTrackMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.common.LatencyTrack.LatencyTrackMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.common.LatencyTrack.LatencyTrackMessage}
 */
proto.apollo.common.LatencyTrack.LatencyTrackMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLatencyName(value);
      break;
    case 2:
      var value = new proto.apollo.common.LatencyStat;
      reader.readMessage(value,proto.apollo.common.LatencyStat.deserializeBinaryFromReader);
      msg.setLatencyStat(value);
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
proto.apollo.common.LatencyTrack.LatencyTrackMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.common.LatencyTrack.LatencyTrackMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.common.LatencyTrack.LatencyTrackMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.common.LatencyTrack.LatencyTrackMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLatencyStat();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.apollo.common.LatencyStat.serializeBinaryToWriter
    );
  }
};


/**
 * optional string latency_name = 1;
 * @return {string}
 */
proto.apollo.common.LatencyTrack.LatencyTrackMessage.prototype.getLatencyName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.apollo.common.LatencyTrack.LatencyTrackMessage} returns this
 */
proto.apollo.common.LatencyTrack.LatencyTrackMessage.prototype.setLatencyName = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.common.LatencyTrack.LatencyTrackMessage} returns this
 */
proto.apollo.common.LatencyTrack.LatencyTrackMessage.prototype.clearLatencyName = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.common.LatencyTrack.LatencyTrackMessage.prototype.hasLatencyName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional LatencyStat latency_stat = 2;
 * @return {?proto.apollo.common.LatencyStat}
 */
proto.apollo.common.LatencyTrack.LatencyTrackMessage.prototype.getLatencyStat = function() {
  return /** @type{?proto.apollo.common.LatencyStat} */ (
    jspb.Message.getWrapperField(this, proto.apollo.common.LatencyStat, 2));
};


/**
 * @param {?proto.apollo.common.LatencyStat|undefined} value
 * @return {!proto.apollo.common.LatencyTrack.LatencyTrackMessage} returns this
*/
proto.apollo.common.LatencyTrack.LatencyTrackMessage.prototype.setLatencyStat = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.common.LatencyTrack.LatencyTrackMessage} returns this
 */
proto.apollo.common.LatencyTrack.LatencyTrackMessage.prototype.clearLatencyStat = function() {
  return this.setLatencyStat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.common.LatencyTrack.LatencyTrackMessage.prototype.hasLatencyStat = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated LatencyTrackMessage latency_track = 1;
 * @return {!Array<!proto.apollo.common.LatencyTrack.LatencyTrackMessage>}
 */
proto.apollo.common.LatencyTrack.prototype.getLatencyTrackList = function() {
  return /** @type{!Array<!proto.apollo.common.LatencyTrack.LatencyTrackMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.apollo.common.LatencyTrack.LatencyTrackMessage, 1));
};


/**
 * @param {!Array<!proto.apollo.common.LatencyTrack.LatencyTrackMessage>} value
 * @return {!proto.apollo.common.LatencyTrack} returns this
*/
proto.apollo.common.LatencyTrack.prototype.setLatencyTrackList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.apollo.common.LatencyTrack.LatencyTrackMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.apollo.common.LatencyTrack.LatencyTrackMessage}
 */
proto.apollo.common.LatencyTrack.prototype.addLatencyTrack = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.apollo.common.LatencyTrack.LatencyTrackMessage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.common.LatencyTrack} returns this
 */
proto.apollo.common.LatencyTrack.prototype.clearLatencyTrackList = function() {
  return this.setLatencyTrackList([]);
};


