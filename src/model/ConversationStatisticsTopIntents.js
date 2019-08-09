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
 * The ConversationStatisticsTopIntents model module.
 * @module model/ConversationStatisticsTopIntents
 * @version 1.0.0
 */
class ConversationStatisticsTopIntents {
    /**
     * Constructs a new <code>ConversationStatisticsTopIntents</code>.
     * @alias module:model/ConversationStatisticsTopIntents
     */
    constructor() { 
        
        ConversationStatisticsTopIntents.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConversationStatisticsTopIntents</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConversationStatisticsTopIntents} obj Optional instance to populate.
     * @return {module:model/ConversationStatisticsTopIntents} The populated <code>ConversationStatisticsTopIntents</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConversationStatisticsTopIntents();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
ConversationStatisticsTopIntents.prototype['name'] = undefined;

/**
 * @member {Number} count
 */
ConversationStatisticsTopIntents.prototype['count'] = undefined;






export default ConversationStatisticsTopIntents;
