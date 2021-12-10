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

goog.provide('proto.apollo.dreamview.Options');
goog.provide('proto.apollo.dreamview.Options.Axis');

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
proto.apollo.dreamview.Options = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.dreamview.Options, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.dreamview.Options.displayName = 'proto.apollo.dreamview.Options';
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
proto.apollo.dreamview.Options.Axis = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.dreamview.Options.Axis, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.dreamview.Options.Axis.displayName = 'proto.apollo.dreamview.Options.Axis';
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
proto.apollo.dreamview.Options.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.dreamview.Options.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.dreamview.Options} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.dreamview.Options.toObject = function(includeInstance, msg) {
  var f, obj = {
    legendDisplay: jspb.Message.getBooleanFieldWithDefault(msg, 1, true),
    x: (f = msg.getX()) && proto.apollo.dreamview.Options.Axis.toObject(includeInstance, f),
    y: (f = msg.getY()) && proto.apollo.dreamview.Options.Axis.toObject(includeInstance, f),
    aspectRatio: (f = jspb.Message.getOptionalFloatingPointField(msg, 4)) == null ? undefined : f,
    syncXyWindowSize: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Options as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.dreamview.Options.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.legendDisplay;

  /** @type {?|undefined} */
  this.x;

  /** @type {?|undefined} */
  this.y;

  /** @type {?|undefined} */
  this.aspectRatio;

  /** @type {?|undefined} */
  this.syncXyWindowSize;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.dreamview.Options.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.dreamview.Options}
 */
proto.apollo.dreamview.Options.fromObject = function(obj) {
  var msg = new proto.apollo.dreamview.Options();
  obj.legendDisplay != null && jspb.Message.setField(msg, 1, obj.legendDisplay);
  obj.x && jspb.Message.setWrapperField(
      msg, 2, proto.apollo.dreamview.Options.Axis.fromObject(obj.x));
  obj.y && jspb.Message.setWrapperField(
      msg, 3, proto.apollo.dreamview.Options.Axis.fromObject(obj.y));
  obj.aspectRatio != null && jspb.Message.setField(msg, 4, obj.aspectRatio);
  obj.syncXyWindowSize != null && jspb.Message.setField(msg, 5, obj.syncXyWindowSize);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.dreamview.Options}
 */
proto.apollo.dreamview.Options.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.dreamview.Options;
  return proto.apollo.dreamview.Options.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.dreamview.Options} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.dreamview.Options}
 */
proto.apollo.dreamview.Options.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLegendDisplay(value);
      break;
    case 2:
      var value = new proto.apollo.dreamview.Options.Axis;
      reader.readMessage(value,proto.apollo.dreamview.Options.Axis.deserializeBinaryFromReader);
      msg.setX(value);
      break;
    case 3:
      var value = new proto.apollo.dreamview.Options.Axis;
      reader.readMessage(value,proto.apollo.dreamview.Options.Axis.deserializeBinaryFromReader);
      msg.setY(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAspectRatio(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSyncXyWindowSize(value);
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
proto.apollo.dreamview.Options.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.dreamview.Options.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.dreamview.Options} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.dreamview.Options.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getX();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.apollo.dreamview.Options.Axis.serializeBinaryToWriter
    );
  }
  f = message.getY();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.apollo.dreamview.Options.Axis.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeDouble(
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
proto.apollo.dreamview.Options.Axis.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.dreamview.Options.Axis.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.dreamview.Options.Axis} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.dreamview.Options.Axis.toObject = function(includeInstance, msg) {
  var f, obj = {
    min: (f = jspb.Message.getOptionalFloatingPointField(msg, 1)) == null ? undefined : f,
    max: (f = jspb.Message.getOptionalFloatingPointField(msg, 2)) == null ? undefined : f,
    labelString: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    windowSize: (f = jspb.Message.getOptionalFloatingPointField(msg, 4)) == null ? undefined : f,
    stepSize: (f = jspb.Message.getOptionalFloatingPointField(msg, 5)) == null ? undefined : f,
    midValue: (f = jspb.Message.getOptionalFloatingPointField(msg, 6)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Axis as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.dreamview.Options.Axis.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.min;

  /** @type {?|undefined} */
  this.max;

  /** @type {?|undefined} */
  this.labelString;

  /** @type {?|undefined} */
  this.windowSize;

  /** @type {?|undefined} */
  this.stepSize;

  /** @type {?|undefined} */
  this.midValue;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.dreamview.Options.Axis.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.dreamview.Options.Axis}
 */
proto.apollo.dreamview.Options.Axis.fromObject = function(obj) {
  var msg = new proto.apollo.dreamview.Options.Axis();
  obj.min != null && jspb.Message.setField(msg, 1, obj.min);
  obj.max != null && jspb.Message.setField(msg, 2, obj.max);
  obj.labelString != null && jspb.Message.setField(msg, 3, obj.labelString);
  obj.windowSize != null && jspb.Message.setField(msg, 4, obj.windowSize);
  obj.stepSize != null && jspb.Message.setField(msg, 5, obj.stepSize);
  obj.midValue != null && jspb.Message.setField(msg, 6, obj.midValue);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.dreamview.Options.Axis}
 */
proto.apollo.dreamview.Options.Axis.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.dreamview.Options.Axis;
  return proto.apollo.dreamview.Options.Axis.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.dreamview.Options.Axis} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.dreamview.Options.Axis}
 */
proto.apollo.dreamview.Options.Axis.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMin(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMax(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLabelString(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setWindowSize(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setStepSize(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMidValue(value);
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
proto.apollo.dreamview.Options.Axis.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.dreamview.Options.Axis.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.dreamview.Options.Axis} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.dreamview.Options.Axis.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
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
};


/**
 * optional double min = 1;
 * @return {number}
 */
proto.apollo.dreamview.Options.Axis.prototype.getMin = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.dreamview.Options.Axis} returns this
 */
proto.apollo.dreamview.Options.Axis.prototype.setMin = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.dreamview.Options.Axis} returns this
 */
proto.apollo.dreamview.Options.Axis.prototype.clearMin = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.dreamview.Options.Axis.prototype.hasMin = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double max = 2;
 * @return {number}
 */
proto.apollo.dreamview.Options.Axis.prototype.getMax = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.dreamview.Options.Axis} returns this
 */
proto.apollo.dreamview.Options.Axis.prototype.setMax = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.dreamview.Options.Axis} returns this
 */
proto.apollo.dreamview.Options.Axis.prototype.clearMax = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.dreamview.Options.Axis.prototype.hasMax = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string label_string = 3;
 * @return {string}
 */
proto.apollo.dreamview.Options.Axis.prototype.getLabelString = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.apollo.dreamview.Options.Axis} returns this
 */
proto.apollo.dreamview.Options.Axis.prototype.setLabelString = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.dreamview.Options.Axis} returns this
 */
proto.apollo.dreamview.Options.Axis.prototype.clearLabelString = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.dreamview.Options.Axis.prototype.hasLabelString = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double window_size = 4;
 * @return {number}
 */
proto.apollo.dreamview.Options.Axis.prototype.getWindowSize = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.dreamview.Options.Axis} returns this
 */
proto.apollo.dreamview.Options.Axis.prototype.setWindowSize = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.dreamview.Options.Axis} returns this
 */
proto.apollo.dreamview.Options.Axis.prototype.clearWindowSize = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.dreamview.Options.Axis.prototype.hasWindowSize = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional double step_size = 5;
 * @return {number}
 */
proto.apollo.dreamview.Options.Axis.prototype.getStepSize = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.dreamview.Options.Axis} returns this
 */
proto.apollo.dreamview.Options.Axis.prototype.setStepSize = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.dreamview.Options.Axis} returns this
 */
proto.apollo.dreamview.Options.Axis.prototype.clearStepSize = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.dreamview.Options.Axis.prototype.hasStepSize = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional double mid_value = 6;
 * @return {number}
 */
proto.apollo.dreamview.Options.Axis.prototype.getMidValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.dreamview.Options.Axis} returns this
 */
proto.apollo.dreamview.Options.Axis.prototype.setMidValue = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.dreamview.Options.Axis} returns this
 */
proto.apollo.dreamview.Options.Axis.prototype.clearMidValue = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.dreamview.Options.Axis.prototype.hasMidValue = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool legend_display = 1;
 * @return {boolean}
 */
proto.apollo.dreamview.Options.prototype.getLegendDisplay = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, true));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.dreamview.Options} returns this
 */
proto.apollo.dreamview.Options.prototype.setLegendDisplay = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.dreamview.Options} returns this
 */
proto.apollo.dreamview.Options.prototype.clearLegendDisplay = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.dreamview.Options.prototype.hasLegendDisplay = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Axis x = 2;
 * @return {?proto.apollo.dreamview.Options.Axis}
 */
proto.apollo.dreamview.Options.prototype.getX = function() {
  return /** @type{?proto.apollo.dreamview.Options.Axis} */ (
    jspb.Message.getWrapperField(this, proto.apollo.dreamview.Options.Axis, 2));
};


/**
 * @param {?proto.apollo.dreamview.Options.Axis|undefined} value
 * @return {!proto.apollo.dreamview.Options} returns this
*/
proto.apollo.dreamview.Options.prototype.setX = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.dreamview.Options} returns this
 */
proto.apollo.dreamview.Options.prototype.clearX = function() {
  return this.setX(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.dreamview.Options.prototype.hasX = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Axis y = 3;
 * @return {?proto.apollo.dreamview.Options.Axis}
 */
proto.apollo.dreamview.Options.prototype.getY = function() {
  return /** @type{?proto.apollo.dreamview.Options.Axis} */ (
    jspb.Message.getWrapperField(this, proto.apollo.dreamview.Options.Axis, 3));
};


/**
 * @param {?proto.apollo.dreamview.Options.Axis|undefined} value
 * @return {!proto.apollo.dreamview.Options} returns this
*/
proto.apollo.dreamview.Options.prototype.setY = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.dreamview.Options} returns this
 */
proto.apollo.dreamview.Options.prototype.clearY = function() {
  return this.setY(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.dreamview.Options.prototype.hasY = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double aspect_ratio = 4;
 * @return {number}
 */
proto.apollo.dreamview.Options.prototype.getAspectRatio = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.dreamview.Options} returns this
 */
proto.apollo.dreamview.Options.prototype.setAspectRatio = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.dreamview.Options} returns this
 */
proto.apollo.dreamview.Options.prototype.clearAspectRatio = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.dreamview.Options.prototype.hasAspectRatio = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool sync_xy_window_size = 5;
 * @return {boolean}
 */
proto.apollo.dreamview.Options.prototype.getSyncXyWindowSize = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.apollo.dreamview.Options} returns this
 */
proto.apollo.dreamview.Options.prototype.setSyncXyWindowSize = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.dreamview.Options} returns this
 */
proto.apollo.dreamview.Options.prototype.clearSyncXyWindowSize = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.dreamview.Options.prototype.hasSyncXyWindowSize = function() {
  return jspb.Message.getField(this, 5) != null;
};


