/**
 * 所有路由全部平铺为一级(权限由后端控制)
 **/

const asyncRoutes = [
  {
    path: "/icon-show",
    name: "icon-show",
    component: () => import("@/pages/icon-show/index.vue"),
    meta: {
      title: "图标管理",
      authorityCode: ["hats.1"],
    },
  },
  {
    path: "/echart-show",
    name: "echart-show",
    component: () => import("@/pages/echart-show/index.vue"),
    meta: {
      title: "图表管理",
      authorityCode: ["hats.2"],
    },
  },
  {
    path: "/form-config",
    name: "form-config",
    component: () => import("@/pages/form-config/index.vue"),
    meta: {
      title: "表格管理",
      authorityCode: ["hats.3"],
    },
  },
];

export default asyncRoutes;
