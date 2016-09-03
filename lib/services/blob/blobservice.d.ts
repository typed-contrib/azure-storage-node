// Type definitions for azure-storage-node v0.10.0
// Project: https://github.com/Azure/azure-storage-node
// Definitions by: Maxime LUCE <https://github.com/SomaticIT/>
// Definitions: https://github.com/typed-contrib/azure-storage-node

import { StorageServiceClient, AccessCondition, SpeedSummary } from "../../common/common";
import { StorageError } from "../../common/errors/errors";

type ErrorOrResult<T> = StorageServiceClient.ErrorOrResult<T>;
type ErrorOrList<T> = StorageServiceClient.ErrorOrList<T>;

/**
* @class
* @extends {StorageServiceClient}
* The BlobService class is used to perform operations on the Microsoft Azure Blob Service.
* The Blob Service provides storage for binary large objects, and provides
* functions for working with data stored in blobs as either streams or pages of data.
* 
* For more information on the Blob Service, as well as task focused information on using it in a Node.js application, see
* [How to Use the Blob Service from Node.js](http://azure.microsoft.com/en-us/documentation/articles/storage-nodejs-how-to-use-blob-storage/).
*/
declare class BlobService extends StorageServiceClient {
    /** The default maximum size, in bytes, of a blob before it must be separated into blocks. */
    singleBlobPutThresholdInBytes: number;
    /** The default timeout interval, in milliseconds, to use for request made via the Blob service. */
    defaultTimeoutIntervalInMs: number;
    /** The default maximum execution time across all potential retries, for requests made via the Blob service. */
    defaultMaximumExecutionTimeInMs: number;
    /** The default location mode for requests made via the Blob service. */
    defaultLocationMode: number;
    /** 
     * The number of parallel operations that may be performed when uploading a blob that is greater than  the value specified by the 
     * singleBlobPutThresholdInBytes property in size. 
     */
    parallelOperationThreadCount: number;
    /**
     * Determines whether the Nagle algorithm is used for requests made via the Blob service; true to use the Nagle algorithm; otherwise, false. 
     * The default value is false.
     */
    useNagleAlgorithm: boolean;
    
    // ***********************************************************
    // ** STATIC
    // ***********************************************************
    
    static SpeedSummary: typeof SpeedSummary;
    
    /**
    * Creates a new BlobService object using the AZURE_STORAGE_CONNECTION_STRING or AZURE_STORAGE_ACCOUNT and AZURE_STORAGE_ACCESS_KEY environment variables.
    * @constructor
    */
    constructor();
    /**
    * Creates a new BlobService object using the given connection string.
    *
    * @constructor
    * @param {string} connectionString                    The storage account or the connection string.
    */    
    constructor(connectionString: string);
    /**
    * Creates a new BlobService object using the given parameters.
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
    * Gets the service stats for a storage account’s Blob service.
    * @param {errorOrResult}  callback                              `error` will contain information if an error occurs; otherwise, `[result]{@link ServiceStats}` will contain the stats and 
    *                                                               `response` will contain information related to this operation.
    */
    getServiceStats(callback: ErrorOrResult<StorageServiceClient.ServiceStats>): void;
    /**
    * Gets the service stats for a storage account’s Blob service.
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
    // ** CONTAINER LIST METHODS
    // ***********************************************************
    
    /**
    * Lists a segment containing a collection of container items under the specified account.
    *
    * @param {object}             currentToken                                A continuation token returned by a previous listing operation. Please use 'null' or 'undefined' if this is the first operation.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `result` will contain `entries` and `continuationToken`. 
    *                                                                         `entries`  gives a list of `[containers]{@link ContainerResult}` and the `continuationToken` is used for the next listing operation.
    *                                                                         `response` will contain information related to this operation.
    */
    listContainersSegmented(currentToken: StorageServiceClient.ContinuationToken, callback: ErrorOrList<BlobService.ContainerResult>): void;
    /**
    * Lists a segment containing a collection of container items under the specified account.
    *
    * @param {object}             currentToken                                A continuation token returned by a previous listing operation. Please use 'null' or 'undefined' if this is the first operation.
    * @param {object}             options                                     The request options.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `result` will contain `entries` and `continuationToken`. 
    *                                                                         `entries`  gives a list of `[containers]{@link ContainerResult}` and the `continuationToken` is used for the next listing operation.
    *                                                                         `response` will contain information related to this operation.
    */
    listContainersSegmented(currentToken: StorageServiceClient.ContinuationToken, options: BlobService.ListContainerOptions, callback: ErrorOrList<BlobService.ContainerResult>): void;
    
    
    /**
    * Lists a segment containing a collection of container items whose names begin with the specified prefix under the specified account.
    *
    * @param {string}             prefix                                      The prefix of the container name.
    * @param {object}             currentToken                                A continuation token returned by a previous listing operation. Please use 'null' or 'undefined' if this is the first operation.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `result` will contain `entries` and `continuationToken`. 
    *                                                                         `entries`  gives a list of `[containers]{@link ContainerResult}` and the `continuationToken` is used for the next listing operation.
    *                                                                         `response` will contain information related to this operation.
    */
    listContainersSegmentedWithPrefix(prefix: string, currentToken: StorageServiceClient.ContinuationToken, callback: ErrorOrList<BlobService.ContainerResult>): void;
    /**
    * Lists a segment containing a collection of container items whose names begin with the specified prefix under the specified account.
    *
    * @param {string}             prefix                                      The prefix of the container name.
    * @param {object}             currentToken                                A continuation token returned by a previous listing operation. Please use 'null' or 'undefined' if this is the first operation.
    * @param {object}             options                                     The request options.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `result` will contain `entries` and `continuationToken`. 
    *                                                                         `entries`  gives a list of `[containers]{@link ContainerResult}` and the `continuationToken` is used for the next listing operation.
    *                                                                         `response` will contain information related to this operation.
    */
    listContainersSegmentedWithPrefix(prefix: string, currentToken: StorageServiceClient.ContinuationToken, options: BlobService.ListContainerOptions, callback: ErrorOrList<BlobService.ContainerResult>): void;
    
    // ***********************************************************
    // ** CONTAINER METHODS
    // ***********************************************************
    
    /**
    * Checks whether or not a container exists on the service.
    *
    * @param {string}             container                               The container name.
    * @param {errorOrResult}      callback                                `error` will contain information
    *                                                                     if an error occurs; otherwise `[result]{@link ContainerResult}` will contain
    *                                                                     the container information including `exists` boolean member. 
    *                                                                     `response` will contain information related to this operation.
    */
    doesContainerExist(container: string, callback: ErrorOrResult<BlobService.ContainerResult>): void;
    /**
    * Checks whether or not a container exists on the service.
    *
    * @param {string}             container                               The container name.
    * @param {object}             options                                 The request options.
    * @param {errorOrResult}      callback                                `error` will contain information
    *                                                                     if an error occurs; otherwise `[result]{@link ContainerResult}` will contain
    *                                                                     the container information including `exists` boolean member. 
    *                                                                     `response` will contain information related to this operation.
    */
    doesContainerExist(container: string, options: StorageServiceClient.ServiceClientOptions, callback: ErrorOrResult<BlobService.ContainerResult>): void;
    
    /**
    * Creates a new container under the specified account.
    * If a container with the same name already exists, the operation fails.
    *
    * @param {string}             container                           The container name.
    * @param {errorOrResult}      callback                            `error` will contain information
    *                                                                 if an error occurs; otherwise `[result]{@link ContainerResult}` will contain
    *                                                                 the container information.
    *                                                                 `response` will contain information related to this operation.
    */
    createContainer(container: string, callbak: ErrorOrResult<BlobService.ContainerResult>): void;
    /**
    * Creates a new container under the specified account.
    * If a container with the same name already exists, the operation fails.
    *
    * @param {string}             container                           The container name.
    * @param {object}             options                             The request options.
    * @param {errorOrResult}      callback                            `error` will contain information
    *                                                                 if an error occurs; otherwise `[result]{@link ContainerResult}` will contain
    *                                                                 the container information.
    *                                                                 `response` will contain information related to this operation.
    */
    createContainer(container: string, options: BlobService.ContainerOptions, callbak: ErrorOrResult<BlobService.ContainerResult>): void;
    
    /**
    * Creates a new container under the specified account if the container does not exists.
    *
    * @param {string}             container                           The container name.
    * @param {errorOrResult}      callback                            `error` will contain information
    *                                                                 if an error occurs; otherwise `[result]{@link ContainerResult}` will contain
    *                                                                 the container information.
    *                                                                 `response` will contain information related to this operation.
    */
    createContainerIfNotExists(container: string, callbak: ErrorOrResult<BlobService.ContainerResult>): void;
    /**
    * Creates a new container under the specified account if the container does not exists.
    *
    * @param {string}             container                           The container name.
    * @param {object}             options                             The request options.
    * @param {errorOrResult}      callback                            `error` will contain information
    *                                                                 if an error occurs; otherwise `[result]{@link ContainerResult}` will contain
    *                                                                 the container information.
    *                                                                 `response` will contain information related to this operation.
    */
    createContainerIfNotExists(container: string, options: BlobService.ContainerOptions, callbak: ErrorOrResult<BlobService.ContainerResult>): void;
    
    /**
    * Retrieves a container and its properties from a specified account.
    * **Note** that all metadata names returned from the server will be converted to lower case by NodeJS itself as metadata is set via HTTP headers and HTTP header names are case insensitive.
    *
    * @param {string}             container                           The container name.
    * @param {errorOrResult}      callback                            `error` will contain information
    *                                                                 if an error occurs; otherwise `[result]{@link ContainerResult}` will contain
    *                                                                 information for the container.
    *                                                                 `response` will contain information related to this operation.
    */
    getContainerProperties(container: string, callback: ErrorOrResult<BlobService.ContainerResult>): void;
    /**
    * Retrieves a container and its properties from a specified account.
    * **Note** that all metadata names returned from the server will be converted to lower case by NodeJS itself as metadata is set via HTTP headers and HTTP header names are case insensitive.
    *
    * @param {string}             container                           The container name.
    * @param {object}             options                             The request options.
    * @param {errorOrResult}      callback                            `error` will contain information
    *                                                                 if an error occurs; otherwise `[result]{@link ContainerResult}` will contain
    *                                                                 information for the container.
    *                                                                 `response` will contain information related to this operation.
    */
    getContainerProperties(container: string, options: BlobService.LeaseOptions, callback: ErrorOrResult<BlobService.ContainerResult>): void;
    
    /**
    * Returns all user-defined metadata for the container.
    * **Note** that all metadata names returned from the server will be converted to lower case by NodeJS itself as metadata is set via HTTP headers and HTTP header names are case insensitive.
    *
    * @param {string}             container                                 The container name.
    * @param {errorOrResult}      callback                                  `error` will contain information
    *                                                                       if an error occurs; otherwise `[result]{@link ContainerResult}` will contain
    *                                                                       information for the container.
    *                                                                       `response` will contain information related to this operation.
    */
    getContainerMetadata(container: string, callback: ErrorOrResult<BlobService.ContainerResult>): void;
    /**
    * Returns all user-defined metadata for the container.
    * **Note** that all metadata names returned from the server will be converted to lower case by NodeJS itself as metadata is set via HTTP headers and HTTP header names are case insensitive.
    *
    * @param {string}             container                                 The container name.
    * @param {object}             options                                   The request options.
    * @param {errorOrResult}      callback                                  `error` will contain information
    *                                                                       if an error occurs; otherwise `[result]{@link ContainerResult}` will contain
    *                                                                       information for the container.
    *                                                                       `response` will contain information related to this operation.
    */
    getContainerMetadata(container: string, options: BlobService.LeaseOptions, callback: ErrorOrResult<BlobService.ContainerResult>): void;
    
    /**
    * Sets the container's metadata.
    *
    * Calling the Set Container Metadata operation overwrites all existing metadata that is associated with the container.
    * It's not possible to modify an individual name/value pair.
    *
    * @param {string}             container                           The container name.
    * @param {object}             metadata                            The metadata key/value pairs.
    * @param {errorOrResponse}    callback                            `error` will contain information
    *                                                                 if an error occurs; otherwise 
    *                                                                 `response` will contain information related to this operation.
    */
    setContainerMetadata(container: string, metadata: Object, callback: ErrorOrResult<BlobService.ContainerResult>): void;
    /**
    * Sets the container's metadata.
    *
    * Calling the Set Container Metadata operation overwrites all existing metadata that is associated with the container.
    * It's not possible to modify an individual name/value pair.
    *
    * @param {string}             container                           The container name.
    * @param {object}             metadata                            The metadata key/value pairs.
    * @param {object}             options                             The request options.
    * @param {errorOrResponse}    callback                            `error` will contain information
    *                                                                 if an error occurs; otherwise 
    *                                                                 `response` will contain information related to this operation.
    */
    setContainerMetadata(container: string, metadata: Object, options: BlobService.AccessConditionsOptions, callback: ErrorOrResult<BlobService.ContainerResult>): void;
    
    /**
    * Gets the container's ACL.
    *
    * @param {string}             container                           The container name.
    * @param {errorOrResult}      callback                            `error` will contain information
    *                                                                 if an error occurs; otherwise `[result]{@link ContainerAclResult}` will contain
    *                                                                 information for the container.
    *                                                                 `response` will contain information related to this operation.
    */
    getContainerAcl(container: string, callback: ErrorOrResult<BlobService.ContainerResult>): void;
    /**
    * Gets the container's ACL.
    *
    * @param {string}             container                           The container name.
    * @param {object}             options                             The request options.
    * @param {errorOrResult}      callback                            `error` will contain information
    *                                                                 if an error occurs; otherwise `[result]{@link ContainerAclResult}` will contain
    *                                                                 information for the container.
    *                                                                 `response` will contain information related to this operation.
    */
    getContainerAcl(container: string, options: BlobService.LeaseOptions, callback: ErrorOrResult<BlobService.ContainerResult>): void;
    
    /**
    * Updates the container's ACL.
    *
    * @param {string}                         container                           The container name.
    * @param {Object.<string, AccessPolicy>}  signedIdentifiers                   The container ACL settings. See `[AccessPolicy]{@link AccessPolicy}` for detailed information.
    * @param {errorOrResult}                  callback                            `error` will contain information
    *                                                                             if an error occurs; otherwise `[result]{@link ContainerAclResult}` will contain
    *                                                                             information for the container.
    *                                                                             `response` will contain information related to this operation.
    */
    setContainerAcl(container: string, signedIdentifiers: StorageServiceClient.SignedIdentifiers, callback: ErrorOrResult<BlobService.ContainerResult>): void;
    /**
    * Updates the container's ACL.
    *
    * @param {string}                         container                           The container name.
    * @param {Object.<string, AccessPolicy>}  signedIdentifiers                   The container ACL settings. See `[AccessPolicy]{@link AccessPolicy}` for detailed information.
    * @param {object}                         options                             The request options.
    * @param {errorOrResult}                  callback                            `error` will contain information
    *                                                                             if an error occurs; otherwise `[result]{@link ContainerAclResult}` will contain
    *                                                                             information for the container.
    *                                                                             `response` will contain information related to this operation.
    */
    setContainerAcl(container: string, signedIdentifiers: StorageServiceClient.SignedIdentifiers, options: BlobService.SetContainerAclOptions, callback: ErrorOrResult<BlobService.ContainerResult>): void;
    
    /**
    * Marks the specified container for deletion.
    * The container and any blobs contained within it are later deleted during garbage collection.
    *
    * @param {string}             container                           The container name.
    * @param {errorOrResponse}    callback                            `error` will contain information
    *                                                                 if an error occurs; otherwise
    *                                                                 `response` will contain information related to this operation.
    */
    deleteContainer(container: string, callback: StorageServiceClient.ErrorOrResponse): void;
    /**
    * Marks the specified container for deletion.
    * The container and any blobs contained within it are later deleted during garbage collection.
    *
    * @param {string}             container                           The container name.
    * @param {object}             options                             The request options.
    * @param {errorOrResponse}    callback                            `error` will contain information
    *                                                                 if an error occurs; otherwise
    *                                                                 `response` will contain information related to this operation.
    */
    deleteContainer(container: string, options: BlobService.AccessConditionsOptions, callback: StorageServiceClient.ErrorOrResponse): void;
    
    /**
    * Marks the specified container for deletion if it exists.
    * The container and any blobs contained within it are later deleted during garbage collection.
    *
    * @param {string}             container                           The container name.
    * @param {errorOrResponse}    callback                            `error` will contain information
    *                                                                 if an error occurs; otherwise
    *                                                                 `response` will contain information related to this operation.
    */
    deleteContainerIfExists(container: string, callback: StorageServiceClient.ErrorOrResponse): void;
    /**
    * Marks the specified container for deletion if it exists.
    * The container and any blobs contained within it are later deleted during garbage collection.
    *
    * @param {string}             container                           The container name.
    * @param {object}             options                             The request options.
    * @param {errorOrResponse}    callback                            `error` will contain information
    *                                                                 if an error occurs; otherwise
    *                                                                 `response` will contain information related to this operation.
    */
    deleteContainerIfExists(container: string, options: BlobService.AccessConditionsOptions, callback: StorageServiceClient.ErrorOrResponse): void;
    
    // ***********************************************************
    // ** BLOB LIST METHODS
    // ***********************************************************
    
    /**
    * Lists a segment containing a collection of blob directory items in the container.
    *
    * @param {string}             container                         The container name.
    * @param {object}             currentToken                      A continuation token returned by a previous listing operation. Please use 'null' or 'undefined' if this is the first operation.
    * @param {errorOrResult}      callback                          `error` will contain information
    *                                                               if an error occurs; otherwise `result` will contain `entries` and `continuationToken`. 
    *                                                               `entries`  gives a list of `[directories]{@link DirectoryResult}` and the `continuationToken` is used for the next listing operation.
    *                                                               `response` will contain information related to this operation.
    */
    listBlobDirectoriesSegmented(container: string, currentToken: StorageServiceClient.ContinuationToken, callback: ErrorOrList<BlobService.DirectoryResult>): void;
    /**
    * Lists a segment containing a collection of blob directory items in the container.
    *
    * @param {string}             container                         The container name.
    * @param {object}             currentToken                      A continuation token returned by a previous listing operation. Please use 'null' or 'undefined' if this is the first operation.
    * @param {object}             options                           The request options.
    * @param {errorOrResult}      callback                          `error` will contain information
    *                                                               if an error occurs; otherwise `result` will contain `entries` and `continuationToken`. 
    *                                                               `entries`  gives a list of `[directories]{@link DirectoryResult}` and the `continuationToken` is used for the next listing operation.
    *                                                               `response` will contain information related to this operation.
    */
    listBlobDirectoriesSegmented(container: string, currentToken: StorageServiceClient.ContinuationToken, options: BlobService.ListBlobOptions, callback: ErrorOrList<BlobService.DirectoryResult>): void;
    
    /**
    * Lists a segment containing a collection of blob directory items in the container.
    *
    * @param {string}             container                         The container name.
    * @param {string}             prefix                            The prefix of the blob name.
    * @param {object}             currentToken                      A continuation token returned by a previous listing operation. Please use 'null' or 'undefined' if this is the first operation.
    * @param {errorOrResult}      callback                          `error` will contain information
    *                                                               if an error occurs; otherwise `result` will contain `entries` and `continuationToken`. 
    *                                                               `entries`  gives a list of `[directories]{@link DirectoryResult}` and the `continuationToken` is used for the next listing operation.
    *                                                               `response` will contain information related to this operation.
    */
    listBlobDirectoriesSegmentedWithPrefix(container: string, prefix: string, currentToken: StorageServiceClient.ContinuationToken, callback: ErrorOrList<BlobService.DirectoryResult>): void;
    /**
    * Lists a segment containing a collection of blob directory items in the container.
    *
    * @param {string}             container                         The container name.
    * @param {string}             prefix                            The prefix of the blob name.
    * @param {object}             currentToken                      A continuation token returned by a previous listing operation. Please use 'null' or 'undefined' if this is the first operation.
    * @param {object}             options                           The request options.
    * @param {errorOrResult}      callback                          `error` will contain information
    *                                                               if an error occurs; otherwise `result` will contain `entries` and `continuationToken`. 
    *                                                               `entries`  gives a list of `[directories]{@link DirectoryResult}` and the `continuationToken` is used for the next listing operation.
    *                                                               `response` will contain information related to this operation.
    */
    listBlobDirectoriesSegmentedWithPrefix(container: string, prefix: string, currentToken: StorageServiceClient.ContinuationToken, options: BlobService.ListBlobOptions, callback: ErrorOrList<BlobService.DirectoryResult>): void;
    
    /**
    * Lists a segment containing a collection of blob directory items in the container.
    *
    * @param {string}             container                         The container name.
    * @param {object}             currentToken                      A continuation token returned by a previous listing operation. Please use 'null' or 'undefined' if this is the first operation.
    * @param {errorOrResult}      callback                          `error` will contain information
    *                                                               if an error occurs; otherwise `result` will contain `entries` and `continuationToken`. 
    *                                                               `entries`  gives a list of `[blobs]{@link BlobResult}` and the `continuationToken` is used for the next listing operation.
    *                                                               `response` will contain information related to this operation.
    */
    listBlobsSegmented(container: string, currentToken: StorageServiceClient.ContinuationToken, callback: ErrorOrList<BlobService.BlobResult>): void;
    /**
    * Lists a segment containing a collection of blob directory items in the container.
    *
    * @param {string}             container                         The container name.
    * @param {object}             currentToken                      A continuation token returned by a previous listing operation. Please use 'null' or 'undefined' if this is the first operation.
    * @param {object}             options                           The request options.
    * @param {errorOrResult}      callback                          `error` will contain information
    *                                                               if an error occurs; otherwise `result` will contain `entries` and `continuationToken`. 
    *                                                               `entries`  gives a list of `[blobs]{@link BlobResult}` and the `continuationToken` is used for the next listing operation.
    *                                                               `response` will contain information related to this operation.
    */
    listBlobsSegmented(container: string, currentToken: StorageServiceClient.ContinuationToken, options: BlobService.ListBlobOptions, callback: ErrorOrList<BlobService.BlobResult>): void;
    
    /**
    * Lists a segment containing a collection of blob directory items in the container.
    *
    * @param {string}             container                         The container name.
    * @param {string}             prefix                            The prefix of the blob name.
    * @param {object}             currentToken                      A continuation token returned by a previous listing operation. Please use 'null' or 'undefined' if this is the first operation.
    * @param {errorOrResult}      callback                          `error` will contain information
    *                                                               if an error occurs; otherwise `result` will contain `entries` and `continuationToken`. 
    *                                                               `entries`  gives a list of `[blobs]{@link BlobResult}` and the `continuationToken` is used for the next listing operation.
    *                                                               `response` will contain information related to this operation.
    */
    listBlobsSegmentedWithPrefix(container: string, prefix: string, currentToken: StorageServiceClient.ContinuationToken, callback: ErrorOrList<BlobService.BlobResult>): void;
    /**
    * Lists a segment containing a collection of blob directory items in the container.
    *
    * @param {string}             container                         The container name.
    * @param {string}             prefix                            The prefix of the blob name.
    * @param {object}             currentToken                      A continuation token returned by a previous listing operation. Please use 'null' or 'undefined' if this is the first operation.
    * @param {object}             options                           The request options.
    * @param {errorOrResult}      callback                          `error` will contain information
    *                                                               if an error occurs; otherwise `result` will contain `entries` and `continuationToken`. 
    *                                                               `entries`  gives a list of `[blobs]{@link BlobResult}` and the `continuationToken` is used for the next listing operation.
    *                                                               `response` will contain information related to this operation.
    */
    listBlobsSegmentedWithPrefix(container: string, prefix: string, currentToken: StorageServiceClient.ContinuationToken, options: BlobService.ListBlobOptions, callback: ErrorOrList<BlobService.BlobResult>): void;
    
    // ***********************************************************
    // ** LEASE METHODS
    // ***********************************************************
    
    /**
    * Acquires a new lease. If container and blob are specified, acquires a blob lease. Otherwise, if only container is specified and blob is null, acquires a container lease.
    *
    * @param {string}             container                                   The container name.
    * @param {string}             blob                                        The blob name.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link LeaseResult}` will contain
    *                                                                         the lease information.
    *                                                                         `response` will contain information related to this operation.
    */
    acquireLease(container: string, blob: string, callback: ErrorOrResult<BlobService.LeaseResult>): void;
    /**
    * Acquires a new lease. If container and blob are specified, acquires a blob lease. Otherwise, if only container is specified and blob is null, acquires a container lease.
    *
    * @param {string}             container                                   The container name.
    * @param {string}             blob                                        The blob name.
    * @param {object}             options                                     The request options.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link LeaseResult}` will contain
    *                                                                         the lease information.
    *                                                                         `response` will contain information related to this operation.
    */
    acquireLease(container: string, blob: string, options: BlobService.AcquireLeaseOptions, callback: ErrorOrResult<BlobService.LeaseResult>): void;
    
    /**
    * Renews an existing lease. If container and blob are specified, renews the blob lease. Otherwise, if only container is specified and blob is null, renews the container lease.
    *
    * @param {string}             container                                   The container name.
    * @param {string}             blob                                        The blob name.
    * @param {string}             leaseId                                     The lease identifier. Must be a GUID.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link LeaseResult}` will contain
    *                                                                         the lease information.
    *                                                                         `response` will contain information related to this operation.
    */
    renewLease(container: string, blob: string, leaseId: string, callback: ErrorOrResult<BlobService.LeaseResult>): void;
    /**
    * Renews an existing lease. If container and blob are specified, renews the blob lease. Otherwise, if only container is specified and blob is null, renews the container lease.
    *
    * @param {string}             container                                   The container name.
    * @param {string}             blob                                        The blob name.
    * @param {string}             leaseId                                     The lease identifier. Must be a GUID.
    * @param {object}             options                                     The request options.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link LeaseResult}` will contain
    *                                                                         the lease information.
    *                                                                         `response` will contain information related to this operation.
    */
    renewLease(container: string, blob: string, leaseId: string, options: StorageServiceClient.AccessConditionsOptions, callback: ErrorOrResult<BlobService.LeaseResult>): void;
    
    /**
    * Changes the lease ID of an active lease. If container and blob are specified, changes the blob lease. Otherwise, if only container is specified and blob is null, changes the 
    * container lease.
    *
    * @param {string}             container                                   The container name.
    * @param {string}             blob                                        The blob name.
    * @param {string}             leaseId                                     The current lease identifier.
    * @param {string}             proposedLeaseId                             The proposed lease identifier. Must be a GUID. 
    * @param {errorOrResult}      callback                                    `error` will contain information if an error occurs; 
    *                                                                         otherwise `[result]{@link LeaseResult}` will contain  the lease information.
    *                                                                         `response` will contain information related to this operation.
    */
    changeLease(container: string, blob: string, leaseId: string, proposedLeaseId: string, callback: ErrorOrResult<BlobService.LeaseResult>): void;
    
    /**
    * Changes the lease ID of an active lease. If container and blob are specified, changes the blob lease. Otherwise, if only container is specified and blob is null, changes the 
    * container lease.
    *
    * @param {string}             container                                   The container name.
    * @param {string}             blob                                        The blob name.
    * @param {string}             leaseId                                     The current lease identifier.
    * @param {string}             proposedLeaseId                             The proposed lease identifier. Must be a GUID. 
    * @param {object}             options                                     The request options.
    * @param {errorOrResult}      callback                                    `error` will contain information if an error occurs; 
    *                                                                         otherwise `[result]{@link LeaseResult}` will contain  the lease information.
    *                                                                         `response` will contain information related to this operation.
    */
    changeLease(container: string, blob: string, leaseId: string, proposedLeaseId: string, options: StorageServiceClient.AccessConditionsOptions, callback: ErrorOrResult<BlobService.LeaseResult>): void;
    
    /**
    * Releases the lease. If container and blob are specified, releases the blob lease. Otherwise, if only container is specified and blob is null, releases the container lease.
    *
    * @param {string}             container                                   The container name.
    * @param {string}             blob                                        The blob name.
    * @param {string}             leaseId                                     The lease identifier.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link LeaseResult}` will contain
    *                                                                         the lease information.
    *                                                                         `response` will contain information related to this operation.
    */
    releaseLease(container: string, blob: string, leaseId: string, callback: ErrorOrResult<BlobService.LeaseResult>): void;
    /**
    * Releases the lease. If container and blob are specified, releases the blob lease. Otherwise, if only container is specified and blob is null, releases the container lease.
    *
    * @param {string}             container                                   The container name.
    * @param {string}             blob                                        The blob name.
    * @param {string}             leaseId                                     The lease identifier.
    * @param {object}             options                                     The request options.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link LeaseResult}` will contain
    *                                                                         the lease information.
    *                                                                         `response` will contain information related to this operation.
    */
    releaseLease(container: string, blob: string, leaseId: string, options: StorageServiceClient.AccessConditionsOptions, callback: ErrorOrResult<BlobService.LeaseResult>): void;
    
    /**
    * Breaks the lease but ensures that another client cannot acquire a new lease until the current lease period has expired. If container and blob are specified, breaks the blob lease. 
    * Otherwise, if only container is specified and blob is null, breaks the container lease.
    *
    * @param {string}             container                                   The container name.
    * @param {string}             blob                                        The blob name.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link LeaseResult}` will contain
    *                                                                         the lease information.
    *                                                                         `response` will contain information related to this operation.
    */
    breakLease(container: string, blob: string, callback: ErrorOrResult<BlobService.LeaseResult>): void;
    /**
    * Breaks the lease but ensures that another client cannot acquire a new lease until the current lease period has expired. If container and blob are specified, breaks the blob lease. 
    * Otherwise, if only container is specified and blob is null, breaks the container lease.
    *
    * @param {string}             container                                   The container name.
    * @param {string}             blob                                        The blob name.
    * @param {object}             options                                     The request options.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link LeaseResult}` will contain
    *                                                                         the lease information.
    *                                                                         `response` will contain information related to this operation.
    */
    breakLease(container: string, blob: string, options: BlobService.BreakLeaseOptions, callback: ErrorOrResult<BlobService.LeaseResult>): void;
    
    // ***********************************************************
    // ** BLOB METHODS
    // ***********************************************************
    
    /**
    * Returns all user-defined metadata, standard HTTP properties, and system properties for the blob.
    * It does not return or modify the content of the blob.
    * **Note** that all metadata names returned from the server will be converted to lower case by NodeJS itself as metadata is set via HTTP headers and HTTP header names are case insensitive.
    *
    * @param {string}             container                                   The container name.
    * @param {string}             blob                                        The blob name.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link BlobResult}` will contain
    *                                                                         information about the blob.
    *                                                                         `response` will contain information related to this operation.
    */
    getBlobProperties(container: string, blob: string, callback: ErrorOrResult<BlobService.BlobResult>): void;
    /**
    * Returns all user-defined metadata, standard HTTP properties, and system properties for the blob.
    * It does not return or modify the content of the blob.
    * **Note** that all metadata names returned from the server will be converted to lower case by NodeJS itself as metadata is set via HTTP headers and HTTP header names are case insensitive.
    *
    * @param {string}             container                                   The container name.
    * @param {string}             blob                                        The blob name.
    * @param {object}             options                                     The request options.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link BlobResult}` will contain
    *                                                                         information about the blob.
    *                                                                         `response` will contain information related to this operation.
    */
    getBlobProperties(container: string, blob: string, options: BlobService.BlobOptions, callback: ErrorOrResult<BlobService.BlobResult>): void;
    
    /**
    * Returns all user-defined metadata for the specified blob or snapshot.
    * It does not return or modify the content of the blob.
    * **Note** that all metadata names returned from the server will be converted to lower case by NodeJS itself as metadata is set via HTTP headers and HTTP header names are case insensitive.
    *
    * @param {string}             container                                   The container name.
    * @param {string}             blob                                        The blob name.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link BlobResult}` will contain
    *                                                                         information about the blob.
    *                                                                         `response` will contain information related to this operation.
    */
    getBlobMetadata(container: string, blob: string, callback: ErrorOrResult<BlobService.BlobResult>): void;
    /**
    * Returns all user-defined metadata for the specified blob or snapshot.
    * It does not return or modify the content of the blob.
    * **Note** that all metadata names returned from the server will be converted to lower case by NodeJS itself as metadata is set via HTTP headers and HTTP header names are case insensitive.
    *
    * @param {string}             container                                   The container name.
    * @param {string}             blob                                        The blob name.
    * @param {object}             options                                     The request options.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link BlobResult}` will contain
    *                                                                         information about the blob.
    *                                                                         `response` will contain information related to this operation.
    */
    getBlobMetadata(container: string, blob: string, options: BlobService.BlobOptions, callback: ErrorOrResult<BlobService.BlobResult>): void;
    
    /**
    * Sets user-defined properties for the specified blob or snapshot.
    * It does not modify or return the content of the blob.
    *
    * @param {string}             container                                   The container name.
    * @param {string}             blob                                        The blob name.
    * @param {object}             properties                                  The blob properties to set.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link BlobResult}` will contain
    *                                                                         information about the blob.
    *                                                                         `response` will contain information related to this operation.
    */
    setBlobProperties(container: string, blob: string, properties: BlobService.BlobProperties, callback: ErrorOrResult<BlobService.BlobResult>): void;
    /**
    * Sets user-defined properties for the specified blob or snapshot.
    * It does not modify or return the content of the blob.
    *
    * @param {string}             container                                   The container name.
    * @param {string}             blob                                        The blob name.
    * @param {object}             properties                                  The blob properties to set.
    * @param {object}             options                                     The request options.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link BlobResult}` will contain
    *                                                                         information about the blob.
    *                                                                         `response` will contain information related to this operation.
    */
    setBlobProperties(container: string, blob: string, properties: BlobService.BlobProperties, options: BlobService.BlobOptions, callback: ErrorOrResult<BlobService.BlobResult>): void;
    
    /**
    * Sets user-defined metadata for the specified blob or snapshot.
    * It does not modify or return the content of the blob.
    *
    * @param {string}             container                                   The container name.
    * @param {string}             blob                                        The blob name.
    * @param {object}             metadata                                    The metadata key/value pairs.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link BlobResult}` will contain
    *                                                                         information about the blob.
    *                                                                         `response` will contain information related to this operation.
    */
    setBlobMetadata(container: string, blob: string, metadata: Object, callback: ErrorOrResult<BlobService.BlobResult>): void;
    /**
    * Sets user-defined metadata for the specified blob or snapshot.
    * It does not modify or return the content of the blob.
    *
    * @param {string}             container                                   The container name.
    * @param {string}             blob                                        The blob name.
    * @param {object}             metadata                                    The metadata key/value pairs.
    * @param {object}             options                                     The request options.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link BlobResult}` will contain
    *                                                                         information about the blob.
    *                                                                         `response` will contain information related to this operation.
    */
    setBlobMetadata(container: string, blob: string, metadata: Object, options: BlobService.BlobOptions, callback: ErrorOrResult<BlobService.BlobResult>): void;
    
    
    /**
    * Downloads a blob into a file.
    *
    * @param {string}             container                                   The container name.
    * @param {string}             blob                                        The blob name.
    * @param {string}             localFileName                               The local path to the file to be downloaded.
    * @param {errorOrResult}      callback                                    `error` will contain information if an error occurs; 
    *                                                                         otherwise `[result]{@link BlobResult}` will contain the blob information.
    *                                                                         `response` will contain information related to this operation.
    * @return {SpeedSummary}
    */
    getBlobToLocalFile(container: string, blob: string, localFileName: string, callback: ErrorOrResult<BlobService.BlobResult>): SpeedSummary;
    /**
    * Downloads a blob into a file.
    *
    * @param {string}             container                                   The container name.
    * @param {string}             blob                                        The blob name.
    * @param {string}             localFileName                               The local path to the file to be downloaded.
    * @param {object}             options                                     The request options.
    * @param {errorOrResult}      callback                                    `error` will contain information if an error occurs; 
    *                                                                         otherwise `[result]{@link BlobResult}` will contain the blob information.
    *                                                                         `response` will contain information related to this operation.
    * @return {SpeedSummary}
    */
    getBlobToLocalFile(container: string, blob: string, localFileName: string, options: BlobService.DownloadBlobToFileOptions, callback: ErrorOrResult<BlobService.BlobResult>): SpeedSummary;
    
    /**
    * Provides a stream to read from a blob.
    *
    * @param {string}             container                                   The container name.
    * @param {string}             blob                                        The blob name.
    * @return {Stream}
    */
    createReadStream(container: string, blob: string): NodeJS.ReadableStream;
    /**
    * Provides a stream to read from a blob.
    *
    * @param {string}             container                                   The container name.
    * @param {string}             blob                                        The blob name.
    * @param {errorOrResult}      callback                                    `error` will contain information if an error occurs; 
    *                                                                         otherwise `[result]{@link BlobResult}` will contain the blob information.
    *                                                                         `response` will contain information related to this operation.
    * @return {Stream}
    */
    createReadStream(container: string, blob: string, callback: ErrorOrResult<BlobService.BlobResult>): NodeJS.ReadableStream;
    /**
    * Provides a stream to read from a blob.
    *
    * @param {string}             container                                   The container name.
    * @param {string}             blob                                        The blob name.
    * @param {object}             options                                     The request options.
    * @return {Stream}
    */
    createReadStream(container: string, blob: string, options: BlobService.DownloadBlobOptions): NodeJS.ReadableStream;
    /**
    * Provides a stream to read from a blob.
    *
    * @param {string}             container                                   The container name.
    * @param {string}             blob                                        The blob name.
    * @param {object}             options                                     The request options.
    * @param {errorOrResult}      callback                                    `error` will contain information if an error occurs; 
    *                                                                         otherwise `[result]{@link BlobResult}` will contain the blob information.
    *                                                                         `response` will contain information related to this operation.
    * @return {Stream}
    */
    createReadStream(container: string, blob: string, options: BlobService.DownloadBlobOptions, callback: ErrorOrResult<BlobService.BlobResult>): NodeJS.ReadableStream;
    
    /**
    * Downloads a blob into a stream.
    *
    * @param {string}             container                                   The container name.
    * @param {string}             blob                                        The blob name.
    * @param {Stream}             writeStream                                 The write stream.
    * @param {errorOrResult}      callback                                    `error` will contain information if an error occurs; 
    *                                                                         otherwise `[result]{@link BlobResult}` will contain the blob information.
    *                                                                         `response` will contain information related to this operation.
    * @return {SpeedSummary}
    */
    getBlobToStream(container: string, blob: string, writeStream: NodeJS.WritableStream, callback: ErrorOrResult<BlobService.BlobResult>): SpeedSummary;
    /**
    * Downloads a blob into a stream.
    *
    * @param {string}             container                                   The container name.
    * @param {string}             blob                                        The blob name.
    * @param {Stream}             writeStream                                 The write stream.
    * @param {object}             options                                     The request options.
    * @param {errorOrResult}      callback                                    `error` will contain information if an error occurs; 
    *                                                                         otherwise `[result]{@link BlobResult}` will contain the blob information.
    *                                                                         `response` will contain information related to this operation.
    * @return {SpeedSummary}
    */
    getBlobToStream(container: string, blob: string, writeStream: NodeJS.WritableStream, options: BlobService.DownloadBlobToFileOptions, callback: ErrorOrResult<BlobService.BlobResult>): SpeedSummary;
    
    /**
    * Downloads a blob into a text string.
    *
    * @param {string}             container                                   The container name.
    * @param {string}             blob                                        The blob name.
    * @param {BlobService~blobToText}  callback                               `error` will contain information
    *                                                                         if an error occurs; otherwise `text` will contain the blob contents,
    *                                                                         and `[blockBlob]{@link BlobResult}` will contain
    *                                                                         the blob information.
    *                                                                         `response` will contain information related to this operation.
    * @return {Stream}
    */
    getBlobToText(container: string, blob: string, callback: BlobService.BlobToTextCallback): SpeedSummary;
    /**
    * Downloads a blob into a text string.
    *
    * @param {string}             container                                   The container name.
    * @param {string}             blob                                        The blob name.
    * @param {object}             options                                     The request options.
    * @param {BlobService~blobToText}  callback                               `error` will contain information
    *                                                                         if an error occurs; otherwise `text` will contain the blob contents,
    *                                                                         and `[blockBlob]{@link BlobResult}` will contain
    *                                                                         the blob information.
    *                                                                         `response` will contain information related to this operation.
    * @return {Stream}
    */
    getBlobToText(container: string, blob: string, options: BlobService.DownloadBlobOptions, callback: BlobService.BlobToTextCallback): SpeedSummary;
    
    
    /**
    * Marks the specified blob or snapshot for deletion. The blob is later deleted during garbage collection.
    * If a blob has snapshots, you must delete them when deleting the blob. Using the deleteSnapshots option, you can choose either to delete both the blob and its snapshots, 
    * or to delete only the snapshots but not the blob itself. If the blob has snapshots, you must include the deleteSnapshots option or the blob service will return an error
    * and nothing will be deleted. 
    * If you are deleting a specific snapshot using the snapshotId option, the deleteSnapshots option must NOT be included.
    *
    * @param {string}             container                                   The container name.
    * @param {string}             blob                                        The blob name.
    * @param {errorOrResponse}    callback                                    `error` will contain information
    *                                                                         if an error occurs; `response` will contain information related to this operation.
    */
    deleteBlob(container: string, blob: string, callback: StorageServiceClient.ErrorOrResponse): void;
    /**
    * Marks the specified blob or snapshot for deletion. The blob is later deleted during garbage collection.
    * If a blob has snapshots, you must delete them when deleting the blob. Using the deleteSnapshots option, you can choose either to delete both the blob and its snapshots, 
    * or to delete only the snapshots but not the blob itself. If the blob has snapshots, you must include the deleteSnapshots option or the blob service will return an error
    * and nothing will be deleted. 
    * If you are deleting a specific snapshot using the snapshotId option, the deleteSnapshots option must NOT be included.
    *
    * @param {string}             container                                   The container name.
    * @param {string}             blob                                        The blob name.
    * @param {object}             options                                     The request options.
    * @param {errorOrResponse}    callback                                    `error` will contain information
    *                                                                         if an error occurs; `response` will contain information related to this operation.
    */
    deleteBlob(container: string, blob: string, options: BlobService.DeleteBlobOptions, callback: StorageServiceClient.ErrorOrResponse): void;
    
    /**
    * Checks whether or not a blob exists on the service.
    *
    * @param {string}             container                               The container name.
    * @param {string}             blob                                    The blob name.
    * @param {errorOrResult}      callback                                `error` will contain information
    *                                                                     if an error occurs; otherwise `[result]{@link BlobResult}` will contain 
    *                                                                     the blob information including the `exists` boolean member. 
    *                                                                     `response` will contain information related to this operation.
    */
    doesBlobExist(container: string, blob: string, callback: ErrorOrResult<BlobService.BlobResult>): void;
    /**
    * Checks whether or not a blob exists on the service.
    *
    * @param {string}             container                               The container name.
    * @param {string}             blob                                    The blob name.
    * @param {object}             options                                 The request options.
    * @param {errorOrResult}      callback                                `error` will contain information
    *                                                                     if an error occurs; otherwise `[result]{@link BlobResult}` will contain 
    *                                                                     the blob information including the `exists` boolean member. 
    *                                                                     `response` will contain information related to this operation.
    */
    doesBlobExist(container: string, blob: string, options: StorageServiceClient.ServiceClientOptions, callback: ErrorOrResult<BlobService.BlobResult>): void;
    
    /**
    * Marks the specified blob or snapshot for deletion if it exists. The blob is later deleted during garbage collection.
    * If a blob has snapshots, you must delete them when deleting the blob. Using the deleteSnapshots option, you can choose either to delete both the blob and its snapshots, 
    * or to delete only the snapshots but not the blob itself. If the blob has snapshots, you must include the deleteSnapshots option or the blob service will return an error
    * and nothing will be deleted. 
    * If you are deleting a specific snapshot using the snapshotId option, the deleteSnapshots option must NOT be included.
    *
    * @param {string}             container                                   The container name.
    * @param {string}             blob                                        The blob name.
    * @param {errorOrResponse}    callback                                    `error` will contain information
    *                                                                         if an error occurs; `response` will contain information related to this operation.
    */
    deleteBlobIfExists(container: string, blob: string, callback: StorageServiceClient.ErrorOrResponse): void;
    /**
    * Marks the specified blob or snapshot for deletion if it exists. The blob is later deleted during garbage collection.
    * If a blob has snapshots, you must delete them when deleting the blob. Using the deleteSnapshots option, you can choose either to delete both the blob and its snapshots, 
    * or to delete only the snapshots but not the blob itself. If the blob has snapshots, you must include the deleteSnapshots option or the blob service will return an error
    * and nothing will be deleted. 
    * If you are deleting a specific snapshot using the snapshotId option, the deleteSnapshots option must NOT be included.
    *
    * @param {string}             container                                   The container name.
    * @param {string}             blob                                        The blob name.
    * @param {object}             options                                     The request options.
    * @param {errorOrResponse}    callback                                    `error` will contain information
    *                                                                         if an error occurs; `response` will contain information related to this operation.
    */
    deleteBlobIfExists(container: string, blob: string, options: BlobService.DeleteBlobOptions, callback: StorageServiceClient.ErrorOrResponse): void;
    
    /**
    * Creates a read-only snapshot of a blob.
    *
    * @param {string}             container                             The container name.
    * @param {string}             blob                                  The blob name.
    * @param {errorOrResult}      callback                              `error` will contain information
    *                                                                   if an error occurs; otherwise `result` will contain
    *                                                                   the ID of the snapshot.
    *                                                                   `response` will contain information related to this operation.
    */
    createBlobSnapshot(container: string, blob: string, callback: ErrorOrResult<string>): void;
    /**
    * Creates a read-only snapshot of a blob.
    *
    * @param {string}             container                             The container name.
    * @param {string}             blob                                  The blob name.
    * @param {object}             options                               The request options.
    * @param {errorOrResult}      callback                              `error` will contain information
    *                                                                   if an error occurs; otherwise `result` will contain
    *                                                                   the ID of the snapshot.
    *                                                                   `response` will contain information related to this operation.
    */
    createBlobSnapshot(container: string, blob: string, options: BlobService.BlobSnapshotOptions, callback: ErrorOrResult<string>): void;
    
    
    /**
    * Starts to copy a blob to a destination within the storage account. The Copy Blob operation copies the entire committed blob.
    *
    * @param {string}             sourceUri                                 The source blob URI.
    * @param {string}             targetContainer                           The target container name.
    * @param {string}             targetBlob                                The target blob name.
    * @param {errorOrResult}      callback                                  `error` will contain information
    *                                                                       if an error occurs; otherwise `[result]{@link BlobResult}` will contain
    *                                                                       the blob information.
    *                                                                       `response` will contain information related to this operation.
    */
    startCopyBlob(sourceuri: string, targetContainer: string, targetBlob: string, callback: ErrorOrResult<BlobService.BlobResult>): void;
    /**
    * Starts to copy a blob to a destination within the storage account. The Copy Blob operation copies the entire committed blob.
    *
    * @param {string}             sourceUri                                 The source blob URI.
    * @param {string}             targetContainer                           The target container name.
    * @param {string}             targetBlob                                The target blob name.
    * @param {object}             options                                   The request options.
    * @param {errorOrResult}      callback                                  `error` will contain information
    *                                                                       if an error occurs; otherwise `[result]{@link BlobResult}` will contain
    *                                                                       the blob information.
    *                                                                       `response` will contain information related to this operation.
    */
    startCopyBlob(sourceuri: string, targetContainer: string, targetBlob: string, options: BlobService.CopyBlobOptions, callback: ErrorOrResult<BlobService.BlobResult>): void;
    
    /**
    * Abort a blob copy operation.
    *
    * @param {string}             container                                 The destination container name.
    * @param {string}             blob                                      The destination blob name.
    * @param {string}             copyId                                    The copy operation identifier.
    * @param {errorOrResult}      callback                                  `error` will contain information
    *                                                                       if an error occurs; otherwise `[result]{@link BlobResult}` will contain
    *                                                                       the blob information.
    *                                                                       `response` will contain information related to this operation.
    */
    abortCopyBlob(container: string, blob: string, copyId: string, callback: ErrorOrResult<BlobService.BlobResult>): void;
    /**
    * Abort a blob copy operation.
    *
    * @param {string}             container                                 The destination container name.
    * @param {string}             blob                                      The destination blob name.
    * @param {string}             copyId                                    The copy operation identifier.
    * @param {object}             options                                   The request options.
    * @param {errorOrResult}      callback                                  `error` will contain information
    *                                                                       if an error occurs; otherwise `[result]{@link BlobResult}` will contain
    *                                                                       the blob information.
    *                                                                       `response` will contain information related to this operation.
    */
    abortCopyBlob(container: string, blob: string, copyId: string, options: BlobService.LeaseOptions, callback: ErrorOrResult<BlobService.BlobResult>): void;
    
    // ***********************************************************
    // ** URL METHODS
    // ***********************************************************
    
    /**
    * Retrieves a shared access signature token for the container or the blob.
    *
    * @param {string}                   container                                           The container name.
    * @param {string}                   blob                                                The blob name.
    * @param {object}                   sharedAccessPolicy                                  The shared access policy.
    * @param {object}                   [headers]                                           The optional header values to set for a blob returned wth this SAS.
    * @return {string}                                                                      The shared access signature query string. Note this string does not contain the leading "?".
    */
    generateSharedAccessSignature(container: string, blob: string, sharedAccessPolicy: StorageServiceClient.SharedAccessPolicy, headers?: BlobService.AccessPolicyHeaders): string;
    
    /**
    * Retrieves a blob or container URL.
    *
    * @param {string}                   container                The container name.
    * @param {string}                   [blob]                   The blob name.
    * @param {string}                   [sasToken]               The Shared Access Signature token.
    * @param {boolean}                  [primary]                A boolean representing whether to use the primary or the secondary endpoint.
    * @return {string}                                           The formatted URL string.
    */
    getUrl(container: string, blob?: string, sasToken?: string, primary?: boolean): string;
    
    // ***********************************************************
    // ** PAGE BLOB METHODS
    // ***********************************************************
    
    /**
    * Creates a page blob of the specified length. If the blob already exists on the service, it will be overwritten.
    * To avoid overwriting and instead throw an error if the blob exists, please pass in an accessConditions parameter in the options object.
    *
    * @param {string}             container                                     The container name.
    * @param {string}             blob                                          The blob name.
    * @param {int}                length                                        The length of the page blob in bytes.
    * @param {errorOrResponse}    callback                                      `error` will contain information
    *                                                                           if an error occurs; otherwise 
    *                                                                           `response` will contain information related to this operation.
    */
    createPageBlob(container: string, blob: string, length: number, callback: StorageServiceClient.ErrorOrResponse): void;
    /**
    * Creates a page blob of the specified length. If the blob already exists on the service, it will be overwritten.
    * To avoid overwriting and instead throw an error if the blob exists, please pass in an accessConditions parameter in the options object.
    *
    * @param {string}             container                                     The container name.
    * @param {string}             blob                                          The blob name.
    * @param {int}                length                                        The length of the page blob in bytes.
    * @param {object}             options                                     The request options.
    * @param {errorOrResponse}    callback                                      `error` will contain information
    *                                                                           if an error occurs; otherwise 
    *                                                                           `response` will contain information related to this operation.
    */
    createPageBlob(container: string, blob: string, length: number, options: BlobService.CreateBlobOptions, callback: StorageServiceClient.ErrorOrResponse): void;
    
    /**
    * Uploads a page blob from file. If the blob already exists on the service, it will be overwritten.
    * To avoid overwriting and instead throw an error if the blob exists, please pass in an accessConditions parameter in the options object.
    *
    * @param {string}             container                                           The container name.
    * @param {string}             blob                                                The blob name.
    * @param (string)             localFileName                                       The local path to the file to be uploaded.
    * @param {errorOrResult}      callback                                            `error` will contain information
    *                                                                                 if an error occurs; otherwise `[result]{@link BlobResult}` will contain
    *                                                                                 the blob information.
    *                                                                                 `response` will contain information related to this operation.
    * @return {SpeedSummary}
    */
    createPageBlobFromLocalFile(container: string, blob: string, localFileName: string, callback: StorageServiceClient.ErrorOrResult<BlobService.BlobResult>): SpeedSummary;
    /**
    * Uploads a page blob from file. If the blob already exists on the service, it will be overwritten.
    * To avoid overwriting and instead throw an error if the blob exists, please pass in an accessConditions parameter in the options object.
    *
    * @param {string}             container                                           The container name.
    * @param {string}             blob                                                The blob name.
    * @param (string)             localFileName                                       The local path to the file to be uploaded.
    * @param {object}             options                                             The request options.
    * @param {errorOrResult}      callback                                            `error` will contain information
    *                                                                                 if an error occurs; otherwise `[result]{@link BlobResult}` will contain
    *                                                                                 the blob information.
    *                                                                                 `response` will contain information related to this operation.
    * @return {SpeedSummary}
    */
    createPageBlobFromLocalFile(container: string, blob: string, localFileName: string, options: BlobService.UploadBlobOptions, callback: StorageServiceClient.ErrorOrResult<BlobService.BlobResult>): SpeedSummary;
    
    /**
    * Uploads a page blob from a stream. If the blob already exists on the service, it will be overwritten.
    * To avoid overwriting and instead throw an error if the blob exists, please pass in an accessConditions parameter in the options object.
    *
    * @param {string}             container                                     The container name.
    * @param {string}             blob                                          The blob name.
    * @param (Stream)             stream                                        Stream to the data to store.
    * @param {int}                streamLength                                  The length of the stream to upload.
    * @param {errorOrResult}      callback                                      `error` will contain information
    *                                                                           if an error occurs; otherwise `[result]{@link BlobResult}` will contain
    *                                                                           the blob information.
    *                                                                           `response` will contain information related to this operation.
    * @return {SpeedSummary}
    */
    createPageBlobFromStream(container: string, blob: string, stream: NodeJS.ReadableStream, streamLength: number, callback: StorageServiceClient.ErrorOrResult<BlobService.BlobResult>): SpeedSummary;
    /**
    * Uploads a page blob from a stream. If the blob already exists on the service, it will be overwritten.
    * To avoid overwriting and instead throw an error if the blob exists, please pass in an accessConditions parameter in the options object.
    *
    * @param {string}             container                                     The container name.
    * @param {string}             blob                                          The blob name.
    * @param (Stream)             stream                                        Stream to the data to store.
    * @param {int}                streamLength                                  The length of the stream to upload.
    * @param {object}             options                                       The request options.
    * @param {errorOrResult}      callback                                      `error` will contain information
    *                                                                           if an error occurs; otherwise `[result]{@link BlobResult}` will contain
    *                                                                           the blob information.
    *                                                                           `response` will contain information related to this operation.
    * @return {SpeedSummary}
    */
    createPageBlobFromStream(container: string, blob: string, stream: NodeJS.ReadableStream, streamLength: number, options: BlobService.UploadBlobOptions, callback: StorageServiceClient.ErrorOrResult<BlobService.BlobResult>): SpeedSummary;
    
    /**
    * Provides a stream to write to a page blob. Assumes that the blob exists. 
    * If it does not, please create the blob using createPageBlob before calling this method or use createWriteStreamNewPageBlob.
    *
    * @param {string}             container                                     The container name.
    * @param {string}             blob                                          The blob name.
    * @return {Stream}
    */
    createWriteStreamToExistingPageBlob(container: string, blob: string): NodeJS.WritableStream;
    /**
    * Provides a stream to write to a page blob. Assumes that the blob exists. 
    * If it does not, please create the blob using createPageBlob before calling this method or use createWriteStreamNewPageBlob.
    *
    * @param {string}             container                                     The container name.
    * @param {string}             blob                                          The blob name.
    * @param {errorOrResult}      callback                                      `error` will contain information
    *                                                                           if an error occurs; otherwise `[result]{@link BlobResult}` will contain
    *                                                                           the blob information.
    *                                                                           `response` will contain information related to this operation.
    * @return {Stream}
    */
    createWriteStreamToExistingPageBlob(container: string, blob: string, callback: StorageServiceClient.ErrorOrResult<BlobService.BlobResult>): NodeJS.WritableStream;
    /**
    * Provides a stream to write to a page blob. Assumes that the blob exists. 
    * If it does not, please create the blob using createPageBlob before calling this method or use createWriteStreamNewPageBlob.
    *
    * @param {string}             container                                     The container name.
    * @param {string}             blob                                          The blob name.
    * @param {object}             options                                       The request options.
    * @return {Stream}
    */
    createWriteStreamToExistingPageBlob(container: string, blob: string, options: BlobService.UploadBlobOptions): NodeJS.WritableStream;
    /**
    * Provides a stream to write to a page blob. Assumes that the blob exists. 
    * If it does not, please create the blob using createPageBlob before calling this method or use createWriteStreamNewPageBlob.
    *
    * @param {string}             container                                     The container name.
    * @param {string}             blob                                          The blob name.
    * @param {object}             options                                       The request options.
    * @param {errorOrResult}      callback                                      `error` will contain information
    *                                                                           if an error occurs; otherwise `[result]{@link BlobResult}` will contain
    *                                                                           the blob information.
    *                                                                           `response` will contain information related to this operation.
    * @return {Stream}
    */
    createWriteStreamToExistingPageBlob(container: string, blob: string, options: BlobService.UploadBlobOptions, callback: StorageServiceClient.ErrorOrResult<BlobService.BlobResult>): NodeJS.WritableStream;
    
    /**
    * Provides a stream to write to a page blob. Creates the blob before writing data. If the blob already exists on the service, it will be overwritten.
    *
    * @param {string}             container                                     The container name.
    * @param {string}             blob                                          The blob name.
    * @return {Stream}
    */
    createWriteStreamToNewPageBlob(container: string, blob: string): NodeJS.WritableStream;
    /**
    * Provides a stream to write to a page blob. Creates the blob before writing data with specified length. If the blob already exists on the service, it will be overwritten.
    *
    * @param {string}             container                                     The container name.
    * @param {string}             blob                                          The blob name.
    * @param {string}             length                                        The blob length.
    * @return {Stream}
    */
    createWriteStreamToNewPageBlob(container: string, blob: string, length: number): NodeJS.WritableStream;
    /**
    * Provides a stream to write to a page blob. Creates the blob before writing data with specified length. If the blob already exists on the service, it will be overwritten.
    *
    * @param {string}             container                                     The container name.
    * @param {string}             blob                                          The blob name.
    * @param {string}             length                                        The blob length.
    * @param {errorOrResult}      callback                                      `error` will contain information
    *                                                                           if an error occurs; otherwise `[result]{@link BlobResult}` will contain
    *                                                                           the blob information.
    *                                                                           `response` will contain information related to this operation.
    * @return {Stream}
    */
    createWriteStreamToNewPageBlob(container: string, blob: string, length: number, callback: StorageServiceClient.ErrorOrResult<BlobService.BlobResult>): NodeJS.WritableStream;
    /**
    * Provides a stream to write to a page blob. Creates the blob before writing data with specified length. If the blob already exists on the service, it will be overwritten.
    *
    * @param {string}             container                                     The container name.
    * @param {string}             blob                                          The blob name.
    * @param {string}             length                                        The blob length.
    * @param {object}             options                                       The request options.
    * @return {Stream}
    */
    createWriteStreamToNewPageBlob(container: string, blob: string, length: number, options: BlobService.UploadBlobOptions): NodeJS.WritableStream;
    /**
    * Provides a stream to write to a page blob. Creates the blob before writing data with specified length. If the blob already exists on the service, it will be overwritten.
    *
    * @param {string}             container                                     The container name.
    * @param {string}             blob                                          The blob name.
    * @param {string}             length                                        The blob length.
    * @param {object}             options                                       The request options.
    * @param {errorOrResult}      callback                                      `error` will contain information
    *                                                                           if an error occurs; otherwise `[result]{@link BlobResult}` will contain
    *                                                                           the blob information.
    *                                                                           `response` will contain information related to this operation.
    * @return {Stream}
    */
    createWriteStreamToNewPageBlob(container: string, blob: string, length: number, options: BlobService.UploadBlobOptions, callback: StorageServiceClient.ErrorOrResult<BlobService.BlobResult>): NodeJS.WritableStream;
    
    /**
    * Updates a page blob from a stream.
    *
    * @param {string}             container                                   The container name.
    * @param {string}             blob                                        The blob name.
    * @param {Stream}             readStream                                  The read stream.
    * @param {int}                rangeStart                                  The range start.
    * @param {int}                rangeEnd                                    The range end.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link BlobResult}` will contain
    *                                                                         the page information.
    *                                                                         `response` will contain information related to this operation.
    */
    createPagesFromStream(container: string, blob: string, readStream: NodeJS.ReadableStream, rangeStart: number, rangeEnd: number, callback: ErrorOrResult<BlobService.BlobResult>): void;
    /**
    * Updates a page blob from a stream.
    *
    * @param {string}             container                                   The container name.
    * @param {string}             blob                                        The blob name.
    * @param {Stream}             readStream                                  The read stream.
    * @param {int}                rangeStart                                  The range start.
    * @param {int}                rangeEnd                                    The range end.
    * @param {object}             options                                     The request options.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `[result]{@link BlobResult}` will contain
    *                                                                         the page information.
    *                                                                         `response` will contain information related to this operation.
    */
    createPagesFromStream(container: string, blob: string, readStream: NodeJS.ReadableStream, rangeStart: number, rangeEnd: number, options: BlobService.BlobTransactionOptions, callback: ErrorOrResult<BlobService.BlobResult>): void;
    
    /**
    * Lists page ranges. Lists all of the page ranges by default, or only the page ranges over a specific range of bytes if rangeStart and rangeEnd are specified.
    *
    * @param {string}             container                                   The container name.
    * @param {string}             blob                                        The blob name.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `result` will contain
    *                                                                         the page ranges information, see `[Range]{@link Range}` for detailed information.
    *                                                                         `response` will contain information related to this operation.
    */
    listPageRanges(container: string, blob: string, callback: ErrorOrResult<BlobService.Range[]>): void;
    /**
    * Lists page ranges. Lists all of the page ranges by default, or only the page ranges over a specific range of bytes if rangeStart and rangeEnd are specified.
    *
    * @param {string}             container                                   The container name.
    * @param {string}             blob                                        The blob name.
    * @param {object}             options                                     The request options.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `result` will contain
    *                                                                         the page ranges information, see `[Range]{@link Range}` for detailed information.
    *                                                                         `response` will contain information related to this operation.
    */
    listPageRanges(container: string, blob: string, options: BlobService.ListPageRangesOptions, callback: ErrorOrResult<BlobService.Range[]>): void;
    
    /**
    * Clears a range of pages.
    *
    * @param {string}             container                                   The container name.
    * @param {string}             blob                                        The blob name.
    * @param {int}                rangeStart                                  The range start.
    * @param {int}                rangeEnd                                    The range end.
    * @param {errorOrResponse}    callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise 
    *                                                                         `response` will contain information related to this operation.
    */
    clearPageRange(container: string, blob: string, rangeStart: number, rangeEnd: number, callback: StorageServiceClient.ErrorOrResponse): void;
    /**
    * Clears a range of pages.
    *
    * @param {string}             container                                   The container name.
    * @param {string}             blob                                        The blob name.
    * @param {int}                rangeStart                                  The range start.
    * @param {int}                rangeEnd                                    The range end.
    * @param {object}             options                                     The request options.
    * @param {errorOrResponse}    callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise 
    *                                                                         `response` will contain information related to this operation.
    */
    clearPageRange(container: string, blob: string, rangeStart: number, rangeEnd: number, options: BlobService.AccessConditionsOptions, callback: StorageServiceClient.ErrorOrResponse): void;
    
    /**
    * Resizes a page blob.
    *
    * @param {string}               container                                   The container name.
    * @param {string}               blob                                        The blob name.
    * @param {String}               size                                        The size of the page blob, in bytes.
    * @param {errorOrResult}        callback                                    `error` will contain information
    *                                                                           if an error occurs; otherwise `[result]{@link BlobResult}` will contain
    *                                                                           the page information.
    *                                                                           `response` will contain information related to this operation.
    */
    resizePageBlob(container: string, blob: string, size: number, callback: ErrorOrResult<BlobService.BlobResult>): void;
    /**
    * Resizes a page blob.
    *
    * @param {string}               container                                   The container name.
    * @param {string}               blob                                        The blob name.
    * @param {String}               size                                        The size of the page blob, in bytes.
    * @param {object}               options                                     The request options.
    * @param {errorOrResult}        callback                                    `error` will contain information
    *                                                                           if an error occurs; otherwise `[result]{@link BlobResult}` will contain
    *                                                                           the page information.
    *                                                                           `response` will contain information related to this operation.
    */
    resizePageBlob(container: string, blob: string, size: number, options: BlobService.AccessConditionsOptions, callback: ErrorOrResult<BlobService.BlobResult>): void;
    
    /**
    * Sets the page blob's sequence number.
    *
    * @param {string}               container                                   The container name.
    * @param {string}               blob                                        The blob name.
    * @param {SequenceNumberAction} sequenceNumberAction                        A value indicating the operation to perform on the sequence number. 
    *                                                                           The allowed values are defined in azure.BlobUtilities.SequenceNumberAction.
    * @param {string}               sequenceNumber                              The sequence number.  The value of the sequence number must be between 0 and 2^63 - 1.
    *                                                                           Set this parameter to null if this operation is an increment action.
    * @param {errorOrResult}        callback                                    `error` will contain information
    *                                                                           if an error occurs; otherwise `[result]{@link BlobResult}` will contain
    *                                                                           the page information.
    *                                                                           `response` will contain information related to this operation.
    */
    setPageBlobSequenceNumber(container: string, blob: string, sequenceNumberAction: string, sequenceNumber: number | string, callback: ErrorOrResult<BlobService.BlobResult>): void;
    /**
    * Sets the page blob's sequence number.
    *
    * @param {string}               container                                   The container name.
    * @param {string}               blob                                        The blob name.
    * @param {SequenceNumberAction} sequenceNumberAction                        A value indicating the operation to perform on the sequence number. 
    *                                                                           The allowed values are defined in azure.BlobUtilities.SequenceNumberAction.
    * @param {string}               sequenceNumber                              The sequence number.  The value of the sequence number must be between 0 and 2^63 - 1.
    *                                                                           Set this parameter to null if this operation is an increment action.
    * @param {object}               options                                     The request options.
    * @param {errorOrResult}        callback                                    `error` will contain information
    *                                                                           if an error occurs; otherwise `[result]{@link BlobResult}` will contain
    *                                                                           the page information.
    *                                                                           `response` will contain information related to this operation.
    */
    setPageBlobSequenceNumber(container: string, blob: string, sequenceNumberAction: string, sequenceNumber: number | string, options: StorageServiceClient.AccessConditionsOptions, callback: ErrorOrResult<BlobService.BlobResult>): void;
    
    
    // ***********************************************************
    // ** BLOCK BLOB METHODS
    // ***********************************************************
    
    /**
    * Creates a new block blob. If the blob already exists on the service, it will be overwritten.
    * To avoid overwriting and instead throw an error if the blob exists, please pass in an accessConditions parameter in the options object.
    *
    * @param {string}             container                                     The container name.
    * @param {string}             blob                                          The blob name.
    * @param {string}             localFileName                                 The local path to the file to be uploaded.
    * @param {errorOrResult}      callback                                      `error` will contain information
    *                                                                           if an error occurs; otherwise `[result]{@link BlobResult}` will contain
    *                                                                           the blob information.
    *                                                                           `response` will contain information related to this operation.
    * @return {SpeedSummary}
    */
    createBlockBlobFromLocalFile(container: string, blob: string, localFileName: string, callback: ErrorOrResult<BlobService.BlobResult>): SpeedSummary;
    /**
    * Creates a new block blob. If the blob already exists on the service, it will be overwritten.
    * To avoid overwriting and instead throw an error if the blob exists, please pass in an accessConditions parameter in the options object.
    *
    * @param {string}             container                                     The container name.
    * @param {string}             blob                                          The blob name.
    * @param {string}             localFileName                                 The local path to the file to be uploaded.
    * @param {object}             options                                       The request options.
    * @param {errorOrResult}      callback                                      `error` will contain information
    *                                                                           if an error occurs; otherwise `[result]{@link BlobResult}` will contain
    *                                                                           the blob information.
    *                                                                           `response` will contain information related to this operation.
    * @return {SpeedSummary}
    */
    createBlockBlobFromLocalFile(container: string, blob: string, localFileName: string, options: BlobService.UploadBlockBlobOptions, callback: ErrorOrResult<BlobService.BlobResult>): SpeedSummary;
    
    /**
    * Uploads a block blob from a stream. If the blob already exists on the service, it will be overwritten.
    * To avoid overwriting and instead throw an error if the blob exists, please pass in an accessConditions parameter in the options object.
    *
    * @param {string}             container                                     The container name.
    * @param {string}             blob                                          The blob name.
    * @param (Stream)             stream                                        Stream to the data to store.
    * @param {int}                streamLength                                  The length of the stream to upload.
    * @param {errorOrResult}      callback                                      `error` will contain information
    *                                                                           if an error occurs; otherwise `[result]{@link BlobResult}` will contain
    *                                                                           the blob information.
    *                                                                           `response` will contain information related to this operation.
    * @return {SpeedSummary}
    */
    createBlockBlobFromStream(container: string, blob: string, stream: NodeJS.ReadableStream, streamLength: number, callback: ErrorOrResult<BlobService.BlobResult>): SpeedSummary;
    /**
    * Uploads a block blob from a stream. If the blob already exists on the service, it will be overwritten.
    * To avoid overwriting and instead throw an error if the blob exists, please pass in an accessConditions parameter in the options object.
    *
    * @param {string}             container                                     The container name.
    * @param {string}             blob                                          The blob name.
    * @param (Stream)             stream                                        Stream to the data to store.
    * @param {int}                streamLength                                  The length of the stream to upload.
    * @param {object}             options                                       The request options.
    * @param {errorOrResult}      callback                                      `error` will contain information
    *                                                                           if an error occurs; otherwise `[result]{@link BlobResult}` will contain
    *                                                                           the blob information.
    *                                                                           `response` will contain information related to this operation.
    * @return {SpeedSummary}
    */
    createBlockBlobFromStream(container: string, blob: string, stream: NodeJS.ReadableStream, streamLength: number, options: BlobService.UploadBlockBlobOptions, callback: ErrorOrResult<BlobService.BlobResult>): SpeedSummary;
    
    /**
    * Uploads a block blob from a text string. If the blob already exists on the service, it will be overwritten.
    * To avoid overwriting and instead throw an error if the blob exists, please pass in an accessConditions parameter in the options object.
    *
    * @param {string}             container                                     The container name.
    * @param {string}             blob                                          The blob name.
    * @param {string|object}      text                                          The blob text, as a string or in a Buffer.
    * @param {errorOrResult}      callback                                      `error` will contain information
    *                                                                           if an error occurs; otherwise `[result]{@link BlobResult}` will contain
    *                                                                           the blob information.
    *                                                                           `response` will contain information related to this operation.
    */
    createBlockBlobFromText(container: string, blob: string, text: string | Buffer, callback: ErrorOrResult<BlobService.BlobResult>): SpeedSummary;
    /**
    * Uploads a block blob from a text string. If the blob already exists on the service, it will be overwritten.
    * To avoid overwriting and instead throw an error if the blob exists, please pass in an accessConditions parameter in the options object.
    *
    * @param {string}             container                                     The container name.
    * @param {string}             blob                                          The blob name.
    * @param {string|object}      text                                          The blob text, as a string or in a Buffer.
    * @param {object}             options                                       The request options.
    * @param {errorOrResult}      callback                                      `error` will contain information
    *                                                                           if an error occurs; otherwise `[result]{@link BlobResult}` will contain
    *                                                                           the blob information.
    *                                                                           `response` will contain information related to this operation.
    */
    createBlockBlobFromText(container: string, blob: string, text: string | Buffer, options: BlobService.UploadBlockBlobFromTextOptions, callback: ErrorOrResult<BlobService.BlobResult>): SpeedSummary;
    
    /**
    * Provides a stream to write to a block blob. If the blob already exists on the service, it will be overwritten.
    * To avoid overwriting and instead throw an error if the blob exists, please pass in an accessConditions parameter in the options object.
    *
    * @param {string}             container                                     The container name.
    * @param {string}             blob                                          The blob name.
    * @return {Stream}
    */
    createWriteStreamToBlockBlob(container: string, blob: string): NodeJS.WritableStream;
    /**
    * Provides a stream to write to a block blob. If the blob already exists on the service, it will be overwritten.
    * To avoid overwriting and instead throw an error if the blob exists, please pass in an accessConditions parameter in the options object.
    *
    * @param {string}             container                                     The container name.
    * @param {string}             blob                                          The blob name.
    * @param {errorOrResult}      callback                                      `error` will contain information
    *                                                                           if an error occurs; otherwise `[result]{@link BlobResult}` will contain
    *                                                                           the blob information.
    *                                                                           `response` will contain information related to this operation.
    * @return {Stream}
    */
    createWriteStreamToBlockBlob(container: string, blob: string, callback: ErrorOrResult<BlobService.BlobResult>): NodeJS.WritableStream;
    /**
    * Provides a stream to write to a block blob. If the blob already exists on the service, it will be overwritten.
    * To avoid overwriting and instead throw an error if the blob exists, please pass in an accessConditions parameter in the options object.
    *
    * @param {string}             container                                     The container name.
    * @param {string}             blob                                          The blob name.
    * @param {object}             options                                       The request options.
    * @return {Stream}
    */
    createWriteStreamToBlockBlob(container: string, blob: string, options: BlobService.UploadBlockBlobOptions): NodeJS.WritableStream;
    /**
    * Provides a stream to write to a block blob. If the blob already exists on the service, it will be overwritten.
    * To avoid overwriting and instead throw an error if the blob exists, please pass in an accessConditions parameter in the options object.
    *
    * @param {string}             container                                     The container name.
    * @param {string}             blob                                          The blob name.
    * @param {object}             options                                       The request options.
    * @param {errorOrResult}      callback                                      `error` will contain information
    *                                                                           if an error occurs; otherwise `[result]{@link BlobResult}` will contain
    *                                                                           the blob information.
    *                                                                           `response` will contain information related to this operation.
    * @return {Stream}
    */
    createWriteStreamToBlockBlob(container: string, blob: string, options: BlobService.UploadBlockBlobOptions, callback: StorageServiceClient.ErrorOrResponse): NodeJS.WritableStream;
    
    /**
    * Creates a new block to be committed as part of a blob.
    *
    * @param {string}             blockId                                   The block identifier.
    * @param {string}             container                                 The container name.
    * @param {string}             blob                                      The blob name.
    * @param {Stream}             readStream                                The read stream.
    * @param {int}                streamLength                              The stream length.
    * @param {errorOrResponse}    callback                                  `error` will contain information
    *                                                                       if an error occurs; otherwise 
    *                                                                       `response` will contain information related to this operation.
    */
    createBlockFromStream(blockId: string, container: string, blob: string, readStream: NodeJS.ReadableStream, streamLength: number, callback: StorageServiceClient.ErrorOrResponse): void;
    /**
    * Creates a new block to be committed as part of a blob.
    *
    * @param {string}             blockId                                   The block identifier.
    * @param {string}             container                                 The container name.
    * @param {string}             blob                                      The blob name.
    * @param {Stream}             readStream                                The read stream.
    * @param {int}                streamLength                              The stream length.
    * @param {object}             options                                   The request options.
    * @param {errorOrResponse}    callback                                  `error` will contain information
    *                                                                       if an error occurs; otherwise 
    *                                                                       `response` will contain information related to this operation.
    */
    createBlockFromStream(blockId: string, container: string, blob: string, readStream: NodeJS.ReadableStream, streamLength: number, options: BlobService.BlobTransactionOptions, callback: StorageServiceClient.ErrorOrResponse): void;
    
    /**
    * Creates a new block to be committed as part of a blob.
    *
    * @param {string}             blockId                                   The block identifier.
    * @param {string}             container                                 The container name.
    * @param {string}             blob                                      The blob name.
    * @param {string|buffer}      content                                   The block content.
    * @param {errorOrResponse}    callback                                  `error` will contain information
    *                                                                       if an error occurs; otherwise 
    *                                                                       `response` will contain information related to this operation.
    */
    createBlockFromText(blockId: string, container: string, blob: string, content: string | Buffer, callback: StorageServiceClient.ErrorOrResponse): void;
    /**
    * Creates a new block to be committed as part of a blob.
    *
    * @param {string}             blockId                                   The block identifier.
    * @param {string}             container                                 The container name.
    * @param {string}             blob                                      The blob name.
    * @param {string|buffer}      content                                   The block content.
    * @param {object}             options                                   The request options.
    * @param {errorOrResponse}    callback                                  `error` will contain information
    *                                                                       if an error occurs; otherwise 
    *                                                                       `response` will contain information related to this operation.
    */
    createBlockFromText(blockId: string, container: string, blob: string, content: string | Buffer, options: BlobService.BlobTransactionOptions, callback: StorageServiceClient.ErrorOrResponse): void;
    
    /**
    * Writes a blob by specifying the list of block IDs that make up the blob.
    * In order to be written as part of a blob, a block must have been successfully written to the server in a prior
    * createBlock operation.
    *
    * @param {string}             container                                     The container name.
    * @param {string}             blob                                          The blob name.
    * @param {object}             blockList                                     The block identifiers.
    * @param {errorOrResult}      callback                                      `error` will contain information
    *                                                                           if an error occurs; otherwise `[result]{@link BlobResult}` will contain
    *                                                                           the blob information.
    *                                                                           `response` will contain information related to this operation.
    */
    commitBlocks(container: string, blob: string, blockList: BlobService.BlockList, callback: ErrorOrResult<BlobService.BlobResult>): void;
    /**
    * Writes a blob by specifying the list of block IDs that make up the blob.
    * In order to be written as part of a blob, a block must have been successfully written to the server in a prior
    * createBlock operation.
    *
    * @param {string}             container                                     The container name.
    * @param {string}             blob                                          The blob name.
    * @param {object}             blockList                                     The block identifiers.
    * @param {object}             options                                       The request options.
    * @param {errorOrResult}      callback                                      `error` will contain information
    *                                                                           if an error occurs; otherwise `[result]{@link BlobResult}` will contain
    *                                                                           the blob information.
    *                                                                           `response` will contain information related to this operation.
    */
    commitBlocks(container: string, blob: string, blockList: BlobService.BlockList, options: BlobService.CreateBlobOptions, callback: ErrorOrResult<BlobService.BlobResult>): void;
    
    /**
    * Retrieves the list of blocks that have been uploaded as part of a block blob.
    *
    * @param {string}             container                                   The container name.
    * @param {string}             blob                                        The blob name.
    * @param {BlockListFilter}    blocklisttype                               The type of block list to retrieve.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `result` will contain
    *                                                                         the blocklist information.
    *                                                                         `response` will contain information related to this operation.
    */
    listBlocks(container: string, blob: string, blockListType: string, callback: ErrorOrResult<BlobService.BlockListResult>): void;
    /**
    * Retrieves the list of blocks that have been uploaded as part of a block blob.
    *
    * @param {string}             container                                   The container name.
    * @param {string}             blob                                        The blob name.
    * @param {BlockListFilter}    blocklisttype                               The type of block list to retrieve.
    * @param {object}             options                                     The request options.
    * @param {errorOrResult}      callback                                    `error` will contain information
    *                                                                         if an error occurs; otherwise `result` will contain
    *                                                                         the blocklist information.
    *                                                                         `response` will contain information related to this operation.
    */
    listBlocks(container: string, blob: string, blockListType: string, options: BlobService.BlobOptions, callback: ErrorOrResult<BlobService.BlockListResult>): void;
    
    /** Generate a random block id prefix. */
    generateBlockIdPrefix(): string;
    
    /** Get a block id according to prefix and block number. */
    getBlockId(prefix: string, number: number): string;
    
    
    // ***********************************************************
    // ** APPEND BLOB METHODS
    // ***********************************************************
    
    /**
    * Creates an empty append blob. If the blob already exists on the service, it will be overwritten.
    * To avoid overwriting and instead throw an error if the blob exists, please pass in an accessConditions parameter in the options object.
    *
    * @param {string}             container                                     The container name.
    * @param {string}             blob                                          The blob name.
    * @param {errorOrResponse}    callback                                      `error` will contain information
    *                                                                           if an error occurs; otherwise 
    *                                                                           `response` will contain information related to this operation.
    */
    createOrReplaceAppendBlob(container: string, blob: string, callback: StorageServiceClient.ErrorOrResponse): void;
    /**
    * Creates an empty append blob. If the blob already exists on the service, it will be overwritten.
    * To avoid overwriting and instead throw an error if the blob exists, please pass in an accessConditions parameter in the options object.
    *
    * @param {string}             container                                     The container name.
    * @param {string}             blob                                          The blob name.
    * @param {object}             options                                       The request options.
    * @param {errorOrResponse}    callback                                      `error` will contain information
    *                                                                           if an error occurs; otherwise 
    *                                                                           `response` will contain information related to this operation.
    */
    createOrReplaceAppendBlob(container: string, blob: string, options: BlobService.CreateBlobOptions, callback: StorageServiceClient.ErrorOrResponse): void;
    
    /**
    * Creates a new append blob from a local file. If the blob already exists on the service, it will be overwritten.
    * To avoid overwriting and instead throw an error if the blob exists, please pass in an accessConditions parameter in the options object.
    * This API should be used strictly in a single writer scenario because the API internally uses the append-offset conditional header to avoid duplicate blocks.
    * If you are guaranteed to have a single writer scenario, please look at options.absorbConditionalErrorsOnRetry and see if setting this flag to true is acceptable for you.
    * If you want to append data to an already existing blob, please look at appendFromLocalFile.
    *
    * @param {string}             container                                     The container name.
    * @param {string}             blob                                          The blob name.
    * @param {string}             localFileName                                 The local path to the file to be uploaded.
    * @param {errorOrResult}      callback                                      `error` will contain information
    *                                                                           if an error occurs; otherwise `[result]{@link BlobResult}` will contain
    *                                                                           the blob information.
    *                                                                           `response` will contain information related to this operation.
    * @return {SpeedSummary}
    */
    createAppendBlobFromLocalFile(container: string, blob: string, localFileName: string, callback: ErrorOrResult<BlobService.BlobResult>): SpeedSummary;
    /**
    * Creates a new append blob from a local file. If the blob already exists on the service, it will be overwritten.
    * To avoid overwriting and instead throw an error if the blob exists, please pass in an accessConditions parameter in the options object.
    * This API should be used strictly in a single writer scenario because the API internally uses the append-offset conditional header to avoid duplicate blocks.
    * If you are guaranteed to have a single writer scenario, please look at options.absorbConditionalErrorsOnRetry and see if setting this flag to true is acceptable for you.
    * If you want to append data to an already existing blob, please look at appendFromLocalFile.
    *
    * @param {string}             container                                     The container name.
    * @param {string}             blob                                          The blob name.
    * @param {string}             localFileName                                 The local path to the file to be uploaded.
    * @param {object}             options                                       The request options.
    * @param {errorOrResult}      callback                                      `error` will contain information
    *                                                                           if an error occurs; otherwise `[result]{@link BlobResult}` will contain
    *                                                                           the blob information.
    *                                                                           `response` will contain information related to this operation.
    * @return {SpeedSummary}
    */
    createAppendBlobFromLocalFile(container: string, blob: string, localFileName: string, options: BlobService.UploadAppendBlobOptions, callback: ErrorOrResult<BlobService.BlobResult>): SpeedSummary;
    
    /**
    * Uploads an append blob from a stream. If the blob already exists on the service, it will be overwritten.
    * To avoid overwriting and instead throw an error if the blob exists, please pass in an accessConditions parameter in the options object.
    * This API should be used strictly in a single writer scenario because the API internally uses the append-offset conditional header to avoid duplicate blocks.
    * If you are guaranteed to have a single writer scenario, please look at options.absorbConditionalErrorsOnRetry and see if setting this flag to true is acceptable for you.
    * If you want to append data to an already existing blob, please look at appendFromStream.
    *
    * @param {string}             container                                     The container name.
    * @param {string}             blob                                          The blob name.
    * @param (Stream)             stream                                        Stream to the data to store.
    * @param {int}                streamLength                                  The length of the stream to upload.
    * @param {errorOrResult}      callback                                      `error` will contain information
    *                                                                           if an error occurs; otherwise `[result]{@link BlobResult}` will contain
    *                                                                           the blob information.
    *                                                                           `response` will contain information related to this operation.
    * @return {SpeedSummary}
    */
    createAppendBlobFromStream(container: string, blob: string, stream: NodeJS.ReadableStream, streamLength: number, callback: ErrorOrResult<BlobService.BlobResult>): SpeedSummary;
    /**
    * Uploads an append blob from a stream. If the blob already exists on the service, it will be overwritten.
    * To avoid overwriting and instead throw an error if the blob exists, please pass in an accessConditions parameter in the options object.
    * This API should be used strictly in a single writer scenario because the API internally uses the append-offset conditional header to avoid duplicate blocks.
    * If you are guaranteed to have a single writer scenario, please look at options.absorbConditionalErrorsOnRetry and see if setting this flag to true is acceptable for you.
    * If you want to append data to an already existing blob, please look at appendFromStream.
    *
    * @param {string}             container                                     The container name.
    * @param {string}             blob                                          The blob name.
    * @param (Stream)             stream                                        Stream to the data to store.
    * @param {int}                streamLength                                  The length of the stream to upload.
    * @param {object}             options                                       The request options.
    * @param {errorOrResult}      callback                                      `error` will contain information
    *                                                                           if an error occurs; otherwise `[result]{@link BlobResult}` will contain
    *                                                                           the blob information.
    *                                                                           `response` will contain information related to this operation.
    * @return {SpeedSummary}
    */
    createAppendBlobFromStream(container: string, blob: string, stream: NodeJS.ReadableStream, streamLength: number, options: BlobService.UploadAppendBlobOptions, callback: ErrorOrResult<BlobService.BlobResult>): SpeedSummary;
    
    /**
    * Uploads an append blob from a text string. If the blob already exists on the service, it will be overwritten.
    * To avoid overwriting and instead throw an error if the blob exists, please pass in an accessConditions parameter in the options object.
    * This API should be used strictly in a single writer scenario because the API internally uses the append-offset conditional header to avoid duplicate blocks.
    * If you are guaranteed to have a single writer scenario, please look at options.absorbConditionalErrorsOnRetry and see if setting this flag to true is acceptable for you.
    * If you want to append data to an already existing blob, please look at appendFromText.
    *
    * @param {string}             container                                     The container name.
    * @param {string}             blob                                          The blob name.
    * @param {string|object}      text                                          The blob text, as a string or in a Buffer.
    * @param {errorOrResult}      callback                                      `error` will contain information
    *                                                                           if an error occurs; otherwise `[result]{@link BlobResult}` will contain
    *                                                                           the blob information.
    *                                                                           `response` will contain information related to this operation.
    */
    createAppendBlobFromText(container: string, blob: string, text: string | Buffer, callback: ErrorOrResult<BlobService.BlobResult>): SpeedSummary;
    /**
    * Uploads an append blob from a text string. If the blob already exists on the service, it will be overwritten.
    * To avoid overwriting and instead throw an error if the blob exists, please pass in an accessConditions parameter in the options object.
    * This API should be used strictly in a single writer scenario because the API internally uses the append-offset conditional header to avoid duplicate blocks.
    * If you are guaranteed to have a single writer scenario, please look at options.absorbConditionalErrorsOnRetry and see if setting this flag to true is acceptable for you.
    * If you want to append data to an already existing blob, please look at appendFromText.
    *
    * @param {string}             container                                     The container name.
    * @param {string}             blob                                          The blob name.
    * @param {string|object}      text                                          The blob text, as a string or in a Buffer.
    * @param {object}             options                                       The request options.
    * @param {errorOrResult}      callback                                      `error` will contain information
    *                                                                           if an error occurs; otherwise `[result]{@link BlobResult}` will contain
    *                                                                           the blob information.
    *                                                                           `response` will contain information related to this operation.
    */
    createAppendBlobFromText(container: string, blob: string, text: string | Buffer, options: BlobService.UploadAppendBlobOptions, callback: ErrorOrResult<BlobService.BlobResult>): SpeedSummary;
    
    /**
    * Provides a stream to write to a new append blob. If the blob already exists on the service, it will be overwritten.
    * To avoid overwriting and instead throw an error if the blob exists, please pass in an accessConditions parameter in the options object.
    * This API should be used strictly in a single writer scenario because the API internally uses the append-offset conditional header to avoid duplicate blocks.
    * If you are guaranteed to have a single writer scenario, please look at options.absorbConditionalErrorsOnRetry and see if setting this flag to true is acceptable for you.
    *
    * @param {string}             container                                     The container name.
    * @param {string}             blob                                          The blob name.
    * @return {Stream}
    */
    createWriteStreamToNewAppendBlob(container: string, blob: string): NodeJS.WritableStream;
    /**
    * Provides a stream to write to a new append blob. If the blob already exists on the service, it will be overwritten.
    * To avoid overwriting and instead throw an error if the blob exists, please pass in an accessConditions parameter in the options object.
    * This API should be used strictly in a single writer scenario because the API internally uses the append-offset conditional header to avoid duplicate blocks.
    * If you are guaranteed to have a single writer scenario, please look at options.absorbConditionalErrorsOnRetry and see if setting this flag to true is acceptable for you.
    *
    * @param {string}             container                                     The container name.
    * @param {string}             blob                                          The blob name.
    * @param {errorOrResponse}    callback                                      The callback function.
    * @return {Stream}
    */
    createWriteStreamToNewAppendBlob(container: string, blob: string, callback: ErrorOrResult<BlobService.BlobResult>): NodeJS.WritableStream;
    /**
    * Provides a stream to write to a new append blob. If the blob already exists on the service, it will be overwritten.
    * To avoid overwriting and instead throw an error if the blob exists, please pass in an accessConditions parameter in the options object.
    * This API should be used strictly in a single writer scenario because the API internally uses the append-offset conditional header to avoid duplicate blocks.
    * If you are guaranteed to have a single writer scenario, please look at options.absorbConditionalErrorsOnRetry and see if setting this flag to true is acceptable for you.
    *
    * @param {string}             container                                     The container name.
    * @param {string}             blob                                          The blob name.
    * @param {object}             options                                       The request options.
    * @return {Stream}
    */
    createWriteStreamToNewAppendBlob(container: string, blob: string, options: BlobService.UploadAppendBlobOptions): NodeJS.WritableStream;
    /**
    * Provides a stream to write to a new append blob. If the blob already exists on the service, it will be overwritten.
    * To avoid overwriting and instead throw an error if the blob exists, please pass in an accessConditions parameter in the options object.
    * This API should be used strictly in a single writer scenario because the API internally uses the append-offset conditional header to avoid duplicate blocks.
    * If you are guaranteed to have a single writer scenario, please look at options.absorbConditionalErrorsOnRetry and see if setting this flag to true is acceptable for you.
    *
    * @param {string}             container                                     The container name.
    * @param {string}             blob                                          The blob name.
    * @param {object}             options                                       The request options.
    * @param {errorOrResponse}    callback                                      The callback function.
    * @return {Stream}
    */
    createWriteStreamToNewAppendBlob(container: string, blob: string, options: BlobService.UploadAppendBlobOptions, callback: ErrorOrResult<BlobService.BlobResult>): NodeJS.WritableStream;
    
    /**
    * Provides a stream to write to an existing append blob. Assumes that the blob exists. 
    * If it does not, please create the blob using createAppendBlob before calling this method or use createWriteStreamToNewAppendBlob.
    * This API should be used strictly in a single writer scenario because the API internally uses the append-offset conditional header to avoid duplicate blocks.
    * If you are guaranteed to have a single writer scenario, please look at options.absorbConditionalErrorsOnRetry and see if setting this flag to true is acceptable for you.
    *
    * @param {string}             container                                     The container name.
    * @param {string}             blob                                          The blob name.
    * @return {Stream}
    */
    createWriteStreamToExistingAppendBlob(container: string, blob: string): NodeJS.WritableStream;
    /**
    * Provides a stream to write to an existing append blob. Assumes that the blob exists. 
    * If it does not, please create the blob using createAppendBlob before calling this method or use createWriteStreamToNewAppendBlob.
    * This API should be used strictly in a single writer scenario because the API internally uses the append-offset conditional header to avoid duplicate blocks.
    * If you are guaranteed to have a single writer scenario, please look at options.absorbConditionalErrorsOnRetry and see if setting this flag to true is acceptable for you.
    *
    * @param {string}             container                                     The container name.
    * @param {string}             blob                                          The blob name.
    * @param {errorOrResponse}    callback                                      The callback function.
    * @return {Stream}
    */
    createWriteStreamToExistingAppendBlob(container: string, blob: string, callback: ErrorOrResult<BlobService.BlobResult>): NodeJS.WritableStream;
    /**
    * Provides a stream to write to an existing append blob. Assumes that the blob exists. 
    * If it does not, please create the blob using createAppendBlob before calling this method or use createWriteStreamToNewAppendBlob.
    * This API should be used strictly in a single writer scenario because the API internally uses the append-offset conditional header to avoid duplicate blocks.
    * If you are guaranteed to have a single writer scenario, please look at options.absorbConditionalErrorsOnRetry and see if setting this flag to true is acceptable for you.
    *
    * @param {string}             container                                     The container name.
    * @param {string}             blob                                          The blob name.
    * @param {object}             options                                       The request options.
    * @return {Stream}
    */
    createWriteStreamToExistingAppendBlob(container: string, blob: string, options: BlobService.UploadAppendBlobOptions): NodeJS.WritableStream;
    /**
    * Provides a stream to write to an existing append blob. Assumes that the blob exists. 
    * If it does not, please create the blob using createAppendBlob before calling this method or use createWriteStreamToNewAppendBlob.
    * This API should be used strictly in a single writer scenario because the API internally uses the append-offset conditional header to avoid duplicate blocks.
    * If you are guaranteed to have a single writer scenario, please look at options.absorbConditionalErrorsOnRetry and see if setting this flag to true is acceptable for you.
    *
    * @param {string}             container                                     The container name.
    * @param {string}             blob                                          The blob name.
    * @param {object}             options                                       The request options.
    * @param {errorOrResponse}    callback                                      The callback function.
    * @return {Stream}
    */
    createWriteStreamToExistingAppendBlob(container: string, blob: string, options: BlobService.UploadAppendBlobOptions, callback: ErrorOrResult<BlobService.BlobResult>): NodeJS.WritableStream;
    
    
    /**
    * Appends to an append blob from a local file. Assumes the blob already exists on the service.
    * This API should be used strictly in a single writer scenario because the API internally uses the append-offset conditional header to avoid duplicate blocks.
    * If you are guaranteed to have a single writer scenario, please look at options.absorbConditionalErrorsOnRetry and see if setting this flag to true is acceptable for you.
    *
    * @param {string}             container                                     The container name.
    * @param {string}             blob                                          The blob name.
    * @param {string}             localFileName                                 The local path to the file to be uploaded.
    * @param {errorOrResult}      callback                                      `error` will contain information
    *                                                                           if an error occurs; otherwise `[result]{@link BlobResult}` will contain
    *                                                                           the blob information.
    *                                                                           `response` will contain information related to this operation.
    * @return {SpeedSummary}
    */
    appendFromLocalFile(container: string, blob: string, localFileName: string, callback: ErrorOrResult<BlobService.BlobResult>): SpeedSummary;
    /**
    * Appends to an append blob from a local file. Assumes the blob already exists on the service.
    * This API should be used strictly in a single writer scenario because the API internally uses the append-offset conditional header to avoid duplicate blocks.
    * If you are guaranteed to have a single writer scenario, please look at options.absorbConditionalErrorsOnRetry and see if setting this flag to true is acceptable for you.
    *
    * @param {string}             container                                     The container name.
    * @param {string}             blob                                          The blob name.
    * @param {string}             localFileName                                 The local path to the file to be uploaded.
    * @param {object}             options                                       The request options.
    * @param {errorOrResult}      callback                                      `error` will contain information
    *                                                                           if an error occurs; otherwise `[result]{@link BlobResult}` will contain
    *                                                                           the blob information.
    *                                                                           `response` will contain information related to this operation.
    * @return {SpeedSummary}
    */
    appendFromLocalFile(container: string, blob: string, localFileName: string, options: BlobService.UploadAppendBlobOptions, callback: ErrorOrResult<BlobService.BlobResult>): SpeedSummary;
    
    /**
    * Appends to an append blob from a stream. Assumes the blob already exists on the service.
    * This API should be used strictly in a single writer scenario because the API internally uses the append-offset conditional header to avoid duplicate blocks.
    * If you are guaranteed to have a single writer scenario, please look at options.absorbConditionalErrorsOnRetry and see if setting this flag to true is acceptable for you.
    *
    * @param {string}             container                                     The container name.
    * @param {string}             blob                                          The blob name.
    * @param (Stream)             stream                                        Stream to the data to store.
    * @param {int}                streamLength                                  The length of the stream to upload.
    * @param {errorOrResult}      callback                                      `error` will contain information
    *                                                                           if an error occurs; otherwise `[result]{@link BlobResult}` will contain
    *                                                                           the blob information.
    *                                                                           `response` will contain information related to this operation.
    * @return {SpeedSummary}
    */
    appendFromStream(container: string, blob: string, stream: NodeJS.ReadableStream, streamLength: number, callback: ErrorOrResult<BlobService.BlobResult>): SpeedSummary;
    /**
    * Appends to an append blob from a stream. Assumes the blob already exists on the service.
    * This API should be used strictly in a single writer scenario because the API internally uses the append-offset conditional header to avoid duplicate blocks.
    * If you are guaranteed to have a single writer scenario, please look at options.absorbConditionalErrorsOnRetry and see if setting this flag to true is acceptable for you.
    *
    * @param {string}             container                                     The container name.
    * @param {string}             blob                                          The blob name.
    * @param (Stream)             stream                                        Stream to the data to store.
    * @param {int}                streamLength                                  The length of the stream to upload.
    * @param {object}             options                                       The request options.
    * @param {errorOrResult}      callback                                      `error` will contain information
    *                                                                           if an error occurs; otherwise `[result]{@link BlobResult}` will contain
    *                                                                           the blob information.
    *                                                                           `response` will contain information related to this operation.
    * @return {SpeedSummary}
    */
    appendFromStream(container: string, blob: string, stream: NodeJS.ReadableStream, streamLength: number, options: BlobService.UploadAppendBlobOptions, callback: ErrorOrResult<BlobService.BlobResult>): SpeedSummary;
    
    /**
    * Appends to an append blob from a text string. Assumes the blob already exists on the service.
    * This API should be used strictly in a single writer scenario because the API internally uses the append-offset conditional header to avoid duplicate blocks.
    * If you are guaranteed to have a single writer scenario, please look at options.absorbConditionalErrorsOnRetry and see if setting this flag to true is acceptable for you.
    *
    * @param {string}             container                                     The container name.
    * @param {string}             blob                                          The blob name.
    * @param {string|object}      text                                          The blob text, as a string or in a Buffer.
    * @param {errorOrResult}      callback                                      `error` will contain information
    *                                                                           if an error occurs; otherwise `[result]{@link BlobResult}` will contain
    *                                                                           the blob information.
    *                                                                           `response` will contain information related to this operation.
    */
    appendFromText(container: string, blob: string, text: string | Buffer, callback: ErrorOrResult<BlobService.BlobResult>): SpeedSummary;
    /**
    * Appends to an append blob from a text string. Assumes the blob already exists on the service.
    * This API should be used strictly in a single writer scenario because the API internally uses the append-offset conditional header to avoid duplicate blocks.
    * If you are guaranteed to have a single writer scenario, please look at options.absorbConditionalErrorsOnRetry and see if setting this flag to true is acceptable for you.
    *
    * @param {string}             container                                     The container name.
    * @param {string}             blob                                          The blob name.
    * @param {string|object}      text                                          The blob text, as a string or in a Buffer.
    * @param {object}             options                                       The request options.
    * @param {errorOrResult}      callback                                      `error` will contain information
    *                                                                           if an error occurs; otherwise `[result]{@link BlobResult}` will contain
    *                                                                           the blob information.
    *                                                                           `response` will contain information related to this operation.
    */
    appendFromText(container: string, blob: string, text: string | Buffer, options: BlobService.UploadAppendBlobOptions, callback: ErrorOrResult<BlobService.BlobResult>): SpeedSummary;
    
    /**
    * Creates a new block from a read stream to be appended to an append blob.
    * This API should be used strictly in a single writer scenario because the API internally uses the append-offset conditional header to avoid duplicate blocks.
    * If you are guaranteed to have a single writer scenario, please look at options.absorbConditionalErrorsOnRetry and see if setting this flag to true is acceptable for you.
    *
    * @param {string}             container                                 The container name.
    * @param {string}             blob                                      The blob name.
    * @param {Stream}             readStream                                The read stream.
    * @param {int}                streamLength                              The stream length.
    * @param {errorOrResponse}    callback                                  `error` will contain information
    *                                                                       if an error occurs; otherwise 
    *                                                                       `response` will contain information related to this operation.
    */
    appendBlockFromStream(container: string, blob: string, stream: NodeJS.ReadableStream, streamLength: number, callback: ErrorOrResult<BlobService.BlobResult>): void;
    /**
    * Creates a new block from a read stream to be appended to an append blob.
    * This API should be used strictly in a single writer scenario because the API internally uses the append-offset conditional header to avoid duplicate blocks.
    * If you are guaranteed to have a single writer scenario, please look at options.absorbConditionalErrorsOnRetry and see if setting this flag to true is acceptable for you.
    *
    * @param {string}             container                                 The container name.
    * @param {string}             blob                                      The blob name.
    * @param {Stream}             readStream                                The read stream.
    * @param {int}                streamLength                              The stream length.
    * @param {object}             options                                   The request options.
    * @param {errorOrResponse}    callback                                  `error` will contain information
    *                                                                       if an error occurs; otherwise 
    *                                                                       `response` will contain information related to this operation.
    */
    appendBlockFromStream(container: string, blob: string, stream: NodeJS.ReadableStream, streamLength: number, options: BlobService.AppendBlockBlobOptions, callback: ErrorOrResult<BlobService.BlobResult>): void;
    
    /**
    * Creates a new block from a text to be appended to an append blob.
    * This API should be used strictly in a single writer scenario because the API internally uses the append-offset conditional header to avoid duplicate blocks.
    * If you are guaranteed to have a single writer scenario, please look at options.absorbConditionalErrorsOnRetry and see if setting this flag to true is acceptable for you.
    *
    * @this {BlobService}
    * @param {string}             container                                 The container name.
    * @param {string}             blob                                      The blob name.
    * @param {string|object}      content                                   The block text, as a string or in a Buffer.
    * @param {errorOrResponse}    callback                                  `error` will contain information
    *                                                                       if an error occurs; otherwise 
    *                                                                       `response` will contain information related to this operation.
    */
    appendBlockFromText(container: string, blob: string, content: string | Buffer, callback: ErrorOrResult<BlobService.BlobResult>): void;
    /**
    * Creates a new block from a text to be appended to an append blob.
    * This API should be used strictly in a single writer scenario because the API internally uses the append-offset conditional header to avoid duplicate blocks.
    * If you are guaranteed to have a single writer scenario, please look at options.absorbConditionalErrorsOnRetry and see if setting this flag to true is acceptable for you.
    *
    * @this {BlobService}
    * @param {string}             container                                 The container name.
    * @param {string}             blob                                      The blob name.
    * @param {string|object}      content                                   The block text, as a string or in a Buffer.
    * @param {object}             options                                   The request options.
    * @param {errorOrResponse}    callback                                  `error` will contain information
    *                                                                       if an error occurs; otherwise 
    *                                                                       `response` will contain information related to this operation.
    */
    appendBlockFromText(container: string, blob: string, content: string | Buffer, options: BlobService.AppendBlockBlobOptions, callback: ErrorOrResult<BlobService.BlobResult>): void;
}

declare namespace BlobService {
    
    export type BlobToTextCallback  = (err: StorageError, text: string, blockBlob: BlobResult, response: StorageServiceClient.ServiceResponse) => void;
    
    // ***********************************************************
    // ** RESULTS
    // ***********************************************************
    
    export interface ContainerResult {
        /** The container name. */
        name: string;
        /** The public access level. */
        publicAccessLevel?: string;
        /** The metadata key/value pair. */
        metadata?: any;
        /** The etag. */
        etag?: string;
        /** The date/time that the container was last modified. */
        lastModified?: string;
        /** The request id. */
        requestId?: string;
        /** The lease information. */
        lease?: Lease;
        /** Does the container exists? Available after doesContainerExists call. */
        exists?: boolean;
        /** Was the container created? Available after createContainerIfNotExists call. */
        created?: boolean;
        /** The ACL Settings, available after getContainerAcl call. */
        signedIdentifiers?: StorageServiceClient.SignedIdentifiersResult;
    }
    
    export interface DirectoryResult {
        /** The directory name. */
        name: string;
        /** The metadata key/value pair. */
        metadata?: any;
        /** The etag. */
        etag?: string;
        /** The date/time that the directory was last modified. */
        lastModified?: string;
        /** The request id. */
        requestId?: string;
    }
    
    export interface BlobResult {
        /** The container name. */
        container: string;
        /** The blob name. */
        name: string;
        /** The metadata key/value pair. */
        metadata?: any;
        /** The etag. */
        etag?: string;
        /** The date/time that the blob was last modified. */
        lastModified?: string;
        /** The size of the blob in bytes. */
        contentLength?: string;
        /** The blob type. */
        blobType?: string;
        /** The request id. */
        requestId?: string;
        /** The current sequence number for a page blob. */
        sequenceNumber?: string;
        /** The content range. */
        contentRange?: string;
        
        /** Does the blob exists? Available after doesBlobExists call. */
        exists?: boolean;
        
        /** Blob's content. Available after Download calls. */
        blob?: any;
        
        /** The blob snapshot. Available if snapshots is specified in include parameter. */
        snapshot?: string;
        
        /** The content settings. */
        contentSettings?: BlobProperties;
        
        /** The lease information. */
        lease?: Lease;
        
        /** The copy information. */
        copy?: {
            /** The copy id. */
            id?: string;
            /** The copy status. */
            status?: string;
            /** The copy completion time. */
            completionTime?: string;
            /** The copy status description. */
            statusDescription?: string;
            /** The copy progress. */
            progress?: string;
            /** The copy source. */
            source?: string;
        };
        
        /** The BlockBlob BlockList. Only available after a commitBlocks call. */
        list?: BlockList;
        
        /** The AppendBlob append offset. Only available after createAppendBlobFrom call or appendFrom call. */
        appendOffset?: number;
        
        /** The AppendBlob append offset. Only available after createAppendBlobFrom call or appendFrom call. */
        committedBlockCount?: number;
    }
    
    export interface LeaseResult {
        /** The container name. */
        container: string;
        /** The blob name. */
        blob?: string;
        /** The lease id. */
        id?: string;
        /** Approximate time remaining in the lease period, in seconds. */
        time?: string;
        /** The etag. */
        etag?: string;
        /** The date/time that the lease was last modified. */
        lastModified?: string;
    }
    
    export interface BlockListResult {
        CommittedBlocks: string[];
        UncommittedBlocks: string[];
    }
    
    export interface BlobProperties {
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
    
    export interface Lease {
        /** The lease id. */
        id?: string;
        /** The lease status. */
        status: string;
        /** The lease state. */
        state: string;
        /** The lease duration. */
        duration: string;
    }
    
    export interface Range {
        start: number;
        end: number;
    }
    
    export interface BlockList {
        CommittedBlocks?: string[];
        UncommittedBlocks?: string[];
        LatestBlocks?: string[];
    }
    
    // ***********************************************************
    // ** OPTIONS
    // ***********************************************************
    
    export interface LeaseOptions extends StorageServiceClient.ServiceClientOptions {
        /** The resource lease identifier. */
        leaseId?: string;
    }
    
    export interface AccessConditionsOptions extends LeaseOptions {
        accessConditions?: AccessCondition.AccessConditions;
    }
    
    export interface ListContainerOptions extends StorageServiceClient.ServiceClientOptions {
        /** Specifies the maximum number of containers to return per call to Azure storage. */
        maxResults?: number;
        /** 
         * Include this parameter to specify that the container's metadata be returned as part of the response body. (allowed values: '', 'metadata').
         * **Note** that all metadata names returned from the server will be converted to lower case by NodeJS itself as metadata is set via HTTP headers and HTTP header names are case insensitive.
         */
        include?: string;
        
        /** Filters the results to return only containers whose name begins with the specified prefix. */
        prefix?: string;
    }
    
    export interface ContainerOptions extends StorageServiceClient.ServiceClientOptions {
        /** The metadata key/value pairs. */
        metadata?: Object;
        /** Specifies whether data in the container may be accessed publicly and the level of access. */
        publicAccessLevel?: string;
    }
    
    export interface SetContainerAclOptions extends AccessConditionsOptions {
        /** Specifies whether data in the container may be accessed publicly and the level of access. */
        publicAccessLevel?: string;
    }
    
    export interface ListBlobOptions extends StorageServiceClient.ServiceClientOptions {
        /** Specifies the maximum number of directories to return per call to Azure ServiceClient. This does NOT affect list size returned by this function. (maximum: 5000). */
        maxResults?: number;
        /** Delimiter, i.e. '/', for specifying folder hierarchy. */
        delimiter?: string;
        /**
         * Specifies that the response should include one or more of the following subsets: '', 'metadata', 'snapshots', 'uncommittedblobs', 'copy').
         * Please find these values in BlobUtilities.BlobListingDetails. Multiple values can be added separated with a comma (,).
         * **Note** that all metadata names returned from the server will be converted to lower case by NodeJS itself as metadata is set via HTTP headers and HTTP header names are case insensitive.
         */
        include?: string;
    }
    
    export interface AcquireLeaseOptions extends StorageServiceClient.AccessConditionsOptions {
        /** The lease duration in seconds. A non-infinite lease can be between 15 and 60 seconds. Default is never to expire. */
        leaseDuration?: string | number;
        /** The proposed lease identifier. Must be a GUID. */
        proposedLeaseId?: string;
    } 
    
    export interface BreakLeaseOptions extends StorageServiceClient.AccessConditionsOptions {
        /**
         * The lease break period, between 0 and 60 seconds. If unspecified, a fixed-duration lease breaks after
         * the remaining lease period elapses, and an infinite lease breaks immediately.
         */
        leaseBreakPeriod?: number;
    }
    
    export interface BlobOptions extends AccessConditionsOptions {
        /** The snapshot identifier. */
        snapshotId?: string;
    }
    
    export interface DownloadBlobOptions extends BlobOptions {
        /** Return only the bytes of the blob in the specified range. */
        rangeStart?: number | string;
        /** Return only the bytes of the blob in the specified range. */
        rangeEnd?: number | string;
        /** When set to true, Calculate and send/validate content MD5 for transactions. */
        useTransactionalMD5?: boolean;
        /** When set to true, MD5 validation will be disabled when downloading blobs. */
        disableContentMD5Validation?: boolean;
    }
    
    export interface DownloadBlobToFileOptions extends DownloadBlobOptions {
        /**
         * Skip the size check to perform direct download.
         * Set the option to true for small blobs.
         * Parallel download and speed summary won't work with this option on.
         */
        skipSizeCheck?: boolean;
        /** The download tracker objects. */
        speedSummary?: SpeedSummary;
        /** Parallel operation thread count */
        parallelOperationThreadCount?: number;
    }
    
    export interface DeleteBlobOptions extends BlobOptions {
        /** The snapshot delete option. See azure.BlobUtilities.SnapshotDeleteOptions.*. */
        deleteSnapshots?: string;
    }
    
    export interface BlobSnapshotOptions extends BlobOptions {
        /** The metadata key/value pairs. */
        metadata?: Object;
    }
    
    export interface CopyBlobOptions extends StorageServiceClient.ServiceClientOptions {
        /** The source blob snapshot identifier. */
        snapshotId?: string;
        /** The target blob metadata key/value pairs. */
        metadata?: Object;
        /** The target blob lease identifier. */
        leaseId?: string;
        /** The source blob lease identifier. */
        sourceLeaseId?: string;
        /** The target access conditions. */
        accessConditions?: AccessCondition.AccessConditions;
        /** The source access conditions. */
        sourceAccessConditions?: AccessCondition.AccessConditions;
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
    
    export interface CreateBlobOptions extends AccessConditionsOptions {
        /** The metadata key/value pairs. */
        metadata?: Object;
        /** The content settings of the blob. */
        contentSettings?: BlobProperties;
        /** The blob's sequence number. */
        sequenceNumber?: string;
    }
    
    export interface UploadBlobOptions extends AccessConditionsOptions {
        /** The upload tracker objects. */
        speedSummary?: SpeedSummary;
        /** Parallel operation thread count. */
        parallelOperationThreadCount?: number;
        /** An MD5 hash of the blob content. This hash is used to verify the integrity of the blob during transport. */
        transactionalContentMD5?: string;
        /** The metadata key/value pairs. */
        metadata?: Object;
        /** The metadata key/value pairs. */
        storeBlobContentMD5?: boolean;
        /** 
         * Specifies whether the blob's ContentMD5 header should be set on uploads.
         * The default value is false for page blobs.
         * The default value is true for block blobs.
         */
        useTransactionalMD5?: boolean;
        /** The content settings of the blob. */
        contentSettings?: BlobProperties;
    }
    
    export interface UploadBlockBlobOptions extends UploadBlobOptions {
        /** The prefix to be used to generate the block id. */
        blockIdPrefix?: string;
    }
    
    export interface BlobTransactionOptions extends AccessConditionsOptions {
        /** Calculate and send/validate content MD5 for transactions. */
        useTransactionalMD5?: boolean;
        /** An optional hash value used to ensure transactional integrity for the page. */
        transactionalContentMD5?: string;
    }
    
    export interface ListPageRangesOptions extends BlobOptions {
        /** The range start. */
        rangeStart?: number;
        /** The range end. */
        rangeEnd?: number;
    }
    
    export interface UploadBlockBlobFromTextOptions extends CreateBlobOptions {
        /** Calculate and send/validate content MD5 for transactions. */
        useTransactionalMD5?: boolean;
        /** Specifies whether the blob's ContentMD5 header should be set on uploads. The default value is true for block blobs. */
        storeBlobContentMD5?: boolean;
        /** An optional hash value used to ensure transactional integrity for the page. */
        transactionalContentMD5?: string;
    }
    
    export interface UploadAppendBlobOptions extends AccessConditionsOptions {
        /** The upload tracker objects. */
        speedSummary?: SpeedSummary;
        /** Specifies whether to absorb the conditional error on retry. */
        absorbConditionalErrorsOnRetry?: boolean;
        /** The metadata key/value pairs. */
        metadata?: Object;
        /** Specifies whether the blob's ContentMD5 header should be set on uploads. */
        storeBlobContentMD5?: boolean;
        /** Calculate and send/validate content MD5 for transactions. */
        useTransactionalMD5?: boolean;
        /** The content settings of the blob. */
        contentSettings?: BlobProperties;
    }
    
    export interface AppendBlockBlobOptions extends AccessConditionsOptions {
        /** Specifies whether to absorb the conditional error on retry. */
        absorbConditionalErrorsOnRetry?: boolean;
        /** The max length in bytes allowed for the append blob to grow to. */
        maxBlobSize?: number;
        /** The number indicating the byte offset to check for. The append will succeed only if the end position of the blob is equal to this number. */
        appendPosition?: number;
        /** An MD5 hash of the block content. This hash is used to verify the integrity of the block during transport. */
        transactionalContentMD5?: string;
    }
}

export = BlobService;