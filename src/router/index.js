import { createRouter, createWebHashHistory } from "vue-router";
import Layout from "@/layout/index.vue";
import NotFound from "@/pages/404/index.vue";
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "layout",
      component: () => import("@/layout/index.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/pages/login/index.vue"),
    },
    {
      path: "/redirect-page",
      redirect: (to) => {
        return {
          name: "login",
        };
        // return { path: '/search', query: { q: to.params.searchText } }
      },
    },
    /**
     * 二级路由出口
     **/
    {
      path: "/main",
      name: "main-page",
      component: Layout,
      children: [
        {
          path: "/form-config",
          name: "form-config",
          component: () => import("@/pages/form-config/index.vue"),
          meta: {
            title: "表格管理",
            authorityCode: ["hats.3"],
          },
        },
        {
          path: "/flow-admin",
          name: "flow-admin",
          component: () => import("@/pages/flow-admin/index.vue"),
          meta: {
            title: "流程管理",
            authorityCode: ["hats.3"],
          },
        },
      ],
    },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
  ],
});

export default router;
