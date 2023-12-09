import type {
  // ButtonProps,
  FormItemRule,
  GridItemProps,
  GridProps,
} from "naive-ui";
import type { FormSchema } from "../types";
import type { PropType, CSSProperties } from "vue";
import type {
  FormSize,
  LabelPlacement,
  RequiredMarkPlacement,
} from "../types/Rule";
import { ExtractThemeOverrides, Theme } from "naive-ui/es/_mixins/use-theme";
import { GlobalThemeWithoutCommon } from "naive-ui/es/config-provider/src/internal-interface";

export const BasicFormPorps = {
  // 标签宽度  固定宽度
  labelWidth: {
    type: [Number, String] as PropType<number | string>,
    default: "auto",
  },
  // 表单配置规则
  schemas: {
    type: [Array] as PropType<FormSchema[]>,
    default: () => [],
  },
  //布局方式
  layout: {
    type: String,
    default: "inline",
  },
  //是否展示为行内表单
  inline: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  //大小
  size: {
    type: String as PropType<FormSize>,
    default: "medium",
  },
  //标签位置
  labelPlacement: {
    type: String as PropType<LabelPlacement>,
    default: "left",
  },
  //grid 配置
  gridProps: {
    type: Object as PropType<Omit<GridProps, "collapsed" | "collapsedRows">>,
    default: () => ({ cols: 24, xGap: 12, yGap: 12 }),
  },
  //gi配置
  giProps: {
    type: Object as PropType<GridItemProps>,
    default: () => ({ span: 24 }),
  },
  //grid 样式
  baseGridStyle: {
    type: Object as PropType<CSSProperties>,
    required: false,
  },
  //是否折叠
  collapsed: {
    type: Boolean,
    default: false,
  },
  //默认展示的行数
  collapsedRows: {
    type: Number,
    default: 1,
  },
  // 是否展示操作集合
  showActions: {
    type: Boolean,
    default: true,
  },
  // 操作按钮布局
  actionGridProps: {
    type: Object as PropType<
      Omit<GridItemProps, "collapsed" | "collapsedRows">
    >,
    default: () => ({ span: 24 }),
  },

  loading: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  requireMarkPlacement: {
    type: String as PropType<RequiredMarkPlacement>,
    default: "left",
  },
  // label后缀：
  colon: {
    type: String as PropType<string>,
    default: undefined,
  },
  // 禁用
  disabled: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  // rules
  rules: {
    type: Object as PropType<{
      [schemaField: string]: FormItemRule | FormItemRule[];
    }>,
    default: undefined,
  },
  //
  modelValueName: {
    type: String as PropType<string>,
    default: "value",
  },
  breakpoints: {
    type: Object as PropType<{ [screenWidth: string]: number }>,
    default: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      "2xl": 1536,
      "2k": 2440,
      "4k": 3960,
    },
  },
  themeOverrides: {
    type: Object as PropType<
      ExtractThemeOverrides<
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
            labelFontWeight: string;
          }
        >
      >
    >,
    default: undefined,
  },
};
