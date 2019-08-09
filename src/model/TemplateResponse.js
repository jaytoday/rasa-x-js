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
 * The TemplateResponse model module.
 * @module model/TemplateResponse
 * @version 1.0.0
 */
class TemplateResponse {
    /**
     * Constructs a new <code>TemplateResponse</code>.
     * Bot response with filled template
     * @alias module:model/TemplateResponse
     */
    constructor() { 
        
        TemplateResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TemplateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TemplateResponse} obj Optional instance to populate.
     * @return {module:model/TemplateResponse} The populated <code>TemplateResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TemplateResponse();

            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
            if (data.hasOwnProperty('buttons')) {
                obj['buttons'] = ApiClient.convertToType(data['buttons'], ['String']);
            }
            if (data.hasOwnProperty('image')) {
                obj['image'] = ApiClient.convertToType(data['image'], 'String');
            }
            if (data.hasOwnProperty('elements')) {
                obj['elements'] = ApiClient.convertToType(data['elements'], ['String']);
            }
            if (data.hasOwnProperty('attachment')) {
                obj['attachment'] = ApiClient.convertToType(data['attachment'], 'String');
            }
            if (data.hasOwnProperty('template')) {
                obj['template'] = ApiClient.convertToType(data['template'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} text
 */
TemplateResponse.prototype['text'] = undefined;

/**
 * @member {Array.<String>} buttons
 */
TemplateResponse.prototype['buttons'] = undefined;

/**
 * @member {String} image
 */
TemplateResponse.prototype['image'] = undefined;

/**
 * @member {Array.<String>} elements
 */
TemplateResponse.prototype['elements'] = undefined;

/**
 * @member {String} attachment
 */
TemplateResponse.prototype['attachment'] = undefined;

/**
 * @member {String} template
 */
TemplateResponse.prototype['template'] = undefined;






export default TemplateResponse;

