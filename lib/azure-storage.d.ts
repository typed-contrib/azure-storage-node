// Type definitions for azure-storage-node v0.10.0
// Project: https://github.com/Azure/azure-storage-node
// Definitions by: Maxime LUCE <https://github.com/SomaticIT/>
// Definitions: https://github.com/typed-contrib/azure-storage-node

import { StorageServiceClient, date } from "./common/common";

/**
* Creates a connection string that can be used to create a service which runs on the storage emulator. The emulator must be downloaded separately.
*
* @param {string}   [proxyUri]                  The proxyUri. By default, http://127.0.0.1
* @return {string}                              A connection string representing the development storage credentials.
*/
export function generateDevelopmentStorageCredentials(proxyUri?: string): string;

// ***********************************************************
// ** TABLE SERVICE
// ***********************************************************

export import TableService = require("./services/table/tableservice");
export import TableBatch = require("./services/table/tablebatch");
export import TableQuery = require("./services/table/tablequery");
export import TableUtilities = require("./services/table/tableutilities");

/**
* Creates a new TableService object using AZURE_STORAGE_CONNECTION_STRING or the AZURE_STORAGE_ACCOUNT and AZURE_STORAGE_ACCESS_KEY environment variables.
*
* @return {TableService}                              A new TableService object.
*/
export function createTableService(): TableService;
/**
* Creates a new TableService object using given connection string.
*
* @param {string} [connectionString]                  The connection string.
* @return {TableService}                              A new TableService object.
*/
export function createTableService(connectionString: string): TableService;
/**
* Creates a new TableService object using storage account and storage access key.
*
* @param {string} [storageAccount]                    The storage account.
* @param {string} [storageAccessKey]                  The storage access key.
* @param {Host} [host]                                The host address. To define primary only, pass a string. 
*                                                     Otherwise 'host.primaryHost' defines the primary host and 'host.secondaryHost' defines the secondary host.
* @return {TableService}                              A new TableService object.
*/
export function createTableService(storageAccount: string, storageAccessKey: string, host?: StorageServiceClient.HostConfiguration): TableService;

/**
* Creates a new TableService object using the host Uri and the SAS credentials provided.
* 
* @param {Host} host                                  The host address. To define primary only, pass a string. 
*                                                     Otherwise 'host.primaryHost' defines the primary host and 'host.secondaryHost' defines the secondary host.
* @param {string} sasToken                            The Shared Access Signature token.
* @return {TableService}                              A new TableService object with the SAS credentials.
*/
export function createTableServiceWithSas(hostUri: StorageServiceClient.HostConfiguration, sasToken: string): TableService;

// ***********************************************************
// ** BLOB SERVICE
// ***********************************************************

export import BlobService = require("./services/blob/blobservice");
export import BlobUtilities = require("./services/blob/blobutilities");

/**
* Creates a new BlobService object using AZURE_STORAGE_CONNECTION_STRING or the AZURE_STORAGE_ACCOUNT and AZURE_STORAGE_ACCESS_KEY environment variables.
*
* @return {BlobService}                               A new BlobService object.
*/
export function createBlobService(): BlobService;
/**
* Creates a new BlobService object using given connection string.
*
* @param {string} [connectionString]                  The connection string.
* @return {BlobService}                               A new BlobService object.
*/
export function createBlobService(connectionString: string): BlobService;
/**
* Creates a new BlobService object using storage account and storage access key.
*
* @param {string} [storageAccount]                    The storage account.
* @param {string} [storageAccessKey]                  The storage access key.
* @param {Host} [host]                                The host address. To define primary only, pass a string. 
*                                                     Otherwise 'host.primaryHost' defines the primary host and 'host.secondaryHost' defines the secondary host.
* @return {BlobService}                               A new BlobService object.
*/
export function createBlobService(storageAccount: string, storageAccessKey: string, host?: StorageServiceClient.HostConfiguration): BlobService;

/**
* Creates a new BlobService object using the host Uri and the SAS credentials provided.
* 
* @param {Host} host                                  The host address. To define primary only, pass a string. 
*                                                     Otherwise 'host.primaryHost' defines the primary host and 'host.secondaryHost' defines the secondary host.
* @param {string} sasToken                            The Shared Access Signature token.
* @return {BlobService}                               A new BlobService object with the SAS credentials.
*/
export function createBlobServiceWithSas(hostUri: StorageServiceClient.HostConfiguration, sasToken: string): BlobService;

/**
* Creates a new BlobService object using the host uri and anonymous access.
* 
* @param {Host} host                                  The host address. To define primary only, pass a string. 
*                                                     Otherwise 'host.primaryHost' defines the primary host and 'host.secondaryHost' defines the secondary host.
* @return {BlobService}                               A new BlobService object with the anonymous credentials.
*/
export function createBlobServiceAnonymous(host: StorageServiceClient.HostConfiguration): BlobService;

// ***********************************************************
// ** FILE SERVICE
// ***********************************************************

export import FileService = require("./services/file/fileservice");
export import FileUtilities = require("./services/file/fileutilities");

/**
* Creates a new FileService object using AZURE_STORAGE_CONNECTION_STRING or the AZURE_STORAGE_ACCOUNT and AZURE_STORAGE_ACCESS_KEY environment variables.
*
* @return {FileService}                               A new FileService object.
*/
export function createFileService(): FileService;
/**
* Creates a new FileService object using given connection string.
*
* @param {string} [connectionString]                  The connection string.
* @return {FileService}                               A new FileService object.
*/
export function createFileService(connectionString: string): FileService;
/**
* Creates a new FileService object using storage account and storage access key.
*
* @param {string} [storageAccount]                    The storage account.
* @param {string} [storageAccessKey]                  The storage access key.
* @param {Host} [host]                                The host address. To define primary only, pass a string. 
*                                                     Otherwise 'host.primaryHost' defines the primary host and 'host.secondaryHost' defines the secondary host.
* @return {FileService}                               A new FileService object.
*/
export function createFileService(storageAccount: string, storageAccessKey: string, host?: StorageServiceClient.HostConfiguration): FileService;

/**
* Creates a new FileService object using the host Uri and the SAS credentials provided.
* 
* @param {Host} host                                  The host address. To define primary only, pass a string. 
*                                                     Otherwise 'host.primaryHost' defines the primary host and 'host.secondaryHost' defines the secondary host.
* @param {string} sasToken                            The Shared Access Signature token.
* @return {FileService}                               A new FileService object with the SAS credentials.
*/
export function createFileServiceWithSas(hostUri: StorageServiceClient.HostConfiguration, sasToken: string): FileService;

// ***********************************************************
// ** QUEUE SERVICE
// ***********************************************************

export import QueueService = require("./services/queue/queueservice");
export import QueueUtilities = require("./services/queue/queueutilities");

/**
* Creates a new QueueService object using AZURE_STORAGE_CONNECTION_STRING or the AZURE_STORAGE_ACCOUNT and AZURE_STORAGE_ACCESS_KEY environment variables.
*
* @return {QueueService}                               A new QueueService object.
*/
export function createQueueService(): QueueService;
/**
* Creates a new QueueService object using given connection string.
*
* @param {string} [connectionString]                  The connection string.
* @return {QueueService}                               A new QueueService object.
*/
export function createQueueService(connectionString: string): QueueService;
/**
* Creates a new QueueService object using storage account and storage access key.
*
* @param {string} [storageAccount]                    The storage account.
* @param {string} [storageAccessKey]                  The storage access key.
* @param {Host} [host]                                The host address. To define primary only, pass a string. 
*                                                     Otherwise 'host.primaryHost' defines the primary host and 'host.secondaryHost' defines the secondary host.
* @return {QueueService}                               A new QueueService object.
*/
export function createQueueService(storageAccount: string, storageAccessKey: string, host?: StorageServiceClient.HostConfiguration): QueueService;

/**
* Creates a new QueueService object using the host Uri and the SAS credentials provided.
* 
* @param {Host} host                                  The host address. To define primary only, pass a string. 
*                                                     Otherwise 'host.primaryHost' defines the primary host and 'host.secondaryHost' defines the secondary host.
* @param {string} sasToken                            The Shared Access Signature token.
* @return {QueueService}                               A new QueueService object with the SAS credentials.
*/
export function createQueueServiceWithSas(hostUri: StorageServiceClient.HostConfiguration, sasToken: string): QueueService;

// ***********************************************************
// ** COMMON EXPORTS
// ***********************************************************

export interface AccountSharedAccessPolicy {
    AccessPolicy: AccountAccessPolicy;
}

export interface AccountAccessPolicy extends StorageServiceClient.AccessPolicy {
    /**
     * The services (blob, file, queue, table) for a shared access signature associated with this shared access policy.
     * Refer to `Constants.AccountSasConstants.Services`.
     */
    Services: string;
    
    /** 
     * The resource type for a shared access signature associated with this shared access policy.
     * Refer to `Constants.AccountSasConstants.ResourceTypes`.
     */
    ResourceTypes: string;
}

/**
* Generates an account shared access signature token
* 
* @param {string}                     [storageAccountOrConnectionString]                The storage account or the connection string.
* @param {string}                     [storageAccessKey]                                The storage access key.
* @param {object}                     sharedAccessPolicy                                The shared access policy.
*/
export function generateAccountSharedAccessSignature(storageAccountOrConnectionString: string, storageAccessKey: string, sharedAccessAccountPolicy: AccountSharedAccessPolicy): string;

export {
    Constants,
    StorageUtilities,
    AccessCondition,
    
    SR,
    StorageServiceClient,
    Logger,
    WebResource,
    validate as Validate,
    date,
    
    LinearRetryPolicyFilter,
    ExponentialRetryPolicyFilter,
    RetryPolicyFilter
} from "./common/common";

/*
 * TYPE REEXPORT
 */
export { TableEntity, EntityProperty } from "./services/table/tableservice";
export type SignedIdentifiers = StorageServiceClient.SignedIdentifiers;