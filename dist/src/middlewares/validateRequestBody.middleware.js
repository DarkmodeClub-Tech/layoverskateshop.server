"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequestBodyMiddleware = void 0;
const validateRequestBodyMiddleware = (schema) => (req, res, next) => {
    const validatedData = schema.parse(req.body);
    req.body = validatedData;
    return next();
};
exports.validateRequestBodyMiddleware = validateRequestBodyMiddleware;
