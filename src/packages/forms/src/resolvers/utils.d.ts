export interface FormResolverError {
    message: string;
    type?: string;
}

export type FormResolverErrors = Record<string, FormResolverError[]>;

export declare const appendError: (errors: FormResolverErrors, path: string | string[] | undefined, error: FormResolverError) => FormResolverErrors;
export declare const normalizeError: (error: any) => FormResolverError;
export declare const normalizeIssues: (issues?: any[], fallbackPath?: string) => FormResolverErrors;
export declare const isPromiseLike: (value: any) => boolean;
export declare const runMaybeAsync: <T>(fn: () => T | Promise<T>) => Promise<T>;

