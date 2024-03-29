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
    instance = new RasaXHttpApi.StoriesApi();
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

  describe('StoriesApi', function() {
    describe('deleteStory', function() {
      it('should call deleteStory successfully', function(done) {
        //uncomment below and update the code to test deleteStory
        //instance.deleteStory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getStories', function() {
      it('should call getStories successfully', function(done) {
        //uncomment below and update the code to test getStories
        //instance.getStories(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getStoriesAsMarkdown', function() {
      it('should call getStoriesAsMarkdown successfully', function(done) {
        //uncomment below and update the code to test getStoriesAsMarkdown
        //instance.getStoriesAsMarkdown(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('modifyStory', function() {
      it('should call modifyStory successfully', function(done) {
        //uncomment below and update the code to test modifyStory
        //instance.modifyStory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceStories', function() {
      it('should call replaceStories successfully', function(done) {
        //uncomment below and update the code to test replaceStories
        //instance.replaceStories(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('uploadStories', function() {
      it('should call uploadStories successfully', function(done) {
        //uncomment below and update the code to test uploadStories
        //instance.uploadStories(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
