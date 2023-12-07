import { defineComponent, Fragment, renderSlot } from "vue";
import { NFormItem, NTooltip } from "naive-ui";
import { ExclamationPointer } from "./exclamation-pointer";
import { ComponentMap } from "../helper/components";

import type { PropType } from "vue";
import type { FormSchema, SetFormValue } from "../types";
import type { FormActionType } from "../types/formAction";
import { Component } from "vue";

export const FormItem = defineComponent({
  name: "NaiveFormItem",
  props: {
    schema: {
      type: Object as PropType<FormSchema>,
      required: true,
    },

    setFormModel: {
      type: Function as PropType<SetFormValue>,
      required: true,
    },

    formModel: {
      type: Object as PropType<Record<string, any>>,
      required: true,
    },
    formValues: {
      type: Object as PropType<Record<string, any>>,
      required: true,
    },
    formActionType: {
      type: Object as PropType<FormActionType>,
      required: true,
    },

    colon: {
      type: String as PropType<string>,
      default: undefined,
    },
    modelValueName: {
      type: String as PropType<string>,
      default: undefined,
    },
  },
  setup(props, { slots }) {
    const handleUpdateForm = (val: any) => {
      const {
        setFormModel,
        schema: { field },
      } = props;
      setFormModel(field, val);
    };

    const getComponentProps = (): Record<string, any> | undefined => {
      const {
        schema: { componentProps, field },
        formModel,
        formActionType,
        formValues,
      } = props;
      if (typeof componentProps === "function") {
        return componentProps({
          model: formModel,
          values: formValues,
          field,
          action: formActionType,
          schema: props.schema,
        });
      }
      return componentProps;
    };

    const renderComponent = () => {
      const {
        schema: { component, field, modelValueName: itemModelValueName },
        formModel,
        formActionType,
        formValues,
        modelValueName: formModelValueName,
      } = props;
      const ComponentRender = ComponentMap.get(component) as Component as any;

      const componentProps = getComponentProps();

      // [field]: slot && slots[slot]
      // 外层 强制将 自定义slot的名字转为slots 有如下优点
      // 1. 不需将slots整个传入，节省性能
      // 2. slot为string | undefined 但是field为必传，不需额外判断
      if (slots[field]) {
        return renderSlot(slots, field, {
          model: formModel,
          values: formValues,
          field,
          action: formActionType,
          schema: props.schema,
        });
      }

      // 绑定v-model事件
      const realName = itemModelValueName ?? formModelValueName ?? "value";
      const vModel = {
        [realName]: formValues[field],
        [`onUpdate:${realName}`]: handleUpdateForm.bind(null),
      };

      return <ComponentRender {...vModel} {...componentProps} />;
    };

    const renderLabel = () => {
      const {
        label,
        helpMessage,
        helpMessageToolTipProps,
        helpMessageIcon: _Icon,
        helpMessageIconProps: _IconProps,
      } = props.schema;
      const { colon } = props;
      if (!label) return undefined;

      const labelBuild = () => {
        if (typeof label === "function") {
          return label({ colon });
        }
        return `${label}${colon ?? ""}`;
      };

      const build = () => {
        const label = labelBuild();

        if (!label) return undefined;
        if (!helpMessage) {
          return label;
        }
        return (
          <>
            {label}
            <NTooltip {...helpMessageToolTipProps}>
              {{
                trigger: () => <ExclamationPointer />,
                default: () => helpMessage,
              }}
            </NTooltip>
          </>
        );
      };

      return build();
    };

    const renderContent = () => {
      const { field } = props.schema;

      return (
        <NFormItem {...props.schema} label="" path={field}>
          {{
            label: () => renderLabel(),
            default: () => renderComponent(),
          }}
        </NFormItem>
      );
    };

    return () => <Fragment>{renderContent()}</Fragment>;
  },
});