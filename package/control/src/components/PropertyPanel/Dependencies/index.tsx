import React, { useEffect, useMemo, useRef } from 'react'
import { Avatar, List, Space, Typography } from 'antd'
import { Box } from 'tabler-icons-react'
import { useSelector } from 'react-redux'
import { RootState } from 'src/common/model'

type RemoteLoaderEntriesResult = Array<{
  name: string;
  id: string;
  module?: any
}>

const Dependencies = () => {
  const resolve = useSelector((state: RootState) => state.common.depends?.resolve)

  const modules: RemoteLoaderEntriesResult = useMemo(() => {
    if (!resolve) return []
    const result: RemoteLoaderEntriesResult = []
    for (const [id, ns] of (window as any)?.System.entries()) {
      const name = Object.keys(resolve).find((key: string) => {
        if (resolve?.[key] === id) return true
        return false
      })
      if (name) {
        result.push({
          name,
          id,
          module: ns
        })
      }
    };
    return result
  }, [resolve])

  return (
    <List
      itemLayout='horizontal'
      dataSource={modules}
      renderItem={item => (
        <List.Item key={item.id}>
          <Space size={12}>
            <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>{item?.name?.[0]}</Avatar>
            <Typography.Text>{item.name}</Typography.Text>
          </Space>
        </List.Item>
      )}
    />
  )
}

export default Dependencies
