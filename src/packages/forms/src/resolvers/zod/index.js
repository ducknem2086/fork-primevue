import { normalizeIssues, runMaybeAsync } from '../utils';

export const zodResolver = (schema, schemaOptions) => async ({ values, value, name } = {}) => {
    const data = values ?? value;
    const result = await runMaybeAsync(() => (schema.safeParseAsync ? schema.safeParseAsync(data, schemaOptions) : schema.safeParse(data, schemaOptions)));

    if (result.success) {
        return {
            values: result.data,
            errors: {}
        };
    }

    return {
        values: data,
        errors: normalizeIssues(result.error?.issues || result.error?.errors || [], name)
    };
};
