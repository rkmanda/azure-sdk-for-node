/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the NamespaceResource class.
 * @constructor
 * Description of a Namespace resource.
 *
 * @member {object} [sku]
 * 
 * @member {string} [sku.name] Name of this Sku. Possible values include:
 * 'Basic', 'Standard', 'Premium'
 * 
 * @member {string} [sku.tier] The tier of this particular SKU. Possible
 * values include: 'Basic', 'Standard', 'Premium'
 * 
 * @member {number} [sku.capacity] The eventhub throughput units
 * 
 * @member {string} [provisioningState] Provisioning state of the Namespace.
 * 
 * @member {string} [status] State of the namespace. Possible values include:
 * 'Unknown', 'Creating', 'Created', 'Activating', 'Enabling', 'Active',
 * 'Disabling', 'Disabled', 'SoftDeleting', 'SoftDeleted', 'Removing',
 * 'Removed', 'Failed'
 * 
 * @member {date} [createdAt] The time the namespace was created.
 * 
 * @member {date} [updatedAt] The time the namespace was updated.
 * 
 * @member {string} [serviceBusEndpoint] Endpoint you can use to perform
 * ServiceBus operations.
 * 
 * @member {boolean} [createACSNamespace] Indicates whether to create ACS
 * namespace.
 * 
 * @member {boolean} [enabled] Specifies whether this instance is enabled.
 * 
 */
function NamespaceResource() {
  NamespaceResource['super_'].call(this);
}

util.inherits(NamespaceResource, models['Resource']);

/**
 * Defines the metadata of NamespaceResource
 *
 * @returns {object} metadata of NamespaceResource
 *
 */
NamespaceResource.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'NamespaceResource',
    type: {
      name: 'Composite',
      className: 'NamespaceResource',
      modelProperties: {
        id: {
          required: false,
          readOnly: true,
          serializedName: 'id',
          type: {
            name: 'String'
          }
        },
        name: {
          required: false,
          readOnly: true,
          serializedName: 'name',
          type: {
            name: 'String'
          }
        },
        type: {
          required: false,
          readOnly: true,
          serializedName: 'type',
          type: {
            name: 'String'
          }
        },
        location: {
          required: true,
          serializedName: 'location',
          type: {
            name: 'String'
          }
        },
        tags: {
          required: false,
          serializedName: 'tags',
          type: {
            name: 'Dictionary',
            value: {
                required: false,
                serializedName: 'StringElementType',
                type: {
                  name: 'String'
                }
            }
          }
        },
        sku: {
          required: false,
          serializedName: 'sku',
          type: {
            name: 'Composite',
            className: 'Sku'
          }
        },
        provisioningState: {
          required: false,
          serializedName: 'properties.provisioningState',
          type: {
            name: 'String'
          }
        },
        status: {
          required: false,
          serializedName: 'properties.status',
          type: {
            name: 'Enum',
            allowedValues: [ 'Unknown', 'Creating', 'Created', 'Activating', 'Enabling', 'Active', 'Disabling', 'Disabled', 'SoftDeleting', 'SoftDeleted', 'Removing', 'Removed', 'Failed' ]
          }
        },
        createdAt: {
          required: false,
          serializedName: 'properties.createdAt',
          type: {
            name: 'DateTime'
          }
        },
        updatedAt: {
          required: false,
          serializedName: 'properties.updatedAt',
          type: {
            name: 'DateTime'
          }
        },
        serviceBusEndpoint: {
          required: false,
          serializedName: 'properties.serviceBusEndpoint',
          type: {
            name: 'String'
          }
        },
        createACSNamespace: {
          required: false,
          serializedName: 'properties.createACSNamespace',
          type: {
            name: 'Boolean'
          }
        },
        enabled: {
          required: false,
          serializedName: 'properties.enabled',
          type: {
            name: 'Boolean'
          }
        }
      }
    }
  };
};

module.exports = NamespaceResource;