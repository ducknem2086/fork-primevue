import { appendError, normalizeError } from '../utils';

export const yupResolver = (schema, schemaOptions = {}) => async ({ values, value, name } = {}) => {
    const data = values ?? value;

    try {
        const result = await schema.validate(data, { abortEarly: false, ...schemaOptions });

        return {
            values: result,
            errors: {}
        };
    } catch (error) {
        const errors = {};
        const inner = error?.inner?.length ? error.inner : [error];

        inner.forEach((issue) => appendError(errors, issue.path || name, normalizeError(issue)));

        return {
            values: data,
            errors
        };
    }
};
