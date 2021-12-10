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

goog.provide('proto.apollo.dreamview.MapElementIds');

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
proto.apollo.dreamview.MapElementIds = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.apollo.dreamview.MapElementIds.repeatedFields_, null);
};
goog.inherits(proto.apollo.dreamview.MapElementIds, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.dreamview.MapElementIds.displayName = 'proto.apollo.dreamview.MapElementIds';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.apollo.dreamview.MapElementIds.repeatedFields_ = [1,2,3,4,5,6,7,8,9,10,11,12];



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
proto.apollo.dreamview.MapElementIds.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.dreamview.MapElementIds.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.dreamview.MapElementIds} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.dreamview.MapElementIds.toObject = function(includeInstance, msg) {
  var f, obj = {
    laneList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    crosswalkList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    junctionList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    signalList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    stopSignList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    yieldList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f,
    overlapList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f,
    roadList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f,
    clearAreaList: (f = jspb.Message.getRepeatedField(msg, 9)) == null ? undefined : f,
    parkingSpaceList: (f = jspb.Message.getRepeatedField(msg, 10)) == null ? undefined : f,
    speedBumpList: (f = jspb.Message.getRepeatedField(msg, 11)) == null ? undefined : f,
    pncJunctionList: (f = jspb.Message.getRepeatedField(msg, 12)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of MapElementIds as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.dreamview.MapElementIds.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.laneList;

  /** @type {?|undefined} */
  this.crosswalkList;

  /** @type {?|undefined} */
  this.junctionList;

  /** @type {?|undefined} */
  this.signalList;

  /** @type {?|undefined} */
  this.stopSignList;

  /** @type {?|undefined} */
  this.yieldList;

  /** @type {?|undefined} */
  this.overlapList;

  /** @type {?|undefined} */
  this.roadList;

  /** @type {?|undefined} */
  this.clearAreaList;

  /** @type {?|undefined} */
  this.parkingSpaceList;

  /** @type {?|undefined} */
  this.speedBumpList;

  /** @type {?|undefined} */
  this.pncJunctionList;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.dreamview.MapElementIds.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.dreamview.MapElementIds}
 */
proto.apollo.dreamview.MapElementIds.fromObject = function(obj) {
  var msg = new proto.apollo.dreamview.MapElementIds();
  obj.laneList != null && jspb.Message.setField(msg, 1, obj.laneList);
  obj.crosswalkList != null && jspb.Message.setField(msg, 2, obj.crosswalkList);
  obj.junctionList != null && jspb.Message.setField(msg, 3, obj.junctionList);
  obj.signalList != null && jspb.Message.setField(msg, 4, obj.signalList);
  obj.stopSignList != null && jspb.Message.setField(msg, 5, obj.stopSignList);
  obj.yieldList != null && jspb.Message.setField(msg, 6, obj.yieldList);
  obj.overlapList != null && jspb.Message.setField(msg, 7, obj.overlapList);
  obj.roadList != null && jspb.Message.setField(msg, 8, obj.roadList);
  obj.clearAreaList != null && jspb.Message.setField(msg, 9, obj.clearAreaList);
  obj.parkingSpaceList != null && jspb.Message.setField(msg, 10, obj.parkingSpaceList);
  obj.speedBumpList != null && jspb.Message.setField(msg, 11, obj.speedBumpList);
  obj.pncJunctionList != null && jspb.Message.setField(msg, 12, obj.pncJunctionList);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.dreamview.MapElementIds}
 */
proto.apollo.dreamview.MapElementIds.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.dreamview.MapElementIds;
  return proto.apollo.dreamview.MapElementIds.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.dreamview.MapElementIds} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.dreamview.MapElementIds}
 */
proto.apollo.dreamview.MapElementIds.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addLane(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addCrosswalk(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addJunction(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addSignal(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addStopSign(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addYield(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.addOverlap(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addRoad(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.addClearArea(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.addParkingSpace(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.addSpeedBump(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.addPncJunction(value);
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
proto.apollo.dreamview.MapElementIds.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.dreamview.MapElementIds.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.dreamview.MapElementIds} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.dreamview.MapElementIds.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLaneList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getCrosswalkList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getJunctionList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getSignalList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getStopSignList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getYieldList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
  f = message.getOverlapList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      7,
      f
    );
  }
  f = message.getRoadList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
  f = message.getClearAreaList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      9,
      f
    );
  }
  f = message.getParkingSpaceList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      10,
      f
    );
  }
  f = message.getSpeedBumpList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      11,
      f
    );
  }
  f = message.getPncJunctionList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      12,
      f
    );
  }
};


/**
 * repeated string lane = 1;
 * @return {!Array<string>}
 */
proto.apollo.dreamview.MapElementIds.prototype.getLaneList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.apollo.dreamview.MapElementIds} returns this
 */
proto.apollo.dreamview.MapElementIds.prototype.setLaneList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.apollo.dreamview.MapElementIds} returns this
 */
proto.apollo.dreamview.MapElementIds.prototype.addLane = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.dreamview.MapElementIds} returns this
 */
proto.apollo.dreamview.MapElementIds.prototype.clearLaneList = function() {
  return this.setLaneList([]);
};


/**
 * repeated string crosswalk = 2;
 * @return {!Array<string>}
 */
proto.apollo.dreamview.MapElementIds.prototype.getCrosswalkList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.apollo.dreamview.MapElementIds} returns this
 */
proto.apollo.dreamview.MapElementIds.prototype.setCrosswalkList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.apollo.dreamview.MapElementIds} returns this
 */
proto.apollo.dreamview.MapElementIds.prototype.addCrosswalk = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.dreamview.MapElementIds} returns this
 */
proto.apollo.dreamview.MapElementIds.prototype.clearCrosswalkList = function() {
  return this.setCrosswalkList([]);
};


/**
 * repeated string junction = 3;
 * @return {!Array<string>}
 */
proto.apollo.dreamview.MapElementIds.prototype.getJunctionList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.apollo.dreamview.MapElementIds} returns this
 */
proto.apollo.dreamview.MapElementIds.prototype.setJunctionList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.apollo.dreamview.MapElementIds} returns this
 */
proto.apollo.dreamview.MapElementIds.prototype.addJunction = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.dreamview.MapElementIds} returns this
 */
proto.apollo.dreamview.MapElementIds.prototype.clearJunctionList = function() {
  return this.setJunctionList([]);
};


/**
 * repeated string signal = 4;
 * @return {!Array<string>}
 */
proto.apollo.dreamview.MapElementIds.prototype.getSignalList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.apollo.dreamview.MapElementIds} returns this
 */
proto.apollo.dreamview.MapElementIds.prototype.setSignalList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.apollo.dreamview.MapElementIds} returns this
 */
proto.apollo.dreamview.MapElementIds.prototype.addSignal = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.dreamview.MapElementIds} returns this
 */
proto.apollo.dreamview.MapElementIds.prototype.clearSignalList = function() {
  return this.setSignalList([]);
};


/**
 * repeated string stop_sign = 5;
 * @return {!Array<string>}
 */
proto.apollo.dreamview.MapElementIds.prototype.getStopSignList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.apollo.dreamview.MapElementIds} returns this
 */
proto.apollo.dreamview.MapElementIds.prototype.setStopSignList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.apollo.dreamview.MapElementIds} returns this
 */
proto.apollo.dreamview.MapElementIds.prototype.addStopSign = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.dreamview.MapElementIds} returns this
 */
proto.apollo.dreamview.MapElementIds.prototype.clearStopSignList = function() {
  return this.setStopSignList([]);
};


/**
 * repeated string yield = 6;
 * @return {!Array<string>}
 */
proto.apollo.dreamview.MapElementIds.prototype.getYieldList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.apollo.dreamview.MapElementIds} returns this
 */
proto.apollo.dreamview.MapElementIds.prototype.setYieldList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.apollo.dreamview.MapElementIds} returns this
 */
proto.apollo.dreamview.MapElementIds.prototype.addYield = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.dreamview.MapElementIds} returns this
 */
proto.apollo.dreamview.MapElementIds.prototype.clearYieldList = function() {
  return this.setYieldList([]);
};


/**
 * repeated string overlap = 7;
 * @return {!Array<string>}
 */
proto.apollo.dreamview.MapElementIds.prototype.getOverlapList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.apollo.dreamview.MapElementIds} returns this
 */
proto.apollo.dreamview.MapElementIds.prototype.setOverlapList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.apollo.dreamview.MapElementIds} returns this
 */
proto.apollo.dreamview.MapElementIds.prototype.addOverlap = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.dreamview.MapElementIds} returns this
 */
proto.apollo.dreamview.MapElementIds.prototype.clearOverlapList = function() {
  return this.setOverlapList([]);
};


/**
 * repeated string road = 8;
 * @return {!Array<string>}
 */
proto.apollo.dreamview.MapElementIds.prototype.getRoadList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.apollo.dreamview.MapElementIds} returns this
 */
proto.apollo.dreamview.MapElementIds.prototype.setRoadList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.apollo.dreamview.MapElementIds} returns this
 */
proto.apollo.dreamview.MapElementIds.prototype.addRoad = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.dreamview.MapElementIds} returns this
 */
proto.apollo.dreamview.MapElementIds.prototype.clearRoadList = function() {
  return this.setRoadList([]);
};


/**
 * repeated string clear_area = 9;
 * @return {!Array<string>}
 */
proto.apollo.dreamview.MapElementIds.prototype.getClearAreaList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 9));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.apollo.dreamview.MapElementIds} returns this
 */
proto.apollo.dreamview.MapElementIds.prototype.setClearAreaList = function(value) {
  return jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.apollo.dreamview.MapElementIds} returns this
 */
proto.apollo.dreamview.MapElementIds.prototype.addClearArea = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.dreamview.MapElementIds} returns this
 */
proto.apollo.dreamview.MapElementIds.prototype.clearClearAreaList = function() {
  return this.setClearAreaList([]);
};


/**
 * repeated string parking_space = 10;
 * @return {!Array<string>}
 */
proto.apollo.dreamview.MapElementIds.prototype.getParkingSpaceList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 10));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.apollo.dreamview.MapElementIds} returns this
 */
proto.apollo.dreamview.MapElementIds.prototype.setParkingSpaceList = function(value) {
  return jspb.Message.setField(this, 10, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.apollo.dreamview.MapElementIds} returns this
 */
proto.apollo.dreamview.MapElementIds.prototype.addParkingSpace = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 10, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.dreamview.MapElementIds} returns this
 */
proto.apollo.dreamview.MapElementIds.prototype.clearParkingSpaceList = function() {
  return this.setParkingSpaceList([]);
};


/**
 * repeated string speed_bump = 11;
 * @return {!Array<string>}
 */
proto.apollo.dreamview.MapElementIds.prototype.getSpeedBumpList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 11));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.apollo.dreamview.MapElementIds} returns this
 */
proto.apollo.dreamview.MapElementIds.prototype.setSpeedBumpList = function(value) {
  return jspb.Message.setField(this, 11, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.apollo.dreamview.MapElementIds} returns this
 */
proto.apollo.dreamview.MapElementIds.prototype.addSpeedBump = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 11, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.dreamview.MapElementIds} returns this
 */
proto.apollo.dreamview.MapElementIds.prototype.clearSpeedBumpList = function() {
  return this.setSpeedBumpList([]);
};


/**
 * repeated string pnc_junction = 12;
 * @return {!Array<string>}
 */
proto.apollo.dreamview.MapElementIds.prototype.getPncJunctionList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 12));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.apollo.dreamview.MapElementIds} returns this
 */
proto.apollo.dreamview.MapElementIds.prototype.setPncJunctionList = function(value) {
  return jspb.Message.setField(this, 12, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.apollo.dreamview.MapElementIds} returns this
 */
proto.apollo.dreamview.MapElementIds.prototype.addPncJunction = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 12, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.apollo.dreamview.MapElementIds} returns this
 */
proto.apollo.dreamview.MapElementIds.prototype.clearPncJunctionList = function() {
  return this.setPncJunctionList([]);
};

