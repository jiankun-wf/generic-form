export const code = `
import { buildComponentMap } from "../../lib";
import {
  NInput,
  NSelect,
  NInputNumber,
} from "naive-ui";
import { ElInput } from "element-plus";
type ComponentType = 'Input' | 'InputNumber' | 'Select' | 'ElInput';

export const registerFormComponents = () => {
  buildComponentMap<ComponentType>([
    ["Input", NInput],
    ["Select", NSelect],
    ["InputNumber", NInputNumber],
    ["ElInput", ElInput],
  ]);
};
// in main.ts/js 注册您的基本表单输入元素
registerFormComponents();
`;
