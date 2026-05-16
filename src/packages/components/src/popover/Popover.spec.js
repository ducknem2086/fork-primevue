import { mount } from '@vue/test-utils';
import OdaComponents from '@app/oda-component/config';
import Popover from './Popover.vue';

describe('Popover.vue', () => {
    let wrapper;

    beforeEach(async () => {
        wrapper = mount(Popover, {
            global: {
                plugins: [OdaComponents],
                stubs: {
                    teleport: true
                }
            },
            slots: {
                default: '@app/oda-component'
            }
        });

        await wrapper.vm.toggle({}, {});
    });

    it('should exist', () => {
        expect(wrapper.find('.p-popover.p-component').exists()).toBe(true);
        expect(wrapper.find('.p-popover-content').exists()).toBe(true);
        expect(wrapper.find('.p-popover-content').text()).toBe('@app/oda-component');
    });
});
