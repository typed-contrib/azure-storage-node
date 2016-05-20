// Type definitions for azure-storage-node v0.10.0
// Project: https://github.com/Azure/azure-storage-node
// Definitions by: Maxime LUCE <https://github.com/SomaticIT/>
// Definitions: https://github.com/typed-contrib/azure-storage-node

/**
* Defines constants, enums, and utility functions for use with the File service.
* @namespace FileUtilities
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
* Listing details.
*
* @const
* @enum {string}
*/
export const ListingDetails: {
    /**
    * @const
    * @default "metadata"
    */
    METADATA: string;
};

/**
* File and share public access types.
*
* @const
* @enum {string}
*/
export const SharePublicAccessType: {
    /**
    * @const
    * @default null
    */
    OFF: any;
    /**
    * @const
    * @default "share"
    */
    SHARE: string;
    /**
    * @const
    * @default "file"
    */
    FILE: string;
};