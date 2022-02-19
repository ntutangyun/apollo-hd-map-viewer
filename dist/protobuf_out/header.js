// source: modules/map/proto/map.proto
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

goog.provide('proto.apollo.hdmap.Header');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.apollo.hdmap.Projection');

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
proto.apollo.hdmap.Header = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.hdmap.Header, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.hdmap.Header.displayName = 'proto.apollo.hdmap.Header';
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
proto.apollo.hdmap.Header.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.hdmap.Header.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.hdmap.Header} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.hdmap.Header.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: msg.getVersion_asB64(),
    date: msg.getDate_asB64(),
    projection: (f = msg.getProjection()) && proto.apollo.hdmap.Projection.toObject(includeInstance, f),
    district: msg.getDistrict_asB64(),
    generation: msg.getGeneration_asB64(),
    revMajor: msg.getRevMajor_asB64(),
    revMinor: msg.getRevMinor_asB64(),
    left: (f = jspb.Message.getOptionalFloatingPointField(msg, 8)) == null ? undefined : f,
    top: (f = jspb.Message.getOptionalFloatingPointField(msg, 9)) == null ? undefined : f,
    right: (f = jspb.Message.getOptionalFloatingPointField(msg, 10)) == null ? undefined : f,
    bottom: (f = jspb.Message.getOptionalFloatingPointField(msg, 11)) == null ? undefined : f,
    vendor: msg.getVendor_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of Header as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.hdmap.Header.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.version;

  /** @type {?|undefined} */
  this.date;

  /** @type {?|undefined} */
  this.projection;

  /** @type {?|undefined} */
  this.district;

  /** @type {?|undefined} */
  this.generation;

  /** @type {?|undefined} */
  this.revMajor;

  /** @type {?|undefined} */
  this.revMinor;

  /** @type {?|undefined} */
  this.left;

  /** @type {?|undefined} */
  this.top;

  /** @type {?|undefined} */
  this.right;

  /** @type {?|undefined} */
  this.bottom;

  /** @type {?|undefined} */
  this.vendor;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.hdmap.Header.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.hdmap.Header}
 */
proto.apollo.hdmap.Header.fromObject = function(obj) {
  var msg = new proto.apollo.hdmap.Header();
  obj.version != null && jspb.Message.setField(msg, 1, obj.version);
  obj.date != null && jspb.Message.setField(msg, 2, obj.date);
  obj.projection && jspb.Message.setWrapperField(
      msg, 3, proto.apollo.hdmap.Projection.fromObject(obj.projection));
  obj.district != null && jspb.Message.setField(msg, 4, obj.district);
  obj.generation != null && jspb.Message.setField(msg, 5, obj.generation);
  obj.revMajor != null && jspb.Message.setField(msg, 6, obj.revMajor);
  obj.revMinor != null && jspb.Message.setField(msg, 7, obj.revMinor);
  obj.left != null && jspb.Message.setField(msg, 8, obj.left);
  obj.top != null && jspb.Message.setField(msg, 9, obj.top);
  obj.right != null && jspb.Message.setField(msg, 10, obj.right);
  obj.bottom != null && jspb.Message.setField(msg, 11, obj.bottom);
  obj.vendor != null && jspb.Message.setField(msg, 12, obj.vendor);
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.hdmap.Header}
 */
proto.apollo.hdmap.Header.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.hdmap.Header;
  return proto.apollo.hdmap.Header.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.hdmap.Header} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.hdmap.Header}
 */
proto.apollo.hdmap.Header.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setVersion(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setDate(value);
      break;
    case 3:
      var value = new proto.apollo.hdmap.Projection;
      reader.readMessage(value,proto.apollo.hdmap.Projection.deserializeBinaryFromReader);
      msg.setProjection(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setDistrict(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setGeneration(value);
      break;
    case 6:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setRevMajor(value);
      break;
    case 7:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setRevMinor(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setLeft(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTop(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setRight(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setBottom(value);
      break;
    case 12:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setVendor(value);
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
proto.apollo.hdmap.Header.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.hdmap.Header.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.hdmap.Header} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.hdmap.Header.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getProjection();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.apollo.hdmap.Projection.serializeBinaryToWriter
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBytes(
      4,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeBytes(
      5,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeBytes(
      6,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeBytes(
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
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeBytes(
      12,
      f
    );
  }
};


/**
 * optional bytes version = 1;
 * @return {!(string|Uint8Array)}
 */
proto.apollo.hdmap.Header.prototype.getVersion = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes version = 1;
 * This is a type-conversion wrapper around `getVersion()`
 * @return {string}
 */
proto.apollo.hdmap.Header.prototype.getVersion_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getVersion()));
};


/**
 * optional bytes version = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getVersion()`
 * @return {!Uint8Array}
 */
proto.apollo.hdmap.Header.prototype.getVersion_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getVersion()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.apollo.hdmap.Header} returns this
 */
proto.apollo.hdmap.Header.prototype.setVersion = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.hdmap.Header} returns this
 */
proto.apollo.hdmap.Header.prototype.clearVersion = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.hdmap.Header.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes date = 2;
 * @return {!(string|Uint8Array)}
 */
proto.apollo.hdmap.Header.prototype.getDate = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes date = 2;
 * This is a type-conversion wrapper around `getDate()`
 * @return {string}
 */
proto.apollo.hdmap.Header.prototype.getDate_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getDate()));
};


/**
 * optional bytes date = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getDate()`
 * @return {!Uint8Array}
 */
proto.apollo.hdmap.Header.prototype.getDate_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getDate()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.apollo.hdmap.Header} returns this
 */
proto.apollo.hdmap.Header.prototype.setDate = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.hdmap.Header} returns this
 */
proto.apollo.hdmap.Header.prototype.clearDate = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.hdmap.Header.prototype.hasDate = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Projection projection = 3;
 * @return {?proto.apollo.hdmap.Projection}
 */
proto.apollo.hdmap.Header.prototype.getProjection = function() {
  return /** @type{?proto.apollo.hdmap.Projection} */ (
    jspb.Message.getWrapperField(this, proto.apollo.hdmap.Projection, 3));
};


/**
 * @param {?proto.apollo.hdmap.Projection|undefined} value
 * @return {!proto.apollo.hdmap.Header} returns this
*/
proto.apollo.hdmap.Header.prototype.setProjection = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.apollo.hdmap.Header} returns this
 */
proto.apollo.hdmap.Header.prototype.clearProjection = function() {
  return this.setProjection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.hdmap.Header.prototype.hasProjection = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bytes district = 4;
 * @return {!(string|Uint8Array)}
 */
proto.apollo.hdmap.Header.prototype.getDistrict = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes district = 4;
 * This is a type-conversion wrapper around `getDistrict()`
 * @return {string}
 */
proto.apollo.hdmap.Header.prototype.getDistrict_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getDistrict()));
};


/**
 * optional bytes district = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getDistrict()`
 * @return {!Uint8Array}
 */
proto.apollo.hdmap.Header.prototype.getDistrict_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getDistrict()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.apollo.hdmap.Header} returns this
 */
proto.apollo.hdmap.Header.prototype.setDistrict = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.hdmap.Header} returns this
 */
proto.apollo.hdmap.Header.prototype.clearDistrict = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.hdmap.Header.prototype.hasDistrict = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bytes generation = 5;
 * @return {!(string|Uint8Array)}
 */
proto.apollo.hdmap.Header.prototype.getGeneration = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes generation = 5;
 * This is a type-conversion wrapper around `getGeneration()`
 * @return {string}
 */
proto.apollo.hdmap.Header.prototype.getGeneration_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getGeneration()));
};


/**
 * optional bytes generation = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getGeneration()`
 * @return {!Uint8Array}
 */
proto.apollo.hdmap.Header.prototype.getGeneration_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getGeneration()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.apollo.hdmap.Header} returns this
 */
proto.apollo.hdmap.Header.prototype.setGeneration = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.hdmap.Header} returns this
 */
proto.apollo.hdmap.Header.prototype.clearGeneration = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.hdmap.Header.prototype.hasGeneration = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bytes rev_major = 6;
 * @return {!(string|Uint8Array)}
 */
proto.apollo.hdmap.Header.prototype.getRevMajor = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * optional bytes rev_major = 6;
 * This is a type-conversion wrapper around `getRevMajor()`
 * @return {string}
 */
proto.apollo.hdmap.Header.prototype.getRevMajor_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getRevMajor()));
};


/**
 * optional bytes rev_major = 6;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getRevMajor()`
 * @return {!Uint8Array}
 */
proto.apollo.hdmap.Header.prototype.getRevMajor_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getRevMajor()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.apollo.hdmap.Header} returns this
 */
proto.apollo.hdmap.Header.prototype.setRevMajor = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.hdmap.Header} returns this
 */
proto.apollo.hdmap.Header.prototype.clearRevMajor = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.hdmap.Header.prototype.hasRevMajor = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bytes rev_minor = 7;
 * @return {!(string|Uint8Array)}
 */
proto.apollo.hdmap.Header.prototype.getRevMinor = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * optional bytes rev_minor = 7;
 * This is a type-conversion wrapper around `getRevMinor()`
 * @return {string}
 */
proto.apollo.hdmap.Header.prototype.getRevMinor_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getRevMinor()));
};


/**
 * optional bytes rev_minor = 7;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getRevMinor()`
 * @return {!Uint8Array}
 */
proto.apollo.hdmap.Header.prototype.getRevMinor_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getRevMinor()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.apollo.hdmap.Header} returns this
 */
proto.apollo.hdmap.Header.prototype.setRevMinor = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.hdmap.Header} returns this
 */
proto.apollo.hdmap.Header.prototype.clearRevMinor = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.hdmap.Header.prototype.hasRevMinor = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional double left = 8;
 * @return {number}
 */
proto.apollo.hdmap.Header.prototype.getLeft = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.hdmap.Header} returns this
 */
proto.apollo.hdmap.Header.prototype.setLeft = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.hdmap.Header} returns this
 */
proto.apollo.hdmap.Header.prototype.clearLeft = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.hdmap.Header.prototype.hasLeft = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional double top = 9;
 * @return {number}
 */
proto.apollo.hdmap.Header.prototype.getTop = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 9, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.hdmap.Header} returns this
 */
proto.apollo.hdmap.Header.prototype.setTop = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.hdmap.Header} returns this
 */
proto.apollo.hdmap.Header.prototype.clearTop = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.hdmap.Header.prototype.hasTop = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional double right = 10;
 * @return {number}
 */
proto.apollo.hdmap.Header.prototype.getRight = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 10, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.hdmap.Header} returns this
 */
proto.apollo.hdmap.Header.prototype.setRight = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.hdmap.Header} returns this
 */
proto.apollo.hdmap.Header.prototype.clearRight = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.hdmap.Header.prototype.hasRight = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional double bottom = 11;
 * @return {number}
 */
proto.apollo.hdmap.Header.prototype.getBottom = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 11, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.apollo.hdmap.Header} returns this
 */
proto.apollo.hdmap.Header.prototype.setBottom = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.hdmap.Header} returns this
 */
proto.apollo.hdmap.Header.prototype.clearBottom = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.hdmap.Header.prototype.hasBottom = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional bytes vendor = 12;
 * @return {!(string|Uint8Array)}
 */
proto.apollo.hdmap.Header.prototype.getVendor = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * optional bytes vendor = 12;
 * This is a type-conversion wrapper around `getVendor()`
 * @return {string}
 */
proto.apollo.hdmap.Header.prototype.getVendor_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getVendor()));
};


/**
 * optional bytes vendor = 12;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getVendor()`
 * @return {!Uint8Array}
 */
proto.apollo.hdmap.Header.prototype.getVendor_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getVendor()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.apollo.hdmap.Header} returns this
 */
proto.apollo.hdmap.Header.prototype.setVendor = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.apollo.hdmap.Header} returns this
 */
proto.apollo.hdmap.Header.prototype.clearVendor = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.apollo.hdmap.Header.prototype.hasVendor = function() {
  return jspb.Message.getField(this, 12) != null;
};

