import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    TShirts: [],
    TShirtsInBag: [],
  },
  mutations: {
    loadTShirts(state, TShirts) {
      state.TShirts = TShirts;
    },

    addToBag(state, TShirt) {
      state.TShirtsInBag.push(TShirt);
    },

    removeFromBag(state, TShirtId) {
      var updatedBag = state.TShirtsInBag.filter(
        (item) => TShirtId != item.id  );
      state.TShirtsInBag = updatedBag;
      
    },
  },
  actions: {
    loadTShirts({ commit }) {
      axios.get("http://vps-a47222b1.vps.ovh.net/TShirt").then((response) => {
        commit("loadTShirts", response.data);
      });
    },

    addToBag({ commit }, TShirt) {
      commit("addToBag", TShirt);
    },

    removeFromBag({ commit }, TShirtId) {
      if (confirm("Voulez-vous vraiment retirer l'article du panier ??")) {
        commit("removeFromBag", TShirtId);
      }
    },
  },

  modules: {},
});
