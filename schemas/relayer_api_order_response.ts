import {schemas} from '0x-json-schemas';

export const relayerApiOrdersResponse = {
    id: '/RelayerApiOrdersResponse',
    type: 'array',
    items: {$ref: '/OrderResponse'},
};

export const relayerApiOrderResponse = {
    id: '/RelayerApiOrderResponse',
    allOf: [
        { $ref: '/RelayerApiOrderPayload' },
        {
            properties: {
                pending: {
                    type: 'object',
                    properties: {
                        filledAmount: {$ref: '/Number'},
                        cancelAmount: {$ref: '/Number'},
                    },
                },
            },
        },
    ],
};
