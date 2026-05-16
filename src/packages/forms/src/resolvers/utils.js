const toPath = (path, fallback) => {
    if (Array.isArray(path)) return path.length ? path.join('.') : fallback;
    return path || fallback;
};

export const appendError = (errors, path, error) => {
    const key = toPath(path, '_root');

    errors[key] ||= [];
    errors[key].push(error);

    return errors;
};

export const normalizeError = (error) => ({
    message: error?.message || String(error || 'Invalid value'),
    type: error?.code || error?.type || error?.name || undefined
});

export const normalizeIssues = (issues = [], fallbackPath) => {
    return issues.reduce((errors, issue) => appendError(errors, issue.path || issue.pathValue || fallbackPath, normalizeError(issue)), {});
};

export const isPromiseLike = (value) => value && typeof value.then === 'function';

export const runMaybeAsync = async (fn) => {
    const result = fn();

    return isPromiseLike(result) ? await result : result;
};

