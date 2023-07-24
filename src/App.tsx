import { NConfigProvider, NMessageProvider } from "naive-ui";
import { defineComponent } from "vue";
import { RouterView } from "vue-router";
 
export const App = defineComponent({
    name: 'App',
    setup() {
      return () => (
        <NConfigProvider inlineThemeDisabled>
        <NMessageProvider>
            <RouterView />
      </NMessageProvider> 
      </NConfigProvider> 
      ) 
    }
})