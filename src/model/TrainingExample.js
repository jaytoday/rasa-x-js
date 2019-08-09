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
import TrainingExampleEntities from './TrainingExampleEntities';

/**
 * The TrainingExample model module.
 * @module model/TrainingExample
 * @version 1.0.0
 */
class TrainingExample {
    /**
     * Constructs a new <code>TrainingExample</code>.
     * @alias module:model/TrainingExample
     */
    constructor() { 
        
        TrainingExample.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TrainingExample</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TrainingExample} obj Optional instance to populate.
     * @return {module:model/TrainingExample} The populated <code>TrainingExample</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TrainingExample();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
            if (data.hasOwnProperty('intent')) {
                obj['intent'] = ApiClient.convertToType(data['intent'], 'String');
            }
            if (data.hasOwnProperty('entities')) {
                obj['entities'] = ApiClient.convertToType(data['entities'], [TrainingExampleEntities]);
            }
            if (data.hasOwnProperty('hash')) {
                obj['hash'] = ApiClient.convertToType(data['hash'], 'String');
            }
            if (data.hasOwnProperty('intent_mapped_to')) {
                obj['intent_mapped_to'] = ApiClient.convertToType(data['intent_mapped_to'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
TrainingExample.prototype['id'] = undefined;

/**
 * @member {String} text
 */
TrainingExample.prototype['text'] = undefined;

/**
 * @member {String} intent
 */
TrainingExample.prototype['intent'] = undefined;

/**
 * @member {Array.<module:model/TrainingExampleEntities>} entities
 */
TrainingExample.prototype['entities'] = undefined;

/**
 * @member {String} hash
 */
TrainingExample.prototype['hash'] = undefined;

/**
 * Name of the intent which the intent is mapped to. If the intent is a temporary one, it has to be mapped to an existing one to be part of the training. If its value is `null` it deletes existing mappings.
 * @member {String} intent_mapped_to
 */
TrainingExample.prototype['intent_mapped_to'] = undefined;






export default TrainingExample;

