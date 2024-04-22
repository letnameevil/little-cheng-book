import router from "@/router/index";
import NProgress from "nprogress";

router.beforeEach(async (to, from) => {
  NProgress.start();
});

router.afterEach((to, from, fal) => {
  NProgress.done();
});
