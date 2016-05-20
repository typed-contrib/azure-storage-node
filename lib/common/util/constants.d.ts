// Type definitions for azure-storage-node v0.10.0
// Project: https://github.com/Azure/azure-storage-node
// Definitions by: Maxime LUCE <https://github.com/SomaticIT/>
// Definitions: https://github.com/typed-contrib/azure-storage-node

/*
* Specifies the value to use for UserAgent header.
* @const
* @default "Azure-Storage"
*/
export const USER_AGENT_PRODUCT_NAME: string;

/*
* Specifies the value to use for UserAgent header.
* @const
* @default "0.10.0"
*/
export const USER_AGENT_PRODUCT_VERSION: string;

/**
* The number of default concurrent requests for parallel operation.
*
* @const
* @type {string}
*/
export const DEFAULT_PARALLEL_OPERATION_THREAD_COUNT: number;

/**
* Constant representing a kilobyte (Non-SI version).
*
* @const
* @type {string}
*/
export const KB: number;

/**
* Constant representing a megabyte (Non-SI version).
*
* @const
* @type {string}
*/
export const MB: number;

/**
* Constant representing a gigabyte (Non-SI version).
*
* @const
* @type {string}
*/
export const GB: number;

/**
* Specifies HTTP.
*
* @const
* @type {string}
* @default "http"
*/
export const HTTP: string;

/**
* Specifies HTTPS.
*
* @const
* @type {string}
* @default "https"
*/
export const HTTPS: string;

/**
* Default HTTP port.
*
* @const
* @type {int}
*/
export const DEFAULT_HTTP_PORT: number;

/**
* Default HTTPS port.
*
* @const
* @type {int}
*/
export const DEFAULT_HTTPS_PORT: number;

/**
* Marker for atom metadata.
*
* @const
* @type {string}
* @default "$"
*/
export const XML_METADATA_MARKER: string;

/**
* Marker for atom value.
*
* @const
* @type {string}
* @default "_"
*/
export const XML_VALUE_MARKER: string;

/**
* Defines the service types indicators.
* 
* @const
* @enum
*/
export const ServiceType: {
    /**
    * @const
    * @default "blob"
    */
    Blob: string;
    /**
    * @const
    * @default "queue"
    */
    Queue: string;
    /**
    * @const
    * @default "table"
    */
    Table: string;
    /**
    * @const
    * @default "file"
    */
    File: string;
};

/**
* Specifies the location used to indicate which location the operation can be performed against.
*
* @const
* @enum
*/
export const RequestLocationMode: {
    PRIMARY_ONLY: number;
    SECONDARY_ONLY: number;
    PRIMARY_OR_SECONDARY: number;
};

/**
* Represents a storage service location.
*
* @const
* @enum
*/
export const StorageLocation: {
    PRIMARY: number;
    SECONDARY: number;
};

export const AccountSasConstants: {
    /**
    * Permission types
    *
    * @const
    * @enum {string}
    */
    Permissions: {
        /**
        * @const
        * @default "r"
        */
        READ: string;
        /**
        * @const
        * @default "a"
        */
        ADD: string;
        /**
        * @const
        * @default "c"
        */
        CREATE: string;
        /**
        * @const
        * @default "u"
        */
        UPDATE: string;
        /**
        * @const
        * @default "p"
        */
        PROCESS: string;
        /**
        * @const
        * @default "w"
        */
        WRITE: string;
        /**
        * @const
        * @default "d"
        */
        DELETE: string;
        /**
        * @const
        * @default "l"
        */
        LIST: string;
    };

    /**
    * Services types
    *
    * @const
    * @enum {string}
    */
    Services: {
        /**
        * @const
        * @default "b"
        */
        BLOB: string;
        /**
        * @const
        * @default "f"
        */
        FILE: string;
        /**
        * @const
        * @default "q"
        */
        QUEUE: string;
        /**
        * @const
        * @default "t"
        */
        TABLE: string;
    };

    /**
    * Resources types
    *
    * @const
    * @enum {string}
    */
    Resources: {
        /**
        * @const
        * @default "s"
        */
        SERVICE: string;
        /**
        * @const
        * @default "c"
        */
        CONTAINER: string;
        /**
        * @const
        * @default "o"
        */
        OBJECT: string;
    };

    Protocols: {
        /**
        * @const
        * @default "https"
        */
        HTTPSONLY: string;
        /**
        * @const
        * @default "https;http"
        */
        HTTPSORHTTP: string;
    };
};

/**
* Defines constants for use with shared access policies.
*/
export const AclConstants: {
    /**
    * XML element for an access policy.
    *
    * @const
    * @type {string}
    * @default "AccessPolicy"
    */
    ACCESS_POLICY: string;

    /**
    * XML element for the end time of an access policy.
    *
    * @const
    * @type {string}
    * @default "Expiry"
    */
    EXPIRY: string;

    /**
    * XML attribute for IDs.
    *
    * @const
    * @type {string}
    * @default "Id"
    */
    ID: string;

    /**
    * XML element for the permission of an access policy.
    *
    * @const
    * @type {string}
    * @default "Permission"
    */
    PERMISSION: string;

    /**
    * XML element for a signed identifier.
    *
    * @const
    * @type {string}
    * @default "SignedIdentifier"
    */
    SIGNED_IDENTIFIER_ELEMENT: string;

    /**
    * XML element for signed identifiers.
    *
    * @const
    * @type {string}
    * @default "SignedIdentifiers"
    */
    SIGNED_IDENTIFIERS_ELEMENT: string;

    /**
    * XML element for the start time of an access policy.
    *
    * @const
    * @type {string}
    * @default "Start"
    */
    START: string;
};

/**
* Defines constants for use with service properties.
*/
export const ServicePropertiesConstants: {
    /**
    * XML element for storage service properties.
    *
    * @const
    * @type {string}
    * @default "StorageServiceProperties"
    */
    STORAGE_SERVICE_PROPERTIES_ELEMENT: string;

    /**
    * Default analytics version to send for logging; hour metrics and minute metrics.
    *
    * @const
    * @type {string}
    * @default "1.0"
    */
    DEFAULT_ANALYTICS_VERSION: string;

    /**
    * XML element for logging.
    *
    * @const
    * @type {string}
    * @default "Logging"
    */
    LOGGING_ELEMENT: string;

    /**
    * XML element for version.
    *
    * @const
    * @type {string}
    * @default "Version"
    */
    VERSION_ELEMENT: string;

    /**
    * XML element for delete.
    *
    * @const
    * @type {string}
    * @default "Delete"
    */
    DELETE_ELEMENT: string;

    /**
    * XML element for read.
    *
    * @const
    * @type {string}
    * @default "Read"
    */
    READ_ELEMENT: string;

    /**
    * XML element for write.
    *
    * @const
    * @type {string}
    * @default "Write"
    */
    WRITE_ELEMENT: string;

    /**
    * XML element for retention policy.
    *
    * @const
    * @type {string}
    * @default "RetentionPolicy"
    */
    RETENTION_POLICY_ELEMENT: string;

    /**
    * XML element for enabled.
    *
    * @const
    * @type {string}
    * @default "Enabled"
    */
    ENABLED_ELEMENT: string;

    /**
    * XML element for days.
    *
    * @const
    * @type {string}
    * @default "Days"
    */
    DAYS_ELEMENT: string;

    /**
    * XML element for HourMetrics.
    *
    * @const
    * @type {string}
    * @default "HourMetrics"
    */
    HOUR_METRICS_ELEMENT: string;

    /**
    * XML element for MinuteMetrics.
    *
    * @const
    * @type {string}
    * @default "MinuteMetrics"
    */
    MINUTE_METRICS_ELEMENT: string;

    /**
    * XML element for Cors.
    *
    * @const
    * @type {string}
    * @default "Cors"
    */
    CORS_ELEMENT: string;

    /**
    * XML element for CorsRule.
    *
    * @const
    * @type {string}
    * @default "CorsRule"
    */
    CORS_RULE_ELEMENT: string;

    /**
    * XML element for AllowedOrigins.
    *
    * @const
    * @type {string}
    * @default "AllowedOrigins"
    */
    ALLOWED_ORIGINS_ELEMENT: string;

    /**
    * XML element for AllowedMethods.
    *
    * @const
    * @type {string}
    * @default "AllowedMethods"
    */
    ALLOWED_METHODS_ELEMENT: string;

    /**
    * XML element for MaxAgeInSeconds.
    *
    * @const
    * @type {string}
    * @default "MaxAgeInSeconds"
    */
    MAX_AGE_IN_SECONDS_ELEMENT: string;

    /**
    * XML element for ExposedHeaders.
    *
    * @const
    * @type {string}
    * @default "ExposedHeaders"
    */
    EXPOSED_HEADERS_ELEMENT: string;

    /**
    * XML element for AllowedHeaders.
    *
    * @const
    * @type {string}
    * @default "AllowedHeaders"
    */
    ALLOWED_HEADERS_ELEMENT: string;

    /**
    * XML element for IncludeAPIs.
    *
    * @const
    * @type {string}
    * @default "IncludeAPIs"
    */
    INCLUDE_APIS_ELEMENT: string;

    /**
    * XML element for DefaultServiceVersion.
    *
    * @const
    * @type {string}
    * @default "DefaultServiceVersion"
    */
    DEFAULT_SERVICE_VERSION_ELEMENT: string;
};

/**
* Defines constants for use with blob operations.
*/
export const BlobConstants: {
    /**
    * XML element for the latest.
    *
    * @const
    * @type {string}
    * @default "Latest"
    */
    LATEST_ELEMENT: string;

    /**
    * XML element for uncommitted blocks.
    *
    * @const
    * @type {string}
    * @default "Uncommitted"
    */
    UNCOMMITTED_ELEMENT: string;

    /**
    * XML element for a block list.
    *
    * @const
    * @type {string}
    * @default "BlockList"
    */
    BLOCK_LIST_ELEMENT: string;

    /**
    * XML element for committed blocks.
    *
    * @const
    * @type {string}
    * @default "Committed"
    */
    COMMITTED_ELEMENT: string;

    /**
    * The default write page size; in bytes; used by blob streams.
    *
    * @const
    * @type {int}
    */
    DEFAULT_WRITE_PAGE_SIZE_IN_BYTES: number;

    /**
    * The minimum write page size; in bytes; used by blob streams.
    *
    * @const
    * @type {int}
    */
    MIN_WRITE_PAGE_SIZE_IN_BYTES: number;

    /**
    * The default maximum size; in bytes; of a blob before it must be separated into blocks.
    *
    * @const
    * @type {int}
    */
    DEFAULT_SINGLE_BLOB_PUT_THRESHOLD_IN_BYTES: number;

    /**
    * The default write block size; in bytes; used by blob streams.
    *
    * @const
    * @type {int}
    */
    DEFAULT_WRITE_BLOCK_SIZE_IN_BYTES: number;

    /**
    * The maximum size of a single block.
    *
    * @const
    * @type {int}
    */
    MAX_BLOCK_SIZE: number;

    /**
    * The maximum size; in bytes; of a blob before it must be separated into blocks.
    *
    * @const
    * @type {int}
    */
    MAX_SINGLE_UPLOAD_BLOB_SIZE_IN_BYTES: number;

    /**
    * The maximum range get size when requesting for a contentMD5
    */
    MAX_RANGE_GET_SIZE_WITH_MD5: number;

    /**
    * The maximum page range size for a page update operation.
    */
    MAX_UPDATE_PAGE_SIZE: number;

    /**
    * The maximum buffer size for writing a stream buffer.
    */
    MAX_QUEUED_WRITE_DISK_BUFFER_SIZE: number;

    /**
    * Max size for single get page range. The max value should be 150MB
    * http://blogs.msdn.com/b/windowsazurestorage/archive/2012/03/26/getting-the-page-ranges-of-a-large-page-blob-in-segments.aspx
    */
    MAX_SINGLE_GET_PAGE_RANGE_SIZE: number;

    /**
    * The size of a page; in bytes; in a page blob.
    */
    PAGE_SIZE: number;

    /**
    * Resource types.
    *
    * @const
    * @enum {string}
    */
    ResourceTypes: {
        /**
        * @const
        * @default "c"
        */
        CONTAINER: string;
        /**
        * @const
        * @default "b"
        */
        BLOB: string;
    };

    /**
    * List blob types.
    *
    * @const
    * @enum {string}
    */
    ListBlobTypes: {
        /**
        * @const
        * @default "b"
        */
        Blob: string;
        /**
        * @const
        * @default "d"
        */
        Directory: string;
    };

    /**
    * Put page write options
    *
    * @const
    * @enum {string}
    */
    PageWriteOptions: {
        /**
        * @const
        * @default "update"
        */
        UPDATE: string;
        /**
        * @const
        * @default "clear"
        */
        CLEAR: string;
    };

    /**
    * Blob types
    *
    * @const
    * @enum {string}
    */
    BlobTypes: {
        /**
        * @const
        * @default "BlockBlob"
        */
        BLOCK: string;
        /**
        * @const
        * @default "PageBlob"
        */
        PAGE: string;
        /**
        * @const
        * @default "AppendBlob"
        */
        APPEND: string;
    };

    /**
    * Blob lease constants
    *
    * @const
    * @enum {string}
    */
    LeaseOperation: {
        /**
        * @const
        * @default "acquire"
        */
        ACQUIRE: string;
        /**
        * @const
        * @default "renew"
        */
        RENEW: string;
        /**
        * @const
        * @default "change"
        */
        CHANGE: string;
        /**
        * @const
        * @default "release"
        */
        RELEASE: string;
        /**
        * @const
        * @default "break"
        */
        BREAK: string;
    }
};

/**
* Defines constants for use with file operations.
*/
export const FileConstants: {
    /**
    * The default write size; in bytes; used by file streams.
    *
    * @const
    * @type {string}
    */
    DEFAULT_WRITE_SIZE_IN_BYTES: number;

    /**
    * The maximum range size when requesting for a contentMD5.
    */
    MAX_RANGE_GET_SIZE_WITH_MD5: number;

    /**
    * The maximum range size for a file update operation.
    */
    MAX_UPDATE_FILE_SIZE: number;

    /**
    * The default minimum size; in bytes; of a file when it must be separated into ranges.
    *
    * @const
    * @type {int}
    */
    DEFAULT_SINGLE_FILE_GET_THRESHOLD_IN_BYTES: number;

    /**
    * The minimum write file size; in bytes; used by file streams.
    *
    * @const
    * @type {int}
    */
    MIN_WRITE_FILE_SIZE_IN_BYTES: number;

    /**
    * Put range write options
    *
    * @const
    * @enum {string}
    */
    RangeWriteOptions: {
        /**
        * @const
        * @default "update"
        */
        UPDATE: string;
        /**
        * @const
        * @default "clear"
        */
        CLEAR: string;
    };

    /**
    * Resource types.
    *
    * @const
    * @enum {string}
    */
    ResourceTypes: {
        /**
        * @const
        * @default "s"
        */
        SHARE: string;
        /**
        * @const
        * @default "f"
        */
        FILE: string;
    }
};

/**
* Defines constants for use with queue storage.
*
* @const
* @type {string}
*/
export const QueueConstants: {
    /**
    * XML element for QueueMessage.
    *
    * @const
    * @type {string}
    * @default "QueueMessage"
    */
    QUEUE_MESSAGE_ELEMENT: string;

    /**
    * XML element for MessageText.
    *
    * @const
    * @type {string}
    * @default "MessageText"
    */
    MESSAGE_TEXT_ELEMENT: string;
};

/**
* Defines constants for use with table storage.
*
* @const
* @type {string}
*/
export const TableConstants: {
    /**
    * The changeset response delimiter.
    *
    * @const
    * @type {string}
    * @default "--changesetresponse_"
    */
    CHANGESET_DELIMITER: string;

    /**
    * The batch response delimiter.
    *
    * @const
    * @type {string}
    * @default "--batchresponse_"
    */
    BATCH_DELIMITER: string;

    /**
    * The next continuation row key token.
    *
    * @const
    * @type {string}
    * @default "x-ms-continuation-nextrowkey"
    */
    CONTINUATION_NEXT_ROW_KEY: string;

    /**
    * The next continuation partition key token.
    *
    * @const
    * @type {string}
    * @default "x-ms-continuation-nextpartitionkey"
    */
    CONTINUATION_NEXT_PARTITION_KEY: string;

    /**
    * The next continuation table name token.
    *
    * @const
    * @type {string}
    * @default "x-ms-continuation-nexttablename"
    */
    CONTINUATION_NEXT_TABLE_NAME: string;

    /**
    * The next row key query string argument.
    *
    * @const
    * @type {string}
    * @default "NextRowKey"
    */
    NEXT_ROW_KEY: string;

    /**
* The next partition key query string argument.
*
* @const
* @type {string}
    * @default "NextPartitionKey"
    */
    NEXT_PARTITION_KEY: string;

    /**
    * The next table name query string argument.
    *
    * @const
    * @type {string}
    * @default "NextTableName"
    */
    NEXT_TABLE_NAME: string;

    /** 
    * Prefix of the odata properties returned in a JSON query
    * @default "odata."
    */
    ODATA_PREFIX: string;

    /**
    * Constant representing the string following a type annotation in a JSON table query
    * @default "@odata.type"
    */
    ODATA_TYPE_SUFFIX: string;

    /**
    * Constant representing the property where the odata metadata elements are stored.
    *
    * @const
    * @type {string}
    * @default ".metadata"
    */
    ODATA_METADATA_MARKER: string;

    /**
    * Constant representing the value for an entity property.
    * @default "_"
    */
    ODATA_VALUE_MARKER: string;

    /** 
    * Constant representing the type for an entity property.
    * @default "$"
    */
    ODATA_TYPE_MARKER: string;

    /**
    * The value to set the maximum data service version header.
    * @const
    * @type {string}
    * @default "3.0;NetFx"
    */
    DEFAULT_DATA_SERVICE_VERSION: string;

    /**
    * The name of the property that stores the table name.
    *
    * @const
    * @type {string}
    * @default "TableName"
    */
    TABLE_NAME: string;

    /**
    * The name of the special table used to store tables.
    *
    * @const
    * @type {string}
    * @default "Tables"
    */
    TABLE_SERVICE_TABLE_NAME: string;

    /**
    * Operations
    *
    * @const
    * @enum {string}
    */
    Operations: {
        /**
        * @const
        * @default "RETRIEVE"
        */
        RETRIEVE: string;
        /**
        * @const
        * @default "INSERT"
        */
        INSERT: string;
        /**
        * @const
        * @default "REPLACE"
        */
        REPLACE: string;
        /**
        * @const
        * @default "MERGE"
        */
        MERGE: string;
        /**
        * @const
        * @default "DELETE"
        */
        DELETE: string;
        /**
        * @const
        * @default "INSERT_OR_REPLACE"
        */
        INSERT_OR_REPLACE: string;
        /**
        * @const
        * @default "INSERT_OR_MERGE"
        */
        INSERT_OR_MERGE: string;
    }
};

/**
* Defines constants for use with HTTP headers.
*/
export const HeaderConstants: {
    /**
    * The accept ranges header.
    *
    * @const
    * @type {string}
    * @default "accept_ranges"
    */
    ACCEPT_RANGES: string;

    /**
    * The content transfer encoding header.
    *
    * @const
    * @type {string}
    * @default "content-transfer-encoding"
    */
    CONTENT_TRANSFER_ENCODING: string;

    /**
    * The transfer encoding header.
    *
    * @const
    * @type {string}
    * @default "transfer-encoding"
    */
    TRANSFER_ENCODING: string;

    /**
    * The server header.
    *
    * @const
    * @type {string}
    * @default "server"
    */
    SERVER: string;

    /**
    * The location header.
    *
    * @const
    * @type {string}
    * @default "location"
    */
    LOCATION: string;

    /**
    * The Last-Modified header
    *
    * @const
    * @type {string}
    * @default "Last-Modified"
    */
    LAST_MODIFIED: string;

    /**
    * The data service version.
    *
    * @const
    * @type {string}
    * @default "dataserviceversion"
    */
    DATA_SERVICE_VERSION: string;

    /**
    * The maximum data service version.
    *
    * @const
    * @type {string}
    * @default "maxdataserviceversion"
    */
    MAX_DATA_SERVICE_VERSION: string;

    /**
    * The master Windows Azure Storage header prefix.
    *
    * @const
    * @type {string}
    * @default "x-ms-"
    */
    PREFIX_FOR_STORAGE: string;

    /**
    * The client request Id header.
    *
    * @const
    * @type {string}
    * @default "x-ms-client-request-id"
    */
    CLIENT_REQUEST_ID: string;

    /**
    * The header that specifies the approximate message count of a queue.
    *
    * @const
    * @type {string}
    * @default "x-ms-approximate-messages-count"
    */
    APPROXIMATE_MESSAGES_COUNT: string;

    /**
    * The Authorization header.
    *
    * @const
    * @type {string}
    * @default "authorization"
    */
    AUTHORIZATION: string;

    /**
    * The header that specifies public access to blobs.
    *
    * @const
    * @type {string}
    * @default "x-ms-blob-public-access"
    */
    BLOB_PUBLIC_ACCESS: string;

    /**
    * The header for the blob type.
    *
    * @const
    * @type {string}
    * @default "x-ms-blob-type"
    */
    BLOB_TYPE: string;

    /**
    * The header for the type.
    *
    * @const
    * @type {string}
    * @default "x-ms-type"
    */
    TYPE: string;

    /**
    * Specifies the block blob type.
    *
    * @const
    * @type {string}
    * @default "blockblob"
    */
    BLOCK_BLOB: string;

    /**
    * The CacheControl header.
    *
    * @const
    * @type {string}
    * @default "cache-control"
    */
    CACHE_CONTROL: string;

    /**
    * The header that specifies blob caching control.
    *
    * @const
    * @type {string}
    * @default "x-ms-blob-cache-control"
    */
    BLOB_CACHE_CONTROL: string;

    /**
    * The header that specifies caching control.
    *
    * @const
    * @type {string}
    * @default "x-ms-cache-control"
    */
    FILE_CACHE_CONTROL: string;

    /**
    * The copy status.
    *
    * @const
    * @type {string}
    * @default "x-ms-copy-status"
    */
    COPY_STATUS: string;

    /**
    * The copy completion time
    *
    * @const
    * @type {string}
    * @default "x-ms-copy-completion-time"
    */
    COPY_COMPLETION_TIME: string;

    /**
    * The copy status message
    *
    * @const
    * @type {string}
    * @default "x-ms-copy-status-description"
    */
    COPY_STATUS_DESCRIPTION: string;

    /**
    * The copy identifier.
    *
    * @const
    * @type {string}
    * @default "x-ms-copy-id"
    */
    COPY_ID: string;

    /**
    * Progress of any copy operation
    *
    * @const
    * @type {string}
    * @default "x-ms-copy-progress"
    */
    COPY_PROGRESS: string;

    /**
    * The copy action.
    *
    * @const
    * @type {string}
    * @default "x-ms-copy-action"
    */
    COPY_ACTION: string;

    /**
    * The ContentID header.
    *
    * @const
    * @type {string}
    * @default "content-id"
    */
    CONTENT_ID: string;

    /**
    * The ContentEncoding header.
    *
    * @const
    * @type {string}
    * @default "content-encoding"
    */
    CONTENT_ENCODING: string;

    /**
    * The header that specifies blob content encoding.
    *
    * @const
    * @type {string}
    * @default "x-ms-blob-content-encoding"
    */
    BLOB_CONTENT_ENCODING: string;

    /**
    * The header that specifies content encoding.
    *
    * @const
    * @type {string}
    * @default "x-ms-content-encoding"
    */
    FILE_CONTENT_ENCODING: string;

    /**
    * The ContentLangauge header.
    *
    * @const
    * @type {string}
    * @default "content-language"
    */
    CONTENT_LANGUAGE: string;

    /**
    * The header that specifies blob content language.
    *
    * @const
    * @type {string}
    * @default "x-ms-blob-content-language"
    */
    BLOB_CONTENT_LANGUAGE: string;

    /**
    * The header that specifies content language.
    *
    * @const
    * @type {string}
    * @default "x-ms-content-language"
    */
    FILE_CONTENT_LANGUAGE: string;

    /**
    * The ContentLength header.
    *
    * @const
    * @type {string}
    * @default "content-length"
    */
    CONTENT_LENGTH: string;

    /**
    * The header that specifies blob content length.
    *
    * @const
    * @type {string}
    * @default "x-ms-blob-content-length"
    */
    BLOB_CONTENT_LENGTH: string;

    /**
    * The header that specifies content length.
    *
    * @const
    * @type {string}
    * @default "x-ms-content-length"
    */
    FILE_CONTENT_LENGTH: string;

    /**
    * The ContentDisposition header.
    * @const
    * @type {string}
    * @default "content-disposition"
    */
    CONTENT_DISPOSITION: string;

    /**
    * The header that specifies blob content disposition.
    *
    * @const
    * @type {string}
    * @default "x-ms-blob-content-disposition"
    */
    BLOB_CONTENT_DISPOSITION: string;

    /**
    * The header that specifies content disposition.
    *
    * @const
    * @type {string}
    * @default "x-ms-content-disposition"
    */
    FILE_CONTENT_DISPOSITION: string;

    /**
    * The ContentMD5 header.
    *
    * @const
    * @type {string}
    */
    CONTENT_MD5: "content-md5";

    /**
    * The header that specifies blob content MD5.
    *
    * @const
    * @type {string}
    */
    BLOB_CONTENT_MD5: "x-ms-blob-content-md5";

    /**
    * The header that specifies content MD5.
    *
    * @const
    * @type {string}
    */
    FILE_CONTENT_MD5: "x-ms-content-md5";

    /**
    * The ContentRange header.
    *
    * @const
    * @type {string}
    * @default "cache-range"
    */
    CONTENT_RANGE: string;

    /**
    * The ContentType header.
    *
    * @const
    * @type {string}
    * @default "content-type"
    */
    CONTENT_TYPE: string;

    /**
    * The header that specifies blob content type.
    *
    * @const
    * @type {string}
    * @default "x-ms-blob-content-type"
    */
    BLOB_CONTENT_TYPE: string;

    /**
    * The header that specifies content type.
    *
    * @const
    * @type {string}
    * @default "x-ms-content-type"
    */
    FILE_CONTENT_TYPE: string;

    /**
    * The header for copy source.
    *
    * @const
    * @type {string}
    * @default "x-ms-copy-source"
    */
    COPY_SOURCE: string;

    /**
    * The header that specifies the date.
    *
    * @const
    * @type {string}
    * @default "date"
    */
    DATE: string;

    /**
    * The header that specifies the date.
    *
    * @const
    * @type {string}
    * @default "x-ms-date"
    */
    MS_DATE: string;

    /**
    * The header to delete snapshots.
    *
    * @const
    * @type {string}
    * @default "x-ms-delete-snapshots"
    */
    DELETE_SNAPSHOT: string;

    /**
    * The ETag header.
    *
    * @const
    * @type {string}
    * @default "etag"
    */
    ETAG: string;

    /**
    * The IfMatch header.
    *
    * @const
    * @type {string}
    * @default "if-match"
    */
    IF_MATCH: string;

    /**
    * The IfModifiedSince header.
    *
    * @const
    * @type {string}
    * @default "if-modified-since"
    */
    IF_MODIFIED_SINCE: string;

    /**
    * The IfNoneMatch header.
    *
    * @const
    * @type {string}
    * @default "if-none-match"
    */
    IF_NONE_MATCH: string;

    /**
    * The IfUnmodifiedSince header.
    *
    * @const
    * @type {string}
    * @default "if-unmodified-since"
    */
    IF_UNMODIFIED_SINCE: string;

    /**
    * Specifies snapshots are to be included.
    *
    * @const
    * @type {string}
    * @default "include"
    */
    INCLUDE_SNAPSHOTS_VALUE: string;

    /**
    * Specifies that the content-type is JSON.
    *
    * @const
    * @type {string}
    * @default "application/json;"
    */
    JSON_CONTENT_TYPE_VALUE: string;


    /**
    * The header that specifies lease ID.
    *
    * @const
    * @type {string}
    * @default "x-ms-lease-id"
    */
    LEASE_ID: string;

    /**
    * The header that specifies the lease break period.
    *
    * @const
    * @type {string}
    * @default "x-ms-lease-break-period"
    */
    LEASE_BREAK_PERIOD: string;

    /**
    * The header that specifies the proposed lease identifier.
    *
    * @const
    * @type {string}
    * @default "x-ms-proposed-lease-id"
    */
    PROPOSED_LEASE_ID: string;

    /**
    * The header that specifies the lease duration.
    *
    * @const
    * @type {string}
    * @default "x-ms-lease-duration"
    */
    LEASE_DURATION: string;

    /**
    * The header that specifies the source lease ID.
    *
    * @const
    * @type {string}
    * @default "x-ms-source-lease-id"
    */
    SOURCE_LEASE_ID: string;

    /**
    * The header that specifies lease time.
    *
    * @const
    * @type {string}
    * @default "x-ms-lease-time"
    */
    LEASE_TIME: string;

    /**
    * The header that specifies lease status.
    *
    * @const
    * @type {string}
    * @default "x-ms-lease-status"
    */
    LEASE_STATUS: string;

    /**
    * The header that specifies lease state.
    *
    * @const
    * @type {string}
    * @default "x-ms-lease-state"
    */
    LEASE_STATE: string;

    /**
    * Specifies the page blob type.
    *
    * @const
    * @type {string}
    * @default "PageBlob"
    */
    PAGE_BLOB: string;

    /**
    * The header that specifies page write mode.
    *
    * @const
    * @type {string}
    * @default "x-ms-page-write"
    */
    PAGE_WRITE: string;

    /**
    * The header that specifies file range write mode.
    *
    * @const
    * @type {string}
    * @default "x-ms-write"
    */
    FILE_WRITE: string;

    /**
    * The header that specifies whether the response should include the inserted entity.
    *
    * @const
    * @type {string}
    * @default "Prefer"
    */
    PREFER: string;

    /**
    * The header value which specifies that the response should include the inserted entity.
    *
    * @const
    * @type {string}
    * @default "return-content"
    */
    PREFER_CONTENT: string;

    /**
    * The header value which specifies that the response should not include the inserted entity.
    *
    * @const
    * @type {string}
    * @default "return-no-content"
    */
    PREFER_NO_CONTENT: string;

    /**
    * The header prefix for metadata.
    *
    * @const
    * @type {string}
    * @default "x-ms-meta-"
    */
    PREFIX_FOR_STORAGE_METADATA: string;

    /**
    * The header prefix for properties.
    *
    * @const
    * @type {string}
    * @default "x-ms-prop-"
    */
    PREFIX_FOR_STORAGE_PROPERTIES: string;

    /**
    * The Range header.
    *
    * @const
    * @type {string}
    * @default "Range"
    */
    RANGE: string;

    /**
    * The header that specifies if the request will populate the ContentMD5 header for range gets.
    *
    * @const
    * @type {string}
    */
    RANGE_GET_CONTENT_MD5: "x-ms-range-get-content-md5";

    /**
    * The format string for specifying ranges.
    *
    * @const
    * @type {string}
    * @default "bytes:%d-%d"
    */
    RANGE_HEADER_FORMAT: string;

    /**
    * The header that indicates the request ID.
    *
    * @const
    * @type {string}
    * @default "x-ms-request-id"
    */
    REQUEST_ID: string;

    /**
    * The header for specifying the sequence number.
    *
    * @const
    * @type {string}
    * @default "x-ms-blob-sequence-number"
    */
    SEQUENCE_NUMBER: string;

    /**
    * The header for specifying the If-Sequence-Number-EQ condition.
    *
    * @const
    * @type {string}
    * @default "x-ms-if-sequence-number-eq"
    */
    SEQUENCE_NUMBER_EQUAL: string;

    /**
    * The header for specifying the If-Sequence-Number-LT condition.
    *
    * @const
    * @type {string}
    * @default "x-ms-if-sequence-number-lt"
    */
    SEQUENCE_NUMBER_LESS_THAN: string;

    /**
    * The header for specifying the If-Sequence-Number-LE condition.
    *
    * @const
    * @type {string}
    * @default "x-ms-if-sequence-number-le"
    */
    SEQUENCE_NUMBER_LESS_THAN_OR_EQUAL: string;

    /**
    * The header that specifies sequence number action.
    *
    * @const
    * @type {string}
    * @default "x-ms-sequence-number-action"
    */
    SEQUENCE_NUMBER_ACTION: string;

    /**
    * The header for the blob content length.
    *
    * @const
    * @type {string}
    * @default "x-ms-blob-content-length"
    */
    SIZE: string;

    /**
    * The header for snapshots.
    *
    * @const
    * @type {string}
    * @default "x-ms-snapshot"
    */
    SNAPSHOT: string;

    /**
    * Specifies only snapshots are to be included.
    *
    * @const
    * @type {string}
    * @default "only"
    */
    SNAPSHOTS_ONLY_VALUE: string;

    /**
    * The header for the If-Match condition.
    *
    * @const
    * @type {string}
    * @default "x-ms-source-if-match"
    */
    SOURCE_IF_MATCH: string;

    /**
    * The header for the If-Modified-Since condition.
    *
    * @const
    * @type {string}
    * @default "x-ms-source-if-modified-since"
    */
    SOURCE_IF_MODIFIED_SINCE: string;

    /**
    * The header for the If-None-Match condition.
    *
    * @const
    * @type {string}
    * @default "x-ms-source-if-none-match"
    */
    SOURCE_IF_NONE_MATCH: string;

    /**
    * The header for the If-Unmodified-Since condition.
    *
    * @const
    * @type {string}
    * @default "x-ms-source-if-unmodified-since"
    */
    SOURCE_IF_UNMODIFIED_SINCE: string;

    /**
    * The header for data ranges.
    *
    * @const
    * @type {string}
    * @default "x-ms-range"
    */
    STORAGE_RANGE: string;

    /**
    * The header for storage version.
    *
    * @const
    * @type {string}
    * @default "x-ms-version"
    */
    STORAGE_VERSION: string;

    /**
    * The current storage version header value.
    *
    * @const
    * @type {string}
    * @default "2015-04-05"
    */
    TARGET_STORAGE_VERSION: string;

    /**
    * The UserAgent header.
    *
    * @const
    * @type {string}
    * @default "user-agent"
    */
    USER_AGENT: string;

    /**
    * The pop receipt header.
    *
    * @const
    * @type {string}
    * @default "x-ms-popreceipt"
    */
    POP_RECEIPT: string;

    /**
    * The time next visibile header.
    *
    * @const
    * @type {string}
    * @default "x-ms-time-next-visible"
    */
    TIME_NEXT_VISIBLE: string;

    /**
    * The approximate message counter header.
    *
    * @const
    * @type {string}
    * @default "x-ms-approximate-message-count"
    */
    APPROXIMATE_MESSAGE_COUNT: string;

    /**
    * The lease action header.
    *
    * @const
    * @type {string}
    * @default "x-ms-lease-action"
    */
    LEASE_ACTION: string;

    /**
    * The accept header.
    *
    * @const
    * @type {string}
    * @default "accept"
    */
    ACCEPT: string;

    /**
    * The accept charset header.
    *
    * @const
    * @type {string}
    * @default "Accept-Charset"
    */
    ACCEPT_CHARSET: string;

    /**
    * The host header.
    *
    * @const
    * @type {string}
    * @default "host"
    */
    HOST: string;

    /**
    * The correlation identifier header.
    *
    * @const
    * @type {string}
    * @default "x-ms-correlation-id"
    */
    CORRELATION_ID: string;

    /**
    * The group identifier header.
    *
    * @const
    * @type {string}
    * @default "x-ms-group-id"
    */
    GROUP_ID: string;

    /**
    * The share quota header.
    *
    * @const
    * @type {string}
    * @default "x-ms-share-quota"
    */
    SHARE_QUOTA: string;

    /**
    * The max blob size header.
    *
    * @const
    * @type {int}
    * @default "x-ms-blob-condition-maxsize"
    */
    BLOB_CONDITION_MAX_SIZE: string;

    /**
    * The append blob position header.
    *
    * @const
    * @type {int}
    * @default "x-ms-blob-condition-appendpos"
    */
    BLOB_CONDITION_APPEND_POSITION: string;

    /**
    * The append blob append offset header.
    *
    * @const
    * @type {int}
    * @default "x-ms-blob-append-offset"
    */
    BLOB_APPEND_OFFSET: string;

    /**
    * The append blob committed block header.
    *
    * @const
    * @type {int}
    * @default "x-ms-blob-committed-block-count"
    */
    BLOB_COMMITTED_BLOCK_COUNT: string;
};

export const QueryStringConstants: {

    /**
    * Query component for SAS API version.
    * @const
    * @type {string}
    * @default "api-version"
    */
    API_VERSION: string;

    /**
    * The Comp value.
    *
    * @const
    * @type {string}
    * @default "comp"
    */
    COMP: string;

    /**
    * The Res Type.
    *
    * @const
    * @type {string}
    * @default "restype"
    */
    RESTYPE: string;

    /**
    * The copy Id.
    * @const
    * @type {string}
    * @default "copyid"
    */
    COPY_ID: string;

    /**
    * The Snapshot value.
    *
    * @const
    * @type {string}
    * @default "snapshot"
    */
    SNAPSHOT: string;

    /**
    * The timeout value.
    *
    * @const
    * @type {string}
    * @default "timeout"
    */
    TIMEOUT: string;

    /**
    * The signed start time query string argument for shared access signature.
    *
    * @const
    * @type {string}
    * @default "st"
    */
    SIGNED_START: string;

    /**
    * The signed expiry time query string argument for shared access signature.
    *
    * @const
    * @type {string}
    * @default "se"
    */
    SIGNED_EXPIRY: string;

    /**
    * The signed resource query string argument for shared access signature.
    *
    * @const
    * @type {string}
    * @default "sr"
    */
    SIGNED_RESOURCE: string;

    /**
    * The signed permissions query string argument for shared access signature.
    *
    * @const
    * @type {string}
    * @default "sp"
    */
    SIGNED_PERMISSIONS: string;

    /**
    * The signed services query string argument for shared access signature.
    *
    * @const
    * @type {string}
    * @default "ss"
    */
    SIGNED_SERVICES: string;

    /**
    * The signed resource types query string argument for shared access signature.
    *
    * @const
    * @type {string}
    * @default "srt"
    */
    SIGNED_RESOURCE_TYPES: string;

    /**
    * The signed IP query string argument for shared access signature.
    *
    * @const
    * @type {string}
    * @default "sip"
    */
    SIGNED_IP: string;

    /**
    * The signed protocol query string argument for shared access signature.
    *
    * @const
    * @type {string}
    * @default "spr"
    */
    SIGNED_PROTOCOL: string;

    /**
    * The signed identifier query string argument for shared access signature.
    *
    * @const
    * @type {string}
    * @default "si"
    */
    SIGNED_IDENTIFIER: string;

    /**
    * The signature query string argument for shared access signature.
    *
    * @const
    * @type {string}
    * @default "sig"
    */
    SIGNATURE: string;

    /**
    * The signed version argument for shared access signature.
    *
    * @const
    * @type {string}
    * @default "sv"
    */
    SIGNED_VERSION: string;

    /**
    * The cache control argument for shared access signature.
    *
    * @const
    * @type {string}
    * @default "rscc"
    */
    CACHE_CONTROL: string;

    /**
    * The content type argument for shared access signature.
    *
    * @const
    * @type {string}
    * @default "rsct"
    */
    CONTENT_TYPE: string;

    /**
    * The content encoding argument for shared access signature.
    *
    * @const
    * @type {string}
    * @default "rsce"
    */
    CONTENT_ENCODING: string;

    /**
    * The content language argument for shared access signature.
    *
    * @const
    * @type {string}
    * @default "rscl"
    */
    CONTENT_LANGUAGE: string;

    /**
    * The content disposition argument for shared access signature.
    *
    * @const
    * @type {string}
    * @default "rscd"
    */
    CONTENT_DISPOSITION: string;

    /**
    * The block identifier query string argument for blob service.
    *
    * @const
    * @type {string}
    * @default "blockid"
    */
    BLOCK_ID: string;

    /**
    * The block list type query string argument for blob service.
    *
    * @const
    * @type {string}
    * @default "blocklisttype"
    */
    BLOCK_LIST_TYPE: string;

    /**
    * The prefix query string argument for listing operations.
    *
    * @const
    * @type {string}
    * @default "prefix"
    */
    PREFIX: string;

    /**
    * The marker query string argument for listing operations.
    *
    * @const
    * @type {string}
    * @default "marker"
    */
    MARKER: string;

    /**
    * The maxresults query string argument for listing operations.
    *
    * @const
    * @type {string}
    * @default "maxresults"
    */
    MAX_RESULTS: string;

    /**
    * The delimiter query string argument for listing operations.
    *
    * @const
    * @type {string}
    * @default "delimiter"
    */
    DELIMITER: string;

    /**
    * The include query string argument for listing operations.
    *
    * @const
    * @type {string}
    * @default "include"
    */
    INCLUDE: string;

    /**
    * The peekonly query string argument for queue service.
    *
    * @const
    * @type {string}
    * @default "peekonly"
    */
    PEEK_ONLY: string;

    /**
    * The numofmessages query string argument for queue service.
    *
    * @const
    * @type {string}
    * @default "numofmessages"
    */
    NUM_OF_MESSAGES: string;

    /**
    * The popreceipt query string argument for queue service.
    *
    * @const
    * @type {string}
    * @default "popreceipt"
    */
    POP_RECEIPT: string;

    /**
    * The visibilitytimeout query string argument for queue service.
    *
    * @const
    * @type {string}
    * @default "visibilitytimeout"
    */
    VISIBILITY_TIMEOUT: string;

    /**
    * The messagettl query string argument for queue service.
    *
    * @const
    * @type {string}
    * @default "messagettl"
    */
    MESSAGE_TTL: string;

    /**
    * The select query string argument.
    *
    * @const
    * @type {string}
    * @default "$select"
    */
    SELECT: string;

    /**
    * The filter query string argument.
    *
    * @const
    * @type {string}
    * @default "$filter"
    */
    FILTER: string;

    /**
    * The top query string argument.
    *
    * @const
    * @type {string}
    * @default "$top"
    */
    TOP: string;

    /**
    * The skip query string argument.
    *
    * @const
    * @type {string}
    * @default "$skip"
    */
    SKIP: string;

    /**
    * The next partition key query string argument for table service.
    *
    * @const
    * @type {string}
    * @default "NextPartitionKey"
    */
    NEXT_PARTITION_KEY: string;

    /**
    * The next row key query string argument for table service.
    *
    * @const
    * @type {string}
    * @default "NextRowKey"
    */
    NEXT_ROW_KEY: string;

    /**
    * The lock identifier for service bus messages.
    *
    * @const
    * @type {string}
    * @default "lockid"
    */
    LOCK_ID: string;

    /**
    * The table name for table SAS URI"s.
    *
    * @const
    * @type {string}
    * @default "tn"
    */
    TABLENAME: string;

    /**
    * The starting Partition Key for tableSAS URI"s.
    *
    * @const
    * @type {string}
    * @default "spk"
    */
    STARTPK: string;

    /**
    * The starting Partition Key for tableSAS URI"s.
    *
    * @const
    * @type {string}
    * @default "srk"
    */
    STARTRK: string;

    /**
    * The ending Partition Key for tableSAS URI"s.
    *
    * @const
    * @type {string}
    * @default "epk"
    */
    ENDPK: string;

    /**
    * The ending Partition Key for tableSAS URI"s.
    *
    * @const
    * @type {string}
    * @default "erk"
    */
    ENDRK: string;
};

export const StorageServiceClientConstants: {
    /**
    * The default protocol.
    * @default "https:"
    */
    DEFAULT_PROTOCOL: string;

    /*
    * Used environment variables.
    * @enum {string}
    */
    EnvironmentVariables: {
        /**
        * @const
        * @default "AZURE_STORAGE_ACCOUNT"
        */
        AZURE_STORAGE_ACCOUNT: string;
        /**
        * @const
        * @default "AZURE_STORAGE_ACCESS_KEY"
        */
        AZURE_STORAGE_ACCESS_KEY: string;
        /**
        * @const
        * @default "AZURE_STORAGE_DNS_SUFFIX"
        */
        AZURE_STORAGE_DNS_SUFFIX: string;
        /**
        * @const
        * @default "AZURE_STORAGE_CONNECTION_STRING"
        */
        AZURE_STORAGE_CONNECTION_STRING: string;
        /**
        * @const
        * @default "HTTP_PROXY"
        */
        HTTP_PROXY: string;
        /**
        * @const
        * @default "HTTPS_PROXY"
        */
        HTTPS_PROXY: string;
        /**
        * @const
        * @default "EMULATED"
        */
        EMULATED: string;
    };

    /**
    * Default credentials.
    * @default "devstoreaccount1"
    */
    DEVSTORE_STORAGE_ACCOUNT: string;
    /**
    * @const
    * @default "Eby8vdM02xNOcqFlqUwJPLlmEtlCDXJ1OUzFT50uSRZ6IFsuFq2UVErCz4I6tq/K1SZFPTOtr/KBHBeksoGMGw=="
    */
    DEVSTORE_STORAGE_ACCESS_KEY: string;

    /**
    * The development store URI.
    *
    * @const
    * @type {string}
    * @default "http://127.0.0.1"
    */
    DEV_STORE_URI: string;

    /**
    * Development ServiceClient URLs.
    * @default "http://"
    */
    DEVSTORE_DEFAULT_PROTOCOL: string;
    /**
    * @const
    * @default "127.0.0.1:10000"
    */
    DEVSTORE_BLOB_HOST: string;
    /**
    * @const
    * @default "127.0.0.1:10001"
    */
    DEVSTORE_QUEUE_HOST: string;
    /**
    * @const
    * @default "127.0.0.1:10002"
    */
    DEVSTORE_TABLE_HOST: string;

    /**
    * Production ServiceClient URLs.
    * @default "blob.core.windows.net"
    */
    CLOUD_BLOB_HOST: string;
    /**
    * @const
    * @default "queue.core.windows.net"
    */
    CLOUD_QUEUE_HOST: string;
    /**
    * @const
    * @default "table.core.windows.net"
    */
    CLOUD_TABLE_HOST: string;
    /**
    * @const
    * @default "file.core.windows.net"
    */
    CLOUD_FILE_HOST: string;
};

export const HttpConstants: {
    /**
    * Http Verbs
    *
    * @const
    * @enum {string}
    */
    HttpVerbs: {
        /**
        * @const
        * @default "PUT"
        */
        PUT: string;
        /**
        * @const
        * @default "GET"
        */
        GET: string;
        /**
        * @const
        * @default "DELETE"
        */
        DELETE: string;
        /**
        * @const
        * @default "POST"
        */
        POST: string;
        /**
        * @const
        * @default "MERGE"
        */
        MERGE: string;
        /**
        * @const
        * @default "HEAD"
        */
        HEAD: string;
    };

    /**
    * Response codes.
    *
    * @const
    * @enum {int}
    */
    HttpResponseCodes: {
        Ok: number;
        Created: number;
        Accepted: number;
        NoContent: number;
        PartialContent: number;
        BadRequest: number;
        Unauthorized: number;
        Forbidden: number;
        NotFound: number;
        Conflict: number;
        LengthRequired: number;
        PreconditionFailed: number;
    }
};

export const CompatibleVersionConstants: {
    /**
    * Constant for the 2015-04-05 version.
    *
    * @const
    * @type {string}
    */
    APRIL_2015: "2015-04-05";

    /**
    * Constant for the 2013-08-15 version.
    *
    * @const
    * @type {string}
    */
    AUGUST_2013: "2013-08-15";

    /**
    * Constant for the 2012-02-12 version.
    *
    * @const
    * @type {string}
    */
    FEBRUARY_2012: "2012-02-12";
};

export const BlobErrorCodeStrings: {
    /**
    * @const
    * @default "InvalidBlockId"
    */
    INVALID_BLOCK_ID: string;
    /**
    * @const
    * @default "BlobNotFound"
    */
    BLOB_NOT_FOUND: string;
    /**
    * @const
    * @default "BlobAlreadyExists"
    */
    BLOB_ALREADY_EXISTS: string;
    /**
    * @const
    * @default "ContainerAlreadyExists"
    */
    CONTAINER_ALREADY_EXISTS: string;
    /**
    * @const
    * @default "ContainerNotFound"
    */
    CONTAINER_NOT_FOUND: string;
    /**
    * @const
    * @default "InvalidBlobOrBlock"
    */
    INVALID_BLOB_OR_BLOCK: string;
    /**
    * @const
    * @default "InvalidBlockList"
    */
    INVALID_BLOCK_LIST: string;
};

export const FileErrorCodeStrings: {
    /**
    * @const
    * @default "ShareAlreadyExists"
    */
    SHARE_ALREADY_EXISTS: string;
    /**
    * @const
    * @default "ShareNotFound"
    */
    SHARE_NOT_FOUND: string;
    /**
    * @const
    * @default "FileNotFound"
    */
    FILE_NOT_FOUND: string;
};

export const QueueErrorCodeStrings: {
    /**
    * @const
    * @default "QueueNotFound"
    */
    QUEUE_NOT_FOUND: string;
    /**
    * @const
    * @default "QueueDisabled"
    */
    QUEUE_DISABLED: string;
    /**
    * @const
    * @default "QueueAlreadyExists"
    */
    QUEUE_ALREADY_EXISTS: string;
    /**
    * @const
    * @default "QueueNotEmpty"
    */
    QUEUE_NOT_EMPTY: string;
    /**
    * @const
    * @default "QueueBeingDeleted"
    */
    QUEUE_BEING_DELETED: string;
    /**
    * @const
    * @default "PopReceiptMismatch"
    */
    POP_RECEIPT_MISMATCH: string;
    /**
    * @const
    * @default "InvalidParameter"
    */
    INVALID_PARAMETER: string;
    /**
    * @const
    * @default "MessageNotFound"
    */
    MESSAGE_NOT_FOUND: string;
    /**
    * @const
    * @default "MessageTooLarge"
    */
    MESSAGE_TOO_LARGE: string;
    /**
    * @const
    * @default "InvalidMarker"
    */
    INVALID_MARKER: string;
};

/**
* Constants for storage error strings
*
* More details are at: http://msdn.microsoft.com/en-us/library/azure/dd179357.aspx
*/
export const StorageErrorCodeStrings: {
    // Not Modified (304): The condition specified in the conditional header(s) was not met for a read operation.
    // Precondition Failed (412): The condition specified in the conditional header(s) was not met for a write operation.
    /**
    * @const
    * @default "ConditionNotMet"
    */
    CONDITION_NOT_MET: string;
    // Bad Request (400): A required HTTP header was not specified.
    /**
    * @const
    * @default "MissingRequiredHeader"
    */
    MISSING_REQUIRED_HEADER: string;
    // Bad Request (400): A required XML node was not specified in the request body.
    /**
    * @const
    * @default "MissingRequiredXmlNode"
    */
    MISSING_REQUIRED_XML_NODE: string;
    // Bad Request (400): One of the HTTP headers specified in the request is not supported.
    /**
    * @const
    * @default "UnsupportedHeader"
    */
    UNSUPPORTED_HEADER: string;
    // Bad Request (400): One of the XML nodes specified in the request body is not supported.
    /**
    * @const
    * @default "UnsupportedXmlNode"
    */
    UNSUPPORTED_XML_NODE: string;
    // Bad Request (400): The value provided for one of the HTTP headers was not in the correct format.
    /**
    * @const
    * @default "InvalidHeaderValue"
    */
    INVALID_HEADER_VALUE: string;
    // Bad Request (400): The value provided for one of the XML nodes in the request body was not in the correct format.
    /**
    * @const
    * @default "InvalidXmlNodeValue"
    */
    INVALID_XML_NODE_VALUE: string;
    // Bad Request (400): A required query parameter was not specified for this request.
    /**
    * @const
    * @default "MissingRequiredQueryParameter"
    */
    MISSING_REQUIRED_QUERY_PARAMETER: string;
    // Bad Request (400): One of the query parameters specified in the request URI is not supported.
    /**
    * @const
    * @default "UnsupportedQueryParameter"
    */
    UNSUPPORTED_QUERY_PARAMETER: string;
    // Bad Request (400): An invalid value was specified for one of the query parameters in the request URI.
    /**
    * @const
    * @default "InvalidQueryParameterValue"
    */
    INVALID_QUERY_PARAMETER_VALUE: string;
    // Bad Request (400): A query parameter specified in the request URI is outside the permissible range.
    /**
    * @const
    * @default "OutOfRangeQueryParameterValue"
    */
    OUT_OF_RANGE_QUERY_PARAMETER_VALUE: string;
    // Bad Request (400): The url in the request could not be parsed.
    /**
    * @const
    * @default "RequestUrlFailedToParse"
    */
    REQUEST_URL_FAILED_TO_PARSE: string;
    // Bad Request (400): The requested URI does not represent any resource on the server.
    /**
    * @const
    * @default "InvalidUri"
    */
    INVALID_URI: string;
    // Bad Request (400): The HTTP verb specified was not recognized by the server.
    /**
    * @const
    * @default "InvalidHttpVerb"
    */
    INVALID_HTTP_VERB: string;
    // Bad Request (400): The key for one of the metadata key-value pairs is empty.
    /**
    * @const
    * @default "EmptyMetadataKey"
    */
    EMPTY_METADATA_KEY: string;
    // Bad Request (400): The specified XML is not syntactically valid.
    /**
    * @const
    * @default "InvalidXmlDocument"
    */
    INVALID_XML_DOCUMENT: string;
    // Bad Request (400): The MD5 value specified in the request did not match the MD5 value calculated by the server.
    MD5_MISMATCH: "Md5Mismatch";
    // Bad Request (400): The MD5 value specified in the request is invalid. The MD5 value must be 128 bits and Base64-encoded.
    INVALID_MD5: "InvalidMd5";
    // Bad Request (400): One of the request inputs is out of range.
    /**
    * @const
    * @default "OutOfRangeInput"
    */
    OUT_OF_RANGE_INPUT: string;
    // Bad Request (400): The authentication information was not provided in the correct format. Verify the value of Authorization header.
    /**
    * @const
    * @default "InvalidAuthenticationInfo"
    */
    INVALID_AUTHENTICATION_INFO: string;
    // Bad Request (400): One of the request inputs is not valid.
    /**
    * @const
    * @default "InvalidInput"
    */
    INVALID_INPUT: string;
    // Bad Request (400): The specified metadata is invalid. It includes characters that are not permitted.
    /**
    * @const
    * @default "InvalidMetadata"
    */
    INVALID_METADATA: string;
    // Bad Request (400): The specifed resource name contains invalid characters.
    /**
    * @const
    * @default "InvalidResourceName"
    */
    INVALID_RESOURCE_NAME: string;
    // Bad Request (400): The size of the specified metadata exceeds the maximum size permitted.
    /**
    * @const
    * @default "MetadataTooLarge"
    */
    METADATA_TOO_LARGE: string;
    // Bad Request (400): Condition headers are not supported.
    /**
    * @const
    * @default "ConditionHeadersNotSupported"
    */
    CONDITION_HEADER_NOT_SUPPORTED: string;
    // Bad Request (400): Multiple condition headers are not supported.
    /**
    * @const
    * @default "MultipleConditionHeadersNotSupported"
    */
    MULTIPLE_CONDITION_HEADER_NOT_SUPPORTED: string;
    // Forbidden (403): Server failed to authenticate the request. Make sure the value of the Authorization header is formed correctly including the signature.
    /**
    * @const
    * @default "AuthenticationFailed"
    */
    AUTHENTICATION_FAILED: string;
    // Forbidden (403): Read-access geo-redundant replication is not enabled for the account.
    // Forbidden (403): Write operations to the secondary location are not allowed.
    // Forbidden (403): The account being accessed does not have sufficient permissions to execute this operation.
    /**
    * @const
    * @default "InsufficientAccountPermissions"
    */
    INSUFFICIENT_ACCOUNT_PERMISSIONS: string;
    // Not Found (404): The specified resource does not exist.
    /**
    * @const
    * @default "ResourceNotFound"
    */
    RESOURCE_NOT_FOUND: string;
    // Forbidden (403): The specified account is disabled.
    /**
    * @const
    * @default "AccountIsDisabled"
    */
    ACCOUNT_IS_DISABLED: string;
    // Method Not Allowed (405): The resource doesn"t support the specified HTTP verb.
    /**
    * @const
    * @default "UnsupportedHttpVerb"
    */
    UNSUPPORTED_HTTP_VERB: string;
    // Conflict (409): The specified account already exists. 
    /**
    * @const
    * @default "AccountAlreadyExists"
    */
    ACCOUNT_ALREADY_EXISTS: string;
    // Conflict (409): The specified account is in the process of being created.
    /**
    * @const
    * @default "AccountBeingCreated"
    */
    ACCOUNT_BEING_CREATED: string;
    // Conflict (409): The specified resource already exists.
    /**
    * @const
    * @default "ResourceAlreadyExists"
    */
    RESOURCE_ALREADY_EXISTS: string;
    // Conflict (409): The specified resource type does not match the type of the existing resource.
    /**
    * @const
    * @default "ResourceTypeMismatch"
    */
    RESOURCE_TYPE_MISMATCH: string;
    // Length Required (411): The Content-Length header was not specified.
    /**
    * @const
    * @default "MissingContentLengthHeader"
    */
    MISSING_CONTENT_LENGTH_HEADER: string;
    // Request Entity Too Large (413): The size of the request body exceeds the maximum size permitted.
    /**
    * @const
    * @default "RequestBodyTooLarge"
    */
    REQUEST_BODY_TOO_LARGE: string;
    // Requested Range Not Satisfiable (416): The range specified is invalid for the current size of the resource.
    /**
    * @const
    * @default "InvalidRange"
    */
    INVALID_RANGE: string;
    // Internal Server Error (500): The server encountered an internal error. Please retry the request.
    /**
    * @const
    * @default "InternalError"
    */
    INTERNAL_ERROR: string;
    // Internal Server Error (500): The operation could not be completed within the permitted time.
    /**
    * @const
    * @default "OperationTimedOut"
    */
    OPERATION_TIMED_OUT: string;
    // Service Unavailable (503): The server is currently unable to receive requests. Please retry your request. 
    /**
    * @const
    * @default "ServerBusy"
    */
    SERVER_BUSY: string;

    // Legacy error code strings
    /**
    * @const
    * @default "UpdateConditionNotSatisfied"
    */
    UPDATE_CONDITION_NOT_SATISFIED: string;
    /**
    * @const
    * @default "ContainerNotFound"
    */
    CONTAINER_NOT_FOUND: string;
    /**
    * @const
    * @default "ContainerAlreadyExists"
    */
    CONTAINER_ALREADY_EXISTS: string;
    /**
    * @const
    * @default "ContainerDisabled"
    */
    CONTAINER_DISABLED: string;
    /**
    * @const
    * @default "ContainerBeingDeleted"
    */
    CONTAINER_BEING_DELETED: string;
};

export const TableErrorCodeStrings: {
    /**
    * @const
    * @default "XMethodNotUsingPost"
    */
    XMETHOD_NOT_USING_POST: string;
    /**
    * @const
    * @default "XMethodIncorrectValue"
    */
    XMETHOD_INCORRECT_VALUE: string;
    /**
    * @const
    * @default "XMethodIncorrectCount"
    */
    XMETHOD_INCORRECT_COUNT: string;
    /**
    * @const
    * @default "TableHasNoProperties"
    */
    TABLE_HAS_NO_PROPERTIES: string;
    /**
    * @const
    * @default "DuplicatePropertiesSpecified"
    */
    DUPLICATE_PROPERTIES_SPECIFIED: string;
    /**
    * @const
    * @default "TableHasNoSuchProperty"
    */
    TABLE_HAS_NO_SUCH_PROPERTY: string;
    /**
    * @const
    * @default "DuplicateKeyPropertySpecified"
    */
    DUPLICATE_KEY_PROPERTY_SPECIFIED: string;
    /**
    * @const
    * @default "TableAlreadyExists"
    */
    TABLE_ALREADY_EXISTS: string;
    /**
    * @const
    * @default "TableNotFound"
    */
    TABLE_NOT_FOUND: string;
    /**
    * @const
    * @default "EntityNotFound"
    */
    ENTITY_NOT_FOUND: string;
    /**
    * @const
    * @default "EntityAlreadyExists"
    */
    ENTITY_ALREADY_EXISTS: string;
    /**
    * @const
    * @default "PartitionKeyNotSpecified"
    */
    PARTITION_KEY_NOT_SPECIFIED: string;
    /**
    * @const
    * @default "OperatorInvalid"
    */
    OPERATOR_INVALID: string;
    /**
    * @const
    * @default "UpdateConditionNotSatisfied"
    */
    UPDATE_CONDITION_NOT_SATISFIED: string;
    /**
    * @const
    * @default "PropertiesNeedValue"
    */
    PROPERTIES_NEED_VALUE: string;
    /**
    * @const
    * @default "PartitionKeyPropertyCannotBeUpdated"
    */
    PARTITION_KEY_PROPERTY_CANNOT_BE_UPDATED: string;
    /**
    * @const
    * @default "TooManyProperties"
    */
    TOO_MANY_PROPERTIES: string;
    /**
    * @const
    * @default "EntityTooLarge"
    */
    ENTITY_TOO_LARGE: string;
    /**
    * @const
    * @default "PropertyValueTooLarge"
    */
    PROPERTY_VALUE_TOO_LARGE: string;
    /**
    * @const
    * @default "InvalidValueType"
    */
    INVALID_VALUE_TYPE: string;
    /**
    * @const
    * @default "TableBeingDeleted"
    */
    TABLE_BEING_DELETED: string;
    /**
    * @const
    * @default "TableServerOutOfMemory"
    */
    TABLE_SERVER_OUT_OF_MEMORY: string;
    /**
    * @const
    * @default "PrimaryKeyPropertyIsInvalidType"
    */
    PRIMARY_KEY_PROPERTY_IS_INVALID_TYPE: string;
    /**
    * @const
    * @default "PropertyNameTooLong"
    */
    PROPERTY_NAME_TOO_LONG: string;
    /**
    * @const
    * @default "PropertyNameInvalid"
    */
    PROPERTY_NAME_INVALID: string;
    /**
    * @const
    * @default "BatchOperationNotSupported"
    */
    BATCH_OPERATION_NOT_SUPPORTED: string;
    /**
    * @const
    * @default "JsonFormatNotSupported"
    */
    JSON_FORMAT_NOT_SUPPORTED: string;
    /**
    * @const
    * @default "MethodNotAllowed"
    */
    METHOD_NOT_ALLOWED: string;
    /**
    * @const
    * @default "NotImplemented"
    */
    NOT_IMPLEMENTED: string;
};

export const ConnectionStringKeys: {
    /**
    * @const
    * @default "UseDevelopmentStorage"
    */
    USE_DEVELOPMENT_STORAGE_NAME: string;
    /**
    * @const
    * @default "DevelopmentStorageProxyUri"
    */
    DEVELOPMENT_STORAGE_PROXY_URI_NAME: string;
    /**
    * @const
    * @default "DefaultEndpointsProtocol"
    */
    DEFAULT_ENDPOINTS_PROTOCOL_NAME: string;
    /**
    * @const
    * @default "AccountName"
    */
    ACCOUNT_NAME_NAME: string;
    /**
    * @const
    * @default "AccountKey"
    */
    ACCOUNT_KEY_NAME: string;
    /**
    * @const
    * @default "BlobEndpoint"
    */
    BLOB_ENDPOINT_NAME: string;
    /**
    * @const
    * @default "FileEndpoint"
    */
    FILE_ENDPOINT_NAME: string;
    /**
    * @const
    * @default "QueueEndpoint"
    */
    QUEUE_ENDPOINT_NAME: string;
    /**
    * @const
    * @default "TableEndpoint"
    */
    TABLE_ENDPOINT_NAME: string;
    /**
    * @const
    * @default "SharedAccessSignature"
    */
    SHARED_ACCESS_SIGNATURE_NAME: string;
    /**
    * @const
    * @default "blob.core.windows.net"
    */
    BLOB_BASE_DNS_NAME: string;
    /**
    * @const
    * @default "file.core.windows.net"
    */
    FILE_BASE_DNS_NAME: string;
    /**
    * @const
    * @default "queue.core.windows.net"
    */
    QUEUE_BASE_DNS_NAME: string;
    /**
    * @const
    * @default "table.core.windows.net"
    */
    TABLE_BASE_DNS_NAME: string;
};