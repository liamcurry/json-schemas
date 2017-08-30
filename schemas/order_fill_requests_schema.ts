export const orderFillRequestsSchema = {
    id: '/OrderFillRequests',
    type: 'array',
    items: {
        properties: {
            signedOrder: {$ref: '/signedOrderSchema'},
            takerTokenFillAmount: {$ref: '/Number'},
        },
        required: ['signedOrder', 'takerTokenFillAmount'],
        type: 'object',
    },
};
