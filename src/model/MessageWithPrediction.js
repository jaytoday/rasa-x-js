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
import MessageWithPredictionUserInput from './MessageWithPredictionUserInput';

/**
 * The MessageWithPrediction model module.
 * @module model/MessageWithPrediction
 * @version 1.0.0
 */
class MessageWithPrediction {
    /**
     * Constructs a new <code>MessageWithPrediction</code>.
     * Message with Rasa NLU prediction
     * @alias module:model/MessageWithPrediction
     */
    constructor() { 
        
        MessageWithPrediction.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MessageWithPrediction</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MessageWithPrediction} obj Optional instance to populate.
     * @return {module:model/MessageWithPrediction} The populated <code>MessageWithPrediction</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MessageWithPrediction();

            if (data.hasOwnProperty('user_input')) {
                obj['user_input'] = MessageWithPredictionUserInput.constructFromObject(data['user_input']);
            }
            if (data.hasOwnProperty('project_id')) {
                obj['project_id'] = ApiClient.convertToType(data['project_id'], 'String');
            }
            if (data.hasOwnProperty('hash')) {
                obj['hash'] = ApiClient.convertToType(data['hash'], 'String');
            }
            if (data.hasOwnProperty('model')) {
                obj['model'] = ApiClient.convertToType(data['model'], 'String');
            }
            if (data.hasOwnProperty('time')) {
                obj['time'] = ApiClient.convertToType(data['time'], 'Number');
            }
            if (data.hasOwnProperty('team')) {
                obj['team'] = ApiClient.convertToType(data['team'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/MessageWithPredictionUserInput} user_input
 */
MessageWithPrediction.prototype['user_input'] = undefined;

/**
 * @member {String} project_id
 */
MessageWithPrediction.prototype['project_id'] = undefined;

/**
 * @member {String} hash
 */
MessageWithPrediction.prototype['hash'] = undefined;

/**
 * @member {String} model
 */
MessageWithPrediction.prototype['model'] = undefined;

/**
 * @member {Number} time
 */
MessageWithPrediction.prototype['time'] = undefined;

/**
 * @member {String} team
 */
MessageWithPrediction.prototype['team'] = undefined;






export default MessageWithPrediction;

