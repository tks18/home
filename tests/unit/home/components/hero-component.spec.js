import Vuetify from 'vuetify';
import { vuetifyOptions } from '@p/vuetify';
import { createLocalVue, mount } from '@vue/test-utils';
import title_component from '@v/home/components/hero-component';

describe('Home Hero Component.vue', () => {
  const localVue = createLocalVue();
  let vuetify;
  let propsData;
  let wrapper;

  beforeEach(() => {
    vuetify = new Vuetify(vuetifyOptions);
    propsData = {
      ismobile: false,
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
});
