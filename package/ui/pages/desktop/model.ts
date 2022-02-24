import { createModel } from "@rematch/core";
import type { RootModel } from "@/common/model/connect";
import store from "@/common/model";
import type { MicroView, MicroNode } from '@moyu-code/dsl'

export type SchemaModel = typeof schemaModel;

interface SchemaState {
  editId?: MicroNode['uniqueId'];
  views: any[];
  dslView: MicroView;
}

const initializeDesktopState: SchemaState = {
  views: [],
  dslView: {
    viewName: '未命名标题',
    props: {
      style: {
        background: '#FFF'
      }
    },
    children: [
      {
        type: 'Button',
        uid: '123455',
        props: {
          children: '我是输出的内容',
        },
      },
      {
        type: 'Row',
        uid: '123456',
        children: [
          {
            type: 'Col',
            uid: '123456',
            props: {
              children: '我是col1的内容',
              span: 12,
            }
          },

          {
            type: 'Col',
            uid: '1234526',
            props: {
              children: '我是col2的内容',
              span: 12,
            }
          }
        ]

      }
    ]
  }
};

const schemaModel = createModel<RootModel>()({
  state: initializeDesktopState,
  reducers: {

    setFocusComponentId(state, id) {
      return {
        ...state,
        editId: id
      }
    },

    setSchemaViews(state, view) {
      const result = state.views
      result.push(view)
      return {
        ...state,
        views: [...result]
      }
    }
  },
});

store.addModel({ name: "schema", ...schemaModel });
