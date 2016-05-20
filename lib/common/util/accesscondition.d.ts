// Type definitions for azure-storage-node v0.10.0
// Project: https://github.com/Azure/azure-storage-node
// Definitions by: Maxime LUCE <https://github.com/SomaticIT/>
// Definitions: https://github.com/typed-contrib/azure-storage-node

/**
* Defines constants, enums, and utility functions for use with storage access condition.
* @namespace
*/

export interface AccessConditions {
  EtagNonMatch?: string;
  EtagMatch?: string;
  DateModifedSince?: Date | string;
  DateUnModifedSince?: Date | string;
  SequenceNumberEqual?: number | string;
  SequenceNumberLessThan?: number | string;
  SequenceNumberLessThanOrEqual?: number | string;
}

export type EmptyCondition = {} & AccessConditions;
export type IfNotExistsCondition = { EtagNonMatch: "*" } & AccessConditions;
export type IfExistsCondition = { EtagMatch: "*" } & AccessConditions;
export type IfNoneMatchCondition = { EtagNonMatch: string } & AccessConditions;
export type IfMatchCondition = { EtagMatch: string } & AccessConditions;
export type IfModifiedSinceCondition = { DateModifedSince: Date | string } & AccessConditions;
export type IfNotModifiedSinceCondition = { DateUnModifedSince: Date | string } & AccessConditions;
export type SequenceNumberEqualCondition = { SequenceNumberEqual: number | string } & AccessConditions;
export type SequenceNumberLessThanCondition = { SequenceNumberLessThan: number | string } & AccessConditions;
export type SequenceNumberLessThanOrEqualCondition = { SequenceNumberLessThanOrEqual: number | string } & AccessConditions;

/**
* Constructs an empty access condition.
* @return {AccessCondition} An empty AccessCondition object
*/
export function generateEmptyCondition(): EmptyCondition;

/**
* Constructs an access condition such that an operation will be performed only if the resource does not exist on the service
* Setting this access condition modifies the request to include the HTTP If-None-Match conditional header

* @return {AccessConditions} An AccessCondition object that represents a condition that checks for nonexistence
*/
export function generateIfNotExistsCondition(): IfNotExistsCondition;

/**
* Constructs an access condition such that an operation will be performed only if the resource exists on the service
* Setting this access condition modifies the request to include the HTTP If-Match conditional header

* @return {AccessConditions} An AccessCondition object that represents a condition that checks for existence
*/
export function generateIfExistsCondition(): IfExistsCondition;

/**
* Constructs an access condition such that an operation will be performed only if the resource's ETag value 
* does not match the specified ETag value.
* Setting this access condition modifies the request to include the HTTP If-None-Match conditional header
*
* @param  {string} etag                    The ETag value to check against the resource's ETag
* @return {AccessConditions}               An AccessCondition object that represents the If-None-Match condition
*/
export function generateIfNoneMatchCondition(etag: string): IfNoneMatchCondition;

/**
* Constructs an access condition such that an operation will be performed only if the resource's ETag value
* matches the specified ETag value
* Setting this access condition modifies the request to include the HTTP If-Match conditional header
*
* @param  {string} etag                    The ETag value to check against the resource's ETag
* @return {AccessConditions}               An AccessCondition object that represents the If-Match condition
*/
export function generateIfMatchCondition(etag: string): IfMatchCondition;

/**
* Constructs an access condition such that an operation will be performed only if the resource has been
* modified since the specified time
*
* Setting this access condition modifies the request to include the HTTP If-Modified-Since conditional header
*
* @param  {Date|string}  time              A date object specifying the time since which the resource must have been modified
* @return {AccessConditions}               An AccessCondition object that represents the If-Modified-Since condition
*/
export function generateIfModifiedSinceCondition(time: Date | string): IfModifiedSinceCondition;

/**
* Constructs an access condition such that an operation will be performed only if the resource has not been
* modified since the specified time
* Setting this access condition modifies the request to include the HTTP If-Unmodified-Since conditional header
*
* @param  {Date|string}    time            A date object specifying the time since which the resource must have not been modified
* @return {AccessConditions}               An AccessCondition object that represents the If-Unmodified-Since condition
*/
export function generateIfNotModifiedSinceCondition(time: Date | string): IfNotModifiedSinceCondition;

/**
* Constructs an access condition such that an operation will be performed only if the resource's sequence number
* is equal to the specified value
* Setting this access condition modifies the request to include the HTTP x-ms-if-sequence-number-eq conditional header
*
* @param  {Number|string}    sequenceNumber    A date object specifying the time since which the resource must have not been modified
* @return {AccessConditions}                   An AccessCondition object that represents the If-Unmodified-Since condition
*/
export function generateSequenceNumberEqualCondition(sequenceNumber: number | string): SequenceNumberEqualCondition;

/**
* Constructs an access condition such that an operation will be performed only if the resource's sequence number
* is less than the specified value
* Setting this access condition modifies the request to include the HTTP x-ms-if-sequence-number-lt conditional header
*
* @param  {Number|string}    sequenceNumber    A date object specifying the time since which the resource must have not been modified
* @return {AccessConditions}                   An AccessCondition object that represents the If-Unmodified-Since condition
*/
export function generateSequenceNumberLessThanCondition(sequenceNumber: number | string): SequenceNumberLessThanCondition;

/**
* Constructs an access condition such that an operation will be performed only if the resource's sequence number
* is less than or equal to the specified value
* Setting this access condition modifies the request to include the HTTP x-ms-if-sequence-number-le conditional header
*
* @param  {Number|string}    sequenceNumber    A date object specifying the time since which the resource must have not been modified
* @return {AccessConditions}                   An AccessCondition object that represents the If-Unmodified-Since condition
*/
export function generateSequenceNumberLessThanOrEqualCondition(sequenceNumber: number | string): SequenceNumberLessThanOrEqualCondition;