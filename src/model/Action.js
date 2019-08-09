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
 * The Action model module.
 * @module model/Action
 * @version 1.0.0
 */
class Action {
    /**
     * Constructs a new <code>Action</code>.
     * @alias module:model/Action
     * @param name {String} Name of action
     */
    constructor(name) { 
        
        Action.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>Action</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Action} obj Optional instance to populate.
     * @return {module:model/Action} The populated <code>Action</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Action();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('domain_id')) {
                obj['domain_id'] = ApiClient.convertToType(data['domain_id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('is_form')) {
                obj['is_form'] = ApiClient.convertToType(data['is_form'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Id of action
 * @member {Number} id
 */
Action.prototype['id'] = undefined;

/**
 * Id of domain which action belongs to
 * @member {Number} domain_id
 */
Action.prototype['domain_id'] = undefined;

/**
 * Name of action
 * @member {String} name
 */
Action.prototype['name'] = undefined;

/**
 * Indicates if action is a form
 * @member {Boolean} is_form
 */
Action.prototype['is_form'] = undefined;






export default Action;

