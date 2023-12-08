import { buildComponentMap } from "generic-form-vue-next";
import { type ComponentType } from "./components";

import {
  NInput,
  NSelect,
  NRate,
  NInputNumber,
  NDatePicker,
  NRadio,
  NRadioGroup,
  NCheckbox,
  NCheckboxGroup,
  NSlider,
  NSwitch,
  NTreeSelect,
  NTimePicker,
  NMention,
  NColorPicker,
  NCascader,
  NAutoComplete,
  NDynamicTags,
  NDivider,
  NDynamicInput,
} from "naive-ui";

// import { ElInput } from "element-plus";

export const registerFormComponents = () => {
  buildComponentMap<ComponentType>([
    ["Input", NInput],
    ["Select", NSelect],
    ["Rate", NRate],
    ["InputNumber", NInputNumber],
    ["DatePicker", NDatePicker],
    ["Radio", NRadio],
    ["RadioGroup", NRadioGroup],
    ["RadioButtonGroup", NRadioGroup],
    ["CheckBox", NCheckbox],
    ["CheckBoxGroup", NCheckboxGroup],
    ["Slider", NSlider],
    ["Switch", NSwitch],
    ["TreeSelect", NTreeSelect],
    ["Transfer", NDatePicker],
    ["TimePicker", NTimePicker],
    ["Mention", NMention],
    ["ColorPicker", NColorPicker],
    ["Cascader", NCascader],
    ["AutoComplete", NAutoComplete],
    ["DynamicTags", NDynamicTags],
    ["DynamicInput", NDynamicInput],
    ["Divider", NDivider],
    // ["ElInput", ElInput],
  ]);
};
