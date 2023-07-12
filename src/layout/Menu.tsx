import { NMenu, MenuOption } from "naive-ui";
import { PropType, defineComponent, h } from "vue";

export const LayoutMenu = defineComponent({
    name: 'LayoutMenu',
    props: {
      collapsed: {
        type: Boolean as PropType<boolean>,
        default: false,
      },
    },
    setup(props) {

       const menuOptions: MenuOption[] = [
        {
            label: () => h('span', { class: 'text-red-400' }, '特别注意'),
            key: 'must-notice',
            type: 'group',
            children: [
                {
                    label: '必须注册组件映射',
                    key: 'must-reigster',
                },
                {
                    label: '可单独添加',
                    key: 'can-add-alone',
                }
            ]
        }
       ]

       return () => (
         <NMenu collapsed={props.collapsed} options={menuOptions} collapsedWidth={48}>

         </NMenu>
       ) 
    }
})