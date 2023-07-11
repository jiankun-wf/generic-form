import { ComputedRef, shallowRef, watch } from "vue";
import { FormProps } from "../types";
import { unref } from "vue";

export const useFormLoading = (formProps: ComputedRef<FormProps>) => {
  const loading = shallowRef(unref(formProps).loading ?? false);

  watch(
    () => unref(formProps).loading,
    (val) => {
      loading.value = val ?? false;
    }
  );

  const setLoading = async (flag: boolean) => {
    loading.value = flag;
  };

  const getLoading = () => {
    return unref(loading);
  };

  return { formLoading: loading, setLoading, getLoading };
};
