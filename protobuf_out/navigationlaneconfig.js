// source: modules/map/relative_map/proto/relative_map_config.proto
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

goog.provide('proto.apollo.relative_map.NavigationLaneConfig');
goog.provide('proto.apollo.relative_map.NavigationLaneConfig.LaneSource');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');

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
proto.apollo.relative_map.NavigationLaneConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.relative_map.NavigationLaneConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.relative_map.NavigationLaneConfig.displayName = 'proto.apollo.relative_map.NavigationLaneConfig';
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
proto.apollo.relative_map.NavigationLaneConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.relative_map.NavigationLaneConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.relative_map.NavigationLaneConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.relative_map.NavigationLaneConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    minLaneMarkerQuality: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.5),
    laneSource: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    maxLenFromNavigationLine: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 250.0),
    minLenForNavigationLane: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 150.0),
    maxLenForNavigationLane: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 250.0),
    ratioNavigationLaneLenToSpeed: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 8.0),
    maxDistanceToNavigationLine: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 15.0),
    minViewRangeToUseLaneMarker: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.5),
    minLaneHalfWidth: jspb.Message.getFloatingPointFieldWithDefault(msg, 9, 1.5),
    maxLaneHalfWidth: jspb.Message.getFloatingPointFieldWithDefault(msg, 10, 2.0),
    laneMarkerWeight: jspb.Message.getFloatingPointFieldWithDefault(msg, 11, 0.1)
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
 * @return {!proto.apollo.relative_map.NavigationLaneConfig}
 */
proto.apollo.relative_map.NavigationLaneConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.relative_map.NavigationLaneConfig;
  return proto.apollo.relative_map.NavigationLaneConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.relative_map.NavigationLaneConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.relative_map.NavigationLaneConfig}
 */
proto.apollo.relative_map.NavigationLaneConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMinLaneMarkerQuality(value);
      break;
    case 2:
      var value = /** @type {!proto.apollo.relative_map.NavigationLaneConfig.LaneSource} */ (reader.readEnum());
      msg.setLaneSource(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMaxLenFromNavigationLine(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMinLenForNavigationLane(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMaxLenForNavigationLane(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRatioNavigationLaneLenToSpeed(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMaxDistanceToNavigationLine(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMinViewRangeToUseLaneMarker(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMinLaneHalfWidth(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMaxLaneHalfWidth(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLaneMarkerWeight(value);
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
proto.apollo.relative_map.NavigationLaneConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.relative_map.NavigationLaneConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.relative_map.NavigationLaneConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.relative_map.NavigationLaneConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = /** @type {!proto.apollo.relative_map.NavigationLaneConfig.LaneSource} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeDouble(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeDouble(
      8,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeDouble(
      9,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeDouble(
      10,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeDouble(
      11,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.apollo.relative_map.NavigationLaneConfig.LaneSource = {
  PERCEPTION: 1,
  OFFLINE_GENERATED: 2
};

/**
 * optional double min_lane_marker_quality = 1;
 * @return {number}
 */
proto.apollo.relative_map.NavigationLaneConfig.prototype.getMinLaneMarkerQuality = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.5));
};


/**
 * @param {number} value
 * @return {!proto.apollo.relative_map.NavigationLaneConfig} returns this
 */
proto.apollo.relative_map.NavigationLaneConfig.prototype.setMinLaneMarkerQuality = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.relative_map.NavigationLaneConfig} returns this
 */
proto.apollo.relative_map.NavigationLaneConfig.prototype.clearMinLaneMarkerQuality = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.relative_map.NavigationLaneConfig.prototype.hasMinLaneMarkerQuality = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional LaneSource lane_source = 2;
 * @return {!proto.apollo.relative_map.NavigationLaneConfig.LaneSource}
 */
proto.apollo.relative_map.NavigationLaneConfig.prototype.getLaneSource = function() {
  return /** @type {!proto.apollo.relative_map.NavigationLaneConfig.LaneSource} */ (jspb.Message.getFieldWithDefault(this, 2, 1));
};


/**
 * @param {!proto.apollo.relative_map.NavigationLaneConfig.LaneSource} value
 * @return {!proto.apollo.relative_map.NavigationLaneConfig} returns this
 */
proto.apollo.relative_map.NavigationLaneConfig.prototype.setLaneSource = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.relative_map.NavigationLaneConfig} returns this
 */
proto.apollo.relative_map.NavigationLaneConfig.prototype.clearLaneSource = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.relative_map.NavigationLaneConfig.prototype.hasLaneSource = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional double max_len_from_navigation_line = 3;
 * @return {number}
 */
proto.apollo.relative_map.NavigationLaneConfig.prototype.getMaxLenFromNavigationLine = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 250.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.relative_map.NavigationLaneConfig} returns this
 */
proto.apollo.relative_map.NavigationLaneConfig.prototype.setMaxLenFromNavigationLine = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.relative_map.NavigationLaneConfig} returns this
 */
proto.apollo.relative_map.NavigationLaneConfig.prototype.clearMaxLenFromNavigationLine = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.relative_map.NavigationLaneConfig.prototype.hasMaxLenFromNavigationLine = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double min_len_for_navigation_lane = 4;
 * @return {number}
 */
proto.apollo.relative_map.NavigationLaneConfig.prototype.getMinLenForNavigationLane = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 150.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.relative_map.NavigationLaneConfig} returns this
 */
proto.apollo.relative_map.NavigationLaneConfig.prototype.setMinLenForNavigationLane = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.relative_map.NavigationLaneConfig} returns this
 */
proto.apollo.relative_map.NavigationLaneConfig.prototype.clearMinLenForNavigationLane = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.relative_map.NavigationLaneConfig.prototype.hasMinLenForNavigationLane = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional double max_len_for_navigation_lane = 5;
 * @return {number}
 */
proto.apollo.relative_map.NavigationLaneConfig.prototype.getMaxLenForNavigationLane = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 250.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.relative_map.NavigationLaneConfig} returns this
 */
proto.apollo.relative_map.NavigationLaneConfig.prototype.setMaxLenForNavigationLane = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.relative_map.NavigationLaneConfig} returns this
 */
proto.apollo.relative_map.NavigationLaneConfig.prototype.clearMaxLenForNavigationLane = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.relative_map.NavigationLaneConfig.prototype.hasMaxLenForNavigationLane = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional double ratio_navigation_lane_len_to_speed = 6;
 * @return {number}
 */
proto.apollo.relative_map.NavigationLaneConfig.prototype.getRatioNavigationLaneLenToSpeed = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 8.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.relative_map.NavigationLaneConfig} returns this
 */
proto.apollo.relative_map.NavigationLaneConfig.prototype.setRatioNavigationLaneLenToSpeed = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.relative_map.NavigationLaneConfig} returns this
 */
proto.apollo.relative_map.NavigationLaneConfig.prototype.clearRatioNavigationLaneLenToSpeed = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.relative_map.NavigationLaneConfig.prototype.hasRatioNavigationLaneLenToSpeed = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional double max_distance_to_navigation_line = 7;
 * @return {number}
 */
proto.apollo.relative_map.NavigationLaneConfig.prototype.getMaxDistanceToNavigationLine = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 15.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.relative_map.NavigationLaneConfig} returns this
 */
proto.apollo.relative_map.NavigationLaneConfig.prototype.setMaxDistanceToNavigationLine = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.relative_map.NavigationLaneConfig} returns this
 */
proto.apollo.relative_map.NavigationLaneConfig.prototype.clearMaxDistanceToNavigationLine = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.relative_map.NavigationLaneConfig.prototype.hasMaxDistanceToNavigationLine = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional double min_view_range_to_use_lane_marker = 8;
 * @return {number}
 */
proto.apollo.relative_map.NavigationLaneConfig.prototype.getMinViewRangeToUseLaneMarker = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.5));
};


/**
 * @param {number} value
 * @return {!proto.apollo.relative_map.NavigationLaneConfig} returns this
 */
proto.apollo.relative_map.NavigationLaneConfig.prototype.setMinViewRangeToUseLaneMarker = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.relative_map.NavigationLaneConfig} returns this
 */
proto.apollo.relative_map.NavigationLaneConfig.prototype.clearMinViewRangeToUseLaneMarker = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.relative_map.NavigationLaneConfig.prototype.hasMinViewRangeToUseLaneMarker = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional double min_lane_half_width = 9;
 * @return {number}
 */
proto.apollo.relative_map.NavigationLaneConfig.prototype.getMinLaneHalfWidth = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 9, 1.5));
};


/**
 * @param {number} value
 * @return {!proto.apollo.relative_map.NavigationLaneConfig} returns this
 */
proto.apollo.relative_map.NavigationLaneConfig.prototype.setMinLaneHalfWidth = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.relative_map.NavigationLaneConfig} returns this
 */
proto.apollo.relative_map.NavigationLaneConfig.prototype.clearMinLaneHalfWidth = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.relative_map.NavigationLaneConfig.prototype.hasMinLaneHalfWidth = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional double max_lane_half_width = 10;
 * @return {number}
 */
proto.apollo.relative_map.NavigationLaneConfig.prototype.getMaxLaneHalfWidth = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 10, 2.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.relative_map.NavigationLaneConfig} returns this
 */
proto.apollo.relative_map.NavigationLaneConfig.prototype.setMaxLaneHalfWidth = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.relative_map.NavigationLaneConfig} returns this
 */
proto.apollo.relative_map.NavigationLaneConfig.prototype.clearMaxLaneHalfWidth = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.relative_map.NavigationLaneConfig.prototype.hasMaxLaneHalfWidth = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional double lane_marker_weight = 11;
 * @return {number}
 */
proto.apollo.relative_map.NavigationLaneConfig.prototype.getLaneMarkerWeight = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 11, 0.1));
};


/**
 * @param {number} value
 * @return {!proto.apollo.relative_map.NavigationLaneConfig} returns this
 */
proto.apollo.relative_map.NavigationLaneConfig.prototype.setLaneMarkerWeight = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.relative_map.NavigationLaneConfig} returns this
 */
proto.apollo.relative_map.NavigationLaneConfig.prototype.clearLaneMarkerWeight = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.relative_map.NavigationLaneConfig.prototype.hasLaneMarkerWeight = function() {
  return jspb.Message.getField(this, 11) != null;
};


