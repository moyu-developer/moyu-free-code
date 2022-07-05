import { Tag } from 'antd';
import styles from './index.module.sass'

const data = ["https://unpkg.com/lodash@4.17.21/lodash.js"]

export interface PackageInfoType {
  prefix: 'http' | 'https',
  uri: string;
  version: string;
  name: string;
}

const parsePackageInfo = (url: string): Partial<PackageInfoType> => {
  const info = url.split('/')
  const [name, version] = info?.[3]?.split('@')
  return {
    prefix: info?.[0] as PackageInfoType['prefix'],
    name,
    version
  }
}

const DependList = () => {
  return (
    <ul className={styles.depend}>
      {
        data.map(url => {
          const packageInfo = parsePackageInfo(url)
          return <li className={styles.item}>
            <div>
            {packageInfo.name}
            </div>
            <Tag color="green">
            @{packageInfo.version}
            </Tag>
          </li>
        })
      }
    </ul>
  )
}

export default DependList