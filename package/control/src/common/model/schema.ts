import { createModel } from '@rematch/core'
import { RootModel } from './connect'
import type { RenderNodeType } from '@moyu-code/schema'
import { ulid } from 'ulid'
import { Key } from 'react'
import { findDepSchema } from 'src/utils'

const state: RenderNodeType[] = []

export default createModel<RootModel>()({
  name: 'schema',
  state,
  effects: () => ({
  }),
  reducers: {
    updated: (state, data: RenderNodeType[]) => {
      state = data
    },
    add: (schema, record: RenderNodeType) => {
      schema.push(record)
    },
    up: (schema, index: number) => {
      const moveData = schema[index]
      schema[index] = schema[index - 1]
      schema[index - 1] = moveData
    },

    down: (schema, index: number) => {
      const moveData = schema[index]
      schema[index] = schema[index + 1]
      schema[index + 1] = moveData
    },

    copy: (schema, index: number) => {
      const moveData = schema[index]
      schema.splice(index, 0, {
        ...moveData,
        uid: ulid()
      })
    },

    delete: (schema, index: number) => {
      schema.splice(index, 1)
    },

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
      if (index >= 0) {
        schema[index].props = {
          ...props,
          style: {
            ...props.style
          }
        }
      }
    }
  }
})
