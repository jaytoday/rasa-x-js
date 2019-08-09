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
    instance = new RasaXHttpApi.InlineResponse401();
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

  describe('InlineResponse401', function() {
    it('should create an instance of InlineResponse401', function() {
      // uncomment below and update the code to test InlineResponse401
      //var instane = new RasaXHttpApi.InlineResponse401();
      //expect(instance).to.be.a(RasaXHttpApi.InlineResponse401);
    });

    it('should have the property exception (base name: "exception")', function() {
      // uncomment below and update the code to test the property exception
      //var instane = new RasaXHttpApi.InlineResponse401();
      //expect(instance).to.be();
    });

    it('should have the property reasons (base name: "reasons")', function() {
      // uncomment below and update the code to test the property reasons
      //var instane = new RasaXHttpApi.InlineResponse401();
      //expect(instance).to.be();
    });

  });

}));
