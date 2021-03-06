// source: modules/dreamview/proto/hmi_mode.proto
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

goog.provide('proto.apollo.dreamview.HMIMode');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Map');
goog.require('jspb.Message');
goog.require('proto.apollo.dreamview.CyberModule');
goog.require('proto.apollo.dreamview.Module');
goog.require('proto.apollo.dreamview.MonitoredComponent');
goog.require('proto.apollo.dreamview.ProcessMonitorConfig');

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
proto.apollo.dreamview.HMIMode = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.apollo.dreamview.HMIMode, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.apollo.dreamview.HMIMode.displayName = 'proto.apollo.dreamview.HMIMode';
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
proto.apollo.dreamview.HMIMode.prototype.toObject = function(opt_includeInstance) {
  return proto.apollo.dreamview.HMIMode.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.apollo.dreamview.HMIMode} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.dreamview.HMIMode.toObject = function(includeInstance, msg) {
  var f, obj = {
    cyberModulesMap: (f = msg.getCyberModulesMap()) ? f.toObject(includeInstance, proto.apollo.dreamview.CyberModule.toObject) : [],
    modulesMap: (f = msg.getModulesMap()) ? f.toObject(includeInstance, proto.apollo.dreamview.Module.toObject) : [],
    monitoredComponentsMap: (f = msg.getMonitoredComponentsMap()) ? f.toObject(includeInstance, proto.apollo.dreamview.MonitoredComponent.toObject) : [],
    otherComponentsMap: (f = msg.getOtherComponentsMap()) ? f.toObject(includeInstance, proto.apollo.dreamview.ProcessMonitorConfig.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


if (jspb.Message.GENERATE_FROM_OBJECT) {

/**
 * The raw object form of HMIMode as accepted by the `fromObject` method.
 * @record
 */
proto.apollo.dreamview.HMIMode.ObjectFormat = function() {
  /** @type {?|undefined} */
  this.cyberModulesMap;

  /** @type {?|undefined} */
  this.modulesMap;

  /** @type {?|undefined} */
  this.monitoredComponentsMap;

  /** @type {?|undefined} */
  this.otherComponentsMap;
};

/**
 * Loads data from an object into a new instance of this proto.
 * @param {!proto.apollo.dreamview.HMIMode.ObjectFormat} obj
 *     The object representation of this proto to load the data from.
 * @return {!proto.apollo.dreamview.HMIMode}
 */
proto.apollo.dreamview.HMIMode.fromObject = function(obj) {
  var msg = new proto.apollo.dreamview.HMIMode();
  obj.cyberModulesMap && jspb.Message.setWrapperField(
      msg, 1, jspb.Map.fromObject(obj.cyberModulesMap, proto.apollo.dreamview.CyberModule, proto.apollo.dreamview.CyberModule.fromObject));
  obj.modulesMap && jspb.Message.setWrapperField(
      msg, 2, jspb.Map.fromObject(obj.modulesMap, proto.apollo.dreamview.Module, proto.apollo.dreamview.Module.fromObject));
  obj.monitoredComponentsMap && jspb.Message.setWrapperField(
      msg, 3, jspb.Map.fromObject(obj.monitoredComponentsMap, proto.apollo.dreamview.MonitoredComponent, proto.apollo.dreamview.MonitoredComponent.fromObject));
  obj.otherComponentsMap && jspb.Message.setWrapperField(
      msg, 4, jspb.Map.fromObject(obj.otherComponentsMap, proto.apollo.dreamview.ProcessMonitorConfig, proto.apollo.dreamview.ProcessMonitorConfig.fromObject));
  return msg;
};
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.apollo.dreamview.HMIMode}
 */
proto.apollo.dreamview.HMIMode.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.apollo.dreamview.HMIMode;
  return proto.apollo.dreamview.HMIMode.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.apollo.dreamview.HMIMode} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.apollo.dreamview.HMIMode}
 */
proto.apollo.dreamview.HMIMode.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getCyberModulesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.apollo.dreamview.CyberModule.deserializeBinaryFromReader, "", new proto.apollo.dreamview.CyberModule());
         });
      break;
    case 2:
      var value = msg.getModulesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.apollo.dreamview.Module.deserializeBinaryFromReader, "", new proto.apollo.dreamview.Module());
         });
      break;
    case 3:
      var value = msg.getMonitoredComponentsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.apollo.dreamview.MonitoredComponent.deserializeBinaryFromReader, "", new proto.apollo.dreamview.MonitoredComponent());
         });
      break;
    case 4:
      var value = msg.getOtherComponentsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.apollo.dreamview.ProcessMonitorConfig.deserializeBinaryFromReader, "", new proto.apollo.dreamview.ProcessMonitorConfig());
         });
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
proto.apollo.dreamview.HMIMode.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.apollo.dreamview.HMIMode.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.apollo.dreamview.HMIMode} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.apollo.dreamview.HMIMode.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCyberModulesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.apollo.dreamview.CyberModule.serializeBinaryToWriter);
  }
  f = message.getModulesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.apollo.dreamview.Module.serializeBinaryToWriter);
  }
  f = message.getMonitoredComponentsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.apollo.dreamview.MonitoredComponent.serializeBinaryToWriter);
  }
  f = message.getOtherComponentsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.apollo.dreamview.ProcessMonitorConfig.serializeBinaryToWriter);
  }
};


/**
 * map<string, CyberModule> cyber_modules = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.apollo.dreamview.CyberModule>}
 */
proto.apollo.dreamview.HMIMode.prototype.getCyberModulesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.apollo.dreamview.CyberModule>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.apollo.dreamview.CyberModule));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.apollo.dreamview.HMIMode} returns this
 */
proto.apollo.dreamview.HMIMode.prototype.clearCyberModulesMap = function() {
  this.getCyberModulesMap().clear();
  return this;};


/**
 * map<string, Module> modules = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.apollo.dreamview.Module>}
 */
proto.apollo.dreamview.HMIMode.prototype.getModulesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.apollo.dreamview.Module>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      proto.apollo.dreamview.Module));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.apollo.dreamview.HMIMode} returns this
 */
proto.apollo.dreamview.HMIMode.prototype.clearModulesMap = function() {
  this.getModulesMap().clear();
  return this;};


/**
 * map<string, MonitoredComponent> monitored_components = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.apollo.dreamview.MonitoredComponent>}
 */
proto.apollo.dreamview.HMIMode.prototype.getMonitoredComponentsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.apollo.dreamview.MonitoredComponent>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      proto.apollo.dreamview.MonitoredComponent));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.apollo.dreamview.HMIMode} returns this
 */
proto.apollo.dreamview.HMIMode.prototype.clearMonitoredComponentsMap = function() {
  this.getMonitoredComponentsMap().clear();
  return this;};


/**
 * map<string, ProcessMonitorConfig> other_components = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.apollo.dreamview.ProcessMonitorConfig>}
 */
proto.apollo.dreamview.HMIMode.prototype.getOtherComponentsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.apollo.dreamview.ProcessMonitorConfig>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      proto.apollo.dreamview.ProcessMonitorConfig));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.apollo.dreamview.HMIMode} returns this
 */
proto.apollo.dreamview.HMIMode.prototype.clearOtherComponentsMap = function() {
  this.getOtherComponentsMap().clear();
  return this;};


