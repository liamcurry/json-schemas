import {
    numberSchema,
    addressSchema,
} from '../schemas/basic_type_schemas';
import {
    ecSignatureSchema,
    ecSignatureParameterSchema,
} from '../schemas/ec_signature_schema';
import {
    indexFilterValuesSchema,
} from '../schemas/index_filter_values_schema';
import {
    orderCancellationRequestsSchema,
} from '../schemas/order_cancel_schema';
import {
    orderFillOrKillRequestsSchema,
} from '../schemas/order_fill_or_kill_requests_schema';
import {
    orderFillRequestsSchema,
} from '../schemas/order_fill_requests_schema';
import {
    orderHashSchema,
} from '../schemas/order_hash_schema';
import {
    orderSchema,
    signedOrderSchema,
} from '../schemas/order_schemas';
import {
    blockParamSchema,
    subscriptionOptsSchema,
} from '../schemas/subscription_opts_schema';
import {
    tokenSchema,
} from '../schemas/token_schema';

export const schemas = {
    numberSchema,
    addressSchema,
    ecSignatureSchema,
    ecSignatureParameterSchema,
    indexFilterValuesSchema,
    orderCancellationRequestsSchema,
    orderFillOrKillRequestsSchema,
    orderFillRequestsSchema,
    orderHashSchema,
    orderSchema,
    signedOrderSchema,
    signedOrdersSchema,
    blockParamSchema,
    subscriptionOptsSchema,
    tokenSchema,
};
