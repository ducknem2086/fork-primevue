import { uuid } from '@app/oda-component/utils/uuid';

/**
 * @deprecated since v4.3.0. Use `uuid` from @app/oda-component/utils instead.
 * @param {string} prefix
 * @return {string}
 */
export default function (prefix = 'pv_id_') {
    return uuid(prefix);
}
