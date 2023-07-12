import { defineComponent } from "vue";


export const LayoutHeader = defineComponent({
    name: 'LayoutHeader',

    setup() {
      return () => (
        <div class="h-14 px-7 leading-14">
          <span class="text-xl font-semibold">generic-form-vue-next文档</span> 
        </div>
      )  
    }
})