import { createModel } from '@rematch/core'
import { RootModel } from './connect'
import type { Layout } from 'react-grid-layout'
import type { RenderNodeType } from '@moyu-code/shared'
import { ulid } from 'ulid'
import type { Key } from 'react'
import updated from 'immutability-helper'

const state: any = []

export default createModel<RootModel>()({
  name: 'schema',
  state,
  effects: () => ({
  }),
  reducers: {

    updated: (_, data: RenderNodeType[]) => [...data],

    /** 添加一个元素 */
    add: (schema, record: RenderNodeType) => updated(schema, { $push: [record] }),

    up: (schema, index: number) => {
      const moveData = schema[index]
      schema[index] = schema[index - 1]
      schema[index - 1] = moveData
      return [...schema]
    },

    down: (schema, index: number) => {
      const moveData = schema[index]
      schema[index] = schema[index + 1]
      schema[index + 1] = moveData
      return [...schema]
    },

    copy: (schema, index: number) => {
      const moveData = schema[index]
      const data = updated(schema, { $splice: [[index, 0, { ...moveData, uid: ulid() }]] })
      console.log(data, 'data')
      return data
    },

    delete: (schema, index: number) => updated(schema, { $splice: [[index, 1]] }),

    setProps: (schema, payload: {
      uid: Key,
      props: RenderNodeType['props']
    }) => {
      const {
        uid, props = {
          style: {}
        }
      } = payload
      const index = schema.findIndex(v => v.uid === uid)
      return updated(schema, {
        [index]: {
          props: {
            $apply: (oldProps) => ({
              ...oldProps,
              ...props,
              style: {
                ...oldProps?.style,
                ...props?.style
              }
            })
          }
        }
      })
    },
    setGridLayout: (schema, record: Layout) => {
      const { i, ...layout } = record
      return schema.map((item) => {
        if (item.uid === i) {
          return {
            ...item,
            gridLayout: layout
          }
        }
        return item
      })
    }
  }
})
