import {
  computed,
  defineComponent,
  readonly,
  ref,
  unref,
  renderSlot,
  onMounted,
  reactive,
} from "vue";
// props;
import { BasicFormPorps } from "./props/form";
// utils;
import { deepMerge } from "./helper/index";
import { getColProps, getShow } from "./helper/render";
import { isFunction } from "./helper/is";
// components
import { FormItem } from "./components/FormItem";
import {
  NForm as Form,
  NGrid as Grid,
  NGridItem,
  NSpin,
  NConfigProvider,
} from "naive-ui";
// hooks
import { useFormRef } from "./hooks/useFormRef";
import { useFormLoading } from "./hooks/useFormLoading";
import { useFormDefaultValue } from "./hooks/useFormDefaultValue";
import { useFormSchema } from "./hooks/useFormSchema";
import { useFormValues } from "./hooks/useFormValues";
import { useFormEvent } from "./hooks/useFormEvent";
import { useFormCollapse } from "./hooks/useFormCollapse";
// types
import type { FormActionType } from "./types/formAction";
import type { FormProps, FormSchema } from "./types";
import type { GridProps } from "naive-ui";
import type { CSSProperties } from "vue";

const BasicForm = defineComponent({
  name: "NaiveBasicForm",
  props: BasicFormPorps,
  emits: [
    "register",
    "schema-change",
    "validate-error",
    "submit",
    "collapse-change",
    "reset",
    "clear-validate",
  ],
  setup(props, { attrs, emit, slots }) {
    // formModel
    const formModel = reactive<Record<string, any>>({});
    const formValues = readonly(formModel);
    const formPropsRef = ref<Partial<FormProps>>({});
    const schemaRef = ref<null | FormSchema[]>(null);
    const defaultValueRef = ref<Record<string, any>>({});
    // form属性 合并
    const getFormProps = computed(
      () =>
        ({
          ...attrs,
          ...props,
          ...unref(formPropsRef),
        } as unknown as FormProps & Record<string, any>)
    );
    // 是否为展开
    const gridCollapsed = ref(
      unref(getFormProps).canCollapse
        ? unref(getFormProps).collapsed ?? false
        : false
    );
    //  布局属性
    const getGridProps = computed<GridProps & { style?: CSSProperties }>(() => {
      const {
        gridProps = {},
        baseGridStyle = undefined,
        collapsedRows,
      } = unref(getFormProps);

      return {
        ...gridProps,
        collapsedRows,
        style: baseGridStyle,
        responsive: "screen",
        collapsed: unref(gridCollapsed),
      };
    });

    const getFormSchema = computed(() => {
      return unref(schemaRef) ?? (unref(getFormProps).schemas as FormSchema[]);
    });

    const [formRef, createFormRef] = useFormRef();

    const { setFieldsValue, setFieldValue, getFieldsValue } = useFormValues({
      formModel,
      formValues,
      getFormSchema,
      props: getFormProps,
    });

    // loading
    const { formLoading, setLoading } = useFormLoading(getFormProps);
    // defaultValue
    const [initDefault, isInitDefaultValue] = useFormDefaultValue({
      getSchema: getFormSchema,
      formModel,
      defaultValueRef,
    });

    const {
      addFormSchema,
      updateFormSchema,
      removeFormSchema,
      getFormSchemas,
      resetFormSchema,
    } = useFormSchema({
      schemaRef,
      formProps: getFormProps,
      emit,
      defaultValue: defaultValueRef,
      initDefault,
      formModel,
      getSchema: getFormSchema,
      isInitDefaultValue,
    });

    const { validate, clearValidate, resetFields, validateFields } =
      useFormEvent({
        emit,
        formRef,
        formModel,
        formValues,
        defaultValueRef,
        getFieldsValue,
      });

    const { collapse: doCollapse } = useFormCollapse({
      state: gridCollapsed,
      formProps: getFormProps,
      emit,
    });

    const setProps = async (formProps: Partial<FormProps>) => {
      formPropsRef.value = deepMerge(unref(formPropsRef) || {}, formProps);
    };

    const formActionType: Readonly<FormActionType> = {
      setProps: setProps.bind(null),
      setLoading: setLoading.bind(null),
      setFieldsValue: setFieldsValue.bind(null),
      addFormSchema: addFormSchema.bind(null),
      updateFormSchema: updateFormSchema.bind(null),
      removeFormSchema: removeFormSchema.bind(null),
      getFormSchemas: getFormSchemas.bind(null),
      resetFormSchema: resetFormSchema.bind(null),
      getFieldsValue: getFieldsValue.bind(null),
      validate: validate.bind(null),
      clearValidate: clearValidate.bind(null),
      resetFields: resetFields.bind(null),
      validateFields: validateFields.bind(null),
      collapse: doCollapse.bind(null),
    };

    //  内容渲染
    const renderFormItemContent = (schema: FormSchema) => {
      const { contentRender, field, colProps, component, slot } = schema;
      const { colon, modelValueName } = unref(getFormProps);

      const { getIfShow } = getShow(schema, readonly(formModel));
      //  contentRender 为优先级最高的自定义渲染
      if (contentRender && isFunction(contentRender) && getIfShow) {
        return contentRender({
          model: formModel,
          values: formValues,
          field,
          action: formActionType,
          schema,
          Grid: NGridItem,
        });
      }

      const itemColProps = getColProps({ colProps, getIfShow, component });
      const itemSlots = slot && slots[slot] ? { [field]: slots[slot] } : {};

      return (
        <NGridItem {...itemColProps} key={schema.field}>
          <FormItem
            schema={schema}
            setFormModel={setFieldValue}
            formModel={formModel}
            formValues={formValues}
            formActionType={formActionType}
            colon={colon}
            modelValueName={modelValueName}
          >
            {itemSlots}
          </FormItem>
        </NGridItem>
      );
    };

    // 功能按钮组渲染
    const renderFormButtonGroup = () => {
      const { showActions, actionGridProps } = unref(getFormProps);
      if (!showActions) return null;

      return (
        <NGridItem
          {...actionGridProps}
          suffix={unref(getFormProps).canCollapse}
        >
          {{
            default: ({ overflow }: { overflow: boolean }) => (
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  rowGap: "12px",
                }}
              >
                {/* 提交 */}

                {/* 重置 */}
                {/* 收起展开 */}
                {unref(getFormProps).canCollapse && (
                  <span onClick={doCollapse.bind(null, void 0)}>
                    {overflow ? "展开" : "收起"}
                  </span>
                )}
              </div>
            ),
          }}
        </NGridItem>
      );
    };

    onMounted(() => {
      emit("register", formActionType);
    });

    return () => (
      <NConfigProvider abstract breakpoints={unref(getFormProps).breakpoints}>
        <Form
          {...unref(getFormProps)}
          ref={createFormRef as any}
          model={formModel}
        >
          <NSpin show={unref(formLoading)}>
            {/* 表单头部插槽 */}
            {slots.header && (
              <div class="form-header">{renderSlot(slots, "header")}</div>
            )}
            {/* 布局表单渲染 */}
            <Grid {...unref(getGridProps)}>
              {unref(getFormSchema).map((schema) =>
                renderFormItemContent(schema)
              )}

              {renderFormButtonGroup()}
            </Grid>
            {/* TODO 提交、重置、展开收缩 */}
            {/* .... */}
          </NSpin>
        </Form>
      </NConfigProvider>
    );
  },
});

export default BasicForm;
