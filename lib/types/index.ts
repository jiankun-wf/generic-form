import type {
  FormItemRule,
  GridItemProps,
  // ButtonProps,
  GridProps,
  TooltipProps,
} from "naive-ui";
import { ExtractThemeOverrides } from "naive-ui/es/_mixins/use-theme";
import { GlobalThemeWithoutCommon } from "naive-ui/es/config-provider/src/internal-interface";
import { Theme } from "naive-ui/es/_mixins/use-theme";

import type { CSSProperties, Component, VNode } from "vue";
import type { FormActionType } from "./formAction";
import type { VNodeChild } from "vue";

export interface FormProps {
  // 统一的v-model后缀值
  // 默认为 v-model:value
  modelValueName?: string;
  // 表单收集
  model?: Record<string, any>;
  // 是否展示标签
  showLabel?: boolean;
  labelWidth?: number | string | "auto";
  labelAlign?: import("./Rule").LabelAlign;
  labelPlacement?: import("./Rule").LabelPlacement;
  colon?: string;
  //   表单子项
  schemas?: FormSchema[];
  //
  inline?: boolean;
  layout?: string;
  //   表单以及内部组件大小
  size?: import("./Rule").FormSize;

  // 是否可折叠
  canCollapse?: boolean;
  // 收起最小行数
  collapsedRows?: number;
  // 是否折叠
  collapsed?: boolean;
  // 是否展示功能按钮组
  showActions?: boolean;
  // 功能按钮组布局配置
  actionGridProps?: Omit<GridItemProps, "collapsed" | "collapsedRows">;
  //   是否展示功能Button组
  // showActionButtonGroup?: boolean;
  // // 是否展示重置按钮
  // showResetButton?: boolean;
  // //   重置按钮Props
  // resetButtonOptions?: Partial<ButtonProps>;
  // //   是否展示提交按钮
  // showSubmitButton?: boolean;
  // // 提交按钮props
  // submitButtonOptions?: Partial<ButtonProps>;
  // // 展示收起展开按钮
  // showAdvancedButton?: boolean;
  // // 提交按钮text
  // submitButtonText?: string;
  // // 重置按钮text
  // resetButtonText?: string;
  //   行布局规则
  gridProps?: Omit<GridProps, "collapsed" | "collapsedRows">;
  //   行布局样式
  baseGridStyle?: CSSProperties;
  // 是否显示必填
  showRequireMark?: boolean;
  // 必填显示位置
  requireMarkPlacement?: import("./Rule").RequiredMarkPlacement;
  // 是否展示校验反馈
  validateMessages?: any;

  loading?: boolean;

  disabled?: boolean;
  rules?: { [schemaField: string]: FormItemRule | FormItemRule[] };
  // 断点
  breakpoints?: { [screenWidth: string]: number };
  // 主题
  themeOverrides?: ExtractThemeOverrides<
    Theme<
      Pick<GlobalThemeWithoutCommon, "Form">,
      {
        blankHeightSmall: string;
        blankHeightMedium: string;
        blankHeightLarge: string;
        lineHeight: string;
        labelTextColor: string;
        asteriskColor: string;
        feedbackTextColorError: string;
        feedbackTextColorWarning: string;
        feedbackTextColor: string;
        feedbackPadding: string;
        feedbackHeightSmall: string;
        feedbackHeightMedium: string;
        feedbackHeightLarge: string;
        feedbackFontSizeSmall: string;
        feedbackFontSizeMedium: string;
        feedbackFontSizeLarge: string;
        labelFontSizeLeftSmall: string;
        labelFontSizeLeftMedium: string;
        labelFontSizeLeftLarge: string;
        labelFontSizeTopSmall: string;
        labelFontSizeTopMedium: string;
        labelFontSizeTopLarge: string;
        labelHeightSmall: string;
        labelHeightMedium: string;
        labelHeightLarge: string;
        labelPaddingVertical: string;
        labelPaddingHorizontal: string;
        labelTextAlignVertical: string;
        labelTextAlignHorizontal: string;
        labelFontWeight: string; // label 字重
      }
    >
  >;
}

export type Return<Args = undefined, Result = string | VNode> = (
  arg: Args
) => Result;
export type SchemaCallParams = {
  model: Readonly<Record<string, any>>;
  readonly field: string;
  readonly values: Readonly<Record<string, any>>;
  readonly action: FormActionType;
  readonly schema: FormSchema;
};

export type SchemaFunctionalCall<
  Params = SchemaCallParams,
  Render = VNode,
  ExtraArg = any
> = (params: Params, ...args: ExtraArg[]) => Render;
export interface FormSchema<
  ComponentType = string,
  DefaultValue = unknown,
  ComponentProps = Record<string, any>
> {
  // 默认为 v-model后缀值 v-model:value
  modelValueName?: string;
  field: string; // 表单 将值收集到外层表单 model 对象的路径
  label?: string | Return<{ colon?: string }, VNode | VNodeChild>; // 标签内容;
  labelWidth?: number | string | "auto"; // 标签宽度
  labelAlign?: import("./Rule").LabelAlign; // 标签对齐位置
  labelPlacement?: import("./Rule").LabelPlacement; // 标签位置
  // 标签提示信息
  helpMessage?: string;
  //   标签提示信息样式
  helpMessageToolTipProps?: TooltipProps;
  helpMessageIcon?: Return<undefined, VNode>;
  helpMessageIconProps?: CSSProperties & Record<string, any>;
  //   默认值
  defaultValue?: DefaultValue;
  //   component类型 渲染优先级：张飞（三弟）
  component: ComponentType;
  //   组件属性
  componentProps?:
    | ComponentProps
    | SchemaFunctionalCall<SchemaCallParams, ComponentProps>;
  //   表单项规则
  rule?: FormItemRule | FormItemRule[];
  //   布局属性
  colProps?: GridItemProps;
  // 此项的大小
  size?: import("./Rule").FormSize;
  // 是否展示（v-show） naive-ui Grid 封装问题 暂时先不加入 等完成再研究
  // show?: boolean | SchemaFunctionalProp<boolean>;
  // 是否渲染（v-if）此处采用的是naive-ui-grid 的span为0 默认隐藏特性，没有使用v-if 有问题咱再改；
  ifShow?:
    | boolean
    | SchemaFunctionalCall<Pick<SchemaCallParams, "values" | "field">, boolean>;
  show?:
    | boolean
    | SchemaFunctionalCall<Pick<SchemaCallParams, "values" | "field">, boolean>;
  // 自定义content渲染。需要自己包含FormItem标签；渲染优先级：刘备（大哥）
  contentRender?: SchemaFunctionalCall<
    SchemaCallParams & { Grid: Component },
    VNode | string
  >;
  // slot名字； 渲染优先级：关羽（二弟）
  slot?: string;
  //
  feedback?: string;
  first?: boolean;
  validationStatus?: import("./Rule").ValidateStatus;
}

export type SetFormValue = <T = any>(
  key: string,
  value: T
) => { key: string; value: T; values: Record<string, any> };

export type FormContext = {
  formModel: Record<string, any>;
  values: Readonly<Record<string, any>>; // 此为实时追踪的formModel表单值，不可被修改。
  schemas: FormSchema[];
  action: FormActionType;
};

export type EmitTypes = (
  event:
    | "register"
    | "schema-change"
    | "validate-error"
    | "submit"
    | "collapse-change"
    | "reset"
    | "clear-validate",
  ...args: any[]
) => void;
