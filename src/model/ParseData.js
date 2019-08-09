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
import Intent from './Intent';

/**
 * The ParseData model module.
 * @module model/ParseData
 * @version 1.0.0
 */
class ParseData {
    /**
     * Constructs a new <code>ParseData</code>.
     * @alias module:model/ParseData
     */
    constructor() { 
        
        ParseData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ParseData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ParseData} obj Optional instance to populate.
     * @return {module:model/ParseData} The populated <code>ParseData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ParseData();

            if (data.hasOwnProperty('entites')) {
                obj['entites'] = ApiClient.convertToType(data['entites'], [Object]);
            }
            if (data.hasOwnProperty('intent')) {
                obj['intent'] = Intent.constructFromObject(data['intent']);
            }
            if (data.hasOwnProperty('intent_ranking')) {
                obj['intent_ranking'] = ApiClient.convertToType(data['intent_ranking'], [Intent]);
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<Object>} entites
 */
ParseData.prototype['entites'] = undefined;

/**
 * @member {module:model/Intent} intent
 */
ParseData.prototype['intent'] = undefined;

/**
 * @member {Array.<module:model/Intent>} intent_ranking
 */
ParseData.prototype['intent_ranking'] = undefined;

/**
 * @member {String} text
 */
ParseData.prototype['text'] = undefined;






export default ParseData;

