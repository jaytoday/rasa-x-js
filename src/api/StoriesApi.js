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


import ApiClient from "../ApiClient";
import InlineResponse401 from '../model/InlineResponse401';
import RasaCoreStoryObject from '../model/RasaCoreStoryObject';

/**
* Stories service.
* @module api/StoriesApi
* @version 1.0.0
*/
export default class StoriesApi {

    /**
    * Constructs a new StoriesApi. 
    * @alias module:api/StoriesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the deleteStory operation.
     * @callback module:api/StoriesApi~deleteStoryCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a Rasa Core Story
     * @param {String} storyId Story ID
     * @param {module:api/StoriesApi~deleteStoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    deleteStory(storyId, callback) {
      let postBody = null;
      // verify the required parameter 'storyId' is set
      if (storyId === undefined || storyId === null) {
        throw new Error("Missing the required parameter 'storyId' when calling deleteStory");
      }

      let pathParams = {
        'story_id': storyId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/stories/{story_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getStories operation.
     * @callback module:api/StoriesApi~getStoriesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/RasaCoreStoryObject>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get saved stories
     * @param {Object} opts Optional parameters
     * @param {String} opts.q Search string
     * @param {module:api/StoriesApi~getStoriesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/RasaCoreStoryObject>}
     */
    getStories(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'q': opts['q']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [RasaCoreStoryObject];
      return this.apiClient.callApi(
        '/stories', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getStoriesAsMarkdown operation.
     * @callback module:api/StoriesApi~getStoriesAsMarkdownCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get stories as markdown file
     * @param {Object} opts Optional parameters
     * @param {String} opts.q Search string
     * @param {module:api/StoriesApi~getStoriesAsMarkdownCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    getStoriesAsMarkdown(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'q': opts['q']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['text/markdown', 'application/json'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/stories.md', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the modifyStory operation.
     * @callback module:api/StoriesApi~modifyStoryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RasaCoreStoryObject} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Modify Rasa Core story
     * @param {String} storyId Story ID
     * @param {String} body 
     * @param {module:api/StoriesApi~modifyStoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RasaCoreStoryObject}
     */
    modifyStory(storyId, body, callback) {
      let postBody = body;
      // verify the required parameter 'storyId' is set
      if (storyId === undefined || storyId === null) {
        throw new Error("Missing the required parameter 'storyId' when calling modifyStory");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling modifyStory");
      }

      let pathParams = {
        'story_id': storyId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['text/markdown'];
      let accepts = ['application/json'];
      let returnType = RasaCoreStoryObject;
      return this.apiClient.callApi(
        '/stories/{story_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the replaceStories operation.
     * @callback module:api/StoriesApi~replaceStoriesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/RasaCoreStoryObject>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Replace stories
     * @param {String} body 
     * @param {module:api/StoriesApi~replaceStoriesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/RasaCoreStoryObject>}
     */
    replaceStories(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling replaceStories");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['text/markdown'];
      let accepts = ['application/json'];
      let returnType = [RasaCoreStoryObject];
      return this.apiClient.callApi(
        '/stories', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the uploadStories operation.
     * @callback module:api/StoriesApi~uploadStoriesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/RasaCoreStoryObject>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Upload stories
     * @param {String} body 
     * @param {module:api/StoriesApi~uploadStoriesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/RasaCoreStoryObject>}
     */
    uploadStories(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling uploadStories");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['text/markdown'];
      let accepts = ['application/json'];
      let returnType = [RasaCoreStoryObject];
      return this.apiClient.callApi(
        '/stories', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
