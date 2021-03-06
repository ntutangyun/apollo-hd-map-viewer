// source: modules/common/proto/drive_event.proto
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

goog.provide('proto.apollo.common.DriveEvent');
goog.provide('proto.apollo.common.DriveEvent.Type');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.apollo.common.Header');
goog.require('proto.apollo.localization.Pose');

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
proto.apollo.common.DriveEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.apollo.common.DriveEvent.repeatedFields_, null);
};
goog.inherits(proto.apollo.common.DriveEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.common.DriveEvent.displayName = 'proto.apollo.common.DriveEvent';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.apollo.common.DriveEvent.repeatedFields_ = [4];



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
proto.apollo.common.DriveEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.common.DriveEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.common.DriveEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.common.DriveEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.apollo.common.Header.toObject(includeInstance, f),
    event: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    location: (f = msg.getLocation()) && proto.apollo.localization.Pose.toObject(includeInstance, f),
    typeList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    isReportable: (f = jspb.Message.getBooleanField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of DriveEvent as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.common.DriveEvent.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.header;

  /** @type {?|undefined} */
  this.event;

  /** @type {?|undefined} */
  this.location;

  /** @type {?|undefined} */
  this.typeList;

  /** @type {?|undefined} */
  this.isReportable;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.common.DriveEvent.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.common.DriveEvent}
 */
proto.apollo.common.DriveEvent.fromObject = function(obj) {
  var msg = new proto.apollo.common.DriveEvent();
  obj.header && jspb.Message.setWrapperField(
      msg, 1, proto.apollo.common.Header.fromObject(obj.header));
  obj.event != null && jspb.Message.setField(msg, 2, obj.event);
  obj.location && jspb.Message.setWrapperField(
      msg, 3, proto.apollo.localization.Pose.fromObject(obj.location));
  obj.typeList != null && jspb.Message.setField(msg, 4, obj.typeList);
  obj.isReportable != null && jspb.Message.setField(msg, 5, obj.isReportable);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.common.DriveEvent}
 */
proto.apollo.common.DriveEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.common.DriveEvent;
  return proto.apollo.common.DriveEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.common.DriveEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.common.DriveEvent}
 */
proto.apollo.common.DriveEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.apollo.common.Header;
      reader.readMessage(value,proto.apollo.common.Header.deserializeBinaryFromReader);
      msg.setHeader(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEvent(value);
      break;
    case 3:
      var value = new proto.apollo.localization.Pose;
      reader.readMessage(value,proto.apollo.localization.Pose.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    case 4:
      var values = /** @type {!Array<!proto.apollo.common.DriveEvent.Type>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addType(values[i]);
      }
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsReportable(value);
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
proto.apollo.common.DriveEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.common.DriveEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.common.DriveEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.common.DriveEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.apollo.common.Header.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.apollo.localization.Pose.serializeBinaryToWriter
    );
  }
  f = message.getTypeList();
  if (f.length > 0) {
    writer.writeRepeatedEnum(
      4,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.apollo.common.DriveEvent.Type = {
  CRITICAL: 0,
  PROBLEM: 1,
  DESIRED: 2,
  OUT_OF_SCOPE: 3
};

/**
 * optional Header header = 1;
 * @return {?proto.apollo.common.Header}
 */
proto.apollo.common.DriveEvent.prototype.getHeader = function() {
  return /** @type{?proto.apollo.common.Header} */ (
    jspb.Message.getWrapperField(this, proto.apollo.common.Header, 1));
};


/**
 * @param {?proto.apollo.common.Header|undefined} value
 * @return {!proto.apollo.common.DriveEvent} returns this
*/
proto.apollo.common.DriveEvent.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.common.DriveEvent} returns this
 */
proto.apollo.common.DriveEvent.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.common.DriveEvent.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string event = 2;
 * @return {string}
 */
proto.apollo.common.DriveEvent.prototype.getEvent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.apollo.common.DriveEvent} returns this
 */
proto.apollo.common.DriveEvent.prototype.setEvent = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.common.DriveEvent} returns this
 */
proto.apollo.common.DriveEvent.prototype.clearEvent = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.common.DriveEvent.prototype.hasEvent = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional apollo.localization.Pose location = 3;
 * @return {?proto.apollo.localization.Pose}
 */
proto.apollo.common.DriveEvent.prototype.getLocation = function() {
  return /** @type{?proto.apollo.localization.Pose} */ (
    jspb.Message.getWrapperField(this, proto.apollo.localization.Pose, 3));
};


/**
 * @param {?proto.apollo.localization.Pose|undefined} value
 * @return {!proto.apollo.common.DriveEvent} returns this
*/
proto.apollo.common.DriveEvent.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.common.DriveEvent} returns this
 */
proto.apollo.common.DriveEvent.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.common.DriveEvent.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated Type type = 4;
 * @return {!Array<!proto.apollo.common.DriveEvent.Type>}
 */
proto.apollo.common.DriveEvent.prototype.getTypeList = function() {
  return /** @type {!Array<!proto.apollo.common.DriveEvent.Type>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<!proto.apollo.common.DriveEvent.Type>} value
 * @return {!proto.apollo.common.DriveEvent} returns this
 */
proto.apollo.common.DriveEvent.prototype.setTypeList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {!proto.apollo.common.DriveEvent.Type} value
 * @param {number=} opt_index
 * @return {!proto.apollo.common.DriveEvent} returns this
 */
proto.apollo.common.DriveEvent.prototype.addType = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.common.DriveEvent} returns this
 */
proto.apollo.common.DriveEvent.prototype.clearTypeList = function() {
  return this.setTypeList([]);
};


/**
 * optional bool is_reportable = 5;
 * @return {boolean}
 */
proto.apollo.common.DriveEvent.prototype.getIsReportable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.common.DriveEvent} returns this
 */
proto.apollo.common.DriveEvent.prototype.setIsReportable = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.common.DriveEvent} returns this
 */
proto.apollo.common.DriveEvent.prototype.clearIsReportable = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.common.DriveEvent.prototype.hasIsReportable = function() {
  return jspb.Message.getField(this, 5) != null;
};


