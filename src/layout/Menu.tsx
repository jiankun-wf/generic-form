import { NMenu } from "naive-ui";
import { PropType, computed, defineComponent, h, unref } from "vue";
import { routes } from "@/router/modules";
import { RouteRecordRaw } from "vue-router";
import { useRouter } from 'vue-router';

export const LayoutMenu = defineComponent({
  name: "LayoutMenu",
  props: {
    collapsed: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },
  setup(props) {
    const { currentRoute, push } = useRouter();
    const resolveRouteChildren = (children?: RouteRecordRaw[]) => {
      return (children ?? []).map((item) => {
        const { path, meta } = item;
        return {
          label: meta?.title,
          show: meta?.hidden !== true,
          key: path,
        };
      });
    };

    const getRoutesMenus = computed(() => {
      return routes.map((item) => {
        const { path, meta, children } = item;
        return {
          label: meta?.title,
          show: meta?.hidden !== true,
          key: path,
          children: resolveRouteChildren(children),
        };
      });
    });

    const handleJump = (path: string) => {
      push({
        path,
      })
    }

    return () => (
      <NMenu
        collapsed={props.collapsed}
        options={unref(getRoutesMenus)}
        collapsedWidth={12}
        value={unref(currentRoute).path}
        defaultExpandAll
        onUpdate:value={handleJump}
      ></NMenu>
    );
  },
});
