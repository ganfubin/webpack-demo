
const VButton = () => import('./button');
const components = {
  VButton,
};

export default {
  install(Vue) {
    Object.keys(components).map((key) => {
      Vue.component(key, components[key]);
    });
  },
};
