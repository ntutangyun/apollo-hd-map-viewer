// source: modules/map/relative_map/proto/navigation.proto
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

goog.provide('proto.apollo.relative_map.MapMsg');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Map');
goog.require('jspb.Message');
goog.require('proto.apollo.common.Header');
goog.require('proto.apollo.hdmap.Map');
goog.require('proto.apollo.localization.LocalizationEstimate');
goog.require('proto.apollo.perception.LaneMarkers');
goog.require('proto.apollo.relative_map.NavigationPath');

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
proto.apollo.relative_map.MapMsg = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.relative_map.MapMsg, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.relative_map.MapMsg.displayName = 'proto.apollo.relative_map.MapMsg';
}



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
proto.apollo.relative_map.MapMsg.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.relative_map.MapMsg.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.relative_map.MapMsg} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.relative_map.MapMsg.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.apollo.common.Header.toObject(includeInstance, f),
    hdmap: (f = msg.getHdmap()) && proto.apollo.hdmap.Map.toObject(includeInstance, f),
    navigationPathMap: (f = msg.getNavigationPathMap()) ? f.toObject(includeInstance, proto.apollo.relative_map.NavigationPath.toObject) : [],
    laneMarker: (f = msg.getLaneMarker()) && proto.apollo.perception.LaneMarkers.toObject(includeInstance, f),
    localization: (f = msg.getLocalization()) && proto.apollo.localization.LocalizationEstimate.toObject(includeInstance, f)
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
 * @return {!proto.apollo.relative_map.MapMsg}
 */
proto.apollo.relative_map.MapMsg.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.relative_map.MapMsg;
  return proto.apollo.relative_map.MapMsg.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.relative_map.MapMsg} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.relative_map.MapMsg}
 */
proto.apollo.relative_map.MapMsg.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.apollo.hdmap.Map;
      reader.readMessage(value,proto.apollo.hdmap.Map.deserializeBinaryFromReader);
      msg.setHdmap(value);
      break;
    case 3:
      var value = msg.getNavigationPathMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.apollo.relative_map.NavigationPath.deserializeBinaryFromReader, "", new proto.apollo.relative_map.NavigationPath());
         });
      break;
    case 4:
      var value = new proto.apollo.perception.LaneMarkers;
      reader.readMessage(value,proto.apollo.perception.LaneMarkers.deserializeBinaryFromReader);
      msg.setLaneMarker(value);
      break;
    case 5:
      var value = new proto.apollo.localization.LocalizationEstimate;
      reader.readMessage(value,proto.apollo.localization.LocalizationEstimate.deserializeBinaryFromReader);
      msg.setLocalization(value);
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
proto.apollo.relative_map.MapMsg.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.relative_map.MapMsg.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.relative_map.MapMsg} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.relative_map.MapMsg.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.apollo.common.Header.serializeBinaryToWriter
    );
  }
  f = message.getHdmap();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.apollo.hdmap.Map.serializeBinaryToWriter
    );
  }
  f = message.getNavigationPathMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.apollo.relative_map.NavigationPath.serializeBinaryToWriter);
  }
  f = message.getLaneMarker();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.apollo.perception.LaneMarkers.serializeBinaryToWriter
    );
  }
  f = message.getLocalization();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.apollo.localization.LocalizationEstimate.serializeBinaryToWriter
    );
  }
};


/**
 * optional apollo.common.Header header = 1;
 * @return {?proto.apollo.common.Header}
 */
proto.apollo.relative_map.MapMsg.prototype.getHeader = function() {
  return /** @type{?proto.apollo.common.Header} */ (
    jspb.Message.getWrapperField(this, proto.apollo.common.Header, 1));
};


/**
 * @param {?proto.apollo.common.Header|undefined} value
 * @return {!proto.apollo.relative_map.MapMsg} returns this
*/
proto.apollo.relative_map.MapMsg.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.relative_map.MapMsg} returns this
 */
proto.apollo.relative_map.MapMsg.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.relative_map.MapMsg.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional apollo.hdmap.Map hdmap = 2;
 * @return {?proto.apollo.hdmap.Map}
 */
proto.apollo.relative_map.MapMsg.prototype.getHdmap = function() {
  return /** @type{?proto.apollo.hdmap.Map} */ (
    jspb.Message.getWrapperField(this, proto.apollo.hdmap.Map, 2));
};


/**
 * @param {?proto.apollo.hdmap.Map|undefined} value
 * @return {!proto.apollo.relative_map.MapMsg} returns this
*/
proto.apollo.relative_map.MapMsg.prototype.setHdmap = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.relative_map.MapMsg} returns this
 */
proto.apollo.relative_map.MapMsg.prototype.clearHdmap = function() {
  return this.setHdmap(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.relative_map.MapMsg.prototype.hasHdmap = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * map<string, NavigationPath> navigation_path = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.apollo.relative_map.NavigationPath>}
 */
proto.apollo.relative_map.MapMsg.prototype.getNavigationPathMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.apollo.relative_map.NavigationPath>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      proto.apollo.relative_map.NavigationPath));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.apollo.relative_map.MapMsg} returns this
 */
proto.apollo.relative_map.MapMsg.prototype.clearNavigationPathMap = function() {
  this.getNavigationPathMap().clear();
  return this;};


/**
 * optional apollo.perception.LaneMarkers lane_marker = 4;
 * @return {?proto.apollo.perception.LaneMarkers}
 */
proto.apollo.relative_map.MapMsg.prototype.getLaneMarker = function() {
  return /** @type{?proto.apollo.perception.LaneMarkers} */ (
    jspb.Message.getWrapperField(this, proto.apollo.perception.LaneMarkers, 4));
};


/**
 * @param {?proto.apollo.perception.LaneMarkers|undefined} value
 * @return {!proto.apollo.relative_map.MapMsg} returns this
*/
proto.apollo.relative_map.MapMsg.prototype.setLaneMarker = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.relative_map.MapMsg} returns this
 */
proto.apollo.relative_map.MapMsg.prototype.clearLaneMarker = function() {
  return this.setLaneMarker(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.relative_map.MapMsg.prototype.hasLaneMarker = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional apollo.localization.LocalizationEstimate localization = 5;
 * @return {?proto.apollo.localization.LocalizationEstimate}
 */
proto.apollo.relative_map.MapMsg.prototype.getLocalization = function() {
  return /** @type{?proto.apollo.localization.LocalizationEstimate} */ (
    jspb.Message.getWrapperField(this, proto.apollo.localization.LocalizationEstimate, 5));
};


/**
 * @param {?proto.apollo.localization.LocalizationEstimate|undefined} value
 * @return {!proto.apollo.relative_map.MapMsg} returns this
*/
proto.apollo.relative_map.MapMsg.prototype.setLocalization = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.relative_map.MapMsg} returns this
 */
proto.apollo.relative_map.MapMsg.prototype.clearLocalization = function() {
  return this.setLocalization(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.relative_map.MapMsg.prototype.hasLocalization = function() {
  return jspb.Message.getField(this, 5) != null;
};


