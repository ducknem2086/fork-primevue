import { appendError, normalizeError } from '../utils';

export const joiResolver = (schema, schemaOptions = {}) => async ({ values, value, name } = {}) => {
    const data = values ?? value;
    const result = schema.validate(data, { abortEarly: false, ...schemaOptions });

    if (!result.error) {
        return {
            values: result.value,
            errors: {}
        };
    }

    const errors = {};

    result.error.details?.forEach((issue) => appendError(errors, issue.path || name, normalizeError(issue)));

    return {
        values: result.value ?? data,
        errors
    };
};
