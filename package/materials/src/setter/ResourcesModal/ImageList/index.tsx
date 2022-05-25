import { Space, Typography, Image, Spin, Pagination, PaginationProps } from 'antd'
import {
  queryImageResourceList,
  QueryResourceImageListResponse,
  QueryResourceImageListRequest
} from '@moyu-code/shared'
import React, { useState, useEffect } from 'react'
import cs from 'classnames'
import styles from './index.module.sass'

export interface ImageListProps {
  value?: string[]
  onChange?: (val: string) => void
}

const ImageList = (props: ImageListProps) => {
  const [resourceData, setResourceData] = React.useState<
    QueryResourceImageListResponse['data']
  >({
    total: 0,
    list: []
  })
  const [loading, setLoading] = useState<boolean>(false)
  const [params, setRequestParams] = useState<QueryResourceImageListRequest>({
    current: 1,
    size: 15
  })

  const paginationProps: any = {
    pageSize: params.size,
    current: params.current,
    showQuickJumper: true,
    defaultCurrent: 1,
    total: resourceData.total,
    onChange: (page: number, pageSize: number) => setRequestParams({
      current: page,
      size: pageSize
    })
  }

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
              className={cs(styles.item, {
                [styles.itemActive]: props.value?.includes(item.link)
              })}
              align='center'
              key={item.link}
              onClick={() => props.onChange(item.link)}
            >
              <div className={styles.itemImage}>
                <Image src={item.link} width={60} height={60} onClick={(e) => e.stopPropagation()} />
              </div>

              <Typography.Paragraph
                className={styles.itemName}
                ellipsis={{ rows: 2 }}
              >
                {item.name}
              </Typography.Paragraph>
              {
                props.value?.includes(item.link) ? <span className={styles.itemChecked} /> : null
              }

            </Space>
          )
        })}
      </div>
      <Pagination
        {...paginationProps}
      />
    </Spin>
  )
}

export default React.memo(ImageList)
