// @ts-check
import Vue from 'vue';
import Swal from 'sweetalert2/dist/sweetalert2';

type VueSwalInstance = typeof Swal.fire;

declare module 'vue/types/vue' {
  interface Vue {
    $swal: VueSwalInstance;
  }

  interface VueConstructor<V extends Vue = Vue> {
    swal: VueSwalInstance;
  }
}

class VueSweetalert2 {
  static install(Vue: Vue | any, options?: any): void {
    options = {
      ...options,
    };

    let __swal = null;
    if (options) {
      __swal = Swal.mixin(options);
    }

    const _swal = options ? __swal.fire.bind(__swal) : Swal.fire.bind(Swal);

    // adding a global method or property
    Vue.swal = _swal;

    // add the instance method
    // if (!Vue.prototype.hasOwnProperty('$swal')) {
    //   Vue.prototype.$swal = _swal;
    // }
  }
}

export default VueSweetalert2;
