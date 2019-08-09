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
import MismatchWarning from './MismatchWarning';

/**
 * The DomainWarnings model module.
 * @module model/DomainWarnings
 * @version 1.0.0
 */
class DomainWarnings {
    /**
     * Constructs a new <code>DomainWarnings</code>.
     * Mismatches between training data and domain actions, intents and entities
     * @alias module:model/DomainWarnings
     */
    constructor() { 
        
        DomainWarnings.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DomainWarnings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DomainWarnings} obj Optional instance to populate.
     * @return {module:model/DomainWarnings} The populated <code>DomainWarnings</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DomainWarnings();

            if (data.hasOwnProperty('action_warnings')) {
                obj['action_warnings'] = MismatchWarning.constructFromObject(data['action_warnings']);
            }
            if (data.hasOwnProperty('intent_warnings')) {
                obj['intent_warnings'] = MismatchWarning.constructFromObject(data['intent_warnings']);
            }
            if (data.hasOwnProperty('entity_warnings')) {
                obj['entity_warnings'] = MismatchWarning.constructFromObject(data['entity_warnings']);
            }
            if (data.hasOwnProperty('slot_warnings')) {
                obj['slot_warnings'] = MismatchWarning.constructFromObject(data['slot_warnings']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/MismatchWarning} action_warnings
 */
DomainWarnings.prototype['action_warnings'] = undefined;

/**
 * @member {module:model/MismatchWarning} intent_warnings
 */
DomainWarnings.prototype['intent_warnings'] = undefined;

/**
 * @member {module:model/MismatchWarning} entity_warnings
 */
DomainWarnings.prototype['entity_warnings'] = undefined;

/**
 * @member {module:model/MismatchWarning} slot_warnings
 */
DomainWarnings.prototype['slot_warnings'] = undefined;






export default DomainWarnings;

