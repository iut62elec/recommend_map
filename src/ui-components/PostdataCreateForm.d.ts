/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PostdataCreateFormInputValues = {
    title?: string;
    description?: string;
    name?: string;
};
export declare type PostdataCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PostdataCreateFormOverridesProps = {
    PostdataCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PostdataCreateFormProps = React.PropsWithChildren<{
    overrides?: PostdataCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PostdataCreateFormInputValues) => PostdataCreateFormInputValues;
    onSuccess?: (fields: PostdataCreateFormInputValues) => void;
    onError?: (fields: PostdataCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PostdataCreateFormInputValues) => PostdataCreateFormInputValues;
    onValidate?: PostdataCreateFormValidationValues;
} & React.CSSProperties>;
export default function PostdataCreateForm(props: PostdataCreateFormProps): React.ReactElement;
