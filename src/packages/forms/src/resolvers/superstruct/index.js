import { appendError, normalizeError } from '../utils';

export const superstructResolver = (schema) => async ({ values, value, name } = {}) => {
    const data = values ?? value;

    try {
        const result = schema.create ? schema.create(data) : schema.assert(data);

        return {
            values: result ?? data,
            errors: {}
        };
    } catch (error) {
        const errors = {};
        const failures = typeof error.failures === 'function' ? error.failures() : [error];

        failures.forEach((issue) => appendError(errors, issue.path || name, normalizeError(issue)));

        return {
            values: data,
            errors
        };
    }
};
