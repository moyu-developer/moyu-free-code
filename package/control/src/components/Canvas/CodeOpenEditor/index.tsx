import React, { ReactNode } from 'react'
import AceEditor from 'react-ace'
import { DrawerProps, Drawer, Button } from 'antd'
import { Code } from 'tabler-icons-react'
import Icon from 'src/common/components/AntSvg'
import 'ace-builds/src-noconflict/mode-java'
import 'ace-builds/src-noconflict/theme-github'
import 'ace-builds/src-noconflict/ext-language_tools'

const CodeOpenEditor = (props) => {
  const [drawProps, setDrawProps] = React.useState<DrawerProps>({
    visible: false
  })

  const handleAceEditorCodeChange = (newValueL: string) => {
    console.log(newValueL, 'newValueL')
  }

  const onDidShowReady = () => {
    setDrawProps({
      visible: true
    })
  }

  const onBeforeClose = () => {
    setDrawProps({
      visible: false
    })
  }

  return (
    <>
      <Button
        type='link'
        icon={<Icon icon={Code} />}
        onClick={onDidShowReady}
      />
      <Drawer
        closable={false}
        title='代码页面'
        placement='left'
        onClose={onBeforeClose}
        visible={drawProps.visible}
        getContainer={() => document.querySelector<HTMLElement>('#MoyuControl')}
        width={500}
      >
        <AceEditor
          value={
            `
            import RenderView from './View'
import * as VideoPanel from './Panel'

const Video = {
  name: '分割线',
  defaultProps: {
  },
  gridLayout: {
    minH: 4,
    h: 10
  },
  icon: 'https://s2.loli.net/2022/05/07/MJfW2PmFqiw7Rn1.png',
  panel: [VideoPanel],
  component: {
    displayName: 'Divider',
    render: RenderView
  }
}

export default Video

            `
          }
          mode='typescript'
          theme='tomorrow'
          onChange={handleAceEditorCodeChange}
          name='UNIQUE_ID_OF_DIV'
          editorProps={{ $blockScrolling: true }}
          setOptions={{
            enableBasicAutocompletion: false,
            enableLiveAutocompletion: false,
            enableSnippets: false,
            showLineNumbers: true,
            tabSize: 2
          }}
        />
      </Drawer>
    </>
  )
}

export default React.memo(CodeOpenEditor)
