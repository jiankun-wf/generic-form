import { watch, type Ref, unref } from "vue";
import type { EmitTypes, FormProps } from "../types";

export const useFormCollapse = ({
  emit,
  formProps,
  state,
}: {
  emit: EmitTypes;
  formProps: Ref<FormProps>;
  state: Ref<boolean>;
}) => {
  //   设置折叠，传值true/false
  //   不传值时，取当前折叠状态的相反状态
  const collapse = (collapsed?: boolean) => {
    const currentState = unref(state);

    if (collapsed !== undefined) {
      if (collapsed === currentState) return collapsed;

      state.value = collapsed;
      emit("collapse-change", collapsed);
    } else {
      state.value = !currentState;
      emit("collapse-change", !currentState);
    }

    return unref(state);
  };

  watch(
    () => unref(formProps).collapsed,
    (val) => {
      state.value = unref(formProps).canCollapse ? val ?? false : false;
    }
  );

  watch(
    () => unref(formProps).canCollapse,
    (val) => {
      if (!val) {
        state.value = false;
      }
    }
  );

  return { collapse };
};
