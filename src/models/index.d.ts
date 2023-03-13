import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerPostdata = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Postdata, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPostdata = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Postdata, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Postdata = LazyLoading extends LazyLoadingDisabled ? EagerPostdata : LazyPostdata

export declare const Postdata: (new (init: ModelInit<Postdata>) => Postdata) & {
  copyOf(source: Postdata, mutator: (draft: MutableModel<Postdata>) => MutableModel<Postdata> | void): Postdata;
}