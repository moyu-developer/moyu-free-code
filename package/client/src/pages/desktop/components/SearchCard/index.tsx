import type { RootState, Dispatch } from '@/common/model'
import { useSelector, useDispatch } from 'react-redux'
import ProjectCard from '../ProjectCard'
import styles from './index.module.sass'

const SearchTable = () => {
  const dispatch: Dispatch = useDispatch()

  const { list } = useSelector((state: RootState) => ({
    total: state.myApp.tableData.total,
    list: state.myApp.tableData.list
  }))

  return (
    <div className={styles.table}>
      {list.map((card) => {
        return (
          <ProjectCard key={card.id} {...card} />
          // <CheckCard
          //   className={styles.tableItem}
          //   key={card.id}
          //   avatar='https://gw.alipayobjects.com/zos/bmw-prod/f601048d-61c2-44d0-bf57-ca1afe7fd92e.svg'
          //   title={card.name}
          //   checked={false}
          //   description={card.description || '这家伙很懒，什么都没有留下😠'}
          // />
        )
      })}
    </div>
  )
}

export default SearchTable
