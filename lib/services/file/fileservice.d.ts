// Type definitions for azure-storage-node v0.10.0
// Project: https://github.com/Azure/azure-storage-node
// Definitions by: Maxime LUCE <https://github.com/SomaticIT/>
// Definitions: https://github.com/typed-contrib/azure-storage-node

import { StorageServiceClient, SpeedSummary, AccessCondition } from "../../common/common";
import { StorageError } from "../../common/errors/errors";

type ErrorOrResult<T> = StorageServiceClient.ErrorOrResult<T>;
type ErrorOrList<T> = StorageServiceClient.ErrorOrList<T>;

/**
* @class
* @extends {StorageServiceClient}
* The FileService class is used to perform operations on the Microsoft Azure File Service.
* The File Service provides storage for binary large objects, and provides functions for working with data stored in files.
* 
* For more information on the File Service, as well as task focused information on using it in a Node.js application, see
* [How to Use the File Service from Node.js](http://azure.microsoft.com/en-us/documentation/articles/storage-nodejs-how-to-use-file-storage/).
*/
declare class FileService extends StorageServiceClient {
    /** The default maximum size, in bytes, of a file before it must be separated into blocks. */
    singleFileThresholdInBytes: number;
    /** The default timeout interval, in milliseconds, to use for request made via the File service. */
    defaultTimeoutIntervalInMs: number;
    /** The default maximum execution time across all potential retries, for requests made via the File service. */
    defaultMaximumExecutionTimeInMs: number;
    /** The default location mode for requests made via the File service. */
    defaultLocationMode: number;
    /** The number of parallel operations that may be performed when uploading a file. */
    parallelOperationThreadCount: number;
    /**
     * Determines whether the Nagle algorithm is used for requests made via the File service; true to use the Nagle algorithm; otherwise, false. 
     * The default value is false.
     */
    useNagleAlgorithm: boolean;
    
    
    // ***********************************************************
    // ** STATIC
    // ***********************************************************
    
    static SpeedSummary: typeof SpeedSummary;
    
    
    /**
    * Creates a new FileService object using the AZURE_STORAGE_CONNECTION_STRING or AZURE_STORAGE_ACCOUNT and AZURE_STORAGE_ACCESS_KEY environment variables.
    * @constructor
    */
    constructor();
    /**
    * Creates a new FileService object using the given connection string.
    *
    * @constructor
    * @param {string} connectionString                    The storage account or the connection string.
    */    
    constructor(connectionString: string);
    /**
    * Creates a new FileService object using the given parameters.
    *
    * @constructor
    * @param {string} [storageAccount]                    The storage account.
    * @param {string} [storageAccessKey]                  The storage access key.
    * @param {string|object} [host]                       The host address. To define primary only, pass a string. 
    *                                                     Otherwise 'host.primaryHost' defines the primary host and 'host.secondaryHost' defines the secondary host.
    * @param {string} [sasToken]                          The Shared Access Signature token.
    */
    constructor(storageAccount: string, storageAccessKey: string, host?: StorageServiceClient.HostConfiguration, sasToken?: string);
    
    
    // ***********************************************************
    // ** SERVICE METHODS
    // ***********************************************************
    
    /**
    * Gets the service stats for a storage account’s File service.
    * @param {errorOrResult}  callback                              `error` will contain information if an error occurs; otherwise, `[result]{@link ServiceStats}` will contain the stats and 
    *                                                               `response` will contain information related to this operation.
    */
    getServiceStats(callback: ErrorOrResult<StorageServiceClient.ServiceStats>): void;
    /**
    * Gets the service stats for a storage account’s File service.
    * @param {object}         options                               The request options.
    * @param {errorOrResult}  callback                              `error` will contain information if an error occurs; otherwise, `[result]{@link ServiceStats}` will contain the stats and 
    *                                                               `response` will contain information related to this operation.
    */
    getServiceStats(options: StorageServiceClient.ServiceClientOptions, callback: ErrorOrResult<StorageServiceClient.ServiceStats>): void;
    
    
    /**
    * Gets the properties of a storage account’s service, including Azure Storage Analytics.
    * @param {errorOrResult}  callback                              `error` will contain information if an error occurs; otherwise, `result` will contain the properties 
    *                                                               and `response` will contain information related to this operation.
    */
    getServiceProperties(callback: StorageServiceClient.ErrorOrResult<StorageServiceClient.ServiceProperties>): void;
    /**
    * Gets the properties of a storage account’s service, including Azure Storage Analytics.
    * @param {object}       options                                 The request options.
    * @param {errorOrResult}  callback                              `error` will contain information if an error occurs; otherwise, `result` will contain the properties 
    *                                                               and `response` will contain information related to this operation.
    */
    getServiceProperties(options: StorageServiceClient.ServiceOptions, callback: StorageServiceClient.ErrorOrResult<StorageServiceClient.ServiceProperties>): void;
    
    
    /**
    * Sets the properties of a storage account’s service, including Azure Storage Analytics.
    * You can also use this operation to set the default request version for all incoming requests that do not have a version specified.
    *
    * @param {ServiceProperties}  serviceProperties                        The service properties.
    * @param {ServiceOptions}     options                                  The request options.
    * @param {errorOrResponse}    callback                                 `error` will contain information
    *                                                                      if an error occurs; otherwise, `response`
    *                                                                      will contain information related to this operation.
    */
    setServiceProperties(serviceProperties: StorageServiceClient.ServiceProperties, callback: StorageServiceClient.ErrorOrResponse): void;
    /**
    * Sets the properties of a storage account’s service, including Azure Storage Analytics.
    * You can also use this operation to set the default request version for all incoming requests that do not have a version specified.
    *
    * @param {ServiceProperties}  serviceProperties                        The service properties.
    * @param {errorOrResponse}    callback                                 `error` will contain information
    *                                                                      if an error occurs; otherwise, `response`
    *                                                                      will contain information related to this operation.
    */
    setServiceProperties(serviceProperties: StorageServiceClient.ServiceProperties, options: StorageServiceClient.ServiceOptions, callback: StorageServiceClient.ErrorOrResponse): void;
    
    
    // ***********************************************************
    // ** SHARE METHODS
    // ***********************************************************
    
    /**
    * Lists a segment containing a collection of share items under the specified account.
    *
    * @param {object}             currentToken                                A continuation token returned by a previous listing operation. Please use 'null' or 'undefined' if this is the first operation.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `result` will contain `entries` and `continuationToken`. 
    *                                                                         `entries`  gives a list of `[shares]{@link ShareResult}` and the `continuationToken` is used for the next listing operation.
    *                                                                         `response` will contain information related to this operation.
    */
    listSharesSegmented(currentToken: StorageServiceClient.ContinuationToken, callback: ErrorOrList<FileService.ShareResult>): void;
    /**
    * Lists a segment containing a collection of share items under the specified account.
    *
    * @param {object}             currentToken                                A continuation token returned by a previous listing operation. Please use 'null' or 'undefined' if this is the first operation.
    * @param {object}             options                                     The request options.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `result` will contain `entries` and `continuationToken`. 
    *                                                                         `entries`  gives a list of `[shares]{@link ShareResult}` and the `continuationToken` is used for the next listing operation.
    *                                                                         `response` will contain information related to this operation.
    */
    listSharesSegmented(currentToken: StorageServiceClient.ContinuationToken, options: FileService.ListSharesOptions, callback: ErrorOrList<FileService.ShareResult>): void;
    
    /**
    * Lists a segment containing a collection of share items under the specified account.
    *
    * @param {string}             prefix                                      The prefix of the share name.
    * @param {object}             currentToken                                A continuation token returned by a previous listing operation. Please use 'null' or 'undefined' if this is the first operation.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `result` will contain `entries` and `continuationToken`. 
    *                                                                         `entries`  gives a list of `[shares]{@link ShareResult}` and the `continuationToken` is used for the next listing operation.
    *                                                                         `response` will contain information related to this operation.
    */
    listSharesSegmentedWithPrefix(prefix: string, currentToken: StorageServiceClient.ContinuationToken, callback: ErrorOrList<FileService.ShareResult>): void;
    /**
    * Lists a segment containing a collection of share items under the specified account.
    *
    * @param {string}             prefix                                      The prefix of the share name.
    * @param {object}             currentToken                                A continuation token returned by a previous listing operation. Please use 'null' or 'undefined' if this is the first operation.
    * @param {object}             options                                     The request options.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `result` will contain `entries` and `continuationToken`. 
    *                                                                         `entries`  gives a list of `[shares]{@link ShareResult}` and the `continuationToken` is used for the next listing operation.
    *                                                                         `response` will contain information related to this operation.
    */
    listSharesSegmentedWithPrefix(prefix: string, currentToken: StorageServiceClient.ContinuationToken, options: FileService.ListSharesOptions, callback: ErrorOrList<FileService.ShareResult>): void;
    
    /**
    * Checks whether or not a share exists on the service.
    *
    * @param {string}             share                               The share name.
    * @param {errorOrResult}      callback                                `error` will contain information
    *                                                                     if an error occurs; otherwise `[result]{@link ShareResult}` will contain
    *                                                                     the share information including `exists` boolean member. 
    *                                                                     `response` will contain information related to this operation.
    */
    doesShareExist(share: string, callback: ErrorOrResult<FileService.ShareResult>): void;
    /**
    * Checks whether or not a share exists on the service.
    *
    * @param {string}             share                               The share name.
    * @param {object}             options                                 The request options.
    * @param {errorOrResult}      callback                                `error` will contain information
    *                                                                     if an error occurs; otherwise `[result]{@link ShareResult}` will contain
    *                                                                     the share information including `exists` boolean member. 
    *                                                                     `response` will contain information related to this operation.
    */
    doesShareExist(share: string, options: StorageServiceClient.ServiceClientOptions, callback: ErrorOrResult<FileService.ShareResult>): void;
    
    /**
    * Creates a new share under the specified account.
    * If a share with the same name already exists, the operation fails.
    *
    * @param {string}             share                               The share name.
    * @param {errorOrResult}      callback                            `error` will contain information
    *                                                                 if an error occurs; otherwise `[result]{@link ShareResult}` will contain
    *                                                                 the share information.
    *                                                                 `response` will contain information related to this operation.
    */
    createShare(share: string, callback: ErrorOrResult<FileService.ShareResult>): void;
    /**
    * Creates a new share under the specified account.
    * If a share with the same name already exists, the operation fails.
    *
    * @param {string}             share                               The share name.
    * @param {object}             options                             The request options.
    * @param {errorOrResult}      callback                            `error` will contain information
    *                                                                 if an error occurs; otherwise `[result]{@link ShareResult}` will contain
    *                                                                 the share information.
    *                                                                 `response` will contain information related to this operation.
    */
    createShare(share: string, options: FileService.CreateShareOptions, callback: ErrorOrResult<FileService.ShareResult>): void;
    
    /**
    * Creates a new share under the specified account if the share does not exists.
    *
    * @param {string}             share                               The share name.
    * @param {errorOrResult}      callback                            `error` will contain information
    *                                                                 if an error occurs; otherwise `[result]{@link ShareResult}` will contain
    *                                                                 the share information.
    *                                                                 `response` will contain information related to this operation.
    */
    createShareIfNotExists(share: string, callback: ErrorOrResult<FileService.ShareResult>): void;
    /**
    * Creates a new share under the specified account if the share does not exists.
    *
    * @param {string}             share                               The share name.
    * @param {object}             options                             The request options.
    * @param {errorOrResult}      callback                            `error` will contain information
    *                                                                 if an error occurs; otherwise `[result]{@link ShareResult}` will contain
    *                                                                 the share information.
    *                                                                 `response` will contain information related to this operation.
    */
    createShareIfNotExists(share: string, options: FileService.CreateShareOptions, callback: ErrorOrResult<FileService.ShareResult>): void;
    
    /**
    * Retrieves a share and its properties from a specified account.
    * **Note** that all metadata names returned from the server will be converted to lower case by NodeJS itself as metadata is set via HTTP headers and HTTP header names are case insensitive.
    *
    * @param {string}             share                               The share name.
    * @param {errorOrResult}      callback                            `error` will contain information
    *                                                                 if an error occurs; otherwise `[result]{@link ShareResult}` will contain
    *                                                                 information for the share.
    *                                                                 `response` will contain information related to this operation.
    */
    getShareProperties(share: string, callback: ErrorOrResult<FileService.ShareResult>): void;
    /**
    * Retrieves a share and its properties from a specified account.
    * **Note** that all metadata names returned from the server will be converted to lower case by NodeJS itself as metadata is set via HTTP headers and HTTP header names are case insensitive.
    *
    * @param {string}             share                               The share name.
    * @param {object}             options                             The request options.
    * @param {errorOrResult}      callback                            `error` will contain information
    *                                                                 if an error occurs; otherwise `[result]{@link ShareResult}` will contain
    *                                                                 information for the share.
    *                                                                 `response` will contain information related to this operation.
    */
    getShareProperties(share: string, options: StorageServiceClient.ServiceClientOptions, callback: ErrorOrResult<FileService.ShareResult>): void;
    
    /**
    * Sets the properties for the specified share.
    *
    * @param {string}             share                               The share name.
    * @param {object}             [properties]                        The share properties to set.
    * @param {errorOrResult}      callback                            `error` will contain information
    *                                                                 if an error occurs; otherwise `[result]{@link ShareResult}` will contain
    *                                                                 information for the share.
    *                                                                 `response` will contain information related to this operation.
    */
    setShareProperties(share: string, properties: FileService.ShareProperties, callback: ErrorOrResult<FileService.ShareResult>): void;
    /**
    * Sets the properties for the specified share.
    *
    * @param {string}             share                               The share name.
    * @param {object}             [properties]                        The share properties to set.
    * @param {object}             options                             The request options.
    * @param {errorOrResult}      callback                            `error` will contain information
    *                                                                 if an error occurs; otherwise `[result]{@link ShareResult}` will contain
    *                                                                 information for the share.
    *                                                                 `response` will contain information related to this operation.
    */
    setShareProperties(share: string, properties: FileService.ShareProperties, options: StorageServiceClient.ServiceClientOptions, callback: ErrorOrResult<FileService.ShareResult>): void;
    
    /**
    * Gets the service stats for a storage account’s File service.
    * @param {errorOrResult}  callback                              `error` will contain information if an error occurs; otherwise, `[result]{@link ShareResult}` will contain the stats and 
    *                                                               `response` will contain information related to this operation.
    */
    getShareStats(share: string, callback: ErrorOrResult<FileService.ShareResult>): void;
    /**
    * Gets the service stats for a storage account’s File service.
    * @param {object}         options                               The request options.
    * @param {errorOrResult}  callback                              `error` will contain information if an error occurs; otherwise, `[result]{@link ShareResult}` will contain the stats and 
    *                                                               `response` will contain information related to this operation.
    */
    getShareStats(share: string, options: StorageServiceClient.ServiceClientOptions, callback: ErrorOrResult<FileService.ShareResult>): void;
    
    /**
    * Retrieves a share and its properties from a specified account.
    * **Note** that all metadata names returned from the server will be converted to lower case by NodeJS itself as metadata is set via HTTP headers and HTTP header names are case insensitive.
    *
    * @param {string}             share                               The share name.
    * @param {errorOrResult}      callback                            `error` will contain information
    *                                                                 if an error occurs; otherwise `[result]{@link ShareResult}` will contain
    *                                                                 information for the share.
    *                                                                 `response` will contain information related to this operation.
    */
    getShareMetadata(share: string, callback: ErrorOrResult<FileService.ShareResult>): void;
    /**
    * Retrieves a share and its properties from a specified account.
    * **Note** that all metadata names returned from the server will be converted to lower case by NodeJS itself as metadata is set via HTTP headers and HTTP header names are case insensitive.
    *
    * @param {string}             share                               The share name.
    * @param {object}             options                             The request options.
    * @param {errorOrResult}      callback                            `error` will contain information
    *                                                                 if an error occurs; otherwise `[result]{@link ShareResult}` will contain
    *                                                                 information for the share.
    *                                                                 `response` will contain information related to this operation.
    */
    getShareMetadata(share: string, options: StorageServiceClient.ServiceClientOptions, callback: ErrorOrResult<FileService.ShareResult>): void;
    
    /**
    * Sets the share's metadata.
    *
    * @param {string}             share                               The share name.
    * @param {object}             metadata                            The metadata key/value pairs.
    * @param {errorOrResult}      callback                            `error` will contain information
    *                                                                 if an error occurs; otherwise `[result]{@link ShareResult}` will contain
    *                                                                 information for the share.
    *                                                                 `response` will contain information related to this operation.
    */
    setShareMetadata(share: string, metadata: Object, callback: ErrorOrResult<FileService.ShareResult>): void;
    /**
    * Sets the share's metadata.
    *
    * @param {string}             share                               The share name.
    * @param {object}             metadata                            The metadata key/value pairs.
    * @param {object}             options                             The request options.
    * @param {errorOrResult}      callback                            `error` will contain information
    *                                                                 if an error occurs; otherwise `[result]{@link ShareResult}` will contain
    *                                                                 information for the share.
    *                                                                 `response` will contain information related to this operation.
    */
    setShareMetadata(share: string, metadata: Object, options: StorageServiceClient.ServiceClientOptions, callback: ErrorOrResult<FileService.ShareResult>): void;
    
    /**
    * Gets the share's ACL.
    *
    * @param {string}             share                                       The share name.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link ShareResult}` will contain
    *                                                                         information for the share.
    *                                                                         `response` will contain information related to this operation.
    */
    getShareAcl(share: string, callback: ErrorOrResult<FileService.ShareResult>): void;
    /**
    * Gets the share's ACL.
    *
    * @param {string}             share                                       The share name.
    * @param {object}             options                                     The request options.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link ShareResult}` will contain
    *                                                                         information for the share.
    *                                                                         `response` will contain information related to this operation.
    */
    getShareAcl(share: string, options: StorageServiceClient.ServiceClientOptions, callback: ErrorOrResult<FileService.ShareResult>): void;
    
    /**
    * Updates the share's ACL.
    *
    * @param {string}             share                                       The share name.
    * @param {Object.<string, AccessPolicy>} signedIdentifiers                The container ACL settings. See `[AccessPolicy]{@link AccessPolicy}` for detailed information.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link ShareResult}` will contain
    *                                                                         information for the share.
    *                                                                         `response` will contain information related to this operation.
    */
    setShareAcl(share: string, signedIdentifiers: StorageServiceClient.SignedIdentifiers, callback: ErrorOrResult<FileService.ShareResult>): void;
    /**
    * Updates the share's ACL.
    *
    * @param {string}             share                                       The share name.
    * @param {Object.<string, AccessPolicy>} signedIdentifiers                The container ACL settings. See `[AccessPolicy]{@link AccessPolicy}` for detailed information.
    * @param {object}             options                                     The request options.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link ShareResult}` will contain
    *                                                                         information for the share.
    *                                                                         `response` will contain information related to this operation.
    */
    setShareAcl(share: string, signedIdentifiers: StorageServiceClient.SignedIdentifiers, options: StorageServiceClient.ServiceClientOptions, callback: ErrorOrResult<FileService.ShareResult>): void;
    
    /**
    * Marks the specified share for deletion.
    * The share and any files contained within it are later deleted during garbage collection.
    *
    * @this {FileService}
    * @param {string}             share                               The share name.
    * @param {errorOrResponse}    callback                            `error` will contain information
    *                                                                 if an error occurs; otherwise
    *                                                                 `response` will contain information related to this operation.
    */
    deleteShare(share: string, callback: StorageServiceClient.ErrorOrResponse): void;
    /**
    * Marks the specified share for deletion.
    * The share and any files contained within it are later deleted during garbage collection.
    *
    * @this {FileService}
    * @param {string}             share                               The share name.
    * @param {object}             options                             The request options.
    * @param {errorOrResponse}    callback                            `error` will contain information
    *                                                                 if an error occurs; otherwise
    *                                                                 `response` will contain information related to this operation.
    */
    deleteShare(share: string, options: StorageServiceClient.ServiceClientOptions, callback: StorageServiceClient.ErrorOrResponse): void;
    
    /**
    * Marks the specified share for deletion if it exists.
    * The share and any files contained within it are later deleted during garbage collection.
    *
    * @this {FileService}
    * @param {string}             share                               The share name.
    * @param {errorOrResponse}    callback                            `error` will contain information
    *                                                                 if an error occurs; otherwise
    *                                                                 `response` will contain information related to this operation.
    */
    deleteShareIfExists(share: string, callback: StorageServiceClient.ErrorOrResponse): void;
    /**
    * Marks the specified share for deletion if it exists.
    * The share and any files contained within it are later deleted during garbage collection.
    *
    * @this {FileService}
    * @param {string}             share                               The share name.
    * @param {object}             options                             The request options.
    * @param {errorOrResponse}    callback                            `error` will contain information
    *                                                                 if an error occurs; otherwise
    *                                                                 `response` will contain information related to this operation.
    */
    deleteShareIfExists(share: string, options: StorageServiceClient.ServiceClientOptions, callback: StorageServiceClient.ErrorOrResponse): void;
    
    // ***********************************************************
    // ** DIRECTORY METHODS
    // ***********************************************************
    
    /**
    * Checks whether or not a directory exists on the service.
    *
    * @param {string}             share                                   The share name.
    * @param {string}             directory                               The directory name. Use '' to refer to the base directory.
    * @param {errorOrResult}      callback                                `error` will contain information
    *                                                                     if an error occurs; otherwise `[result]{@link DirectoryResult}` will contain
    *                                                                     the directory information including `exists` boolean member.
    *                                                                     `response` will contain information related to this operation.
    */
    doesDirectoryExist(share: string, directory: string, callback: ErrorOrResult<FileService.DirectoryResult>): void;
    /**
    * Checks whether or not a directory exists on the service.
    *
    * @param {string}             share                                   The share name.
    * @param {string}             directory                               The directory name. Use '' to refer to the base directory.
    * @param {object}             options                                 The request options.
    * @param {errorOrResult}      callback                                `error` will contain information
    *                                                                     if an error occurs; otherwise `[result]{@link DirectoryResult}` will contain
    *                                                                     the directory information including `exists` boolean member.
    *                                                                     `response` will contain information related to this operation.
    */
    doesDirectoryExist(share: string, directory: string, options: StorageServiceClient.ServiceClientOptions, callback: ErrorOrResult<FileService.DirectoryResult>): void;
    
    /**
    * Creates a new directory under the specified account.
    * If a directory with the same name already exists, the operation fails.
    *
    * @param {string}             share                                   The share name.
    * @param {string}             directory                               The directory name.
    * @param {errorOrResult}      callback                                `error` will contain information
    *                                                                     if an error occurs; otherwise `[result]{@link DirectoryResult}` will contain
    *                                                                     the directory information including `exists` boolean member.
    *                                                                     `response` will contain information related to this operation.
    */
    createDirectory(share: string, directory: string, callback: ErrorOrResult<FileService.DirectoryResult>): void;
    /**
    * Creates a new directory under the specified account.
    * If a directory with the same name already exists, the operation fails.
    *
    * @param {string}             share                                   The share name.
    * @param {string}             directory                               The directory name.
    * @param {object}             options                                 The request options.
    * @param {errorOrResult}      callback                                `error` will contain information
    *                                                                     if an error occurs; otherwise `[result]{@link DirectoryResult}` will contain
    *                                                                     the directory information including `exists` boolean member.
    *                                                                     `response` will contain information related to this operation.
    */
    createDirectory(share: string, directory: string, options: FileService.CreateDirectoryOptions, callback: ErrorOrResult<FileService.DirectoryResult>): void;
    
    /**
    * Creates a new directory under the specified account if the directory does not exists.
    *
    * @param {string}             share                                   The share name.
    * @param {string}             directory                               The directory name.
    * @param {errorOrResult}      callback                                `error` will contain information
    *                                                                     if an error occurs; otherwise `[result]{@link DirectoryResult}` will contain
    *                                                                     the directory information including `exists` boolean member.
    *                                                                     `response` will contain information related to this operation.
    */
    createDirectoryIfNotExists(share: string, directory: string, callback: ErrorOrResult<FileService.DirectoryResult>): void;
    /**
    * Creates a new directory under the specified account if the directory does not exists.
    *
    * @param {string}             share                                   The share name.
    * @param {string}             directory                               The directory name.
    * @param {object}             options                                 The request options.
    * @param {errorOrResult}      callback                                `error` will contain information
    *                                                                     if an error occurs; otherwise `[result]{@link DirectoryResult}` will contain
    *                                                                     the directory information including `exists` boolean member.
    *                                                                     `response` will contain information related to this operation.
    */
    createDirectoryIfNotExists(share: string, directory: string, options: FileService.CreateDirectoryOptions, callback: ErrorOrResult<FileService.DirectoryResult>): void;
    
    /**
    * Retrieves a directory and its properties from a specified account.
    * **Note** that all metadata names returned from the server will be converted to lower case by NodeJS itself as metadata is set via HTTP headers and HTTP header names are case insensitive.
    *
    * @param {string}             share                                   The share name.
    * @param {string}             directory                               The directory name. Use '' to refer to the base directory.
    * @param {errorOrResult}      callback                                `error` will contain information
    *                                                                     if an error occurs; otherwise `[result]{@link DirectoryResult}` will contain
    *                                                                     the directory information including `exists` boolean member.
    *                                                                     `response` will contain information related to this operation.
    */
    getDirectoryProperties(share: string, directory: string, callback: ErrorOrResult<FileService.DirectoryResult>): void;
    /**
    * Retrieves a directory and its properties from a specified account.
    * **Note** that all metadata names returned from the server will be converted to lower case by NodeJS itself as metadata is set via HTTP headers and HTTP header names are case insensitive.
    *
    * @param {string}             share                                   The share name.
    * @param {string}             directory                               The directory name. Use '' to refer to the base directory.
    * @param {object}             options                                 The request options.
    * @param {errorOrResult}      callback                                `error` will contain information
    *                                                                     if an error occurs; otherwise `[result]{@link DirectoryResult}` will contain
    *                                                                     the directory information including `exists` boolean member.
    *                                                                     `response` will contain information related to this operation.
    */
    getDirectoryProperties(share: string, directory: string, options: StorageServiceClient.ServiceClientOptions, callback: ErrorOrResult<FileService.DirectoryResult>): void;
    
    /**
    * Marks the specified directory for deletion. The directory must be empty before it can be deleted.
    *
    * @param {string}             share                               The share name.
    * @param {string}             directory                           The directory name.
    * @param {errorOrResponse}    callback                            `error` will contain information
    *                                                                 if an error occurs; otherwise
    *                                                                 `response` will contain information related to this operation.
    */
    deleteDirectory(share: string, directory: string, callback: StorageServiceClient.ErrorOrResponse): void;
    /**
    * Marks the specified directory for deletion. The directory must be empty before it can be deleted.
    *
    * @param {string}             share                               The share name.
    * @param {string}             directory                           The directory name.
    * @param {object}             options                             The request options.
    * @param {errorOrResponse}    callback                            `error` will contain information
    *                                                                 if an error occurs; otherwise
    *                                                                 `response` will contain information related to this operation.
    */
    deleteDirectory(share: string, directory: string, options: StorageServiceClient.ServiceClientOptions, callback: StorageServiceClient.ErrorOrResponse): void;
    
    /**
    * Marks the specified directory for deletion if it exists. The directory must be empty before it can be deleted.
    *
    * @param {string}             share                               The share name.
    * @param {string}             directory                           The directory name.
    * @param {errorOrResponse}    callback                            `error` will contain information
    *                                                                 if an error occurs; otherwise
    *                                                                 `response` will contain information related to this operation.
    */
    deleteDirectoryIfExists(share: string, directory: string, callback: StorageServiceClient.ErrorOrResponse): void;
    /**
    * Marks the specified directory for deletion if it exists. The directory must be empty before it can be deleted.
    *
    * @param {string}             share                               The share name.
    * @param {string}             directory                           The directory name.
    * @param {object}             options                             The request options.
    * @param {errorOrResponse}    callback                            `error` will contain information
    *                                                                 if an error occurs; otherwise
    *                                                                 `response` will contain information related to this operation.
    */
    deleteDirectoryIfExists(share: string, directory: string, options: StorageServiceClient.ServiceClientOptions, callback: StorageServiceClient.ErrorOrResponse): void;
    
    /**
    * Lists a segment containing a collection of file items in the directory.
    *
    * @param {string}             share                             The share name.
    * @param {string}             directory                         The directory name. Use '' to refer to the base directory.
    * @param {object}             currentToken                      A continuation token returned by a previous listing operation. Please use 'null' or 'undefined' if this is the first operation.
    * @param {errorOrResult}      callback                          `error` will contain information
    *                                                               if an error occurs; otherwise `result` will contain
    *                                                               entries.files which contains a list of `[files]{@link FileResult}`, entries.directories which contains a list of `[directories]{@link DirectoryResult}` and the continuationToken for the next listing operation.
    *                                                               `response` will contain information related to this operation.
    */
    listFilesAndDirectoriesSegmented(share: string, directory: string, currentToken: FileService.ListOptions, callback: ErrorOrResult<FileService.DirectoryListResult>): void;
    /**
    * Lists a segment containing a collection of file items in the directory.
    *
    * @param {string}             share                             The share name.
    * @param {string}             directory                         The directory name. Use '' to refer to the base directory.
    * @param {object}             currentToken                      A continuation token returned by a previous listing operation. Please use 'null' or 'undefined' if this is the first operation.
    * @param {object}             options                           The request options.
    * @param {errorOrResult}      callback                          `error` will contain information
    *                                                               if an error occurs; otherwise `result` will contain
    *                                                               entries.files which contains a list of `[files]{@link FileResult}`, entries.directories which contains a list of `[directories]{@link DirectoryResult}` and the continuationToken for the next listing operation.
    *                                                               `response` will contain information related to this operation.
    */
    listFilesAndDirectoriesSegmented(share: string, directory: string, currentToken: FileService.ListOptions, options: StorageServiceClient.ServiceClientOptions, callback: ErrorOrResult<FileService.DirectoryListResult>): void;
    
    /**
    * Returns all user-defined metadata for the specified directory.
    * **Note** that all metadata names returned from the server will be converted to lower case by NodeJS itself as metadata is set via HTTP headers and HTTP header names are case insensitive.
    *
    * @param {string}             share                                   The share name.
    * @param {string}             directory                               The directory name. Use '' to refer to the base directory.
    * @param {errorOrResult}      callback                                `error` will contain information
    *                                                                     if an error occurs; otherwise `[result]{@link DirectoryResult}` will contain
    *                                                                     the directory information including `exists` boolean member.
    *                                                                     `response` will contain information related to this operation.
    */
    getDirectoryMetadata(share: string, directory: string, callback: ErrorOrResult<FileService.DirectoryResult>): void;
    /**
    * Returns all user-defined metadata for the specified directory.
    * **Note** that all metadata names returned from the server will be converted to lower case by NodeJS itself as metadata is set via HTTP headers and HTTP header names are case insensitive.
    *
    * @param {string}             share                                   The share name.
    * @param {string}             directory                               The directory name. Use '' to refer to the base directory.
    * @param {object}             options                                 The request options.
    * @param {errorOrResult}      callback                                `error` will contain information
    *                                                                     if an error occurs; otherwise `[result]{@link DirectoryResult}` will contain
    *                                                                     the directory information including `exists` boolean member.
    *                                                                     `response` will contain information related to this operation.
    */
    getDirectoryMetadata(share: string, directory: string, options: StorageServiceClient.ServiceClientOptions, callback: ErrorOrResult<FileService.DirectoryResult>): void;
    
    /**
    * Sets user-defined metadata for the specified directory as one or more name-value pairs 
    *
    * @param {string}             share                                   The share name.
    * @param {string}             directory                               The directory name. Use '' to refer to the base directory.
    * @param {object}             metadata                                The metadata key/value pairs.
    * @param {errorOrResult}      callback                                `error` will contain information
    *                                                                     if an error occurs; otherwise `[result]{@link DirectoryResult}` will contain
    *                                                                     the directory information including `exists` boolean member.
    *                                                                     `response` will contain information related to this operation.
    */
    setDirectoryMetadata(share: string, directory: string, metadata: Object, callback: ErrorOrResult<FileService.DirectoryResult>): void;
    /**
    * Sets user-defined metadata for the specified directory as one or more name-value pairs 
    *
    * @param {string}             share                                   The share name.
    * @param {string}             directory                               The directory name. Use '' to refer to the base directory.
    * @param {object}             metadata                                The metadata key/value pairs.
    * @param {object}             options                                 The request options.
    * @param {errorOrResult}      callback                                `error` will contain information
    *                                                                     if an error occurs; otherwise `[result]{@link DirectoryResult}` will contain
    *                                                                     the directory information including `exists` boolean member.
    *                                                                     `response` will contain information related to this operation.
    */
    setDirectoryMetadata(share: string, directory: string, metadata: Object, options: StorageServiceClient.ServiceClientOptions, callback: ErrorOrResult<FileService.DirectoryResult>): void;
    
    // ***********************************************************
    // ** FILE METHODS
    // ***********************************************************
    
    /**
    * Retrieves a shared access signature token.
    *
    * @param {string}                   share                                               The share name.
    * @param {string}                   [directory]                                         The directory name. Use '' to refer to the base directory.
    * @param {string}                   [file]                                              The file name.
    * @param {object}                   sharedAccessPolicy                                  The shared access policy.
    * @param {object}                   [headers]                                           The optional header values to set for a file returned wth this SAS.
    * @return {string}                                                                      The shared access signature query string. Note this string does not contain the leading "?".
    */
    generateSharedAccessSignature(share: string, directory: string, file: string, sharedAccessPolicy: StorageServiceClient.SharedAccessPolicy, headers?: FileService.AccessPolicyHeaders): string;
    
    /**
    * Retrieves a file or directory URL.
    *
    * @param {string}                   share                    The share name.
    * @param {string}                   directory                The directory name. Use '' to refer to the base directory.
    * @param {string}                   [file]                   The file name. File names may not start or end with the delimiter '/'.
    * @param {string}                   [sasToken]               The Shared Access Signature token.
    * @param {boolean}                  [primary]                A boolean representing whether to use the primary or the secondary endpoint.
    * @return {string}                                           The formatted URL string.
    */
    getUrl(share: string, directory: string, file?: string, sasToken?: string, primary?: boolean): string
    
    /**
    * Returns all user-defined metadata, standard HTTP properties, and system properties for the file.
    * It does not return or modify the content of the file.
    * **Note** that all metadata names returned from the server will be converted to lower case by NodeJS itself as metadata is set via HTTP headers and HTTP header names are case insensitive.
    *
    * @param {string}             share                                       The share name.
    * @param {string}             directory                                   The directory name. Use '' to refer to the base directory.
    * @param {string}             file                                        The file name. File names may not start or end with the delimiter '/'.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link FileResult}` will contain
    *                                                                         information about the file.
    *                                                                         `response` will contain information related to this operation.
    */
    getFileProperties(share: string, directory: string, file: string, callback: ErrorOrResult<FileService.FileResult>): void;
    /**
    * Returns all user-defined metadata, standard HTTP properties, and system properties for the file.
    * It does not return or modify the content of the file.
    * **Note** that all metadata names returned from the server will be converted to lower case by NodeJS itself as metadata is set via HTTP headers and HTTP header names are case insensitive.
    *
    * @param {string}             share                                       The share name.
    * @param {string}             directory                                   The directory name. Use '' to refer to the base directory.
    * @param {string}             file                                        The file name. File names may not start or end with the delimiter '/'.
    * @param {object}             options                                     The request options.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link FileResult}` will contain
    *                                                                         information about the file.
    *                                                                         `response` will contain information related to this operation.
    */
    getFileProperties(share: string, directory: string, file: string, options: StorageServiceClient.ServiceClientOptions, callback: ErrorOrResult<FileService.FileResult>): void;
    
    /**
    * Returns all user-defined metadata for the specified file.
    * It does not modify or return the content of the file.
    * **Note** that all metadata names returned from the server will be converted to lower case by NodeJS itself as metadata is set via HTTP headers and HTTP header names are case insensitive.
    *
    * @param {string}             share                                       The share name.
    * @param {string}             directory                                   The directory name. Use '' to refer to the base directory.
    * @param {string}             file                                        The file name. File names may not start or end with the delimiter '/'.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link FileResult}` will contain
    *                                                                         information about the file.
    *                                                                         `response` will contain information related to this operation.
    */
    getFileMetadata(share: string, directory: string, file: string, callback: ErrorOrResult<FileService.FileResult>): void;
    /**
    * Returns all user-defined metadata for the specified file.
    * It does not modify or return the content of the file.
    * **Note** that all metadata names returned from the server will be converted to lower case by NodeJS itself as metadata is set via HTTP headers and HTTP header names are case insensitive.
    *
    * @param {string}             share                                       The share name.
    * @param {string}             directory                                   The directory name. Use '' to refer to the base directory.
    * @param {string}             file                                        The file name. File names may not start or end with the delimiter '/'.
    * @param {object}             options                                     The request options.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link FileResult}` will contain
    *                                                                         information about the file.
    *                                                                         `response` will contain information related to this operation.
    */
    getFileMetadata(share: string, directory: string, file: string, options: StorageServiceClient.ServiceClientOptions, callback: ErrorOrResult<FileService.FileResult>): void;
    
    /**
    * Sets user-defined properties for the specified file.
    * It does not modify or return the content of the file.
    *
    * @param {string}             share                                       The share name.
    * @param {string}             directory                                   The directory name. Use '' to refer to the base directory.
    * @param {string}             file                                        The file name. File names may not start or end with the delimiter '/'.
    * @param {object}             [properties]                                The file properties to set.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link FileResult}` will contain
    *                                                                         information about the file.
    *                                                                         `response` will contain information related to this operation.
    */
    setFileProperties(share: string, directory: string, file: string, properties: FileService.FileProperties, callback: ErrorOrResult<FileService.FileResult>): void;
    /**
    * Sets user-defined properties for the specified file.
    * It does not modify or return the content of the file.
    *
    * @param {string}             share                                       The share name.
    * @param {string}             directory                                   The directory name. Use '' to refer to the base directory.
    * @param {string}             file                                        The file name. File names may not start or end with the delimiter '/'.
    * @param {object}             [properties]                                The file properties to set.
    * @param {object}             options                                     The request options.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link FileResult}` will contain
    *                                                                         information about the file.
    *                                                                         `response` will contain information related to this operation.
    */
    setFileProperties(share: string, directory: string, file: string, properties: FileService.FileProperties, options: StorageServiceClient.ServiceClientOptions, callback: ErrorOrResult<FileService.FileResult>): void;
    
    /**
    * Sets user-defined metadata for the specified file as one or more name-value pairs 
    * It does not modify or return the content of the file.
    *
    * @param {string}             share                                       The share name.
    * @param {string}             directory                                   The directory name. Use '' to refer to the base directory.
    * @param {string}             file                                        The file name. File names may not start or end with the delimiter '/'.
    * @param {object}             metadata                                    The metadata key/value pairs.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link FileResult}` will contain
    *                                                                         information about the file.
    *                                                                         `response` will contain information related to this operation.
    */
    setFileMetadata(share: string, directory: string, file: string, metadata: Object, callback: ErrorOrResult<FileService.FileResult>): void;
    /**
    * Sets user-defined metadata for the specified file as one or more name-value pairs 
    * It does not modify or return the content of the file.
    *
    * @param {string}             share                                       The share name.
    * @param {string}             directory                                   The directory name. Use '' to refer to the base directory.
    * @param {string}             file                                        The file name. File names may not start or end with the delimiter '/'.
    * @param {object}             metadata                                    The metadata key/value pairs.
    * @param {object}             options                                     The request options.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link FileResult}` will contain
    *                                                                         information about the file.
    *                                                                         `response` will contain information related to this operation.
    */
    setFileMetadata(share: string, directory: string, file: string, metadata: Object, options: StorageServiceClient.ServiceClientOptions, callback: ErrorOrResult<FileService.FileResult>): void;
    
    /**
    * Resizes a file.
    *
    * @param {string}             share                                       The share name.
    * @param {string}             directory                                   The directory name. Use '' to refer to the base directory.
    * @param {String}             size                                        The size of the file, in bytes.
    * @param {object}             metadata                                    The metadata key/value pairs.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link FileResult}` will contain
    *                                                                         information about the file.
    *                                                                         `response` will contain information related to this operation.
    */
    resizeFile(share: string, directory: string, file: string, size: string | number, callback: ErrorOrResult<FileService.FileResult>): void;
    /**
    * Resizes a file.
    *
    * @param {string}             share                                       The share name.
    * @param {string}             directory                                   The directory name. Use '' to refer to the base directory.
    * @param {string}             file                                        The file name. File names may not start or end with the delimiter '/'.
    * @param {String}             size                                        The size of the file, in bytes.
    * @param {object}             options                                     The request options.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link FileResult}` will contain
    *                                                                         information about the file.
    *                                                                         `response` will contain information related to this operation.
    */
    resizeFile(share: string, directory: string, file: string, size: string | number, options: StorageServiceClient.ServiceClientOptions, callback: ErrorOrResult<FileService.FileResult>): void;
    
    /**
    * Checks whether or not a file exists on the service.
    *
    * @param {string}             share                                       The share name.
    * @param {string}             directory                                   The directory name. Use '' to refer to the base directory.
    * @param {string}             file                                        The file name. File names may not start or end with the delimiter '/'.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link FileResult}` will contain
    *                                                                         the file information including the `exists` boolean member. 
    *                                                                         `response` will contain information related to this operation.
    */
    doesFileExist(share: string, directory: string, file: string, callback: ErrorOrResult<FileService.FileResult>): void;
    /**
    * Checks whether or not a file exists on the service.
    *
    * @param {string}             share                                       The share name.
    * @param {string}             directory                                   The directory name. Use '' to refer to the base directory.
    * @param {string}             file                                        The file name. File names may not start or end with the delimiter '/'.
    * @param {object}             options                                     The request options.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link FileResult}` will contain
    *                                                                         the file information including the `exists` boolean member. 
    *                                                                         `response` will contain information related to this operation.
    */
    doesFileExist(share: string, directory: string, file: string, options: StorageServiceClient.ServiceClientOptions, callback: ErrorOrResult<FileService.FileResult>): void;
    
    /**
    * Creates a file of the specified length. If the file already exists on the service, it will be overwritten.
    *
    * @param {string}             share                                       The share name.
    * @param {string}             directory                                   The directory name. Use '' to refer to the base directory.
    * @param {string}             file                                        The file name. File names may not start or end with the delimiter '/'.
    * @param {int}                length                                      The length of the file in bytes.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link FileResult}` will contain
    *                                                                         information about the file.
    *                                                                         `response` will contain information related to this operation.
    */
    createFile(share: string, directory: string, file: string, length: number, callback: ErrorOrResult<FileService.FileResult>): void;
    /**
    * Creates a file of the specified length. If the file already exists on the service, it will be overwritten.
    *
    * @param {string}             share                                       The share name.
    * @param {string}             directory                                   The directory name. Use '' to refer to the base directory.
    * @param {string}             file                                        The file name. File names may not start or end with the delimiter '/'.
    * @param {int}                length                                      The length of the file in bytes.
    * @param {object}             options                                     The request options.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link FileResult}` will contain
    *                                                                         information about the file.
    *                                                                         `response` will contain information related to this operation.
    */
    createFile(share: string, directory: string, file: string, length: number, options: FileService.CreateFileOptions, callback: ErrorOrResult<FileService.FileResult>): void;
    
    /**
    * Marks the specified file for deletion. The file is later deleted during garbage collection.
    *
    * @param {string}             share                                       The share name.
    * @param {string}             directory                                   The directory name. Use '' to refer to the base directory.
    * @param {string}             file                                        The file name. File names may not start or end with the delimiter '/'.
    * @param {errorOrResponse}    callback                                    `error` will contain information
    *                                                                         if an error occurs; `response` will contain information related to this operation.
    */
    deleteFile(share: string, directory: string, file: string, callback: StorageServiceClient.ErrorOrResponse): void;
    /**
    * Marks the specified file for deletion. The file is later deleted during garbage collection.
    *
    * @param {string}             share                                       The share name.
    * @param {string}             directory                                   The directory name. Use '' to refer to the base directory.
    * @param {string}             file                                        The file name. File names may not start or end with the delimiter '/'.
    * @param {object}             options                                     The request options.
    * @param {errorOrResponse}    callback                                    `error` will contain information
    *                                                                         if an error occurs; `response` will contain information related to this operation.
    */
    deleteFile(share: string, directory: string, file: string, options: StorageServiceClient.ServiceClientOptions, callback: StorageServiceClient.ErrorOrResponse): void;
    
    /**
    * Marks the specified file for deletion if it exists. The file is later deleted during garbage collection.
    *
    * @param {string}             share                                       The share name.
    * @param {string}             directory                                   The directory name. Use '' to refer to the base directory.
    * @param {string}             file                                        The file name. File names may not start or end with the delimiter '/'.
    * @param {errorOrResponse}    callback                                    `error` will contain information
    *                                                                         if an error occurs; `response` will contain information related to this operation.
    */
    deleteFileIfExists(share: string, directory: string, file: string, callback: StorageServiceClient.ErrorOrResponse): void;
    /**
    * Marks the specified file for deletion if it exists. The file is later deleted during garbage collection.
    *
    * @param {string}             share                                       The share name.
    * @param {string}             directory                                   The directory name. Use '' to refer to the base directory.
    * @param {string}             file                                        The file name. File names may not start or end with the delimiter '/'.
    * @param {object}             options                                     The request options.
    * @param {errorOrResponse}    callback                                    `error` will contain information
    *                                                                         if an error occurs; `response` will contain information related to this operation.
    */
    deleteFileIfExists(share: string, directory: string, file: string, options: StorageServiceClient.ServiceClientOptions, callback: StorageServiceClient.ErrorOrResponse): void;
    
    /**
    * Downloads a file into a text string.
    *
    * @param {string}             share                                       The share name.
    * @param {string}             directory                                   The directory name. Use '' to refer to the base directory.
    * @param {string}             file                                        The file name. File names may not start or end with the delimiter '/'.
    * @param {FileService~FileToText}  callback                               `error` will contain information
    *                                                                         if an error occurs; otherwise `text` will contain the file contents,
    *                                                                         and `[file]{@link FileResult}` will contain the file information.
    *                                                                         `response` will contain information related to this operation.
    */
    getFileToText(share: string, directory: string, file: string, callback: FileService.FileToText): void;
    /**
    * Downloads a file into a text string.
    *
    * @param {string}             share                                       The share name.
    * @param {string}             directory                                   The directory name. Use '' to refer to the base directory.
    * @param {string}             file                                        The file name. File names may not start or end with the delimiter '/'.
    * @param {object}             options                                     The request options.
    * @param {FileService~FileToText}  callback                               `error` will contain information
    *                                                                         if an error occurs; otherwise `text` will contain the file contents,
    *                                                                         and `[file]{@link FileResult}` will contain the file information.
    *                                                                         `response` will contain information related to this operation.
    */
    getFileToText(share: string, directory: string, file: string, options: FileService.DownloadFileOptions, callback: FileService.FileToText): void;
    
    /**
    * Downloads an Azure file into a file.
    *
    * @param {string}             share                                       The share name.
    * @param {string}             directory                                   The directory name. Use '' to refer to the base directory.
    * @param {string}             file                                        The file name. File names may not start or end with the delimiter '/'.
    * @param {string}             localFileName                               The local path to the file to be downloaded.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link FileResult}` will contain
    *                                                                         the file information. 
    *                                                                         `response` will contain information related to this operation.
    * @return {SpeedSummary}
    */
    getFileToLocalFile(share: string, directory: string, file: string, localFileName: string, callback: ErrorOrResult<FileService.FileResult>): SpeedSummary;
    /**
    * Downloads an Azure file into a file.
    *
    * @param {string}             share                                       The share name.
    * @param {string}             directory                                   The directory name. Use '' to refer to the base directory.
    * @param {string}             file                                        The file name. File names may not start or end with the delimiter '/'.
    * @param {string}             localFileName                               The local path to the file to be downloaded.
    * @param {object}             options                                     The request options.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link FileResult}` will contain
    *                                                                         the file information. 
    *                                                                         `response` will contain information related to this operation.
    * @return {SpeedSummary}
    */
    getFileToLocalFile(share: string, directory: string, file: string, localFileName: string, options: FileService.DownloadSpeedFileOptions, callback: ErrorOrResult<FileService.FileResult>): SpeedSummary;
    
    /**
    * Provides a stream to read from a file.
    *
    * @param {string}             share                                       The share name.
    * @param {string}             directory                                   The directory name. Use '' to refer to the base directory.
    * @param {string}             file                                        The file name. File names may not start or end with the delimiter '/'.
    * @return {Stream}
    */
    createReadStream(share: string, directory: string, file: string): NodeJS.ReadableStream;
    /**
    * Provides a stream to read from a file.
    *
    * @param {string}             share                                       The share name.
    * @param {string}             directory                                   The directory name. Use '' to refer to the base directory.
    * @param {string}             file                                        The file name. File names may not start or end with the delimiter '/'.
    * @param {object}             options                                     The request options.
    * @return {Stream}
    */
    createReadStream(share: string, directory: string, file: string, options: FileService.DownloadFileOptions): NodeJS.ReadableStream;
    /**
    * Provides a stream to read from a file.
    *
    * @param {string}             share                                       The share name.
    * @param {string}             directory                                   The directory name. Use '' to refer to the base directory.
    * @param {string}             file                                        The file name. File names may not start or end with the delimiter '/'.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link FileResult}` will contain
    *                                                                         the file information. 
    *                                                                         `response` will contain information related to this operation.
    * @return {Stream}
    */
    createReadStream(share: string, directory: string, file: string, callback: ErrorOrResult<FileService.FileResult>): NodeJS.ReadableStream;
    /**
    * Provides a stream to read from a file.
    *
    * @param {string}             share                                       The share name.
    * @param {string}             directory                                   The directory name. Use '' to refer to the base directory.
    * @param {string}             file                                        The file name. File names may not start or end with the delimiter '/'.
    * @param {object}             options                                     The request options.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link FileResult}` will contain
    *                                                                         the file information. 
    *                                                                         `response` will contain information related to this operation.
    * @return {Stream}
    */
    createReadStream(share: string, directory: string, file: string, options: FileService.DownloadFileOptions, callback: ErrorOrResult<FileService.FileResult>): NodeJS.ReadableStream;
    
    /**
    * Downloads a file into a stream.
    *
    * @param {string}             share                                       The share name.
    * @param {string}             directory                                   The directory name. Use '' to refer to the base directory.
    * @param {string}             file                                        The file name. File names may not start or end with the delimiter '/'.
    * @param {Stream}             writeStream                                 The write stream.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link FileResult}` will contain
    *                                                                         the file information. 
    *                                                                         `response` will contain information related to this operation.
    * @return {SpeedSummary}
    */
    getFileToStream(share: string, directory: string, file: string, writeStream: NodeJS.WritableStream, callback: ErrorOrResult<FileService.FileResult>): SpeedSummary;
    /**
    * Downloads a file into a stream.
    *
    * @param {string}             share                                       The share name.
    * @param {string}             directory                                   The directory name. Use '' to refer to the base directory.
    * @param {string}             file                                        The file name. File names may not start or end with the delimiter '/'.
    * @param {Stream}             writeStream                                 The write stream.
    * @param {object}             options                                     The request options.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link FileResult}` will contain
    *                                                                         the file information. 
    *                                                                         `response` will contain information related to this operation.
    * @return {SpeedSummary}
    */
    getFileToStream(share: string, directory: string, file: string, writeStream: NodeJS.WritableStream, options: FileService.DownloadSpeedFileOptions, callback: ErrorOrResult<FileService.FileResult>): SpeedSummary;
    
    /**
    * Lists All file ranges.
    *
    * @param {string}             share                                       The share name.
    * @param {string}             directory                                   The directory name. Use '' to refer to the base directory.
    * @param {string}             file                                        The file name. File names may not start or end with the delimiter '/'.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link FileResult}` will contain
    *                                                                         the range information.
    *                                                                         `response` will contain information related to this operation.
    */
    listRanges(share: string, directory: string, file: string, callback: ErrorOrResult<FileService.Range[]>): void;
    /**
    * Lists file ranges. Lists all of the ranges by default, or only the ranges over a specific range of bytes if rangeStart and rangeEnd are specified.
    *
    * @param {string}             share                                       The share name.
    * @param {string}             directory                                   The directory name. Use '' to refer to the base directory.
    * @param {string}             file                                        The file name. File names may not start or end with the delimiter '/'.
    * @param {object}             options                                     The request options.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link FileResult}` will contain
    *                                                                         the range information.
    *                                                                         `response` will contain information related to this operation.
    */
    listRanges(share: string, directory: string, file: string, options: FileService.ListFileRangesOptions, callback: ErrorOrResult<FileService.Range[]>): void;
    
    /**
    * Clears a range. Clears all of the ranges by default, or only the ranges over a specific range of bytes if rangeStart and rangeEnd are specified.
    *
    * @param {string}             share                                       The share name.
    * @param {string}             directory                                   The directory name. Use '' to refer to the base directory.
    * @param {string}             file                                        The file name. File names may not start or end with the delimiter '/'.
    * @param {int}                rangeStart                                  The range start.
    * @param {int}                rangeEnd                                    The range end.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link FileResult}` will contain
    *                                                                         information about the file.
    *                                                                         `response` will contain information related to this operation.
    */
    clearRange(share: string, directory: string, file: string, rangeStart: number, rangeEnd: number, callback: ErrorOrResult<FileService.FileResult>): void;
    /**
    * Clears a range. Clears all of the ranges by default, or only the ranges over a specific range of bytes if rangeStart and rangeEnd are specified.
    *
    * @param {string}             share                                       The share name.
    * @param {string}             directory                                   The directory name. Use '' to refer to the base directory.
    * @param {string}             file                                        The file name. File names may not start or end with the delimiter '/'.
    * @param {int}                rangeStart                                  The range start.
    * @param {int}                rangeEnd                                    The range end.
    * @param {object}             options                                     The request options.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link FileResult}` will contain
    *                                                                         information about the file.
    *                                                                         `response` will contain information related to this operation.
    */
    clearRange(share: string, directory: string, file: string, rangeStart: number, rangeEnd: number, options: StorageServiceClient.ServiceClientOptions, callback: ErrorOrResult<FileService.FileResult>): void;
    
    /**
    * Updates a range from a stream.
    *
    * @param {string}             share                                       The share name.
    * @param {string}             directory                                   The directory name. Use '' to refer to the base directory.
    * @param {string}             file                                        The file name. File names may not start or end with the delimiter '/'.
    * @param {Stream}             readStream                                  The read stream.
    * @param {int}                rangeStart                                  The range start.
    * @param {int}                rangeEnd                                    The range end.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link FileResult}` will contain
    *                                                                         information about the file.
    *                                                                         `response` will contain information related to this operation.
    */
    createRangesFromStream(share: string, directory: string, file: string, readStream: NodeJS.ReadableStream, rangeStart: number, rangeEnd: number, callback: ErrorOrResult<FileService.FileResult>): void;
    /**
    * Updates a range from a stream.
    *
    * @param {string}             share                                       The share name.
    * @param {string}             directory                                   The directory name. Use '' to refer to the base directory.
    * @param {string}             file                                        The file name. File names may not start or end with the delimiter '/'.
    * @param {Stream}             readStream                                  The read stream.
    * @param {int}                rangeStart                                  The range start.
    * @param {int}                rangeEnd                                    The range end.
    * @param {object}             options                                     The request options.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link FileResult}` will contain
    *                                                                         information about the file.
    *                                                                         `response` will contain information related to this operation.
    */
    createRangesFromStream(share: string, directory: string, file: string, readStream: NodeJS.ReadableStream, rangeStart: number, rangeEnd: number, options: FileService.UpdateFileRangeOptions, callback: ErrorOrResult<FileService.FileResult>): void;
    
    /**
    * Uploads a file from a text string. If the file already exists on the service, it will be overwritten.
    *
    * @param {string}             share                                       The share name.
    * @param {string}             directory                                   The directory name. Use '' to refer to the base directory.
    * @param {string}             file                                        The file name. File names may not start or end with the delimiter '/'.
    * @param {Stream}             text                                        The file text, as a string or in a Buffer.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link FileResult}` will contain
    *                                                                         information about the file.
    *                                                                         `response` will contain information related to this operation.
    */
    createFileFromText(share: string, directory: string, file: string, text: string | Buffer, callback: ErrorOrResult<FileService.FileResult>): void;
    /**
    * Uploads a file from a text string. If the file already exists on the service, it will be overwritten.
    *
    * @param {string}             share                                       The share name.
    * @param {string}             directory                                   The directory name. Use '' to refer to the base directory.
    * @param {string}             file                                        The file name. File names may not start or end with the delimiter '/'.
    * @param {Stream}             text                                        The file text, as a string or in a Buffer.
    * @param {object}             options                                     The request options.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link FileResult}` will contain
    *                                                                         information about the file.
    *                                                                         `response` will contain information related to this operation.
    */
    createFileFromText(share: string, directory: string, file: string, text: string | Buffer, options: FileService.UploadFileOptions, callback: ErrorOrResult<FileService.FileResult>): void;
    
    /**
    * Uploads a file to storage from a local file. If the file already exists on the service, it will be overwritten.
    *
    * @param {string}             share                                       The share name.
    * @param {string}             directory                                   The directory name. Use '' to refer to the base directory.
    * @param {string}             file                                        The file name. File names may not start or end with the delimiter '/'.
    * @param {string}             localFileName                               The local path to the file to be downloaded.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link FileResult}` will contain
    *                                                                         the file information. 
    *                                                                         `response` will contain information related to this operation.
    * @return {SpeedSummary}
    */
    createFileFromLocalFile(share: string, directory: string, file: string, localFileName: string, callback: ErrorOrResult<FileService.FileResult>): SpeedSummary;
    /**
    * Uploads a file to storage from a local file. If the file already exists on the service, it will be overwritten.
    *
    * @param {string}             share                                       The share name.
    * @param {string}             directory                                   The directory name. Use '' to refer to the base directory.
    * @param {string}             file                                        The file name. File names may not start or end with the delimiter '/'.
    * @param {string}             localFileName                               The local path to the file to be downloaded.
    * @param {object}             options                                     The request options.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link FileResult}` will contain
    *                                                                         the file information. 
    *                                                                         `response` will contain information related to this operation.
    * @return {SpeedSummary}
    */
    createFileFromLocalFile(share: string, directory: string, file: string, localFileName: string, options: FileService.UploadFileOptions, callback: ErrorOrResult<FileService.FileResult>): SpeedSummary;
    
    /**
    * Uploads a file from a stream. If the file already exists on the service, it will be overwritten.
    *
    * @param {string}             share                                       The share name.
    * @param {string}             directory                                   The directory name. Use '' to refer to the base directory.
    * @param {string}             file                                        The file name. File names may not start or end with the delimiter '/'.
    * @param (Stream)             stream                                      Stream to the data to store.
    * @param {int}                streamLength                                The length of the stream to upload.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link FileResult}` will contain
    *                                                                         the file information. 
    *                                                                         `response` will contain information related to this operation.
    * @return {SpeedSummary}
    */
    createFileFromStream(share: string, directory: string, file: string, stream: NodeJS.ReadableStream, streamLength: number, callback: ErrorOrResult<FileService.FileResult>): SpeedSummary;
    /**
    * Uploads a file from a stream. If the file already exists on the service, it will be overwritten.
    *
    * @param {string}             share                                       The share name.
    * @param {string}             directory                                   The directory name. Use '' to refer to the base directory.
    * @param {string}             file                                        The file name. File names may not start or end with the delimiter '/'.
    * @param (Stream)             stream                                      Stream to the data to store.
    * @param {int}                streamLength                                The length of the stream to upload.
    * @param {object}             options                                     The request options.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link FileResult}` will contain
    *                                                                         the file information. 
    *                                                                         `response` will contain information related to this operation.
    * @return {SpeedSummary}
    */
    createFileFromStream(share: string, directory: string, file: string, stream: NodeJS.ReadableStream, streamLength: number, options: FileService.UploadFileOptions, callback: ErrorOrResult<FileService.FileResult>): SpeedSummary;
    
    /**
    * Provides a stream to write to a file. Assumes that the file exists. 
    * If it does not, please create the file using createFile before calling this method or use createWriteStreamNewFile.
    *
    * @param {string}             share                                       The share name.
    * @param {string}             directory                                   The directory name. Use '' to refer to the base directory.
    * @param {string}             file                                        The file name. File names may not start or end with the delimiter '/'.
    * @return {Stream}
    */
    createWriteStreamToExistingFile(share: string, directory: string, file: string): NodeJS.WritableStream;
    /**
    * Provides a stream to write to a file. Assumes that the file exists. 
    * If it does not, please create the file using createFile before calling this method or use createWriteStreamNewFile.
    *
    * @param {string}             share                                       The share name.
    * @param {string}             directory                                   The directory name. Use '' to refer to the base directory.
    * @param {string}             file                                        The file name. File names may not start or end with the delimiter '/'.
    * @param {object}             options                                     The request options.
    * @return {Stream}
    */
    createWriteStreamToExistingFile(share: string, directory: string, file: string, options: FileService.UploadFileOptions): NodeJS.WritableStream;
    /**
    * Provides a stream to write to a file. Assumes that the file exists. 
    * If it does not, please create the file using createFile before calling this method or use createWriteStreamNewFile.
    *
    * @param {string}             share                                       The share name.
    * @param {string}             directory                                   The directory name. Use '' to refer to the base directory.
    * @param {string}             file                                        The file name. File names may not start or end with the delimiter '/'.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link FileResult}` will contain
    *                                                                         the file information. 
    *                                                                         `response` will contain information related to this operation.
    * @return {Stream}
    */
    createWriteStreamToExistingFile(share: string, directory: string, file: string, callback: ErrorOrResult<FileService.FileResult>): NodeJS.WritableStream;
    /**
    * Provides a stream to write to a file. Assumes that the file exists. 
    * If it does not, please create the file using createFile before calling this method or use createWriteStreamNewFile.
    *
    * @param {string}             share                                       The share name.
    * @param {string}             directory                                   The directory name. Use '' to refer to the base directory.
    * @param {string}             file                                        The file name. File names may not start or end with the delimiter '/'.
    * @param {object}             options                                     The request options.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link FileResult}` will contain
    *                                                                         the file information. 
    *                                                                         `response` will contain information related to this operation.
    * @return {Stream}
    */
    createWriteStreamToExistingFile(share: string, directory: string, file: string, options: FileService.UploadFileOptions, callback: ErrorOrResult<FileService.FileResult>): NodeJS.WritableStream;
    
    /**
    * Provides a stream to write to a file. Creates the file before writing data.
    *
    * @param {string}             share                                       The share name.
    * @param {string}             directory                                   The directory name. Use '' to refer to the base directory.
    * @param {string}             file                                        The file name. File names may not start or end with the delimiter '/'.
    * @param {string}             length                                      The file length.
    * @return {Stream}
    */
    createWriteStreamToNewFile(share: string, directory: string, file: string, length: number): NodeJS.WritableStream;
    /**
    * Provides a stream to write to a file. Creates the file before writing data.
    *
    * @param {string}             share                                       The share name.
    * @param {string}             directory                                   The directory name. Use '' to refer to the base directory.
    * @param {string}             file                                        The file name. File names may not start or end with the delimiter '/'.
    * @param {string}             length                                      The file length.
    * @param {object}             options                                     The request options.
    * @return {Stream}
    */
    createWriteStreamToNewFile(share: string, directory: string, file: string, length: number, options: FileService.UploadFileOptions): NodeJS.WritableStream;
    /**
    * Provides a stream to write to a file. Creates the file before writing data.
    *
    * @param {string}             share                                       The share name.
    * @param {string}             directory                                   The directory name. Use '' to refer to the base directory.
    * @param {string}             file                                        The file name. File names may not start or end with the delimiter '/'.
    * @param {string}             length                                      The file length.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link FileResult}` will contain
    *                                                                         the file information. 
    *                                                                         `response` will contain information related to this operation.
    * @return {Stream}
    */
    createWriteStreamToNewFile(share: string, directory: string, file: string, length: number, callback: ErrorOrResult<FileService.FileResult>): NodeJS.WritableStream;
    /**
    * Provides a stream to write to a file. Creates the file before writing data.
    *
    * @param {string}             share                                       The share name.
    * @param {string}             directory                                   The directory name. Use '' to refer to the base directory.
    * @param {string}             file                                        The file name. File names may not start or end with the delimiter '/'.
    * @param {string}             length                                      The file length.
    * @param {object}             options                                     The request options.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link FileResult}` will contain
    *                                                                         the file information. 
    *                                                                         `response` will contain information related to this operation.
    * @return {Stream}
    */
    createWriteStreamToNewFile(share: string, directory: string, file: string, length: number, options: FileService.UploadFileOptions, callback: ErrorOrResult<FileService.FileResult>): NodeJS.WritableStream;
    
    /**
    * Starts to copy a file to a destination within the storage account.
    *
    * @param {string}             sourceUri                                   The source file or blob URI.
    * @param {string}             targetShare                                 The target share name.
    * @param {string}             targetDirectory                             The target directory name.
    * @param {string}             targetFile                                  The target file name.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link FileResult}` will contain
    *                                                                         the file information including the `exists` boolean member. 
    *                                                                         `response` will contain information related to this operation.
    */
    startCopyFile(sourceUri: string, targetShare: string, targetDirectory: string, targetFile: string, callback: ErrorOrResult<FileService.FileResult>): void;
    /**
    * Starts to copy a file to a destination within the storage account.
    *
    * @param {string}             sourceUri                                   The source file or blob URI.
    * @param {string}             targetShare                                 The target share name.
    * @param {string}             targetDirectory                             The target directory name.
    * @param {string}             targetFile                                  The target file name.
    * @param {object}             options                                     The request options.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link FileResult}` will contain
    *                                                                         the file information including the `exists` boolean member. 
    *                                                                         `response` will contain information related to this operation.
    */
    startCopyFile(sourceUri: string, targetShare: string, targetDirectory: string, targetFile: string, options: FileService.StartCopyOptions, callback: ErrorOrResult<FileService.FileResult>): void;
    
    /**
    * Abort a file copy operation.
    *
    * @param {string}             share                                       The share name.
    * @param {string}             directory                                   The directory name. Use '' to refer to the base directory.
    * @param {string}             file                                        The file name. File names may not start or end with the delimiter '/'.
    * @param {string}             copyId                                      The copy operation identifier.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link FileResult}` will contain
    *                                                                         information about the file.
    *                                                                         `response` will contain information related to this operation.
    */
    abortCopyFile(share: string, directory: string, file: string, copyId: string, callback: ErrorOrResult<FileService.FileResult>): void;
    /**
    * Abort a file copy operation.
    *
    * @param {string}             share                                       The share name.
    * @param {string}             directory                                   The directory name. Use '' to refer to the base directory.
    * @param {string}             file                                        The file name. File names may not start or end with the delimiter '/'.
    * @param {string}             copyId                                      The copy operation identifier.
    * @param {object}             options                                     The request options.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link FileResult}` will contain
    *                                                                         information about the file.
    *                                                                         `response` will contain information related to this operation.
    */
    abortCopyFile(share: string, directory: string, file: string, copyId: string, options: StorageServiceClient.ServiceClientOptions, callback: ErrorOrResult<FileService.FileResult>): void;
    
}

declare namespace FileService {
    
    export type FileToText = (err: StorageError, text: string, file: FileResult, response: StorageServiceClient.ServiceResponse) => void;
    
    // ***********************************************************
    // ** RESULTS
    // ***********************************************************
    
    export interface ShareResult {
        /** The share name. */
        name: string;
        /** The metadata key/value pair. */
        metadata?: any;
        /** The etag. */
        etag?: string;
        /** The date/time that the share was last modified. */
        lastModified?: string;
        /** The request id. */
        requestId?: string;
        /** The share quota. */
        quota?: number;
        /** The signed identifiers. Only available after a getShareAcl call. */
        signedIdentifiers?: StorageServiceClient.SignedIdentifiersResult;
        /** The share public access level. Only available after a getShareAcl call. */
        publicAccessLevel?: string;
        /** The share statistics. Only available after a getShareStats call. */
        shareStats?: ShareStats;
        /** Does the share exist? Only available after a doesShareExist call. */
        exists?: boolean;
        /** Was the share created? Only available after a createShareIfNotExists call. */
        created?: boolean;
    }
    
    export interface DirectoryResult {
        /** The directory name. */
        name: string;
        /** The metadata key/value pair. */
        metadata?: any;
        /** The etag.  */
        etag?: string;
        /** The date/time that the directory was last modified. */
        lastModified?: string;
        /** The request id. */
        requestId?: string;
        /** Does the directory exist? Only available after a doesDirectoryExist call. */
        exists?: boolean;
        /** Was the directory created? Only available after a createDirectoryIfNotExists call. */
        created?: boolean;
    }
    
    export interface FileResult {
        /** The share name. */
        share: string;
        /** The directory name. */
        directory: string;
        /** The file name. */
        name: string;
        /** The metadata key/value pair. */
        metadata?: any;
        /** The etag.  */
        etag?: string;
        /** The date/time that the file was last modified. */
        lastModified?: string;
        /** The request id. */
        requestId?: string;
        
        /** The accept ranges. */
        acceptRanges?: string;
        /** The content range. */
        contentRange?: string;
        /** The size of the file in bytes.. */
        contentLength?: string;
        /** The content settings. */
        contentSettings?: FileProperties;
        
        /** The copy information. */
        copy?: {
            /** The copy id. */
            id: string;
            /** The copy status. */
            status: string;
            /** The copy completion time. */
            completionTime: string;
            /** The copy status description. */
            statusDescription: string;
            /** The copy progress. */
            progress: string;
            /** The copy source. */
            source: string;
        };
        
        /** Does the file exist? Only available after a doesFileExist call. */
        exists?: boolean;
    }
    
    export interface DirectoryListResult {
        entries: {
            files: FileResult[];
            directories: DirectoryResult[];
        };
        
        continuationToken?: StorageServiceClient.ContinuationToken;
    }
    
    export interface ShareProperties {
        /** Specifies the maximum size of the share, in gigabytes. */
        quota?: number | string;
    }
    
    export interface ShareStats {
        /**  */
        shareUsage?: number;
    }
    
    export interface FileProperties {
        /** The content type. */
        contentType?: string;
        /** The content encoding. */
        contentEncoding?: string;
        /** The content language. */
        contentLanguage?: string;
        /** The cache control. */
        cacheControl?: string;
        /** The content disposition. */
        contentDisposition?: string;
        /** The content MD5 hash. */
        contentMD5?: string;
    }
    
    export interface Range {
        start: number;
        end: number;
    }
    
    
    // ***********************************************************
    // ** OPTIONS
    // ***********************************************************
    
    export interface ListSharesOptions extends StorageServiceClient.ServiceClientOptions {
        /** Specifies the maximum number of shares to return per call to Azure storage. */
        maxResults?: number;
        /** 
         * Include this parameter to specify that the share's metadata be returned as part of the response body. (allowed values: '', 'metadata').
         * **Note** that all metadata names returned from the server will be converted to lower case by NodeJS itself as metadata is set via HTTP headers and HTTP header names are case insensitive.
         */
        include?: string;
        /** Filters the results to return only shares whose name begins with the specified prefix. */
        prefix?: string;
    }
    
    export interface CreateShareOptions extends StorageServiceClient.ServiceClientOptions {
        /** Specifies the maximum size of the share, in gigabytes. */
        quota?: number;
        /** The metadata key/value pairs. */
        metadata?: Object;
    }
    
    export interface CreateDirectoryOptions extends StorageServiceClient.ServiceClientOptions {
        /** The metadata key/value pairs. */
        metadata?: Object;
    }
    
    export interface ListOptions extends StorageServiceClient.ServiceClientOptions {
        /** Specifies the maximum number of files to return per call to Azure ServiceClient. This does NOT affect list size returned by this function. (maximum: 5000) */
        maxResults?: number;
    }
    
    export interface AccessPolicyHeaders {
        /** The optional value of the Cache-Control response header to be returned when this SAS is used. */
        cacheControl?: string;
        /** The optional value of the Content-Type response header to be returned when this SAS is used. */
        contentType?: string;
        /** The optional value of the Content-Encoding response header to be returned when this SAS is used. */
        contentEncoding?: string;
        /** The optional value of the Content-Language response header to be returned when this SAS is used. */
        contentLanguage?: string;
        /** The optional value of the Content-Disposition response header to be returned when this SAS is used. */
        contentDisposition?: string;
    }
    
    export interface CreateFileOptions extends StorageServiceClient.ServiceClientOptions {
        /** The file's content settings. */
        contentSettings?: FileProperties;
        /** The metadata key/value pairs. */
        metadata?: Object;
    }
    
    export interface DownloadFileOptions extends StorageServiceClient.ServiceClientOptions {
        /** The range start. */
        rangeStart?: number;
        /** The range end. */
        rangeEnd?: number;
        /** When set to true, MD5 validation will be disabled when downloading files. */
        disableContentMD5Validation?: boolean;
    }
    
    export interface DownloadSpeedFileOptions extends DownloadFileOptions {
        /**
         * Skip the size check to perform direct download.
         * Set the option to true for small files.
         * Parallel download and speed summary won't work with this option on.
         */
        skipSizeCheck?: boolean;
        /** The download tracker objects. */
        speedSummary?: SpeedSummary;
        /** When set to true, Calculate and send/validate content MD5 for transactions. */
        useTransactionalMD5?: boolean;
    }
    
    export interface ListFileRangesOptions extends StorageServiceClient.ServiceClientOptions {
        /** The range start. */
        rangeStart?: number;
        /** The range end. */
        rangeEnd?: number;
    }
    
    export interface UpdateFileRangeOptions extends StorageServiceClient.ServiceClientOptions {
        /** Calculate and send/validate content MD5 for transactions. */
        useTransactionalMD5?: boolean;
        /** An optional hash value used to ensure transactional integrity for the page. */
        transactionalContentMD5?: string;
    }
    
    export interface UploadFileOptions extends CreateFileOptions {
        /** The upload tracker objects. */
        speedSummary?: SpeedSummary;
        /** 
         * Specifies whether the file's ContentMD5 header should be set on uploads.
         * The default value is false for files.
         */
        storeFileContentMD5?: boolean;
        /** Calculate and send/validate content MD5 for transactions. */
        useTransactionalMD5?: boolean;
    }
    
    export interface StartCopyOptions extends StorageServiceClient.ServiceClientOptions {
        /** The target file metadata key/value pairs. */
        metadata?: Object;
        /** The source access conditions. */
        accessConditions?: AccessCondition.AccessConditions
        /** The source access conditions. */
        sourceAccessConditions?: AccessCondition.AccessConditions
    }
}

export = FileService;