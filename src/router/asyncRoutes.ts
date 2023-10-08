import Layout from "@/views/Layout/index.vue"
import { Promotion, DataAnalysis, FolderAdd } from "@element-plus/icons-vue"
export const asyncRoutes = [
  {
    meta: {
      title: "仪表盘",
      icon: DataAnalysis
    },
    path: "/",
    component: Layout,
    children: [
      {
        path: "/index",
        component: () => import("@/views/Home/workbench/index.vue"),
        meta: {
          title: "工作台"
        }
      },
      {
        path: "/analysis",
        component: () => import("@/views/Home/analysis/index.vue"),
        meta: {
          title: "分析"
        }
      }
    ]
  },
  {
    meta: {
      title: "功能",
      icon: FolderAdd
    },
    path: "/features",
    component: Layout,
    children: [
      {
        path: "/download",
        component: () => import("@/views/features/download/index.vue"),
        meta: {
          title: "下载"
        }
      },
      {
        path: "/previewPdf",
        component: () => import("@/views/features/previewPdf/index.vue"),
        meta: {
          title: "预览PDF"
        }
      }
    ]
  },
  {
    meta: {
      title: "表格",
      icon: Promotion
    },
    path: "/table",
    component: Layout,
    children: [
      {
        path: "/list",
        component: () => import("@/views/Table/merge.vue"),
        meta: {
          title: "普通表格"
        }
      },
      {
        path: "/merge",
        component: () => import("@/views/Table/list.vue"),
        meta: {
          title: "表格合并"
        }
      }
    ]
  }
]
