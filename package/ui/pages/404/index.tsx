
import { Empty, Button } from '@douyinfe/semi-ui'
import { IllustrationNotFound, IllustrationNotFoundDark } from '@douyinfe/semi-illustrations'
import styles from './index.module.sass'
import Link from 'next/link'

export default () => {
  return (
    <div className={styles.empty}>
      <Empty
        image={<IllustrationNotFound style={{ width: 400, height: 400 }} />}
        darkModeImage={<IllustrationNotFoundDark style={{ width: 400, height: 400 }} />}
        title='页面未找到'
        description='返回首页查看更多内容？'
      />
    </div>
  )
}
