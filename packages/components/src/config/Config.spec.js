import { defaultOptions } from '@oda-components/core/config';
import { config } from '@vue/test-utils';

config.global.mocks['$OdaComponents'] = {
    config: defaultOptions
};

Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn()
    }))
});

describe('OdaComponents.vue', () => {
    it('should exist', async () => {});
});
