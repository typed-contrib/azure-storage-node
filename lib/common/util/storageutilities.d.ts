// Type definitions for azure-storage-node v0.10.0
// Project: https://github.com/Azure/azure-storage-node
// Definitions by: Maxime LUCE <https://github.com/SomaticIT/>
// Definitions: https://github.com/typed-contrib/azure-storage-node

/**
* Defines constants, enums, and utility functions for use with storage.
* @namespace
*/

/**
* Specifies the location mode used to decide which location the request should be sent to.
*
* @const
* @enum {number}
*/
export const LocationMode: {
  /** The primary location only */
  PRIMARY_ONLY: number;

  /** The primary location first, then the secondary */
  PRIMARY_THEN_SECONDARY: number;

  /** The secondary location only */
  SECONDARY_ONLY: number;

  /** The secondary location first, then the primary */
  SECONDARY_THEN_PRIMARY: number;
};