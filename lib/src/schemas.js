"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var basic_type_schemas_1 = require("../schemas/basic_type_schemas");
var ec_signature_schema_1 = require("../schemas/ec_signature_schema");
var index_filter_values_schema_1 = require("../schemas/index_filter_values_schema");
var order_cancel_schema_1 = require("../schemas/order_cancel_schema");
var order_fill_or_kill_requests_schema_1 = require("../schemas/order_fill_or_kill_requests_schema");
var order_fill_requests_schema_1 = require("../schemas/order_fill_requests_schema");
var order_hash_schema_1 = require("../schemas/order_hash_schema");
var order_schemas_1 = require("../schemas/order_schemas");
var subscription_opts_schema_1 = require("../schemas/subscription_opts_schema");
var token_schema_1 = require("../schemas/token_schema");
var signed_orders_schema_1 = require("../schemas/signed_orders_schema");
exports.schemas = {
    numberSchema: basic_type_schemas_1.numberSchema,
    addressSchema: basic_type_schemas_1.addressSchema,
    ecSignatureSchema: ec_signature_schema_1.ecSignatureSchema,
    ecSignatureParameterSchema: ec_signature_schema_1.ecSignatureParameterSchema,
    indexFilterValuesSchema: index_filter_values_schema_1.indexFilterValuesSchema,
    orderCancellationRequestsSchema: order_cancel_schema_1.orderCancellationRequestsSchema,
    orderFillOrKillRequestsSchema: order_fill_or_kill_requests_schema_1.orderFillOrKillRequestsSchema,
    orderFillRequestsSchema: order_fill_requests_schema_1.orderFillRequestsSchema,
    orderHashSchema: order_hash_schema_1.orderHashSchema,
    orderSchema: order_schemas_1.orderSchema,
    signedOrderSchema: order_schemas_1.signedOrderSchema,
    signedOrdersSchema: signed_orders_schema_1.signedOrdersSchema,
    blockParamSchema: subscription_opts_schema_1.blockParamSchema,
    subscriptionOptsSchema: subscription_opts_schema_1.subscriptionOptsSchema,
    tokenSchema: token_schema_1.tokenSchema,
};
//# sourceMappingURL=schemas.js.map