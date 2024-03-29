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
    instance = new RasaXHttpApi.TrainingExample();
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

  describe('TrainingExample', function() {
    it('should create an instance of TrainingExample', function() {
      // uncomment below and update the code to test TrainingExample
      //var instane = new RasaXHttpApi.TrainingExample();
      //expect(instance).to.be.a(RasaXHttpApi.TrainingExample);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new RasaXHttpApi.TrainingExample();
      //expect(instance).to.be();
    });

    it('should have the property text (base name: "text")', function() {
      // uncomment below and update the code to test the property text
      //var instane = new RasaXHttpApi.TrainingExample();
      //expect(instance).to.be();
    });

    it('should have the property intent (base name: "intent")', function() {
      // uncomment below and update the code to test the property intent
      //var instane = new RasaXHttpApi.TrainingExample();
      //expect(instance).to.be();
    });

    it('should have the property entities (base name: "entities")', function() {
      // uncomment below and update the code to test the property entities
      //var instane = new RasaXHttpApi.TrainingExample();
      //expect(instance).to.be();
    });

    it('should have the property hash (base name: "hash")', function() {
      // uncomment below and update the code to test the property hash
      //var instane = new RasaXHttpApi.TrainingExample();
      //expect(instance).to.be();
    });

    it('should have the property intentMappedTo (base name: "intent_mapped_to")', function() {
      // uncomment below and update the code to test the property intentMappedTo
      //var instane = new RasaXHttpApi.TrainingExample();
      //expect(instance).to.be();
    });

  });

}));
