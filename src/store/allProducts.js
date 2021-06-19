import axios from 'axios';
import Swal from 'sweetalert2/dist/sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';

export default {
  state: {
    allProducts: [],
    category: [],
  },
  actions: {
    getAllProducts({ commit }) {
      const url = `${process.env.VUE_APP_APIURL}/api/${process.env.VUE_APP_APIPATH}/products/all`;
      commit('loading', true);
      axios.get(url)
        .then((res) => {
          if (res.data.success) {
            commit('allProducts', Object.values(res.data.products).map((item) => ({
              ...item, num: 1, joined: false, bookmark: false,
            })));
            commit('category', new Set(Object.values(res.data.products).map((item) => item.category)));
          } else {
            Swal.fire(res.data.message);
          }
          commit('loading', false);
        })
        .catch(() => {
          commit('loading', false);
          Swal.fire('請求API失敗');
        });
    },
    updateProductNum({ commit }, data) {
      commit('updateNum', data);
    },
  },
  mutations: {
    updateNum(state, data) {
      const [id, num] = data;
      state.allProducts.forEach((item, index) => {
        if (item.id === id) {
          state.allProducts[index].num = num;
        }
      });
    },
    allProducts(state, payload) {
      state.allProducts = payload;
    },
    category(state, payload) {
      state.category = payload;
    },
  },
  getters: {
    specialOffer(state) {
      return state.allProducts.filter((item) => item.origin_price !== item.price);
    },
  },
};