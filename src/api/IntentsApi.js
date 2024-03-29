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
import IntentInformation from '../model/IntentInformation';

/**
* Intents service.
* @module api/IntentsApi
* @version 1.0.0
*/
export default class IntentsApi {

    /**
    * Constructs a new IntentsApi. 
    * @alias module:api/IntentsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getIntents operation.
     * @callback module:api/IntentsApi~getIntentsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/IntentInformation>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List intents
     * Intents used in training examples, domain, or temporary intents
     * @param {String} projectId Project ID
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.temporary If `True` the query will also include temporary intents
     * @param {module:api/IntentsApi~getIntentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/IntentInformation>}
     */
    getIntents(projectId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'projectId' is set
      if (projectId === undefined || projectId === null) {
        throw new Error("Missing the required parameter 'projectId' when calling getIntents");
      }

      let pathParams = {
        'project_id': projectId
      };
      let queryParams = {
        'temporary': opts['temporary']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [IntentInformation];
      return this.apiClient.callApi(
        '/projects/{project_id}/intents', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
