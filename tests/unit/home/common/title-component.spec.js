import Vuetify from 'vuetify';
import { vuetifyOptions } from '@p/vuetify';
import { createLocalVue, mount } from '@vue/test-utils';
import title_component from '@v/home/components/common/title-component';

describe('Common Home Title Component.vue', () => {
  const localVue = createLocalVue();
  let vuetify;
  let propsData;
  let wrapper;

  beforeEach(() => {
    vuetify = new Vuetify(vuetifyOptions);
    propsData = {
      id: 'testing-id',
      title: 'Testing Title',
    };
    wrapper = mount(title_component, {
      localVue,
      vuetify,
      propsData,
    });
  });
  it('Checks Vue instance and Matches with Snapshot', () => {
    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('Checks the Element id with the passed id', () => {
    const div = wrapper.find('div');
    expect(div.attributes('id')).toBe(`home-${propsData.id}`);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('Checks Title text with the Props Sent', () => {
    const title = wrapper.find(`#home-${propsData.id}`);
    expect(title.exists()).toBeTruthy();
    expect(title.text()).toBe(propsData.title);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
