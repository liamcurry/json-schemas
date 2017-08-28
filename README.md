# json-schemas
Contains 0x-related json schemas

## Usage:
```
import {SchemaValidator, ValidatorResult, schemas} from '0x-json-schemas';

const {orderSchema} = schemas;
const validator = new SchemaValidator();

const order = {
    ...
};
const validatorResult: ValidatorResult = validator.validate(order, orderSchema); // Contains all errors
const isValid: boolean = validator.validate(order, orderSchema); // Only returns boolean
```
