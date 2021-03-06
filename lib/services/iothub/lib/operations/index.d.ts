/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
*/

import { ServiceClientOptions, RequestOptions, ServiceCallback } from 'ms-rest';
import * as models from '../models';


/**
 * @class
 * IotHubResource
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the IotHubClient.
 */
export interface IotHubResource {

    /**
     * @summary Get an IotHub.
     *
     * Get an IotHub.
     *
     * @param {string} resourceGroupName The name of the resource group.
     * 
     * @param {string} resourceName The name of the resource.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    get(resourceGroupName: string, resourceName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.IotHubDescription>): void;
    get(resourceGroupName: string, resourceName: string, callback: ServiceCallback<models.IotHubDescription>): void;

    /**
     * @summary Create or update an IotHub.
     *
     * Create or update an IotHub.
     *
     * @param {string} resourceGroupName The name of the resource group.
     * 
     * @param {string} resourceName The name of the resource.
     * 
     * @param {object} iotHubDescription The Iot hub description.
     * 
     * @param {string} [iotHubDescription.subscriptionid] The subscription
     * identifier.
     * 
     * @param {string} [iotHubDescription.resourcegroup] The resource group name
     * uniquely identifies the resource group within the user subscriptionId.
     * 
     * @param {string} [iotHubDescription.etag] The Etag field is *not* required.
     * If it is provided in the response body, it must also be provided as a
     * header per the normal ETag convention.
     * 
     * @param {object} [iotHubDescription.properties]
     * 
     * @param {array} [iotHubDescription.properties.authorizationPolicies] The
     * authorization rules.
     * 
     * @param {array} [iotHubDescription.properties.ipFilterRules] The IP filter
     * rules.
     * 
     * @param {string} [iotHubDescription.properties.provisioningState] The
     * provisioning state.
     * 
     * @param {string} [iotHubDescription.properties.hostName] The name of the
     * host.
     * 
     * @param {object} [iotHubDescription.properties.eventHubEndpoints] The event
     * hub endpoint properties.
     * 
     * @param {object} [iotHubDescription.properties.storageEndpoints] The list of
     * storage end points where files can be uploaded. Currently only one storage
     * account can be configured.
     * 
     * @param {object} [iotHubDescription.properties.messagingEndpoints] The list
     * of messaging end points configured.
     * 
     * @param {boolean}
     * [iotHubDescription.properties.enableFileUploadNotifications] The flag
     * which indicates whether file upload notification should be enabled. This
     * is optional at iot hub level. When enabled upload notifications will be
     * available.
     * 
     * @param {object} [iotHubDescription.properties.cloudToDevice]
     * 
     * @param {number}
     * [iotHubDescription.properties.cloudToDevice.maxDeliveryCount] The max
     * delivery count for the device queue. Range : 1-100.
     * 
     * @param {moment.duration}
     * [iotHubDescription.properties.cloudToDevice.defaultTtlAsIso8601] The
     * default time to live for the device queue. Range : 1 Min (PT1M) - 2 Days
     * (P2D).
     * 
     * @param {object} [iotHubDescription.properties.cloudToDevice.feedback]
     * 
     * @param {moment.duration}
     * [iotHubDescription.properties.cloudToDevice.feedback.lockDurationAsIso8601]
     * The lock duration for the feedback queue. Range: 5 Sec (PT5S) - 5 Min
     * (PT5M).
     * 
     * @param {moment.duration}
     * [iotHubDescription.properties.cloudToDevice.feedback.ttlAsIso8601] The
     * time to live for the feedback queue. Range: 1 Min (PT1M) - 2 Days (P2D).
     * 
     * @param {number}
     * [iotHubDescription.properties.cloudToDevice.feedback.maxDeliveryCount] The
     * max delivery count. Range : 1-100.
     * 
     * @param {string} [iotHubDescription.properties.comments] The comments.
     * 
     * @param {object}
     * [iotHubDescription.properties.operationsMonitoringProperties]
     * 
     * @param {object}
     * [iotHubDescription.properties.operationsMonitoringProperties.events]
     * 
     * @param {string} [iotHubDescription.properties.features] The
     * Capabilities/Features that need to be enabled for the Hub. Possible values
     * include: 'None', 'DeviceManagement'
     * 
     * @param {object} [iotHubDescription.sku]
     * 
     * @param {string} [iotHubDescription.sku.name] The name of the Sku. Possible
     * values include: 'F1', 'S1', 'S2', 'S3'
     * 
     * @param {number} [iotHubDescription.sku.capacity] The number of units being
     * provisioned. Range of values [For F1: 1-1, S1: 1-200, S2: 1-200, S3:
     * 1-10]. To go above this range, call support.
     * 
     * @param {string} [iotHubDescription.location] The Resource location.
     * 
     * @param {object} [iotHubDescription.tags] The Resource tags.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    createOrUpdate(resourceGroupName: string, resourceName: string, iotHubDescription: models.IotHubDescription, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.IotHubDescription>): void;
    createOrUpdate(resourceGroupName: string, resourceName: string, iotHubDescription: models.IotHubDescription, callback: ServiceCallback<models.IotHubDescription>): void;

    /**
     * @summary Create or update an IotHub.
     *
     * Create or update an IotHub.
     *
     * @param {string} resourceGroupName The name of the resource group.
     * 
     * @param {string} resourceName The name of the resource.
     * 
     * @param {object} iotHubDescription The Iot hub description.
     * 
     * @param {string} [iotHubDescription.subscriptionid] The subscription
     * identifier.
     * 
     * @param {string} [iotHubDescription.resourcegroup] The resource group name
     * uniquely identifies the resource group within the user subscriptionId.
     * 
     * @param {string} [iotHubDescription.etag] The Etag field is *not* required.
     * If it is provided in the response body, it must also be provided as a
     * header per the normal ETag convention.
     * 
     * @param {object} [iotHubDescription.properties]
     * 
     * @param {array} [iotHubDescription.properties.authorizationPolicies] The
     * authorization rules.
     * 
     * @param {array} [iotHubDescription.properties.ipFilterRules] The IP filter
     * rules.
     * 
     * @param {string} [iotHubDescription.properties.provisioningState] The
     * provisioning state.
     * 
     * @param {string} [iotHubDescription.properties.hostName] The name of the
     * host.
     * 
     * @param {object} [iotHubDescription.properties.eventHubEndpoints] The event
     * hub endpoint properties.
     * 
     * @param {object} [iotHubDescription.properties.storageEndpoints] The list of
     * storage end points where files can be uploaded. Currently only one storage
     * account can be configured.
     * 
     * @param {object} [iotHubDescription.properties.messagingEndpoints] The list
     * of messaging end points configured.
     * 
     * @param {boolean}
     * [iotHubDescription.properties.enableFileUploadNotifications] The flag
     * which indicates whether file upload notification should be enabled. This
     * is optional at iot hub level. When enabled upload notifications will be
     * available.
     * 
     * @param {object} [iotHubDescription.properties.cloudToDevice]
     * 
     * @param {number}
     * [iotHubDescription.properties.cloudToDevice.maxDeliveryCount] The max
     * delivery count for the device queue. Range : 1-100.
     * 
     * @param {moment.duration}
     * [iotHubDescription.properties.cloudToDevice.defaultTtlAsIso8601] The
     * default time to live for the device queue. Range : 1 Min (PT1M) - 2 Days
     * (P2D).
     * 
     * @param {object} [iotHubDescription.properties.cloudToDevice.feedback]
     * 
     * @param {moment.duration}
     * [iotHubDescription.properties.cloudToDevice.feedback.lockDurationAsIso8601]
     * The lock duration for the feedback queue. Range: 5 Sec (PT5S) - 5 Min
     * (PT5M).
     * 
     * @param {moment.duration}
     * [iotHubDescription.properties.cloudToDevice.feedback.ttlAsIso8601] The
     * time to live for the feedback queue. Range: 1 Min (PT1M) - 2 Days (P2D).
     * 
     * @param {number}
     * [iotHubDescription.properties.cloudToDevice.feedback.maxDeliveryCount] The
     * max delivery count. Range : 1-100.
     * 
     * @param {string} [iotHubDescription.properties.comments] The comments.
     * 
     * @param {object}
     * [iotHubDescription.properties.operationsMonitoringProperties]
     * 
     * @param {object}
     * [iotHubDescription.properties.operationsMonitoringProperties.events]
     * 
     * @param {string} [iotHubDescription.properties.features] The
     * Capabilities/Features that need to be enabled for the Hub. Possible values
     * include: 'None', 'DeviceManagement'
     * 
     * @param {object} [iotHubDescription.sku]
     * 
     * @param {string} [iotHubDescription.sku.name] The name of the Sku. Possible
     * values include: 'F1', 'S1', 'S2', 'S3'
     * 
     * @param {number} [iotHubDescription.sku.capacity] The number of units being
     * provisioned. Range of values [For F1: 1-1, S1: 1-200, S2: 1-200, S3:
     * 1-10]. To go above this range, call support.
     * 
     * @param {string} [iotHubDescription.location] The Resource location.
     * 
     * @param {object} [iotHubDescription.tags] The Resource tags.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    beginCreateOrUpdate(resourceGroupName: string, resourceName: string, iotHubDescription: models.IotHubDescription, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.IotHubDescription>): void;
    beginCreateOrUpdate(resourceGroupName: string, resourceName: string, iotHubDescription: models.IotHubDescription, callback: ServiceCallback<models.IotHubDescription>): void;

    /**
     * @summary Delete an IotHub.
     *
     * Delete an IotHub.
     *
     * @param {string} resourceGroupName The name of the resource group.
     * 
     * @param {string} resourceName The name of the resource.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    deleteMethod(resourceGroupName: string, resourceName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.IotHubDescription>): void;
    deleteMethod(resourceGroupName: string, resourceName: string, callback: ServiceCallback<models.IotHubDescription>): void;

    /**
     * @summary Delete an IotHub.
     *
     * Delete an IotHub.
     *
     * @param {string} resourceGroupName The name of the resource group.
     * 
     * @param {string} resourceName The name of the resource.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    beginDeleteMethod(resourceGroupName: string, resourceName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.IotHubDescription>): void;
    beginDeleteMethod(resourceGroupName: string, resourceName: string, callback: ServiceCallback<models.IotHubDescription>): void;

    /**
     * @summary Get all IotHubs in a subscription.
     *
     * Get all IotHubs in a subscription.
     *
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    listBySubscription(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.IotHubDescriptionListResult>): void;
    listBySubscription(callback: ServiceCallback<models.IotHubDescriptionListResult>): void;

    /**
     * @summary Get all IotHubs in a Resourcegroup.
     *
     * Get all IotHubs in a Resource group.
     *
     * @param {string} resourceGroupName The name of the resource group.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    listByResourceGroup(resourceGroupName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.IotHubDescriptionListResult>): void;
    listByResourceGroup(resourceGroupName: string, callback: ServiceCallback<models.IotHubDescriptionListResult>): void;

    /**
     * @summary Get IotHub Stats.
     *
     * Get IotHub Stats.
     *
     * @param {string} resourceGroupName The name of the resource group.
     * 
     * @param {string} resourceName The name of the resource.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getStats(resourceGroupName: string, resourceName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.RegistryStatistics>): void;
    getStats(resourceGroupName: string, resourceName: string, callback: ServiceCallback<models.RegistryStatistics>): void;

    /**
     * @summary Get Valid Skus.
     *
     * Get Valid Skus.
     *
     * @param {string} resourceGroupName The name of the resource group.
     * 
     * @param {string} resourceName The name of the resource.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getValidSkus(resourceGroupName: string, resourceName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.IotHubSkuDescriptionListResult>): void;
    getValidSkus(resourceGroupName: string, resourceName: string, callback: ServiceCallback<models.IotHubSkuDescriptionListResult>): void;

    /**
     * @summary Get EventHub Consumer Groups for an IotHub.
     *
     * Get EventHub Consumer Groups for an IotHub.
     *
     * @param {string} resourceGroupName The name of the resource group.
     * 
     * @param {string} resourceName The name of the resource.
     * 
     * @param {string} eventHubEndpointName The name of the event hub endpoint.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    listEventHubConsumerGroups(resourceGroupName: string, resourceName: string, eventHubEndpointName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.EventHubConsumerGroupsListResult>): void;
    listEventHubConsumerGroups(resourceGroupName: string, resourceName: string, eventHubEndpointName: string, callback: ServiceCallback<models.EventHubConsumerGroupsListResult>): void;

    /**
     * @summary Get EventHub Consumer Group for an IotHub.
     *
     * Get EventHub Consumer Group for an IotHub.
     *
     * @param {string} resourceGroupName The name of the resource group.
     * 
     * @param {string} resourceName The name of the resource.
     * 
     * @param {string} eventHubEndpointName The name of the event hub endpoint.
     * 
     * @param {string} name The name of the consumer group.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getEventHubConsumerGroup(resourceGroupName: string, resourceName: string, eventHubEndpointName: string, name: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.EventHubConsumerGroupInfo>): void;
    getEventHubConsumerGroup(resourceGroupName: string, resourceName: string, eventHubEndpointName: string, name: string, callback: ServiceCallback<models.EventHubConsumerGroupInfo>): void;

    /**
     * @summary Add an EventHub Consumer Group to an IotHub.
     *
     * Add an EventHub Consumer Group to an IotHub.
     *
     * @param {string} resourceGroupName The name of the resource group.
     * 
     * @param {string} resourceName The name of the resource.
     * 
     * @param {string} eventHubEndpointName The name of the event hub endpoint.
     * 
     * @param {string} name The name of the consumer group.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    createEventHubConsumerGroup(resourceGroupName: string, resourceName: string, eventHubEndpointName: string, name: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.EventHubConsumerGroupInfo>): void;
    createEventHubConsumerGroup(resourceGroupName: string, resourceName: string, eventHubEndpointName: string, name: string, callback: ServiceCallback<models.EventHubConsumerGroupInfo>): void;

    /**
     * @summary Delete EventHub Consumer Group for an IotHub.
     *
     * Delete EventHub Consumer Group for an IotHub.
     *
     * @param {string} resourceGroupName The name of the resource group.
     * 
     * @param {string} resourceName The name of the resource.
     * 
     * @param {string} eventHubEndpointName The name of the event hub endpoint.
     * 
     * @param {string} name The name of the consumer group.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    deleteEventHubConsumerGroup(resourceGroupName: string, resourceName: string, eventHubEndpointName: string, name: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    deleteEventHubConsumerGroup(resourceGroupName: string, resourceName: string, eventHubEndpointName: string, name: string, callback: ServiceCallback<void>): void;

    /**
     * @summary Get all the jobs in an IotHub.
     *
     * Get all the jobs in an IotHub.
     *
     * @param {string} resourceGroupName The name of the resource group.
     * 
     * @param {string} resourceName The name of the resource.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    listJobs(resourceGroupName: string, resourceName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.JobResponseListResult>): void;
    listJobs(resourceGroupName: string, resourceName: string, callback: ServiceCallback<models.JobResponseListResult>): void;

    /**
     * @summary Get a job in an IotHub.
     *
     * Get a job in an IotHub.
     *
     * @param {string} resourceGroupName The name of the resource group.
     * 
     * @param {string} resourceName The name of the resource.
     * 
     * @param {string} jobId The job identifier.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getJob(resourceGroupName: string, resourceName: string, jobId: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.JobResponse>): void;
    getJob(resourceGroupName: string, resourceName: string, jobId: string, callback: ServiceCallback<models.JobResponse>): void;

    /**
     * @summary Get quota metrics for an IotHub.
     *
     * Get quota metrics for an IotHub.
     *
     * @param {string} resourceGroupName The name of the resource group.
     * 
     * @param {string} resourceName The name of the resource.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getQuotaMetrics(resourceGroupName: string, resourceName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.IotHubQuotaMetricInfoListResult>): void;
    getQuotaMetrics(resourceGroupName: string, resourceName: string, callback: ServiceCallback<models.IotHubQuotaMetricInfoListResult>): void;

    /**
     * @summary Check if an IotHub name is available.
     *
     * Check if an IotHub name is available.
     *
     * @param {string} name The name of the iot hub.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    checkNameAvailability(name: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.IotHubNameAvailabilityInfo>): void;
    checkNameAvailability(name: string, callback: ServiceCallback<models.IotHubNameAvailabilityInfo>): void;

    /**
     * @summary Get all keys for an IotHub.
     *
     * Get all keys for an IotHub.
     *
     * @param {string} resourceGroupName The name of the resource group.
     * 
     * @param {string} resourceName The name of the resource.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    listKeys(resourceGroupName: string, resourceName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.SharedAccessSignatureAuthorizationRuleListResult>): void;
    listKeys(resourceGroupName: string, resourceName: string, callback: ServiceCallback<models.SharedAccessSignatureAuthorizationRuleListResult>): void;

    /**
     * @summary Get the Key given a specific KeyName for an IotHub.
     *
     * Get the Key given a specific KeyName for an IotHub.
     *
     * @param {string} resourceGroupName The name of the resource group.
     * 
     * @param {string} resourceName The name of the resource.
     * 
     * @param {string} keyName The name of the key.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getKeysForKeyName(resourceGroupName: string, resourceName: string, keyName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.SharedAccessSignatureAuthorizationRule>): void;
    getKeysForKeyName(resourceGroupName: string, resourceName: string, keyName: string, callback: ServiceCallback<models.SharedAccessSignatureAuthorizationRule>): void;

    /**
     * @summary Export all the devices in an IotHub.
     *
     * Export all the devices in an IotHub.
     *
     * @param {string} resourceGroupName The name of the resource group.
     * 
     * @param {string} resourceName The name of the resource.
     * 
     * @param {object} exportDevicesParameters The export devices parameters.
     * 
     * @param {string} exportDevicesParameters.exportBlobContainerUri The export
     * BLOB container URI.
     * 
     * @param {boolean} exportDevicesParameters.excludeKeys The value indicating
     * whether keys should be excluded during export.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    exportDevices(resourceGroupName: string, resourceName: string, exportDevicesParameters: models.ExportDevicesRequest, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.JobResponse>): void;
    exportDevices(resourceGroupName: string, resourceName: string, exportDevicesParameters: models.ExportDevicesRequest, callback: ServiceCallback<models.JobResponse>): void;

    /**
     * @summary Import all the devices in an IotHub.
     *
     * Import all the devices in an IotHub.
     *
     * @param {string} resourceGroupName The name of the resource group.
     * 
     * @param {string} resourceName The name of the resource.
     * 
     * @param {object} importDevicesParameters The import devices parameters.
     * 
     * @param {string} importDevicesParameters.inputBlobContainerUri The input
     * BLOB container URI.
     * 
     * @param {string} importDevicesParameters.outputBlobContainerUri The output
     * BLOB container URI.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    importDevices(resourceGroupName: string, resourceName: string, importDevicesParameters: models.ImportDevicesRequest, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.JobResponse>): void;
    importDevices(resourceGroupName: string, resourceName: string, importDevicesParameters: models.ImportDevicesRequest, callback: ServiceCallback<models.JobResponse>): void;

    /**
     * @summary Get all IotHubs in a subscription.
     *
     * Get all IotHubs in a subscription.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    listBySubscriptionNext(nextPageLink: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.IotHubDescriptionListResult>): void;
    listBySubscriptionNext(nextPageLink: string, callback: ServiceCallback<models.IotHubDescriptionListResult>): void;

    /**
     * @summary Get all IotHubs in a Resourcegroup.
     *
     * Get all IotHubs in a Resource group.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    listByResourceGroupNext(nextPageLink: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.IotHubDescriptionListResult>): void;
    listByResourceGroupNext(nextPageLink: string, callback: ServiceCallback<models.IotHubDescriptionListResult>): void;

    /**
     * @summary Get Valid Skus.
     *
     * Get Valid Skus.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getValidSkusNext(nextPageLink: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.IotHubSkuDescriptionListResult>): void;
    getValidSkusNext(nextPageLink: string, callback: ServiceCallback<models.IotHubSkuDescriptionListResult>): void;

    /**
     * @summary Get EventHub Consumer Groups for an IotHub.
     *
     * Get EventHub Consumer Groups for an IotHub.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    listEventHubConsumerGroupsNext(nextPageLink: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.EventHubConsumerGroupsListResult>): void;
    listEventHubConsumerGroupsNext(nextPageLink: string, callback: ServiceCallback<models.EventHubConsumerGroupsListResult>): void;

    /**
     * @summary Get all the jobs in an IotHub.
     *
     * Get all the jobs in an IotHub.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    listJobsNext(nextPageLink: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.JobResponseListResult>): void;
    listJobsNext(nextPageLink: string, callback: ServiceCallback<models.JobResponseListResult>): void;

    /**
     * @summary Get quota metrics for an IotHub.
     *
     * Get quota metrics for an IotHub.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getQuotaMetricsNext(nextPageLink: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.IotHubQuotaMetricInfoListResult>): void;
    getQuotaMetricsNext(nextPageLink: string, callback: ServiceCallback<models.IotHubQuotaMetricInfoListResult>): void;

    /**
     * @summary Get all keys for an IotHub.
     *
     * Get all keys for an IotHub.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    listKeysNext(nextPageLink: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.SharedAccessSignatureAuthorizationRuleListResult>): void;
    listKeysNext(nextPageLink: string, callback: ServiceCallback<models.SharedAccessSignatureAuthorizationRuleListResult>): void;
}
