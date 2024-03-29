/**
 * Rasa X HTTP API
 * This is the Rasa X HTTP API 
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.RasaXHttpApi);
  }
}(this, function(expect, RasaXHttpApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new RasaXHttpApi.ParseData();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ParseData', function() {
    it('should create an instance of ParseData', function() {
      // uncomment below and update the code to test ParseData
      //var instane = new RasaXHttpApi.ParseData();
      //expect(instance).to.be.a(RasaXHttpApi.ParseData);
    });

    it('should have the property entites (base name: "entites")', function() {
      // uncomment below and update the code to test the property entites
      //var instane = new RasaXHttpApi.ParseData();
      //expect(instance).to.be();
    });

    it('should have the property intent (base name: "intent")', function() {
      // uncomment below and update the code to test the property intent
      //var instane = new RasaXHttpApi.ParseData();
      //expect(instance).to.be();
    });

    it('should have the property intentRanking (base name: "intent_ranking")', function() {
      // uncomment below and update the code to test the property intentRanking
      //var instane = new RasaXHttpApi.ParseData();
      //expect(instance).to.be();
    });

    it('should have the property text (base name: "text")', function() {
      // uncomment below and update the code to test the property text
      //var instane = new RasaXHttpApi.ParseData();
      //expect(instance).to.be();
    });

  });

}));
