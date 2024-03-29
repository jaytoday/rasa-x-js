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
import Model from '../model/Model';

/**
* Models service.
* @module api/ModelsApi
* @version 1.0.0
*/
export default class ModelsApi {

    /**
    * Constructs a new ModelsApi. 
    * @alias module:api/ModelsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getModels operation.
     * @callback module:api/ModelsApi~getModelsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Model>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of Rasa models
     * Returns a list of metadata on Rasa models. A Rasa model is a model combining a trained dialogue model with an NLU model.
     * @param {String} projectId Project ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset  (default to 0)
     * @param {Number} opts.limit 
     * @param {module:api/ModelsApi~getModelsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Model>}
     */
    getModels(projectId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'projectId' is set
      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling getModels");
      }

      let pathParams = {
        'project_id': projectId
      };
      let queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Model];
      return this.apiClient.callApi(
        '/projects/{project_id}/models', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the projectsProjectIdModelsModelDelete operation.
     * @callback module:api/ModelsApi~projectsProjectIdModelsModelDeleteCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a Rasa Core model
     * @param {String} projectId Project ID
     * @param {String} model Model name
     * @param {module:api/ModelsApi~projectsProjectIdModelsModelDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    projectsProjectIdModelsModelDelete(projectId, model, callback) {
      let postBody = null;
      // verify the required parameter 'projectId' is set
      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling projectsProjectIdModelsModelDelete");
      }
      // verify the required parameter 'model' is set
      if (model === undefined || model === null) {
        throw new Error("Missing the required parameter 'model' when calling projectsProjectIdModelsModelDelete");
      }

      let pathParams = {
        'project_id': projectId,
        'model': model
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['text/plain'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/projects/{project_id}/models/{model}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the projectsProjectIdModelsModelTagsTagDelete operation.
     * @callback module:api/ModelsApi~projectsProjectIdModelsModelTagsTagDeleteCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tag of a Rasa model
     * Rasa model tags can be deleted at this endpoint.
     * @param {String} projectId Project ID
     * @param {String} model Model name
     * @param {String} tag Model tag
     * @param {module:api/ModelsApi~projectsProjectIdModelsModelTagsTagDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    projectsProjectIdModelsModelTagsTagDelete(projectId, model, tag, callback) {
      let postBody = null;
      // verify the required parameter 'projectId' is set
      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling projectsProjectIdModelsModelTagsTagDelete");
      }
      // verify the required parameter 'model' is set
      if (model === undefined || model === null) {
        throw new Error("Missing the required parameter 'model' when calling projectsProjectIdModelsModelTagsTagDelete");
      }
      // verify the required parameter 'tag' is set
      if (tag === undefined || tag === null) {
        throw new Error("Missing the required parameter 'tag' when calling projectsProjectIdModelsModelTagsTagDelete");
      }

      let pathParams = {
        'project_id': projectId,
        'model': model,
        'tag': tag
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['text/plain'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/projects/{project_id}/models/{model}/tags/{tag}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the projectsProjectIdModelsModelTagsTagPut operation.
     * @callback module:api/ModelsApi~projectsProjectIdModelsModelTagsTagPutCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Tag a Rasa model
     * This endpoint can be used to assign a tag to a Rasa model. The tag will be removed from any other model that might have it. The endpoint returns the assigned tag with status code 200.
     * @param {String} projectId Project ID
     * @param {String} model Model name
     * @param {String} tag Model tag
     * @param {module:api/ModelsApi~projectsProjectIdModelsModelTagsTagPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    projectsProjectIdModelsModelTagsTagPut(projectId, model, tag, callback) {
      let postBody = null;
      // verify the required parameter 'projectId' is set
      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling projectsProjectIdModelsModelTagsTagPut");
      }
      // verify the required parameter 'model' is set
      if (model === undefined || model === null) {
        throw new Error("Missing the required parameter 'model' when calling projectsProjectIdModelsModelTagsTagPut");
      }
      // verify the required parameter 'tag' is set
      if (tag === undefined || tag === null) {
        throw new Error("Missing the required parameter 'tag' when calling projectsProjectIdModelsModelTagsTagPut");
      }

      let pathParams = {
        'project_id': projectId,
        'model': model,
        'tag': tag
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['text/plain'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/projects/{project_id}/models/{model}/tags/{tag}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the projectsProjectIdModelsPost operation.
     * @callback module:api/ModelsApi~projectsProjectIdModelsPostCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Upload a zipped Rasa model
     * @param {String} projectId Project ID
     * @param {Object} opts Optional parameters
     * @param {Object} opts.body 
     * @param {module:api/ModelsApi~projectsProjectIdModelsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    projectsProjectIdModelsPost(projectId, opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'projectId' is set
      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling projectsProjectIdModelsPost");
      }

      let pathParams = {
        'project_id': projectId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/gzip'];
      let accepts = ['text/plain'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/projects/{project_id}/models', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the projectsProjectIdModelsTagsTagGet operation.
     * @callback module:api/ModelsApi~projectsProjectIdModelsTagsTagGetCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a Rasa Core model with tag
     * @param {String} projectId Project ID
     * @param {String} tag Model tag
     * @param {module:api/ModelsApi~projectsProjectIdModelsTagsTagGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    projectsProjectIdModelsTagsTagGet(projectId, tag, callback) {
      let postBody = null;
      // verify the required parameter 'projectId' is set
      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling projectsProjectIdModelsTagsTagGet");
      }
      // verify the required parameter 'tag' is set
      if (tag === undefined || tag === null) {
        throw new Error("Missing the required parameter 'tag' when calling projectsProjectIdModelsTagsTagGet");
      }

      let pathParams = {
        'project_id': projectId,
        'tag': tag
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/octet-stream'];
      let returnType = 'String';
      return this.apiClient.callApi(
        '/projects/{project_id}/models/tags/{tag}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
