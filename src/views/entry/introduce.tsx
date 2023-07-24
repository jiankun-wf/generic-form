import { defineComponent } from "vue";

export default defineComponent({
    name: 'EntryIntroduce',
    setup() {
        return () => (
            <div>
             <h1 class="first">generic-form-vue-next</h1>

             <p>一个页面表单极速构建工具组件</p>
             <p>以typescript构建的 体积较小（压缩后60kb）</p>

             <h2>现代化响应式栅格布局</h2>
             <p>
                采用grid现代布局，避免传统栅格的24 / n 不为整数问题
             </p>
             <p>
                响应式，根据窗口宽度自适应栅格
             </p>

             <h2>组件库基本兼容</h2>

             <p>除校验反馈，完全适配任何组件库</p>

             <h2>灵活渲染</h2>

             <p>规则渲染</p>
             <p>自定义渲染</p>
             <p>插槽渲染</p>

             <h2>内置方法丰富</h2>

             <p>内置若干方法，灵活度高</p>
            </div>
        )
    }
})