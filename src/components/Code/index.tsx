import { PropType, defineComponent } from "vue";
import { NCode } from "naive-ui";
import hljs from 'highlight.js/lib/core';
import typescript from 'highlight.js/lib/languages/typescript';

hljs.registerLanguage('typescript', typescript)

export const Code = defineComponent({
    name: 'Code',
    props: {
      code: {
        type: String as PropType<string>,
        default: '',
      }
    },
    setup(props) {
      return () => (
        <NCode code={props.code} hljs={hljs} language="typescript" word-wrap	trim={false} />
      )  
    }
})