
import { defineStore } from "pinia";
import { reactive, readonly } from "vue";
import { useRouter } from "vue-router";

export const usePageStore = defineStore("page", () => {
  const state = reactive({
    title: "Home",
  });

  function init() {
    const router = useRouter();

    router.beforeEach((to, from, next) => {
      state.title = to.name?.toString() || "Home";

      next();
    });
  }

  function setTitle(title: string) {
    state.title = title;
  }

  return {
    init,
    setTitle,
    ...readonly(state),
  }
});
