/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.15.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the OSDiskImage class.
 * @constructor
 * Contains the os disk image information.
 * @member {string} operatingSystem Gets or sets the operating system of the
 * osDiskImage. Possible values include: 'Windows', 'Linux'
 * 
 */
function OSDiskImage() {
}

/**
 * Defines the metadata of OSDiskImage
 *
 * @returns {object} metadata of OSDiskImage
 *
 */
OSDiskImage.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'OSDiskImage',
    type: {
      name: 'Composite',
      className: 'OSDiskImage',
      modelProperties: {
        operatingSystem: {
          required: true,
          serializedName: 'operatingSystem',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = OSDiskImage;