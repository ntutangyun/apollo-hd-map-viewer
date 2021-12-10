// source: modules/dreamview/backend/teleop/proto/modem_info.proto
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

goog.provide('proto.modules.teleop.modem.ModemInfo');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.apollo.common.Header');

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
proto.modules.teleop.modem.ModemInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.modules.teleop.modem.ModemInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.modules.teleop.modem.ModemInfo.displayName = 'proto.modules.teleop.modem.ModemInfo';
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
proto.modules.teleop.modem.ModemInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.modules.teleop.modem.ModemInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.modules.teleop.modem.ModemInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.modules.teleop.modem.ModemInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    header: (f = msg.getHeader()) && proto.apollo.common.Header.toObject(includeInstance, f),
    provider: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    ip: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    ipCount: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
    gateway: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    port: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    dev: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    tx: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
    rx: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
    ping: (f = jspb.Message.getField(msg, 10)) == null ? undefined : f,
    smoni: (f = jspb.Message.getField(msg, 11)) == null ? undefined : f,
    technology: (f = jspb.Message.getField(msg, 12)) == null ? undefined : f,
    connection: (f = jspb.Message.getField(msg, 13)) == null ? undefined : f,
    signal: (f = jspb.Message.getField(msg, 14)) == null ? undefined : f,
    quality: (f = jspb.Message.getField(msg, 15)) == null ? undefined : f,
    bandwidthUl: (f = jspb.Message.getField(msg, 16)) == null ? undefined : f,
    bandwidthDl: (f = jspb.Message.getField(msg, 17)) == null ? undefined : f,
    caAggregation: (f = jspb.Message.getBooleanField(msg, 18)) == null ? undefined : f,
    rank: (f = jspb.Message.getField(msg, 19)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of ModemInfo as accepted by the `fromObject` method.
 * @record
 */
proto.modules.teleop.modem.ModemInfo.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.header;

  /** @type {?|undefined} */
  this.provider;

  /** @type {?|undefined} */
  this.ip;

  /** @type {?|undefined} */
  this.ipCount;

  /** @type {?|undefined} */
  this.gateway;

  /** @type {?|undefined} */
  this.port;

  /** @type {?|undefined} */
  this.dev;

  /** @type {?|undefined} */
  this.tx;

  /** @type {?|undefined} */
  this.rx;

  /** @type {?|undefined} */
  this.ping;

  /** @type {?|undefined} */
  this.smoni;

  /** @type {?|undefined} */
  this.technology;

  /** @type {?|undefined} */
  this.connection;

  /** @type {?|undefined} */
  this.signal;

  /** @type {?|undefined} */
  this.quality;

  /** @type {?|undefined} */
  this.bandwidthUl;

  /** @type {?|undefined} */
  this.bandwidthDl;

  /** @type {?|undefined} */
  this.caAggregation;

  /** @type {?|undefined} */
  this.rank;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.modules.teleop.modem.ModemInfo.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.modules.teleop.modem.ModemInfo}
 */
proto.modules.teleop.modem.ModemInfo.fromObject = function(obj) {
  var msg = new proto.modules.teleop.modem.ModemInfo();
  obj.header && jspb.Message.setWrapperField(
      msg, 1, proto.apollo.common.Header.fromObject(obj.header));
  obj.provider != null && jspb.Message.setField(msg, 2, obj.provider);
  obj.ip != null && jspb.Message.setField(msg, 3, obj.ip);
  obj.ipCount != null && jspb.Message.setField(msg, 4, obj.ipCount);
  obj.gateway != null && jspb.Message.setField(msg, 5, obj.gateway);
  obj.port != null && jspb.Message.setField(msg, 6, obj.port);
  obj.dev != null && jspb.Message.setField(msg, 7, obj.dev);
  obj.tx != null && jspb.Message.setField(msg, 8, obj.tx);
  obj.rx != null && jspb.Message.setField(msg, 9, obj.rx);
  obj.ping != null && jspb.Message.setField(msg, 10, obj.ping);
  obj.smoni != null && jspb.Message.setField(msg, 11, obj.smoni);
  obj.technology != null && jspb.Message.setField(msg, 12, obj.technology);
  obj.connection != null && jspb.Message.setField(msg, 13, obj.connection);
  obj.signal != null && jspb.Message.setField(msg, 14, obj.signal);
  obj.quality != null && jspb.Message.setField(msg, 15, obj.quality);
  obj.bandwidthUl != null && jspb.Message.setField(msg, 16, obj.bandwidthUl);
  obj.bandwidthDl != null && jspb.Message.setField(msg, 17, obj.bandwidthDl);
  obj.caAggregation != null && jspb.Message.setField(msg, 18, obj.caAggregation);
  obj.rank != null && jspb.Message.setField(msg, 19, obj.rank);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.modules.teleop.modem.ModemInfo}
 */
proto.modules.teleop.modem.ModemInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.modules.teleop.modem.ModemInfo;
  return proto.modules.teleop.modem.ModemInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.modules.teleop.modem.ModemInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.modules.teleop.modem.ModemInfo}
 */
proto.modules.teleop.modem.ModemInfo.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setProvider(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setIp(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIpCount(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setGateway(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPort(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setDev(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTx(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRx(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setPing(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setSmoni(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setTechnology(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setConnection(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSignal(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setQuality(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBandwidthUl(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBandwidthDl(value);
      break;
    case 18:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCaAggregation(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRank(value);
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
proto.modules.teleop.modem.ModemInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.modules.teleop.modem.ModemInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.modules.teleop.modem.ModemInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.modules.teleop.modem.ModemInfo.serializeBinaryToWriter = function(message, writer) {
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
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
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
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeUint64(
      8,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeUint64(
      9,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeString(
      10,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeString(
      11,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeString(
      12,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeString(
      13,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeInt32(
      14,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 15));
  if (f != null) {
    writer.writeInt32(
      15,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 16));
  if (f != null) {
    writer.writeInt32(
      16,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 17));
  if (f != null) {
    writer.writeInt32(
      17,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 18));
  if (f != null) {
    writer.writeBool(
      18,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 19));
  if (f != null) {
    writer.writeInt32(
      19,
      f
    );
  }
};


/**
 * optional apollo.common.Header header = 1;
 * @return {?proto.apollo.common.Header}
 */
proto.modules.teleop.modem.ModemInfo.prototype.getHeader = function() {
  return /** @type{?proto.apollo.common.Header} */ (
    jspb.Message.getWrapperField(this, proto.apollo.common.Header, 1));
};


/**
 * @param {?proto.apollo.common.Header|undefined} value
 * @return {!proto.modules.teleop.modem.ModemInfo} returns this
*/
proto.modules.teleop.modem.ModemInfo.prototype.setHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.modules.teleop.modem.ModemInfo} returns this
 */
proto.modules.teleop.modem.ModemInfo.prototype.clearHeader = function() {
  return this.setHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.modules.teleop.modem.ModemInfo.prototype.hasHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string provider = 2;
 * @return {string}
 */
proto.modules.teleop.modem.ModemInfo.prototype.getProvider = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.modules.teleop.modem.ModemInfo} returns this
 */
proto.modules.teleop.modem.ModemInfo.prototype.setProvider = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.modules.teleop.modem.ModemInfo} returns this
 */
proto.modules.teleop.modem.ModemInfo.prototype.clearProvider = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.modules.teleop.modem.ModemInfo.prototype.hasProvider = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string ip = 3;
 * @return {string}
 */
proto.modules.teleop.modem.ModemInfo.prototype.getIp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.modules.teleop.modem.ModemInfo} returns this
 */
proto.modules.teleop.modem.ModemInfo.prototype.setIp = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.modules.teleop.modem.ModemInfo} returns this
 */
proto.modules.teleop.modem.ModemInfo.prototype.clearIp = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.modules.teleop.modem.ModemInfo.prototype.hasIp = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 ip_count = 4;
 * @return {number}
 */
proto.modules.teleop.modem.ModemInfo.prototype.getIpCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.modules.teleop.modem.ModemInfo} returns this
 */
proto.modules.teleop.modem.ModemInfo.prototype.setIpCount = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.modules.teleop.modem.ModemInfo} returns this
 */
proto.modules.teleop.modem.ModemInfo.prototype.clearIpCount = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.modules.teleop.modem.ModemInfo.prototype.hasIpCount = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string gateway = 5;
 * @return {string}
 */
proto.modules.teleop.modem.ModemInfo.prototype.getGateway = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.modules.teleop.modem.ModemInfo} returns this
 */
proto.modules.teleop.modem.ModemInfo.prototype.setGateway = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.modules.teleop.modem.ModemInfo} returns this
 */
proto.modules.teleop.modem.ModemInfo.prototype.clearGateway = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.modules.teleop.modem.ModemInfo.prototype.hasGateway = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string port = 6;
 * @return {string}
 */
proto.modules.teleop.modem.ModemInfo.prototype.getPort = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.modules.teleop.modem.ModemInfo} returns this
 */
proto.modules.teleop.modem.ModemInfo.prototype.setPort = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.modules.teleop.modem.ModemInfo} returns this
 */
proto.modules.teleop.modem.ModemInfo.prototype.clearPort = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.modules.teleop.modem.ModemInfo.prototype.hasPort = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string dev = 7;
 * @return {string}
 */
proto.modules.teleop.modem.ModemInfo.prototype.getDev = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.modules.teleop.modem.ModemInfo} returns this
 */
proto.modules.teleop.modem.ModemInfo.prototype.setDev = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.modules.teleop.modem.ModemInfo} returns this
 */
proto.modules.teleop.modem.ModemInfo.prototype.clearDev = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.modules.teleop.modem.ModemInfo.prototype.hasDev = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional uint64 tx = 8;
 * @return {number}
 */
proto.modules.teleop.modem.ModemInfo.prototype.getTx = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.modules.teleop.modem.ModemInfo} returns this
 */
proto.modules.teleop.modem.ModemInfo.prototype.setTx = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.modules.teleop.modem.ModemInfo} returns this
 */
proto.modules.teleop.modem.ModemInfo.prototype.clearTx = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.modules.teleop.modem.ModemInfo.prototype.hasTx = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional uint64 rx = 9;
 * @return {number}
 */
proto.modules.teleop.modem.ModemInfo.prototype.getRx = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.modules.teleop.modem.ModemInfo} returns this
 */
proto.modules.teleop.modem.ModemInfo.prototype.setRx = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.modules.teleop.modem.ModemInfo} returns this
 */
proto.modules.teleop.modem.ModemInfo.prototype.clearRx = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.modules.teleop.modem.ModemInfo.prototype.hasRx = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string ping = 10;
 * @return {string}
 */
proto.modules.teleop.modem.ModemInfo.prototype.getPing = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.modules.teleop.modem.ModemInfo} returns this
 */
proto.modules.teleop.modem.ModemInfo.prototype.setPing = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.modules.teleop.modem.ModemInfo} returns this
 */
proto.modules.teleop.modem.ModemInfo.prototype.clearPing = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.modules.teleop.modem.ModemInfo.prototype.hasPing = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional string smoni = 11;
 * @return {string}
 */
proto.modules.teleop.modem.ModemInfo.prototype.getSmoni = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.modules.teleop.modem.ModemInfo} returns this
 */
proto.modules.teleop.modem.ModemInfo.prototype.setSmoni = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.modules.teleop.modem.ModemInfo} returns this
 */
proto.modules.teleop.modem.ModemInfo.prototype.clearSmoni = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.modules.teleop.modem.ModemInfo.prototype.hasSmoni = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional string technology = 12;
 * @return {string}
 */
proto.modules.teleop.modem.ModemInfo.prototype.getTechnology = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.modules.teleop.modem.ModemInfo} returns this
 */
proto.modules.teleop.modem.ModemInfo.prototype.setTechnology = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.modules.teleop.modem.ModemInfo} returns this
 */
proto.modules.teleop.modem.ModemInfo.prototype.clearTechnology = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.modules.teleop.modem.ModemInfo.prototype.hasTechnology = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional string connection = 13;
 * @return {string}
 */
proto.modules.teleop.modem.ModemInfo.prototype.getConnection = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.modules.teleop.modem.ModemInfo} returns this
 */
proto.modules.teleop.modem.ModemInfo.prototype.setConnection = function(value) {
  return jspb.Message.setField(this, 13, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.modules.teleop.modem.ModemInfo} returns this
 */
proto.modules.teleop.modem.ModemInfo.prototype.clearConnection = function() {
  return jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.modules.teleop.modem.ModemInfo.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional int32 signal = 14;
 * @return {number}
 */
proto.modules.teleop.modem.ModemInfo.prototype.getSignal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.modules.teleop.modem.ModemInfo} returns this
 */
proto.modules.teleop.modem.ModemInfo.prototype.setSignal = function(value) {
  return jspb.Message.setField(this, 14, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.modules.teleop.modem.ModemInfo} returns this
 */
proto.modules.teleop.modem.ModemInfo.prototype.clearSignal = function() {
  return jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.modules.teleop.modem.ModemInfo.prototype.hasSignal = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional int32 quality = 15;
 * @return {number}
 */
proto.modules.teleop.modem.ModemInfo.prototype.getQuality = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.modules.teleop.modem.ModemInfo} returns this
 */
proto.modules.teleop.modem.ModemInfo.prototype.setQuality = function(value) {
  return jspb.Message.setField(this, 15, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.modules.teleop.modem.ModemInfo} returns this
 */
proto.modules.teleop.modem.ModemInfo.prototype.clearQuality = function() {
  return jspb.Message.setField(this, 15, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.modules.teleop.modem.ModemInfo.prototype.hasQuality = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional int32 bandwidth_ul = 16;
 * @return {number}
 */
proto.modules.teleop.modem.ModemInfo.prototype.getBandwidthUl = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/**
 * @param {number} value
 * @return {!proto.modules.teleop.modem.ModemInfo} returns this
 */
proto.modules.teleop.modem.ModemInfo.prototype.setBandwidthUl = function(value) {
  return jspb.Message.setField(this, 16, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.modules.teleop.modem.ModemInfo} returns this
 */
proto.modules.teleop.modem.ModemInfo.prototype.clearBandwidthUl = function() {
  return jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.modules.teleop.modem.ModemInfo.prototype.hasBandwidthUl = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional int32 bandwidth_dl = 17;
 * @return {number}
 */
proto.modules.teleop.modem.ModemInfo.prototype.getBandwidthDl = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/**
 * @param {number} value
 * @return {!proto.modules.teleop.modem.ModemInfo} returns this
 */
proto.modules.teleop.modem.ModemInfo.prototype.setBandwidthDl = function(value) {
  return jspb.Message.setField(this, 17, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.modules.teleop.modem.ModemInfo} returns this
 */
proto.modules.teleop.modem.ModemInfo.prototype.clearBandwidthDl = function() {
  return jspb.Message.setField(this, 17, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.modules.teleop.modem.ModemInfo.prototype.hasBandwidthDl = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional bool ca_aggregation = 18;
 * @return {boolean}
 */
proto.modules.teleop.modem.ModemInfo.prototype.getCaAggregation = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 18, false));
};


/**
 * @param {boolean} value
 * @return {!proto.modules.teleop.modem.ModemInfo} returns this
 */
proto.modules.teleop.modem.ModemInfo.prototype.setCaAggregation = function(value) {
  return jspb.Message.setField(this, 18, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.modules.teleop.modem.ModemInfo} returns this
 */
proto.modules.teleop.modem.ModemInfo.prototype.clearCaAggregation = function() {
  return jspb.Message.setField(this, 18, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.modules.teleop.modem.ModemInfo.prototype.hasCaAggregation = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional int32 rank = 19;
 * @return {number}
 */
proto.modules.teleop.modem.ModemInfo.prototype.getRank = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/**
 * @param {number} value
 * @return {!proto.modules.teleop.modem.ModemInfo} returns this
 */
proto.modules.teleop.modem.ModemInfo.prototype.setRank = function(value) {
  return jspb.Message.setField(this, 19, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.modules.teleop.modem.ModemInfo} returns this
 */
proto.modules.teleop.modem.ModemInfo.prototype.clearRank = function() {
  return jspb.Message.setField(this, 19, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.modules.teleop.modem.ModemInfo.prototype.hasRank = function() {
  return jspb.Message.getField(this, 19) != null;
};


