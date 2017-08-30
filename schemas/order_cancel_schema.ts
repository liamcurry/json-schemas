export const orderCancellationRequestsSchema = {
    id: '/OrderCancellationRequests',
    type: 'array',
    items: {
        properties: {
            order: {$ref: '/OrderSchema'},
            takerTokenCancelAmount: {$ref: '/Number'},
        },
        required: ['order', 'takerTokenCancelAmount'],
        type: 'object',
    },
};
