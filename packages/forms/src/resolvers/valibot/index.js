import { normalizeIssues, runMaybeAsync } from '../utils';

export const valibotResolver = (schema, parser) => async ({ values, value, name } = {}) => {
    const data = values ?? value;
    const parse = parser?.safeParseAsync || parser?.safeParse || schema?.safeParseAsync || schema?.safeParse;

    if (!parse) {
        throw new Error('valibotResolver requires a parser with safeParse/safeParseAsync because the legacy forms resolver engine is not used in oda-components.');
    }

    const result = await runMaybeAsync(() => (parser ? parse(schema, data) : parse(data)));

    if (result.success) {
        return {
            values: result.output ?? result.data,
            errors: {}
        };
    }

    return {
        values: data,
        errors: normalizeIssues(result.issues || [], name)
    };
};
