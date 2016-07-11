// Type definitions for azure-storage-node v0.10.0
// Project: https://github.com/Azure/azure-storage-node
// Definitions by: Maxime LUCE <https://github.com/SomaticIT/>
// Definitions: https://github.com/typed-contrib/azure-storage-node

import * as events from "events";
import Logger = require("../diagnostics/logger");
import WebResource = require("../http/webresource");
import RetryPolicyFilter = require("../filters/retrypolicyfilter");
import { date } from "../util/date";
import { AccessConditions } from "../util/accesscondition";
import { StorageError } from "../errors/errors";

/**
* @class
* The StorageServiceClient class is the base class of all the service classes.
*/
declare class StorageServiceClient extends events.EventEmitter {
    storageAccount: string;
    storageAccessKey: string;
    sasToken: string;
    anonymous: boolean;
    storageCredentials: StorageServiceClient.IRequestSigner;
    
    apiVersion: string;
    usePathStyleUri: boolean;
    xml2jsSettings: any;
    defaultLocationMode: number;
    
    logger: Logger;
    host: StorageServiceClient.Host;
    
    /**
    * @constructor
    * Creates a new StorageServiceClient object.
    *
    * @param {string} [storageAccount]           The storage account.
    * @param {string} [storageAccessKey]         The storage access key.
    * @param {object} [host]                     The host for the service.
    * @param {bool}   [usePathStyleUri]          Boolean value indicating wether to use path style uris.
    * @param {string} [sasToken]                 The Shared Access Signature token.
    */
    constructor(storageAccount?: string, storageAccessKey?: string, host?: StorageServiceClient.Host, usePathStyleUri?: boolean, sasToken?: string);
    
    /**
    * Associate a filtering operation with this StorageServiceClient. Filtering operations
    * can include logging, automatically retrying, etc. Filter operations are objects
    * that implement a method with the signature:
    *
    *     "function handle (requestOptions, next)".
    *
    * After doing its preprocessing on the request options, the method needs to call
    * "next" passing a callback with the following signature:
    * signature:
    *
    *     "function (returnObject, finalCallback, next)"
    *
    * In this callback, and after processing the returnObject (the response from the
    * request to the server), the callback needs to either invoke next if it exists to
    * continue processing other filters or simply invoke finalCallback otherwise to end
    * up the service invocation.
    *
    * @param {Object} filter The new filter object.
    * @return {StorageServiceClient} A new service client with the filter applied.
    */
    withFilter(newFilter: RetryPolicyFilter.IRetryFilter): this;
    
    /**
    * Sets a host for the service.
    * @param {object}     host                              The host for the service.
    */
    setHost(host: StorageServiceClient.Host): void;
    
    /**
    * Gets the storage settings.
    *
    * @param {string} [storageAccountOrConnectionString]  The storage account or the connection string.
    * @param {string} [storageAccessKey]                  The storage access key.
    * @param {string} [host]                              The host address.
    * @param {object} [sasToken]                          The sas token.
    *
    * @return {StorageServiceSettings}
    */
    getStorageSettings(storageAccountOrConnectionString?: string, storageAccessKey?: string, host?: StorageServiceClient.HostConfiguration, sasToken?: string): StorageServiceClient.StorageServiceSettings;
    
    /**
    * Gets the properties of a storage account’s service, including Azure Storage Analytics.
    * @param {errorOrResult}  callback                              `error` will contain information if an error occurs; otherwise, `result` will contain the properties 
    *                                                               and `response` will contain information related to this operation.
    */
    getAccountServiceProperties(callback: StorageServiceClient.ErrorOrResult<StorageServiceClient.ServiceProperties>): void;
    /**
    * Gets the properties of a storage account’s service, including Azure Storage Analytics.
    * @param {object}       options                                 The request options.
    * @param {errorOrResult}  callback                              `error` will contain information if an error occurs; otherwise, `result` will contain the properties 
    *                                                               and `response` will contain information related to this operation.
    */
    getAccountServiceProperties(options: StorageServiceClient.ServiceOptions, callback: StorageServiceClient.ErrorOrResult<StorageServiceClient.ServiceProperties>): void;
    
    /**
    * Sets the properties of a storage account’s service, including Azure Storage Analytics.
    * You can also use this operation to set the default request version for all incoming requests that do not have a version specified.
    *
    * @this {StorageServiceClient}
    * @param {ServiceProperties}  serviceProperties                        The service properties.
    * @param {ServiceOptions}     options                                  The request options.
    * @param {errorOrResponse}    callback                                 `error` will contain information
    *                                                                      if an error occurs; otherwise, `response`
    *                                                                      will contain information related to this operation.
    */
    setAccountServiceProperties(serviceProperties: StorageServiceClient.ServiceProperties, callback: StorageServiceClient.ErrorOrResponse): void;
    /**
    * Sets the properties of a storage account’s service, including Azure Storage Analytics.
    * You can also use this operation to set the default request version for all incoming requests that do not have a version specified.
    *
    * @this {StorageServiceClient}
    * @param {ServiceProperties}  serviceProperties                        The service properties.
    * @param {errorOrResponse}    callback                                 `error` will contain information
    *                                                                      if an error occurs; otherwise, `response`
    *                                                                      will contain information related to this operation.
    */
    setAccountServiceProperties(serviceProperties: StorageServiceClient.ServiceProperties, options: StorageServiceClient.ServiceOptions, callback: StorageServiceClient.ErrorOrResponse): void;
}

declare namespace StorageServiceClient {
    export type HostConfiguration = string | Host;
    export type ErrorOrResponse = (err: StorageError, response: ServiceResponse) => void;
    export type ErrorOrResult<T> = (err: StorageError, result: T, response: ServiceResponse) => void;
    export type ErrorOrList<T> = (err: StorageError, result: List<T>, response: ServiceResponse) => void;
    
    export interface List<T> {
        entries: T[];
        continuationToken: ContinuationToken;
    }
     
    export interface Host {
        primaryHost?: string;
        secondaryHost?: string;
    }

    export interface IRequestSigner {
        signRequest(webResource: WebResource, callback: (err: Error) => void): void;
    }
    
    export interface StorageServiceSettings {
        _name: string;
        _key: string;
        _sasToken: string;
        _blobEndpoint: string;
        _queueEndpoint: string;
        _tableEndpoint: string;
        _fileEndpoint: string;
        _usePathStyleUri: boolean;
    }
    
    export interface ServiceProperties {
        Logging?: ServiceLogging;
        HourMetrics?: ServiceMetrics;
        MinuteMetrics?: ServiceMetrics;
        Cors?: ServiceCorsRule[];
        
        /** The DefaultServiceVersion element can only be set for the Blob service and the request must be made using version 2011-08-18 or later. */
        DefaultServiceVersion?: string;
    }
    
    export interface ServiceLogging {
        Version: string;
        Delete: boolean;
        Read: boolean;
        Write: boolean;
        RetentionPolicy: ServiceRetentionPolicy;
    }
    
    export interface ServiceMetrics {
        Version: string;
        Enabled: boolean;
        IncludeAPIs?: boolean;
        RetentionPolicy: ServiceRetentionPolicy;
    }
    
    export interface ServiceRetentionPolicy {
        Enabled: boolean;
        Days?: number;
    }
    
    export interface ServiceCorsRule {
        CorsRule: {
            AllowedOrigins: string[];
            AllowedMethods: string[];
            AllowedHeaders: string[];
            ExposedHeaders: string[];
            MaxAgeInSeconds: number;
        };
    }
    
    export interface ServiceStats {
        GeoReplication?: {
            Status?: string;
            LastSyncTime?: Date;
        };
    }
    
    export interface ServiceOptions {
        /**
         * Specifies the location mode used to decide which location the request should be sent to. 
         * Please see StorageUtilities.LocationMode for the possible values.
         */
        locationMode?: number;
        
        /** The server timeout interval, in milliseconds, to use for the request. */
        timeoutIntervalInMs?: number;
        
        /**
         * The maximum execution time, in milliseconds, across all potential retries, to use when making this request.
         * The maximum execution time interval begins at the time that the client begins building the request. The maximum
         * execution time is checked intermittently while performing requests, and before executing retries.
         */
        maximumExecutionTimeInMs?: number;
        
        /**
         * Determines whether the Nagle algorithm is used; true to use the Nagle algorithm; otherwise, false.
         * The default value is false.
         */
        useNagleAlgorithm?: boolean;
    }
    
    export interface AccessConditionsOptions extends ServiceClientOptions {
        accessConditions?: AccessConditions;
    }
    
    export interface ServiceClientOptions extends ServiceOptions {
        /** A string that represents the client request ID with a 1KB character limit. */
        clientRequestId?: string;
    }
    
    export interface ServiceResponse {
        /** Boolean value indicating if the request was successful. */
        isSuccessful: boolean;
        /** The response body. */
        body: any;
        /** The response headers. */
        headers: any;
        /** The response status code. */
        statusCode: number;
        /** The response's content md5 hash. */
        md5: string;
    }
    
    export interface SignedIdentifiers {
        [key: string]: AccessPolicy;
    }
    
    export interface SharedAccessPolicy {
        /** The signed identifier. */
        Id?: string;
        /** The Access Policy information. */
        AccessPolicy?: AccessPolicy;
    }
    
    export interface AccessPolicy {
        /** The permission type. */
        Permissions?: string;
        /** The time at which the Shared Access Signature becomes valid (The UTC value will be used). */
        Start?: date;
        /** The time at which the Shared Access Signature becomes expired (The UTC value will be used). */
        Expiry?: date;
        /** An IP address or a range of IP addresses from which to accept requests. When specifying a range, note that the range is inclusive. */
        IPAddressOrRange?: string;
        /** 
         * The protocol permitted for a request made with the account SAS.
         * Possible values are both HTTPS and HTTP (https,http) or HTTPS only (https). 
         * The default value is https,http.
         */
        Protocols?: string;
    }
    
    export interface SignedIdentifiersResult {
        [key: string]: AccessPolicyResult;
    }
    
    export interface AccessPolicyResult {
        /** The permission type. */
        Permissions?: string;
        /** The time at which the Shared Access Signature becomes valid (The UTC value will be used). */
        Start?: Date;
        /** The time at which the Shared Access Signature becomes expired (The UTC value will be used). */
        Expiry?: Date;
        /** An IP address or a range of IP addresses from which to accept requests. When specifying a range, note that the range is inclusive. */
        IPAddressOrRange?: string;
        /** 
         * The protocol permitted for a request made with the account SAS.
         * Possible values are both HTTPS and HTTP (https,http) or HTTPS only (https). 
         * The default value is https,http.
         */
        Protocols?: string;
    }
    
    export interface ContinuationToken {
        
    }
}

export = StorageServiceClient;