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
import FeatureFlag from '../model/FeatureFlag';
import InlineResponse401 from '../model/InlineResponse401';

/**
* FeatureFlags service.
* @module api/FeatureFlagsApi
* @version 1.0.0
*/
export default class FeatureFlagsApi {

    /**
    * Constructs a new FeatureFlagsApi. 
    * @alias module:api/FeatureFlagsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the getFeatureFlags operation.
     * @callback module:api/FeatureFlagsApi~getFeatureFlagsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/FeatureFlag>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve all features flags
     * @param {module:api/FeatureFlagsApi~getFeatureFlagsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/FeatureFlag>}
     */
    getFeatureFlags(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [FeatureFlag];
      return this.apiClient.callApi(
        '/features', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateFeatureFlag operation.
     * @callback module:api/FeatureFlagsApi~updateFeatureFlagCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FeatureFlag} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update or create a feature flag
     * @param {module:model/FeatureFlag} featureFlag 
     * @param {module:api/FeatureFlagsApi~updateFeatureFlagCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/FeatureFlag}
     */
    updateFeatureFlag(featureFlag, callback) {
      let postBody = featureFlag;
      // verify the required parameter 'featureFlag' is set
      if (featureFlag === undefined || featureFlag === null) {
        throw new Error("Missing the required parameter 'featureFlag' when calling updateFeatureFlag");
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = FeatureFlag;
      return this.apiClient.callApi(
        '/features', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
