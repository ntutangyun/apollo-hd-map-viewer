// source: modules/dreamview/proto/chart.proto
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

goog.provide('proto.apollo.dreamview.Car');

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
proto.apollo.dreamview.Car = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.dreamview.Car, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.dreamview.Car.displayName = 'proto.apollo.dreamview.Car';
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
proto.apollo.dreamview.Car.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.dreamview.Car.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.dreamview.Car} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.dreamview.Car.toObject = function(includeInstance, msg) {
  var f, obj = {
    label: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    hideLabelInLegend: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    x: (f = jspb.Message.getOptionalFloatingPointField(msg, 3)) == null ? undefined : f,
    y: (f = jspb.Message.getOptionalFloatingPointField(msg, 4)) == null ? undefined : f,
    heading: (f = jspb.Message.getOptionalFloatingPointField(msg, 5)) == null ? undefined : f,
    color: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Car as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.dreamview.Car.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.label;

  /** @type {?|undefined} */
  this.hideLabelInLegend;

  /** @type {?|undefined} */
  this.x;

  /** @type {?|undefined} */
  this.y;

  /** @type {?|undefined} */
  this.heading;

  /** @type {?|undefined} */
  this.color;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.dreamview.Car.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.dreamview.Car}
 */
proto.apollo.dreamview.Car.fromObject = function(obj) {
  var msg = new proto.apollo.dreamview.Car();
  obj.label != null && jspb.Message.setField(msg, 1, obj.label);
  obj.hideLabelInLegend != null && jspb.Message.setField(msg, 2, obj.hideLabelInLegend);
  obj.x != null && jspb.Message.setField(msg, 3, obj.x);
  obj.y != null && jspb.Message.setField(msg, 4, obj.y);
  obj.heading != null && jspb.Message.setField(msg, 5, obj.heading);
  obj.color != null && jspb.Message.setField(msg, 6, obj.color);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.dreamview.Car}
 */
proto.apollo.dreamview.Car.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.dreamview.Car;
  return proto.apollo.dreamview.Car.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.dreamview.Car} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.dreamview.Car}
 */
proto.apollo.dreamview.Car.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLabel(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHideLabelInLegend(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setX(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setY(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setHeading(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setColor(value);
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
proto.apollo.dreamview.Car.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.dreamview.Car.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.dreamview.Car} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.dreamview.Car.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBool(
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
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string label = 1;
 * @return {string}
 */
proto.apollo.dreamview.Car.prototype.getLabel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.apollo.dreamview.Car} returns this
 */
proto.apollo.dreamview.Car.prototype.setLabel = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.dreamview.Car} returns this
 */
proto.apollo.dreamview.Car.prototype.clearLabel = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.dreamview.Car.prototype.hasLabel = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool hide_label_in_legend = 2;
 * @return {boolean}
 */
proto.apollo.dreamview.Car.prototype.getHideLabelInLegend = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.dreamview.Car} returns this
 */
proto.apollo.dreamview.Car.prototype.setHideLabelInLegend = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.dreamview.Car} returns this
 */
proto.apollo.dreamview.Car.prototype.clearHideLabelInLegend = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.dreamview.Car.prototype.hasHideLabelInLegend = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional double x = 3;
 * @return {number}
 */
proto.apollo.dreamview.Car.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.dreamview.Car} returns this
 */
proto.apollo.dreamview.Car.prototype.setX = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.dreamview.Car} returns this
 */
proto.apollo.dreamview.Car.prototype.clearX = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.dreamview.Car.prototype.hasX = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double y = 4;
 * @return {number}
 */
proto.apollo.dreamview.Car.prototype.getY = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.dreamview.Car} returns this
 */
proto.apollo.dreamview.Car.prototype.setY = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.dreamview.Car} returns this
 */
proto.apollo.dreamview.Car.prototype.clearY = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.dreamview.Car.prototype.hasY = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional double heading = 5;
 * @return {number}
 */
proto.apollo.dreamview.Car.prototype.getHeading = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.dreamview.Car} returns this
 */
proto.apollo.dreamview.Car.prototype.setHeading = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.dreamview.Car} returns this
 */
proto.apollo.dreamview.Car.prototype.clearHeading = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.dreamview.Car.prototype.hasHeading = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string color = 6;
 * @return {string}
 */
proto.apollo.dreamview.Car.prototype.getColor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.apollo.dreamview.Car} returns this
 */
proto.apollo.dreamview.Car.prototype.setColor = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.dreamview.Car} returns this
 */
proto.apollo.dreamview.Car.prototype.clearColor = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.dreamview.Car.prototype.hasColor = function() {
  return jspb.Message.getField(this, 6) != null;
};


