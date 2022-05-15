import { Space, Typography, Image, Spin, Pagination } from 'antd'
import {
  queryImageResourceList,
  QueryResourceImageListResponse,
  QueryResourceImageListRequest
} from '@moyu-code/shared'
import React, { useState, useEffect } from 'react'
import { IconChecks } from '@tabler/icons'
import styles from './index.module.sass'

const ImageList = () => {
  const [resourceData, setResourceData] = React.useState<
    QueryResourceImageListResponse['data']
  >({
    total: 0,
    list: []
  })
  const [loading, setLoading] = useState<boolean>(false)
  const [params] = useState<QueryResourceImageListRequest>({
    current: 1,
    size: 20
  })

  const runQueryImageResourceList = async () => {
    try {
      setLoading(true)
      const { data } = await queryImageResourceList(params)
      if (data?.total) {
        setResourceData(data)
      }
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    runQueryImageResourceList()
  }, [params])

  return (
    <Spin spinning={loading}>
      <div className={styles.list}>
        {resourceData?.list.map((item) => {
          return (
            <Space
              size={0}
              direction='vertical'
              className={styles.item}
              align='center'
              key={item.id}
            >
              <Image width={120} height={120} src={item.link} />

              <Typography.Paragraph
                className={styles.itemName}
                ellipsis={{ rows: 2 }}
              >
                测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试
              </Typography.Paragraph>
              <IconChecks className={styles.itemChecked} />
            </Space>
          )
        })}
      </div>
      <Pagination showQuickJumper />
    </Spin>
  )
}

export default React.memo(ImageList)
