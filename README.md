# generic-form 0.3.5

## 表单页面急速构建工具组件

## [文档](https://generic-form-docs.netlify.app "文档")

## [DEMO](https://codesandbox.io/p/sandbox/elated-solomon-uqfc8e?file=%2Fsrc%2FApp.vue)

## 用法

#### 1. 引入

` npm install vue-generic-form-next --save`
`yarn add vue-generic-form-next -D`
`pnpm add vue-generic-form-next -D`

#### 2. 使用，以 element-plus 为例（推荐 naive-ui 组件库，适配性更好）

1.  入口文件中配置好组件映射

```javascript
import { buildComponentMap } from "vue-generic-form-next";
import { ElInput, ElSelect } from "element-plus";
type ComponentType = "Input" | "Select";
buildComponentMap <
  ComponentType >
  [
    ["Input", ElInput],
    ["Select", ElSelect],
  ];
```

2.  在页面中使用

```javascript
 <script setup lang="ts">
   import { BasicForm, useForm } from 'vue-generic-form-next'
   import { type FormSchema } from 'vue-generic-form-next'

    const schemas: FormSchema<'Input' | 'Select'>[] = [
      {
        field: "name",
        component: "Input",
        label: "姓名",
        defaultValue: "PC",
        helpMessage: "这是一个提示",
        colProps: { span: 1 },
        componentProps: {
          placeholder: "请输入姓名",
        },
        rule: [{ required: true, message: "请输入姓名" }],
      },
    ];

    const [registerForm, {}] = useForm({
      gridProps: { cols: 2, xGap: 10 },
      labelWidth: "100px",
      layout: "horizontal",
      schemas,
      labelPlacement: "left",
      inline: false,
      size: "medium",
    });
 </script>
 <template>
   <BasicForm @register="registerForm"  />
 </template>
```

3. 以上示例中，我们创建了一个基本的两列的栅格 Form，有一个输入框绑定 name 的值。
