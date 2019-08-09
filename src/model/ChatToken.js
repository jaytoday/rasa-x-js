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
 * The ChatToken model module.
 * @module model/ChatToken
 * @version 1.0.0
 */
class ChatToken {
    /**
     * Constructs a new <code>ChatToken</code>.
     * @alias module:model/ChatToken
     */
    constructor() { 
        
        ChatToken.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ChatToken</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChatToken} obj Optional instance to populate.
     * @return {module:model/ChatToken} The populated <code>ChatToken</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ChatToken();

            if (data.hasOwnProperty('bot_name')) {
                obj['bot_name'] = ApiClient.convertToType(data['bot_name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('expires')) {
                obj['expires'] = ApiClient.convertToType(data['expires'], 'Number');
            }
            if (data.hasOwnProperty('chat_token')) {
                obj['chat_token'] = ApiClient.convertToType(data['chat_token'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Name of the bot to be displayed to the receiver of a shared bot
 * @member {String} bot_name
 */
ChatToken.prototype['bot_name'] = undefined;

/**
 * Description of the bot
 * @member {String} description
 */
ChatToken.prototype['description'] = undefined;

/**
 * expiration timestamp
 * @member {Number} expires
 */
ChatToken.prototype['expires'] = undefined;

/**
 * chat token
 * @member {String} chat_token
 */
ChatToken.prototype['chat_token'] = undefined;






export default ChatToken;

