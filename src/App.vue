<script lang="ts" setup>
import { BasicForm, type FormSchema, useForm } from "../lib";
import { NCard } from "naive-ui";
import type { ComponentType } from "./config/components";
// import { onMounted } from 'vue';

const schemas: FormSchema<ComponentType>[] = [
  {
    field: "name",
    component: "Select",
    label: "姓名",
    defaultValue: "PC",
    helpMessage: "这是一个提示",
    colProps: { span: 1 },
    componentProps: {
      placeholder: "请输入姓名",
    },
    rule: [{ required: false, message: "请输入姓名", key: "name-required" }],
    slot: "name",
  },
  {
    field: "mobile",
    component: "InputNumber",
    label: "手机",
    componentProps: {
      placeholder: "请输入手机号码",
      showButton: false,
      style: { width: "100%" },
    },
  },
  {
    field: "split-line",
    label: "测试分割线",
    component: "Divider",
    // colProps: { span: 1 },
  },
  {
    field: "type",
    component: "Select",
    label: "类型",
    colProps: { span: 1 },
    componentProps: ({ action }) => ({
      placeholder: "请选择类型",
      options: [
        {
          label: "舒适性",
          value: 1,
        },
        {
          label: "经济性",
          value: 2,
        },
      ],
      "onUpdate:value": (_val: number, item: Record<string, any>) => {
        const { setFieldsValue } = action;
        setFieldsValue({ name: item.label });
      },
    }),
  },
  {
    field: "makeDate",
    component: "Rate",
    label: "星级",
    defaultValue: 4,
    componentProps: {
      type: "date",
      clearable: true,
      onUpdateValue: (e: any) => {
        console.log(e);
      },
    },
    ifShow: ({ values }) => {
      return values.type === 1;
    },
  },
  {
    field: "test",
    component: "ColorPicker",
    label: "颜色测试",
    defaultValue: "#FFFFFF",
    colProps: { span: 1 },
  },
  {
    field: "name2",
    component: "ElInput",
    modelValueName: "modelValue",
    label: "element",
    colProps: { span: 1 },
    componentProps: {
      placeholder: "哈哈哈",
    },
  },
];

const [register, {}] = useForm({
  gridProps: { cols: 2, xGap: 10 },
  labelWidth: "100px",
  layout: "horizontal",
  submitButtonText: "提交预约",
  schemas,
  labelPlacement: "left",
  inline: false,
  size: "medium",
});

function handleSubmit(values: Record<string, any>) {
  console.log(values);
}

function handleReset(values: Record<string, any>) {
  console.log(values);
}

// onMounted(async () => {
//   try {
//     const values = await validate();
//   } catch (e) {
//     console.log(e);
//   }
// });
</script>

<template>
  <div class="app-wrapper">
    <NCard shadow title="useForm" :segmented="{ content: 'soft' }">
      <div class="BasicForm">
        <BasicForm
          @register="register"
          @submit="handleSubmit"
          @reset="handleReset"
        >
        </BasicForm>
      </div>
    </NCard>
  </div>
</template>

<style scoped>
.app-wrapper {
  width: 70%;
  margin: auto;
}
.BasicForm {
  width: 755px;
  margin: 0 auto;
  overflow: hidden;
  padding-top: 20px;
}
</style>
