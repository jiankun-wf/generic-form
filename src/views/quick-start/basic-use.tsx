import { BasicForm, useForm, type FormSchema } from "generic-form-vue-next";
import type { ComponentType } from "../../config/components";
import { DescriptionCard } from "../../components/DescriptionCard";
import { code } from "../../codes/basic";
import { defineComponent } from "vue";

export default defineComponent({
  name: "BasicFormUse",
  setup() {
    const schemas: FormSchema<ComponentType>[] = [
      {
        field: "name",
        component: "Input",
        label: "姓名",
        defaultValue: "PC",
        colProps: { span: 1 },
        componentProps: {
          placeholder: "请输入姓名",
        },
        rule: [{ required: true, message: "请输入姓名", trigger: "change" }],
      },
      {
        field: "phone",
        component: "InputNumber",
        label: "手机号",
        defaultValue: 18865382133,
        colProps: { span: 1 },
        componentProps: {
          placeholder: "请输入手机号",
          style: { width: "100%" },
        },
        rule: [{ required: true, message: "请输入手机号", type: "number" }],
      },
      {
        field: "type",
        component: "Select",
        label: "类型",
        colProps: { span: 1 },
        componentProps: () => ({
          placeholder: "请选择类型",
          clearable: true,
          options: [
            {
              label: "点我1",
              value: 1,
            },
            {
              label: "点我2",
              value: 2,
            },
          ],
        }),
      },
      {
        field: "name2",
        component: "Input",
        label: "姓名",
        defaultValue: "PC",
        colProps: { span: 1 },
        componentProps: {
          placeholder: "请输入姓名",
        },
        rule: [{ required: true, message: "请输入姓名" }],
      },
      {
        field: "test2",
        component: "Cascader",
        label: "测试",
        colProps: { span: 1 },
        componentProps: {
          placeholder: "请选择xxx",
        },
      },
      {
        field: "test3",
        component: "Input",
        label: "测试",
        colProps: { span: 1 },
        componentProps: {
          placeholder: "请选择xxx",
        },
      },
    ];

    const [register] = useForm({
      gridProps: { cols: 4, xGap: 10 },
      labelWidth: "100px",
      schemas,
      labelPlacement: "top",
      inline: false,
      size: "medium",
      collapsed: true,
      canCollapse: true,
      actionGridProps: { span: 1 },
      collapsedRows: 1,
    });

    return () => (
      <DescriptionCard code={code} title="基础示例">
        <BasicForm onRegister={register}></BasicForm>
      </DescriptionCard>
    );
  },
});
