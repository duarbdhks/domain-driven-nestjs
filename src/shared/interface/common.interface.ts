import { IHeader } from '@interface/header.interface'
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity'

export interface IServiceOptions<Q = void, B = void, P = void> {
  header?: IHeader
  query?: Q
  body?: B
  param?: P
}

export interface IHeaders {
  header: IHeader
}

export interface IBody<B> {
  body: B
}

export interface IQuery<Q> {
  query: Q
}

export interface IParam<P> {
  param: P
}

export interface IObjectLiteral<T> {
  [prop: string]: T
}

interface OrderByCondition {
  [columnName: string]: ('ASC' | 'DESC') | {
    order: 'ASC' | 'DESC'
    nulls?: 'NULLS FIRST' | 'NULLS LAST'
  }
}

export interface ISelectOptions<W = any> {
  where?: W
  orderBy?: OrderByCondition
  offset?: number
  limit?: number
}

export interface IUpdateOptions<S = any, W = any> {
  set?: QueryDeepPartialEntity<S>
  where: W
}

export interface IDAOOptions<V = void, S = void, W = void> {
  values?: V
  set?: S
  where?: W
}
