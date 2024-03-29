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

import ApiClient from '../ApiClient';

/**
 * The RasaCoreStoryObjectAnnotation model module.
 * @module model/RasaCoreStoryObjectAnnotation
 * @version 1.0.0
 */
class RasaCoreStoryObjectAnnotation {
    /**
     * Constructs a new <code>RasaCoreStoryObjectAnnotation</code>.
     * @alias module:model/RasaCoreStoryObjectAnnotation
     */
    constructor() { 
        
        RasaCoreStoryObjectAnnotation.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RasaCoreStoryObjectAnnotation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RasaCoreStoryObjectAnnotation} obj Optional instance to populate.
     * @return {module:model/RasaCoreStoryObjectAnnotation} The populated <code>RasaCoreStoryObjectAnnotation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RasaCoreStoryObjectAnnotation();

            if (data.hasOwnProperty('user')) {
                obj['user'] = ApiClient.convertToType(data['user'], 'String');
            }
            if (data.hasOwnProperty('time')) {
                obj['time'] = ApiClient.convertToType(data['time'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} user
 */
RasaCoreStoryObjectAnnotation.prototype['user'] = undefined;

/**
 * @member {Number} time
 */
RasaCoreStoryObjectAnnotation.prototype['time'] = undefined;

/**
 * @member {String} name
 */
RasaCoreStoryObjectAnnotation.prototype['name'] = undefined;






export default RasaCoreStoryObjectAnnotation;

