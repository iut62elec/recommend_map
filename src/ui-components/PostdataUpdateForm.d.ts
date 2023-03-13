/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Postdata } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PostdataUpdateFormInputValues = {
    title?: string;
    description?: string;
    name?: string;
};
export declare type PostdataUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PostdataUpdateFormOverridesProps = {
    PostdataUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PostdataUpdateFormProps = React.PropsWithChildren<{
    overrides?: PostdataUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    postdata?: Postdata;
    onSubmit?: (fields: PostdataUpdateFormInputValues) => PostdataUpdateFormInputValues;
    onSuccess?: (fields: PostdataUpdateFormInputValues) => void;
    onError?: (fields: PostdataUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PostdataUpdateFormInputValues) => PostdataUpdateFormInputValues;
    onValidate?: PostdataUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PostdataUpdateForm(props: PostdataUpdateFormProps): React.ReactElement;
