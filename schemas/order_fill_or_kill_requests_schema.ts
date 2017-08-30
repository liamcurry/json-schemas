export const orderFillOrKillRequestsSchema = {
    id: '/OrderFillOrKillRequests',
    type: 'array',
    items: {
        properties: {
            signedOrder: {$ref: '/signedOrderSchema'},
            fillTakerAmount: {$ref: '/Number'},
        },
        required: ['signedOrder', 'fillTakerAmount'],
        type: 'object',
    },
};
