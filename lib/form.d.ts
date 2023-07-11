import type { FormSchema } from './types';
declare const BasicForm: import("vue").DefineComponent<{
    labelWidth: {
        type: import("vue").PropType<string | number>;
        default: string;
    };
    schemas: {
        type: import("vue").PropType<FormSchema<string, unknown, Record<string, any>>[]>;
        default: () => any[];
    };
    layout: {
        type: StringConstructor;
        default: string;
    };
    inline: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    size: {
        type: import("vue").PropType<import("./types/Rule").FormSize>;
        default: string;
    };
    labelPlacement: {
        type: import("vue").PropType<import("./types/Rule").LabelPlacement>;
        default: string;
    };
    showActionButtonGroup: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    showResetButton: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    resetButtonOptions: {
        type: import("vue").PropType<Partial<import("naive-ui").ButtonProps>>;
        default: {
            type: string;
        };
    };
    showSubmitButton: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    submitButtonProps: {
        type: import("vue").PropType<Partial<import("naive-ui").ButtonProps>>;
        default: {
            type: string;
        };
    };
    showAdvancedButton: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    submitButtonText: {
        type: StringConstructor;
        default: string;
    };
    resetButtonText: {
        type: StringConstructor;
        default: string;
    };
    gridProps: {
        type: import("vue").PropType<import("naive-ui").GridProps>;
        default: () => {
            cols: number;
            collapsed: boolean;
            xGap: number;
            yGap: number;
        };
    };
    giProps: {
        type: import("vue").PropType<import("naive-ui").GridItemProps>;
        default: () => {
            span: number;
        };
    };
    baseGridStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
        required: boolean;
    };
    collapsed: {
        type: BooleanConstructor;
        default: boolean;
    };
    collapsedRows: {
        type: NumberConstructor;
        default: number;
    };
    loading: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    requireMarkPlacement: {
        type: import("vue").PropType<import("./types/Rule").RequiredMarkPlacement>;
        default: string;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("schema-change" | "reset" | "clear-validate" | "register" | "validate-error" | "submit" | "collapse-change")[], "schema-change" | "reset" | "clear-validate" | "register" | "validate-error" | "submit" | "collapse-change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    labelWidth: {
        type: import("vue").PropType<string | number>;
        default: string;
    };
    schemas: {
        type: import("vue").PropType<FormSchema<string, unknown, Record<string, any>>[]>;
        default: () => any[];
    };
    layout: {
        type: StringConstructor;
        default: string;
    };
    inline: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    size: {
        type: import("vue").PropType<import("./types/Rule").FormSize>;
        default: string;
    };
    labelPlacement: {
        type: import("vue").PropType<import("./types/Rule").LabelPlacement>;
        default: string;
    };
    showActionButtonGroup: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    showResetButton: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    resetButtonOptions: {
        type: import("vue").PropType<Partial<import("naive-ui").ButtonProps>>;
        default: {
            type: string;
        };
    };
    showSubmitButton: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    submitButtonProps: {
        type: import("vue").PropType<Partial<import("naive-ui").ButtonProps>>;
        default: {
            type: string;
        };
    };
    showAdvancedButton: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    submitButtonText: {
        type: StringConstructor;
        default: string;
    };
    resetButtonText: {
        type: StringConstructor;
        default: string;
    };
    gridProps: {
        type: import("vue").PropType<import("naive-ui").GridProps>;
        default: () => {
            cols: number;
            collapsed: boolean;
            xGap: number;
            yGap: number;
        };
    };
    giProps: {
        type: import("vue").PropType<import("naive-ui").GridItemProps>;
        default: () => {
            span: number;
        };
    };
    baseGridStyle: {
        type: import("vue").PropType<import("vue").CSSProperties>;
        required: boolean;
    };
    collapsed: {
        type: BooleanConstructor;
        default: boolean;
    };
    collapsedRows: {
        type: NumberConstructor;
        default: number;
    };
    loading: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    requireMarkPlacement: {
        type: import("vue").PropType<import("./types/Rule").RequiredMarkPlacement>;
        default: string;
    };
}>> & {
    onReset?: (...args: any[]) => any;
    onSubmit?: (...args: any[]) => any;
    "onSchema-change"?: (...args: any[]) => any;
    "onClear-validate"?: (...args: any[]) => any;
    onRegister?: (...args: any[]) => any;
    "onValidate-error"?: (...args: any[]) => any;
    "onCollapse-change"?: (...args: any[]) => any;
}, {
    loading: boolean;
    size: import("./types/Rule").FormSize;
    collapsed: boolean;
    collapsedRows: number;
    inline: boolean;
    labelWidth: string | number;
    labelPlacement: import("./types/Rule").LabelPlacement;
    requireMarkPlacement: import("./types/Rule").RequiredMarkPlacement;
    schemas: FormSchema<string, unknown, Record<string, any>>[];
    layout: string;
    showActionButtonGroup: boolean;
    showResetButton: boolean;
    resetButtonOptions: {
        type: string;
    };
    showSubmitButton: boolean;
    submitButtonProps: {
        type: string;
    };
    showAdvancedButton: boolean;
    submitButtonText: string;
    resetButtonText: string;
    gridProps: {
        cols: number;
        collapsed: boolean;
        xGap: number;
        yGap: number;
    };
    giProps: {
        span: number;
    };
}, {}>;
export default BasicForm;
