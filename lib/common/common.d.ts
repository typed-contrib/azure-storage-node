// Type definitions for azure-storage-node v0.10.0
// Project: https://github.com/Azure/azure-storage-node
// Definitions by: Maxime LUCE <https://github.com/SomaticIT/>
// Definitions: https://github.com/typed-contrib/azure-storage-node

export import Logger = require("./diagnostics/logger");
export import WebResource = require("./http/webresource");

export import StorageServiceClient = require("./services/storageserviceclient");

export import LinearRetryPolicyFilter = require("./filters/linearretrypolicyfilter");
export import ExponentialRetryPolicyFilter = require("./filters/exponentialretrypolicyfilter");
export import RetryPolicyFilter = require("./filters/retrypolicyfilter");

export import SpeedSummary = require("./streams/speedsummary");

export import Constants = require("./util/constants");
export import SR = require("./util/sr");
export import date = require("./util/date");
export import validate = require("./util/validate");
export import StorageUtilities = require("./util/storageutilities");
export import AccessCondition = require("./util/accesscondition");
