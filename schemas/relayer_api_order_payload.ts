export const relayerApiOrderPayload = {
    id: '/RelayerApiOrderPayload',
    type: 'object',
    properties: {
        signedOrder: {$ref: '/SignedOrder'},
        state: {
            enum: ['open', 'expired', 'closed', 'unfunded'],
        },
        remainingTakerTokenAmount: {$ref: '/Number'},
    },
    required: ['signedOrder', 'state', 'remainingTakerTokenAmount'],
};
