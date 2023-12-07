import { BasicForm, useForm, type FormSchema } from "../../../lib";
import type { ComponentType } from "../../config/components";
import { DescriptionCard } from "../../components/DescriptionCard";
import { code } from "../../codes/basic";
import { defineComponent } from "vue";

export default defineComponent({
    name: 'BasicFormUse',
    setup() {
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
              rule: [{ required: true, message: "请输入姓名" }],
              ifShow: ({ values }) => values.type !== 1,
            },
            {
              field: "phone",
              component: "InputNumber",
              label: "手机号",
              defaultValue: 18865382133,
              colProps: { span: 1 },
              componentProps: {
                placeholder: "请输入手机号",
              },
              rule: [{ required: true, message: "请输入手机号", type: "number" }],
              ifShow: ({ values }) => values.type !== 2,
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
                    label: "点我姓名不见",
                    value: 1,
                  },
                  {
                    label: "点我手机不见",
                    value: 2,
                  },
                ],
              }),
            },
          ];
          
          const [register, {}] = useForm({
            gridProps: { cols: 2, xGap: 10 },
            labelWidth: "100px",
            layout: "horizontal",
            schemas,
            labelPlacement: "left",
            inline: false,
            size: "medium",
          });

          return () => (
            <DescriptionCard code={code} title="基础示例">
              <BasicForm onRegister={register}></BasicForm>
            </DescriptionCard>
          )
    }
})