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
    instance = new RasaXHttpApi.Action();
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

  describe('Action', function() {
    it('should create an instance of Action', function() {
      // uncomment below and update the code to test Action
      //var instane = new RasaXHttpApi.Action();
      //expect(instance).to.be.a(RasaXHttpApi.Action);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new RasaXHttpApi.Action();
      //expect(instance).to.be();
    });

    it('should have the property domainId (base name: "domain_id")', function() {
      // uncomment below and update the code to test the property domainId
      //var instane = new RasaXHttpApi.Action();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new RasaXHttpApi.Action();
      //expect(instance).to.be();
    });

    it('should have the property isForm (base name: "is_form")', function() {
      // uncomment below and update the code to test the property isForm
      //var instane = new RasaXHttpApi.Action();
      //expect(instance).to.be();
    });

  });

}));
