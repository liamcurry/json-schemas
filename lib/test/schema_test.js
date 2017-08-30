"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
var _ = require("lodash");
var dirtyChai = require("dirty-chai");
var chai = require("chai");
var BigNumber = require("bignumber.js");
var index_1 = require("../src/index");
chai.config.includeStack = true;
chai.use(dirtyChai);
var expect = chai.expect;
var NULL_ADDRESS = '0x0000000000000000000000000000000000000000';
var numberSchema = index_1.schemas.numberSchema, addressSchema = index_1.schemas.addressSchema, ecSignatureSchema = index_1.schemas.ecSignatureSchema, ecSignatureParameterSchema = index_1.schemas.ecSignatureParameterSchema, indexFilterValuesSchema = index_1.schemas.indexFilterValuesSchema, orderCancellationRequestsSchema = index_1.schemas.orderCancellationRequestsSchema, orderFillOrKillRequestsSchema = index_1.schemas.orderFillOrKillRequestsSchema, orderFillRequestsSchema = index_1.schemas.orderFillRequestsSchema, orderHashSchema = index_1.schemas.orderHashSchema, orderSchema = index_1.schemas.orderSchema, signedOrderSchema = index_1.schemas.signedOrderSchema, signedOrdersSchema = index_1.schemas.signedOrdersSchema, blockParamSchema = index_1.schemas.blockParamSchema, subscriptionOptsSchema = index_1.schemas.subscriptionOptsSchema, tokenSchema = index_1.schemas.tokenSchema;
describe('Schema', function () {
    var validator = new index_1.SchemaValidator();
    var validateAgainstSchema = function (testCases, schema, shouldFail) {
        if (shouldFail === void 0) { shouldFail = false; }
        _.forEach(testCases, function (testCase) {
            if (shouldFail) {
                expect(validator.isValid(testCase, schema)).to.be.false();
            }
            else {
                expect(validator.isValid(testCase, schema)).to.be.true();
            }
        });
    };
    describe('#numberSchema', function () {
        it('should validate valid numbers', function () {
            var testCases = ['42', '0', '1.3', '0.2', '00.00'];
            validateAgainstSchema(testCases, numberSchema);
        });
        it('should fail for invalid numbers', function () {
            var testCases = ['.3', '1.', 'abacaba', 'и', '1..0'];
            var shouldFail = true;
            validateAgainstSchema(testCases, numberSchema, shouldFail);
        });
    });
    describe('#addressSchema', function () {
        it('should validate valid addresses', function () {
            var testCases = ['0x8b0292b11a196601ed2ce54b665cafeca0347d42', NULL_ADDRESS];
            validateAgainstSchema(testCases, addressSchema);
        });
        it('should fail for invalid addresses', function () {
            var testCases = [
                '0x',
                '0',
                '0x00',
                '0xzzzzzzB11a196601eD2ce54B665CaFEca0347D42',
                '0x8b0292B11a196601eD2ce54B665CaFEca0347D42',
            ];
            var shouldFail = true;
            validateAgainstSchema(testCases, addressSchema, shouldFail);
        });
    });
    describe('#ecSignatureParameterSchema', function () {
        it('should validate valid parameters', function () {
            var testCases = [
                '0x61a3ed31b43c8780e905a260a35faefcc527be7516aa11c0256729b5b351bc33',
                '0X40349190569279751135161d22529dc25add4f6069af05be04cacbda2ace2254',
            ];
            validateAgainstSchema(testCases, ecSignatureParameterSchema);
        });
        it('should fail for invalid parameters', function () {
            var testCases = [
                '0x61a3ed31b43c8780e905a260a35faefcc527be7516aa11c0256729b5b351bc3',
                '0xzzzz9190569279751135161d22529dc25add4f6069af05be04cacbda2ace2254',
                '40349190569279751135161d22529dc25add4f6069af05be04cacbda2ace2254',
            ];
            var shouldFail = true;
            validateAgainstSchema(testCases, ecSignatureParameterSchema, shouldFail);
        });
    });
    describe('#ecSignatureSchema', function () {
        it('should validate valid signature', function () {
            var signature = {
                v: 27,
                r: '0x61a3ed31b43c8780e905a260a35faefcc527be7516aa11c0256729b5b351bc33',
                s: '0x40349190569279751135161d22529dc25add4f6069af05be04cacbda2ace2254',
            };
            var testCases = [
                signature,
                __assign({}, signature, { v: 28 }),
            ];
            validateAgainstSchema(testCases, ecSignatureSchema);
        });
        it('should fail for invalid signature', function () {
            var v = 27;
            var r = '0x61a3ed31b43c8780e905a260a35faefcc527be7516aa11c0256729b5b351bc33';
            var s = '0x40349190569279751135161d22529dc25add4f6069af05be04cacbda2ace2254';
            var testCases = [
                {},
                { v: v },
                { r: r, s: s, v: 31 },
            ];
            var shouldFail = true;
            validateAgainstSchema(testCases, ecSignatureSchema, shouldFail);
        });
    });
    describe('#orderHashSchema', function () {
        it('should validate valid order hash', function () {
            var testCases = [
                '0x61a3ed31B43c8780e905a260a35faefEc527be7516aa11c0256729b5b351bc33',
                '0x40349190569279751135161d22529dc25add4f6069af05be04cacbda2ace2254',
            ];
            validateAgainstSchema(testCases, orderHashSchema);
        });
        it('should fail for invalid order hash', function () {
            var testCases = [
                {},
                '0x',
                '0x8b0292B11a196601eD2ce54B665CaFEca0347D42',
                '61a3ed31B43c8780e905a260a35faefEc527be7516aa11c0256729b5b351bc33',
            ];
            var shouldFail = true;
            validateAgainstSchema(testCases, orderHashSchema, shouldFail);
        });
    });
    describe('#blockParamSchema', function () {
        it('should validate valid block param', function () {
            var testCases = [
                42,
                'latest',
                'pending',
                'earliest',
            ];
            validateAgainstSchema(testCases, blockParamSchema);
        });
        it('should fail for invalid block param', function () {
            var testCases = [
                {},
                '42',
                'pemding',
            ];
            var shouldFail = true;
            validateAgainstSchema(testCases, blockParamSchema, shouldFail);
        });
    });
    describe('#subscriptionOptsSchema', function () {
        it('should validate valid subscription opts', function () {
            var testCases = [
                { fromBlock: 42, toBlock: 'latest' },
                { fromBlock: 42 },
                {},
            ];
            validateAgainstSchema(testCases, subscriptionOptsSchema);
        });
        it('should fail for invalid subscription opts', function () {
            var testCases = [
                { fromBlock: '42' },
            ];
            var shouldFail = true;
            validateAgainstSchema(testCases, subscriptionOptsSchema, shouldFail);
        });
    });
    describe('#tokenSchema', function () {
        var token = {
            name: 'Zero Ex',
            symbol: 'ZRX',
            decimals: 100500,
            address: '0x8b0292b11a196601ed2ce54b665cafeca0347d42',
            url: 'https://0xproject.com',
        };
        it('should validate valid token', function () {
            var testCases = [
                token,
            ];
            validateAgainstSchema(testCases, tokenSchema);
        });
        it('should fail for invalid token', function () {
            var testCases = [
                __assign({}, token, { address: null }),
                __assign({}, token, { decimals: undefined }),
                [],
                4,
            ];
            var shouldFail = true;
            validateAgainstSchema(testCases, tokenSchema, shouldFail);
        });
    });
    describe('order including schemas', function () {
        var order = {
            maker: NULL_ADDRESS,
            taker: NULL_ADDRESS,
            makerFee: '1',
            takerFee: '2',
            makerTokenAmount: '1',
            takerTokenAmount: '2',
            makerTokenAddress: NULL_ADDRESS,
            takerTokenAddress: NULL_ADDRESS,
            salt: '256',
            feeRecipient: NULL_ADDRESS,
            exchangeContractAddress: NULL_ADDRESS,
            expirationUnixTimestampSec: '42',
        };
        describe('#orderSchema', function () {
            it('should validate valid order', function () {
                var testCases = [
                    order,
                ];
                validateAgainstSchema(testCases, orderSchema);
            });
            it('should fail for invalid order', function () {
                var testCases = [
                    __assign({}, order, { salt: undefined }),
                    __assign({}, order, { salt: 'salt' }),
                    'order',
                ];
                var shouldFail = true;
                validateAgainstSchema(testCases, orderSchema, shouldFail);
            });
        });
        describe('signed order including schemas', function () {
            var signedOrder = __assign({}, order, { ecSignature: {
                    v: 27,
                    r: '0x61a3ed31b43c8780e905a260a35faefcc527be7516aa11c0256729b5b351bc33',
                    s: '0x40349190569279751135161d22529dc25add4f6069af05be04cacbda2ace2254',
                } });
            describe('#signedOrdersSchema', function () {
                it('should validate valid signed orders', function () {
                    var testCases = [
                        [signedOrder],
                    ];
                    validateAgainstSchema(testCases, signedOrdersSchema);
                });
                it('should fail for invalid signed orders', function () {
                    var testCases = [
                        [
                            signedOrder,
                            1,
                        ],
                    ];
                    var shouldFail = true;
                    validateAgainstSchema(testCases, signedOrdersSchema, shouldFail);
                });
            });
            describe('#signedOrderSchema', function () {
                it('should validate valid signed order', function () {
                    var testCases = [
                        signedOrder,
                    ];
                    validateAgainstSchema(testCases, signedOrderSchema);
                });
                it('should fail for invalid signed order', function () {
                    var testCases = [
                        __assign({}, signedOrder, { ecSignature: undefined }),
                    ];
                    var shouldFail = true;
                    validateAgainstSchema(testCases, signedOrderSchema, shouldFail);
                });
            });
            describe('#orderFillOrKillRequestsSchema', function () {
                var orderFillOrKillRequests = [
                    {
                        signedOrder: signedOrder,
                        fillTakerAmount: '5',
                    },
                ];
                it('should validate valid order fill or kill requests', function () {
                    var testCases = [
                        orderFillOrKillRequests,
                    ];
                    validateAgainstSchema(testCases, orderFillOrKillRequestsSchema);
                });
                it('should fail for invalid order fill or kill requests', function () {
                    var testCases = [
                        [
                            __assign({}, orderFillOrKillRequests[0], { fillTakerAmount: undefined }),
                        ],
                    ];
                    var shouldFail = true;
                    validateAgainstSchema(testCases, orderFillOrKillRequestsSchema, shouldFail);
                });
            });
            describe('#orderCancellationRequestsSchema', function () {
                var orderCancellationRequests = [
                    {
                        order: order,
                        takerTokenCancelAmount: '5',
                    },
                ];
                it('should validate valid order cancellation requests', function () {
                    var testCases = [
                        orderCancellationRequests,
                    ];
                    validateAgainstSchema(testCases, orderCancellationRequestsSchema);
                });
                it('should fail for invalid order cancellation requests', function () {
                    var testCases = [
                        [
                            __assign({}, orderCancellationRequests[0], { takerTokenCancelAmount: undefined }),
                        ],
                    ];
                    var shouldFail = true;
                    validateAgainstSchema(testCases, orderCancellationRequestsSchema, shouldFail);
                });
            });
            describe('#orderFillRequestsSchema', function () {
                var orderFillRequests = [
                    {
                        signedOrder: signedOrder,
                        takerTokenFillAmount: '5',
                    },
                ];
                it('should validate valid order fill requests', function () {
                    var testCases = [
                        orderFillRequests,
                    ];
                    validateAgainstSchema(testCases, orderFillRequestsSchema);
                });
                it('should fail for invalid order fill requests', function () {
                    var testCases = [
                        [
                            __assign({}, orderFillRequests[0], { takerTokenFillAmount: undefined }),
                        ],
                    ];
                    var shouldFail = true;
                    validateAgainstSchema(testCases, orderFillRequestsSchema, shouldFail);
                });
            });
        });
    });
    describe('BigNumber serialization', function () {
        it('should correctly serialize BigNumbers', function () {
            var testCases = {
                '42': '42',
                '0': '0',
                '1.3': '1.3',
                '0.2': '0.2',
                '00.00': '0',
                '.3': '0.3',
            };
            _.forEach(testCases, function (serialized, input) {
                expect(JSON.parse(JSON.stringify(new BigNumber(input)))).to.be.equal(serialized);
            });
        });
    });
});
//# sourceMappingURL=schema_test.js.map