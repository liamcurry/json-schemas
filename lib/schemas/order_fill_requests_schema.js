"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderFillRequestsSchema = {
    id: '/OrderFillRequests',
    type: 'array',
    items: {
        properties: {
            signedOrder: { $ref: '/signedOrderSchema' },
            takerTokenFillAmount: { $ref: '/Number' },
        },
        required: ['signedOrder', 'takerTokenFillAmount'],
        type: 'object',
    },
};
//# sourceMappingURL=order_fill_requests_schema.js.map