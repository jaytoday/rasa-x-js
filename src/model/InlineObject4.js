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
 * The InlineObject4 model module.
 * @module model/InlineObject4
 * @version 1.0.0
 */
class InlineObject4 {
    /**
     * Constructs a new <code>InlineObject4</code>.
     * @alias module:model/InlineObject4
     * @param intent {String} Name of the correct intent
     */
    constructor(intent) { 
        
        InlineObject4.initialize(this, intent);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, intent) { 
        obj['intent'] = intent;
    }

    /**
     * Constructs a <code>InlineObject4</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject4} obj Optional instance to populate.
     * @return {module:model/InlineObject4} The populated <code>InlineObject4</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject4();

            if (data.hasOwnProperty('intent')) {
                obj['intent'] = ApiClient.convertToType(data['intent'], 'String');
            }
            if (data.hasOwnProperty('mapped_to')) {
                obj['mapped_to'] = ApiClient.convertToType(data['mapped_to'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Name of the correct intent
 * @member {String} intent
 */
InlineObject4.prototype['intent'] = undefined;

/**
 * Maps temporary intents to existing ones.
 * @member {String} mapped_to
 */
InlineObject4.prototype['mapped_to'] = undefined;






export default InlineObject4;
