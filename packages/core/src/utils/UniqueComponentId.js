import { uuid } from '@oda-components/utils/uuid';

/**
 * @deprecated since v4.3.0. Use `uuid` from @oda-components/utils instead.
 * @param {string} prefix
 * @return {string}
 */
export default function (prefix = 'pv_id_') {
    return uuid(prefix);
}
