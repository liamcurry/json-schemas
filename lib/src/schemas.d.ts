export declare const schemas: {
    numberSchema: {
        id: string;
        type: string;
        pattern: string;
    };
    addressSchema: {
        id: string;
        type: string;
        pattern: string;
    };
    ecSignatureSchema: {
        id: string;
        properties: {
            v: {
                type: string;
                minimum: number;
                maximum: number;
            };
            r: {
                $ref: string;
            };
            s: {
                $ref: string;
            };
        };
        required: string[];
        type: string;
    };
    ecSignatureParameterSchema: {
        id: string;
        type: string;
        pattern: string;
    };
    indexFilterValuesSchema: {
        id: string;
        additionalProperties: {
            oneOf: {
                $ref: string;
            }[];
        };
        type: string;
    };
    orderCancellationRequestsSchema: {
        id: string;
        type: string;
        items: {
            properties: {
                order: {
                    $ref: string;
                };
                takerTokenCancelAmount: {
                    $ref: string;
                };
            };
            required: string[];
            type: string;
        };
    };
    orderFillOrKillRequestsSchema: {
        id: string;
        type: string;
        items: {
            properties: {
                signedOrder: {
                    $ref: string;
                };
                fillTakerAmount: {
                    $ref: string;
                };
            };
            required: string[];
            type: string;
        };
    };
    orderFillRequestsSchema: {
        id: string;
        type: string;
        items: {
            properties: {
                signedOrder: {
                    $ref: string;
                };
                takerTokenFillAmount: {
                    $ref: string;
                };
            };
            required: string[];
            type: string;
        };
    };
    orderHashSchema: {
        id: string;
        type: string;
        pattern: string;
    };
    orderSchema: {
        id: string;
        properties: {
            maker: {
                $ref: string;
            };
            taker: {
                $ref: string;
            };
            makerFee: {
                $ref: string;
            };
            takerFee: {
                $ref: string;
            };
            makerTokenAmount: {
                $ref: string;
            };
            takerTokenAmount: {
                $ref: string;
            };
            makerTokenAddress: {
                $ref: string;
            };
            takerTokenAddress: {
                $ref: string;
            };
            salt: {
                $ref: string;
            };
            feeRecipient: {
                $ref: string;
            };
            expirationUnixTimestampSec: {
                $ref: string;
            };
            exchangeContractAddress: {
                $ref: string;
            };
        };
        required: string[];
        type: string;
    };
    signedOrderSchema: {
        id: string;
        allOf: ({
            $ref: string;
        } | {
            properties: {
                ecSignature: {
                    $ref: string;
                };
            };
            required: string[];
        })[];
    };
    signedOrdersSchema: {
        id: string;
        type: string;
        items: {
            $ref: string;
        };
    };
    blockParamSchema: {
        id: string;
        oneOf: ({
            type: string;
        } | {
            enum: string[];
        })[];
    };
    subscriptionOptsSchema: {
        id: string;
        properties: {
            fromBlock: {
                $ref: string;
            };
            toBlock: {
                $ref: string;
            };
        };
        type: string;
    };
    tokenSchema: {
        id: string;
        properties: {
            name: {
                type: string;
            };
            symbol: {
                type: string;
            };
            decimals: {
                type: string;
            };
            address: {
                $ref: string;
            };
        };
        required: string[];
        type: string;
    };
};
