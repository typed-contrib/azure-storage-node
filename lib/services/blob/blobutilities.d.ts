// Type definitions for azure-storage-node v0.10.0
// Project: https://github.com/Azure/azure-storage-node
// Definitions by: Maxime LUCE <https://github.com/SomaticIT/>
// Definitions: https://github.com/typed-contrib/azure-storage-node

/**
* Defines constants, enums, and utility functions for use with the Blob service.
* @namespace BlobUtilities
*/

/**
* Permission types
*
* @const
* @enum {string}
*/
export const SharedAccessPermissions: {
    /**
    * @const
    * @default "a"
    */
    ADD: string;
    /**
    * @const
    * @default "r"
    */
    READ: string;
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
* Blob listing details.
*
* @const
* @enum {string}
*/
export const BlobListingDetails: {
    /**
    * @const
    * @default "snapshots"
    */
    SNAPSHOTS: string;
    /**
    * @const
    * @default "metadata"
    */
    METADATA: string;
    /**
    * @const
    * @default "uncommittedblobs"
    */
    UNCOMMITTED_BLOBS: string;
    /**
    * @const
    * @default "copy"
    */
    COPY: string;
};

/**
* Deletion options for blob snapshots
*
* @const
* @enum {string}
*/
export const SnapshotDeleteOptions: {
    /**
    * @const
    * @default "only"
    */
    SNAPSHOTS_ONLY: string;
    /**
    * @const
    * @default "include"
    */
    BLOB_AND_SNAPSHOTS: string;
};

/**
* Type of block list to retrieve
*
* @const
* @enum {string}
*/
export const BlockListFilter: {
    /**
    * @const
    * @default "all"
    */
    ALL: string;
    /**
    * @const
    * @default "committed"
    */
    COMMITTED: string;
    /**
    * @const
    * @default "uncommitted"
    */
    UNCOMMITTED: string;
};

/**
* Blobs and container public access types.
*
* @const
* @enum {string}
*/
export const BlobContainerPublicAccessType: {
    /**
    * @const
    * @default null
    */
    OFF: any;
    /**
    * @const
    * @default "container"
    */
    CONTAINER: string;
    /**
    * @const
    * @default "blob"
    */
    BLOB: string;
};

/**
* Describes actions that can be performed on a page blob sequence number.
* @const
* @enum
*/
export const SequenceNumberAction: {
    /**
    * @const
    * @default "max"
    */
    MAX: string;
    /**
    * @const
    * @default "update"
    */
    UPDATE: string;
    /**
    * @const
    * @default "increment"
    */
    INCREMENT: string;
};