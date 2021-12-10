// source: modules/dreamview/proto/simulation_world.proto
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

goog.provide('proto.apollo.dreamview.DelaysInMs');

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
proto.apollo.dreamview.DelaysInMs = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.dreamview.DelaysInMs, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.dreamview.DelaysInMs.displayName = 'proto.apollo.dreamview.DelaysInMs';
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
proto.apollo.dreamview.DelaysInMs.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.dreamview.DelaysInMs.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.dreamview.DelaysInMs} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.dreamview.DelaysInMs.toObject = function(includeInstance, msg) {
  var f, obj = {
    chassis: (f = jspb.Message.getOptionalFloatingPointField(msg, 1)) == null ? undefined : f,
    localization: (f = jspb.Message.getOptionalFloatingPointField(msg, 3)) == null ? undefined : f,
    perceptionObstacle: (f = jspb.Message.getOptionalFloatingPointField(msg, 4)) == null ? undefined : f,
    planning: (f = jspb.Message.getOptionalFloatingPointField(msg, 5)) == null ? undefined : f,
    prediction: (f = jspb.Message.getOptionalFloatingPointField(msg, 7)) == null ? undefined : f,
    trafficLight: (f = jspb.Message.getOptionalFloatingPointField(msg, 8)) == null ? undefined : f,
    control: (f = jspb.Message.getOptionalFloatingPointField(msg, 9)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of DelaysInMs as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.dreamview.DelaysInMs.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.chassis;

  /** @type {?|undefined} */
  this.localization;

  /** @type {?|undefined} */
  this.perceptionObstacle;

  /** @type {?|undefined} */
  this.planning;

  /** @type {?|undefined} */
  this.prediction;

  /** @type {?|undefined} */
  this.trafficLight;

  /** @type {?|undefined} */
  this.control;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.dreamview.DelaysInMs.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.dreamview.DelaysInMs}
 */
proto.apollo.dreamview.DelaysInMs.fromObject = function(obj) {
  var msg = new proto.apollo.dreamview.DelaysInMs();
  obj.chassis != null && jspb.Message.setField(msg, 1, obj.chassis);
  obj.localization != null && jspb.Message.setField(msg, 3, obj.localization);
  obj.perceptionObstacle != null && jspb.Message.setField(msg, 4, obj.perceptionObstacle);
  obj.planning != null && jspb.Message.setField(msg, 5, obj.planning);
  obj.prediction != null && jspb.Message.setField(msg, 7, obj.prediction);
  obj.trafficLight != null && jspb.Message.setField(msg, 8, obj.trafficLight);
  obj.control != null && jspb.Message.setField(msg, 9, obj.control);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.dreamview.DelaysInMs}
 */
proto.apollo.dreamview.DelaysInMs.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.dreamview.DelaysInMs;
  return proto.apollo.dreamview.DelaysInMs.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.dreamview.DelaysInMs} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.dreamview.DelaysInMs}
 */
proto.apollo.dreamview.DelaysInMs.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setChassis(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLocalization(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPerceptionObstacle(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPlanning(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPrediction(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTrafficLight(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setControl(value);
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
proto.apollo.dreamview.DelaysInMs.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.dreamview.DelaysInMs.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.dreamview.DelaysInMs} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.dreamview.DelaysInMs.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeDouble(
      1,
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
};


/**
 * optional double chassis = 1;
 * @return {number}
 */
proto.apollo.dreamview.DelaysInMs.prototype.getChassis = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.dreamview.DelaysInMs} returns this
 */
proto.apollo.dreamview.DelaysInMs.prototype.setChassis = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.dreamview.DelaysInMs} returns this
 */
proto.apollo.dreamview.DelaysInMs.prototype.clearChassis = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.dreamview.DelaysInMs.prototype.hasChassis = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double localization = 3;
 * @return {number}
 */
proto.apollo.dreamview.DelaysInMs.prototype.getLocalization = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.dreamview.DelaysInMs} returns this
 */
proto.apollo.dreamview.DelaysInMs.prototype.setLocalization = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.dreamview.DelaysInMs} returns this
 */
proto.apollo.dreamview.DelaysInMs.prototype.clearLocalization = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.dreamview.DelaysInMs.prototype.hasLocalization = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double perception_obstacle = 4;
 * @return {number}
 */
proto.apollo.dreamview.DelaysInMs.prototype.getPerceptionObstacle = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.dreamview.DelaysInMs} returns this
 */
proto.apollo.dreamview.DelaysInMs.prototype.setPerceptionObstacle = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.dreamview.DelaysInMs} returns this
 */
proto.apollo.dreamview.DelaysInMs.prototype.clearPerceptionObstacle = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.dreamview.DelaysInMs.prototype.hasPerceptionObstacle = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional double planning = 5;
 * @return {number}
 */
proto.apollo.dreamview.DelaysInMs.prototype.getPlanning = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.dreamview.DelaysInMs} returns this
 */
proto.apollo.dreamview.DelaysInMs.prototype.setPlanning = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.dreamview.DelaysInMs} returns this
 */
proto.apollo.dreamview.DelaysInMs.prototype.clearPlanning = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.dreamview.DelaysInMs.prototype.hasPlanning = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional double prediction = 7;
 * @return {number}
 */
proto.apollo.dreamview.DelaysInMs.prototype.getPrediction = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.dreamview.DelaysInMs} returns this
 */
proto.apollo.dreamview.DelaysInMs.prototype.setPrediction = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.dreamview.DelaysInMs} returns this
 */
proto.apollo.dreamview.DelaysInMs.prototype.clearPrediction = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.dreamview.DelaysInMs.prototype.hasPrediction = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional double traffic_light = 8;
 * @return {number}
 */
proto.apollo.dreamview.DelaysInMs.prototype.getTrafficLight = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.dreamview.DelaysInMs} returns this
 */
proto.apollo.dreamview.DelaysInMs.prototype.setTrafficLight = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.dreamview.DelaysInMs} returns this
 */
proto.apollo.dreamview.DelaysInMs.prototype.clearTrafficLight = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.dreamview.DelaysInMs.prototype.hasTrafficLight = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional double control = 9;
 * @return {number}
 */
proto.apollo.dreamview.DelaysInMs.prototype.getControl = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 9, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.dreamview.DelaysInMs} returns this
 */
proto.apollo.dreamview.DelaysInMs.prototype.setControl = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.dreamview.DelaysInMs} returns this
 */
proto.apollo.dreamview.DelaysInMs.prototype.clearControl = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.dreamview.DelaysInMs.prototype.hasControl = function() {
  return jspb.Message.getField(this, 9) != null;
};


