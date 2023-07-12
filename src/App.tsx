import { NConfigProvider, NMessageProvider } from "naive-ui";
import { defineComponent } from "vue";
import { Layout } from './layout/index';
 
export const App = defineComponent({
    name: 'App',
    setup() {
      return () => (
        <NConfigProvider inlineThemeDisabled>
        <NMessageProvider>
            <Layout />
      </NMessageProvider> 
      </NConfigProvider> 
      ) 
    }
})