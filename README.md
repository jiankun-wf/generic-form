# generic-form 0.4.0

## 表单页面急速构建工具组件

## [文档](https://generic-form-docs.netlify.app "文档")

## [DEMO](https://codesandbox.io/p/sandbox/elated-solomon-uqfc8e?file=%2Fsrc%2FApp.vue)

## 用法

#### 1. 引入

1. `npm install vue-generic-form-next --save`
2. `yarn add vue-generic-form-next -D`
3. `pnpm add vue-generic-form-next -D`

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

4. node >= 20 时
   `pnpm run build:lib`
5. node < 20 时
   `npm run build:lib-old`

## FormProps

| 属性名               | 类型                     | 默认值       | 说明                                     |
| -------------------- | ------------------------ | ------------ | ---------------------------------------- |
| inline               | boolean                  | false        | 是否为行内表单（display-inline）         |
| size                 | "small" "medium" "large" | medium       | 表单及表单下所有组件大小                 |
| labelWidth           | number string "auto"     | "auto"       | 标签宽度，默认自动                       |
| labelPlacement       | top left                 | left         | 标签位置，默认水平                       |
| gridProps            | GridProps                | { cols: 24 } | 栅格配置，详细见下方 GridProps 类型      |
| giProps              | GridItemProps            | { span: 24 } | 栅格项的每一项配置，具体见 GridItemProps |
| baseGridStyle        |                          |              |                                          |
| collapsed            |                          |              |                                          |
| collapsedRows        |                          |              |                                          |
| showActions          |                          |              |                                          |
| actionGridProps      |                          |              |                                          |
| loading              |                          |              |                                          |
| requireMarkPlacement |                          |              |                                          |
| colon                |                          |              |                                          |
| disabled             |                          |              |                                          |
| rules                |                          |              |                                          |
| modelValueName       |                          |              |                                          |
| breakpoints          |                          |              |                                          |
| themeOverrides       |                          |              |                                          |
| schemas              |                          |              |                                          |
