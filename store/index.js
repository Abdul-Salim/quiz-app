import {
  signInWithEmailAndPassword,
  auth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "../plugins/firebase";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const strict = false;

export const state = () => ({
  user: JSON.parse(localStorage.getItem("user")),
});

export const mutations = {
  async logout({ commit }) {
    await auth.signOut();
    commit("SET_USER", null);
  },
  async login(state, { email, password }) {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      state.user = user.user;
      localStorage.setItem("user", JSON.stringify(user.user));
      console.log("logged in", user.user);
    } catch (e) {
      console.log(e.message);
      throw new Error("an error occured", e);
    }
  },

  async signup(state, { email, password }) {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      state.user = user.user;
      console.log("signed in", user.user);
      localStorage.setItem("user", JSON.stringify(user.user));
    } catch (e) {
      if (e.code == "auth/email-already-in-use") {
        try {
          const user = await auth.signInWithEmailAndPassword(email, password);
          commit("SET_USER", user.user);
          localStorage.setItem("user", JSON.stringify(user.user));
          console.log("logged in", user.user);
        } catch (e) {
          throw new Error("an error occured", e);
        }
      }
    }
  },
};

export const actions = {};
