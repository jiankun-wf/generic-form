import { NLayout, NLayoutContent, NLayoutHeader, NLayoutSider } from "naive-ui";
import { defineComponent } from "vue";
import { LayoutHeader } from './Header';
import { LayoutMenu } from './Menu'
import { shallowRef } from "vue";
import { unref } from "vue";
import { View } from "./View";


export const Layout = defineComponent({
    name: 'Layout',

    setup() {

        const collapsed = shallowRef(false);
        const tollgeCollapsed = (val: boolean) => {
            collapsed.value = val;
        }

       return () => (
        <NLayout position="absolute">
            <NLayoutHeader bordered position="absolute">
                <LayoutHeader />
            </NLayoutHeader>
            <NLayout hasSider position="absolute" class="!top-57px">
                <NLayoutSider collapsed={unref(collapsed)} onUpdate:collapsed={tollgeCollapsed} bordered width={220} collapsedWidth={12} show-trigger>
                  <LayoutMenu collapsed={unref(collapsed)} />
                </NLayoutSider>
                <NLayoutContent style={{ padding: '16px' }}>
                    <View />
                </NLayoutContent>
            </NLayout>
        </NLayout>
       ) 
    }
})