import { NCard } from "naive-ui";
import { unref } from "vue";
import { shallowRef } from "vue";
import { PropType, defineComponent, renderSlot } from "vue";
import { Code } from "../Code";


export const DescriptionCard = defineComponent({
    name: 'DescriptionCard',
    props: {
      title: {
        type: String as PropType<string>,
        default: '',
      },
      code: {
        type: String as PropType<string>,
        default: '',
      }
    },
    setup(props, { slots }) {
      const showCode = shallowRef(true);
      return () => (
        <NCard title={props.title} size="small" shadow border segmented={{ footer: true }}>
          {{
            'header-extra': () => slots['header-extra'] && renderSlot(slots, 'header-extra'),
            'default': () => slots.default && renderSlot(slots, 'default'),
            'footer': () => unref(showCode) && <Code code={props.code}></Code>
          }}
        </NCard>
      )  
    }
})