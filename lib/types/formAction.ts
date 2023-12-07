import type { FormProps, FormSchema } from ".";
import type { ValidateError } from "./Rule";

export interface FormActionType {
  // 设置表单属性有关
  // 设置表单属性 如disabled、inline...等;
  setProps: (formProps: Partial<FormProps>) => Promise<void>;
  // 表单值有关
  // 1. 设置表单值 2. 获取表单值
  setFieldsValue: <T extends object>(values: T) => Promise<void>;
  getFieldsValue: () => Record<string, any>;

  // 表单项有关
  // add 追加子项 remove移除子项 update 更新子项 get 获取子项 reset 重置
  addFormSchema: (schema: FormSchema | FormSchema[]) => Promise<void>;
  removeFormSchema: (field: string | string[]) => Promise<void>;
  updateFormSchema: (
    schema:
      | (Partial<FormSchema> & { field: string })
      | (Partial<FormSchema> & { field: string })[]
  ) => Promise<void>;
  getFormSchemas: (name?: string | string[]) => Promise<FormSchema[] | null>;
  resetFormSchema: (schema: FormSchema[]) => Promise<void>;

  // 表单验证有关
  // 1. 重置验证 2. 提交验证（返回表单值）3. 仅验证（只返回结果） 4. 清楚验证效果
  resetFields: () => Promise<void>;
  validate: () => Promise<Record<string, any>>;
  validateFields: (
    keys?: string[] | string
  ) => Promise<boolean | ValidateError>;
  clearValidate: () => Promise<void>;

  // 其他项
  // 1. 是否处于整体loading状态
  setLoading: (flag: boolean) => Promise<void>;
  // 2. 切换折叠/展开状态 并返回改变后状态 
  //    传值时按照传值改变状态，不传值时，向相反状态改变
  collapse: (collapsed?: boolean) => boolean;
}
