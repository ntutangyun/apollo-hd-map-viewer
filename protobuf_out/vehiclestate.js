// source: modules/common/vehicle_state/proto/vehicle_state.proto
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

goog.provide('proto.apollo.common.VehicleState');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.apollo.localization.Pose');

goog.forwardDeclare('proto.apollo.canbus.Chassis.DrivingMode');
goog.forwardDeclare('proto.apollo.canbus.Chassis.GearPosition');
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
proto.apollo.common.VehicleState = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.common.VehicleState, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.common.VehicleState.displayName = 'proto.apollo.common.VehicleState';
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
proto.apollo.common.VehicleState.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.common.VehicleState.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.common.VehicleState} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.common.VehicleState.toObject = function(includeInstance, msg) {
  var f, obj = {
    x: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    y: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    z: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    timestamp: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    roll: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    pitch: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    yaw: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    heading: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0),
    kappa: jspb.Message.getFloatingPointFieldWithDefault(msg, 9, 0.0),
    linearVelocity: jspb.Message.getFloatingPointFieldWithDefault(msg, 10, 0.0),
    angularVelocity: jspb.Message.getFloatingPointFieldWithDefault(msg, 11, 0.0),
    linearAcceleration: jspb.Message.getFloatingPointFieldWithDefault(msg, 12, 0.0),
    gear: (f = jspb.Message.getField(msg, 13)) == null ? undefined : f,
    drivingMode: (f = jspb.Message.getField(msg, 14)) == null ? undefined : f,
    pose: (f = msg.getPose()) && proto.apollo.localization.Pose.toObject(includeInstance, f),
    steeringPercentage: (f = jspb.Message.getOptionalFloatingPointField(msg, 16)) == null ? undefined : f
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
 * @return {!proto.apollo.common.VehicleState}
 */
proto.apollo.common.VehicleState.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.common.VehicleState;
  return proto.apollo.common.VehicleState.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.common.VehicleState} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.common.VehicleState}
 */
proto.apollo.common.VehicleState.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setX(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setY(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setZ(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTimestamp(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRoll(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setPitch(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setYaw(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setHeading(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setKappa(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLinearVelocity(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAngularVelocity(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLinearAcceleration(value);
      break;
    case 13:
      var value = /** @type {!proto.apollo.canbus.Chassis.GearPosition} */ (reader.readEnum());
      msg.setGear(value);
      break;
    case 14:
      var value = /** @type {!proto.apollo.canbus.Chassis.DrivingMode} */ (reader.readEnum());
      msg.setDrivingMode(value);
      break;
    case 15:
      var value = new proto.apollo.localization.Pose;
      reader.readMessage(value,proto.apollo.localization.Pose.deserializeBinaryFromReader);
      msg.setPose(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSteeringPercentage(value);
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
proto.apollo.common.VehicleState.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.common.VehicleState.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.common.VehicleState} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.common.VehicleState.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {number} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeDouble(
      12,
      f
    );
  }
  f = /** @type {!proto.apollo.canbus.Chassis.GearPosition} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeEnum(
      13,
      f
    );
  }
  f = /** @type {!proto.apollo.canbus.Chassis.DrivingMode} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeEnum(
      14,
      f
    );
  }
  f = message.getPose();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.apollo.localization.Pose.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 16));
  if (f != null) {
    writer.writeDouble(
      16,
      f
    );
  }
};


/**
 * optional double x = 1;
 * @return {number}
 */
proto.apollo.common.VehicleState.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.common.VehicleState} returns this
 */
proto.apollo.common.VehicleState.prototype.setX = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.common.VehicleState} returns this
 */
proto.apollo.common.VehicleState.prototype.clearX = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.common.VehicleState.prototype.hasX = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double y = 2;
 * @return {number}
 */
proto.apollo.common.VehicleState.prototype.getY = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.common.VehicleState} returns this
 */
proto.apollo.common.VehicleState.prototype.setY = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.common.VehicleState} returns this
 */
proto.apollo.common.VehicleState.prototype.clearY = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.common.VehicleState.prototype.hasY = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional double z = 3;
 * @return {number}
 */
proto.apollo.common.VehicleState.prototype.getZ = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.common.VehicleState} returns this
 */
proto.apollo.common.VehicleState.prototype.setZ = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.common.VehicleState} returns this
 */
proto.apollo.common.VehicleState.prototype.clearZ = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.common.VehicleState.prototype.hasZ = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double timestamp = 4;
 * @return {number}
 */
proto.apollo.common.VehicleState.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.common.VehicleState} returns this
 */
proto.apollo.common.VehicleState.prototype.setTimestamp = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.common.VehicleState} returns this
 */
proto.apollo.common.VehicleState.prototype.clearTimestamp = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.common.VehicleState.prototype.hasTimestamp = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional double roll = 5;
 * @return {number}
 */
proto.apollo.common.VehicleState.prototype.getRoll = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.common.VehicleState} returns this
 */
proto.apollo.common.VehicleState.prototype.setRoll = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.common.VehicleState} returns this
 */
proto.apollo.common.VehicleState.prototype.clearRoll = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.common.VehicleState.prototype.hasRoll = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional double pitch = 6;
 * @return {number}
 */
proto.apollo.common.VehicleState.prototype.getPitch = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.common.VehicleState} returns this
 */
proto.apollo.common.VehicleState.prototype.setPitch = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.common.VehicleState} returns this
 */
proto.apollo.common.VehicleState.prototype.clearPitch = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.common.VehicleState.prototype.hasPitch = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional double yaw = 7;
 * @return {number}
 */
proto.apollo.common.VehicleState.prototype.getYaw = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.common.VehicleState} returns this
 */
proto.apollo.common.VehicleState.prototype.setYaw = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.common.VehicleState} returns this
 */
proto.apollo.common.VehicleState.prototype.clearYaw = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.common.VehicleState.prototype.hasYaw = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional double heading = 8;
 * @return {number}
 */
proto.apollo.common.VehicleState.prototype.getHeading = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.common.VehicleState} returns this
 */
proto.apollo.common.VehicleState.prototype.setHeading = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.common.VehicleState} returns this
 */
proto.apollo.common.VehicleState.prototype.clearHeading = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.common.VehicleState.prototype.hasHeading = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional double kappa = 9;
 * @return {number}
 */
proto.apollo.common.VehicleState.prototype.getKappa = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 9, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.common.VehicleState} returns this
 */
proto.apollo.common.VehicleState.prototype.setKappa = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.common.VehicleState} returns this
 */
proto.apollo.common.VehicleState.prototype.clearKappa = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.common.VehicleState.prototype.hasKappa = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional double linear_velocity = 10;
 * @return {number}
 */
proto.apollo.common.VehicleState.prototype.getLinearVelocity = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 10, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.common.VehicleState} returns this
 */
proto.apollo.common.VehicleState.prototype.setLinearVelocity = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.common.VehicleState} returns this
 */
proto.apollo.common.VehicleState.prototype.clearLinearVelocity = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.common.VehicleState.prototype.hasLinearVelocity = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional double angular_velocity = 11;
 * @return {number}
 */
proto.apollo.common.VehicleState.prototype.getAngularVelocity = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 11, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.common.VehicleState} returns this
 */
proto.apollo.common.VehicleState.prototype.setAngularVelocity = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.common.VehicleState} returns this
 */
proto.apollo.common.VehicleState.prototype.clearAngularVelocity = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.common.VehicleState.prototype.hasAngularVelocity = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional double linear_acceleration = 12;
 * @return {number}
 */
proto.apollo.common.VehicleState.prototype.getLinearAcceleration = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 12, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.common.VehicleState} returns this
 */
proto.apollo.common.VehicleState.prototype.setLinearAcceleration = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.common.VehicleState} returns this
 */
proto.apollo.common.VehicleState.prototype.clearLinearAcceleration = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.common.VehicleState.prototype.hasLinearAcceleration = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional apollo.canbus.Chassis.GearPosition gear = 13;
 * @return {!proto.apollo.canbus.Chassis.GearPosition}
 */
proto.apollo.common.VehicleState.prototype.getGear = function() {
  return /** @type {!proto.apollo.canbus.Chassis.GearPosition} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {!proto.apollo.canbus.Chassis.GearPosition} value
 * @return {!proto.apollo.common.VehicleState} returns this
 */
proto.apollo.common.VehicleState.prototype.setGear = function(value) {
  return jspb.Message.setField(this, 13, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.common.VehicleState} returns this
 */
proto.apollo.common.VehicleState.prototype.clearGear = function() {
  return jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.common.VehicleState.prototype.hasGear = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional apollo.canbus.Chassis.DrivingMode driving_mode = 14;
 * @return {!proto.apollo.canbus.Chassis.DrivingMode}
 */
proto.apollo.common.VehicleState.prototype.getDrivingMode = function() {
  return /** @type {!proto.apollo.canbus.Chassis.DrivingMode} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {!proto.apollo.canbus.Chassis.DrivingMode} value
 * @return {!proto.apollo.common.VehicleState} returns this
 */
proto.apollo.common.VehicleState.prototype.setDrivingMode = function(value) {
  return jspb.Message.setField(this, 14, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.common.VehicleState} returns this
 */
proto.apollo.common.VehicleState.prototype.clearDrivingMode = function() {
  return jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.common.VehicleState.prototype.hasDrivingMode = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional apollo.localization.Pose pose = 15;
 * @return {?proto.apollo.localization.Pose}
 */
proto.apollo.common.VehicleState.prototype.getPose = function() {
  return /** @type{?proto.apollo.localization.Pose} */ (
    jspb.Message.getWrapperField(this, proto.apollo.localization.Pose, 15));
};


/**
 * @param {?proto.apollo.localization.Pose|undefined} value
 * @return {!proto.apollo.common.VehicleState} returns this
*/
proto.apollo.common.VehicleState.prototype.setPose = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.common.VehicleState} returns this
 */
proto.apollo.common.VehicleState.prototype.clearPose = function() {
  return this.setPose(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.common.VehicleState.prototype.hasPose = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional double steering_percentage = 16;
 * @return {number}
 */
proto.apollo.common.VehicleState.prototype.getSteeringPercentage = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 16, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.common.VehicleState} returns this
 */
proto.apollo.common.VehicleState.prototype.setSteeringPercentage = function(value) {
  return jspb.Message.setField(this, 16, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.common.VehicleState} returns this
 */
proto.apollo.common.VehicleState.prototype.clearSteeringPercentage = function() {
  return jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.common.VehicleState.prototype.hasSteeringPercentage = function() {
  return jspb.Message.getField(this, 16) != null;
};


