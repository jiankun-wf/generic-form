import { defineComponent } from "vue";
import { RouterView } from 'vue-router';

export const View = defineComponent({
    name: 'View',
    setup() {
        return () => (
            <RouterView>

            </RouterView>
        )
    }
})