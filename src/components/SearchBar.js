import SearchBar from './SearchBar.vue';
import { mount } from '@vue/test-utils';

describe('Key event tests', () => {
	it('Text is empty by default', () => {
		const wrapper = mount(SearchBar);
		expect(wrapper.vm.quantity).toBe('')
	})
});
