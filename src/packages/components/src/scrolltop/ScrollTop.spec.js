import { mount } from '@vue/test-utils';
import OdaComponents from '@app/oda-component/config';
import ScrollTop from './ScrollTop.vue';

describe('ScrollTop.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(ScrollTop, {
            global: {
                plugins: [OdaComponents],
                stubs: {
                    transition: false
                }
            }
        });
    });

    it('should exist', async () => {
        await wrapper.setData({ visible: true });

        expect(wrapper.find('.p-scrolltop.p-component').exists()).toBe(true);
    });
});
