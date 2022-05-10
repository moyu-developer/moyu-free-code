import { MaterialComponentType } from '@moyu-code/shared'
import RenderView from './View'
import * as SearchPanel from './Panel'

const Search: MaterialComponentType = {
  name: '搜索栏',
  defaultProps: {
    placeholder: '请输入搜索关键词'
  },
  gridLayout: {
    minH: 11,
    h: 11
  },
  icon: 'https://s2.loli.net/2022/05/09/N7ljHGiLdD2ZBTb.png',
  panel: [SearchPanel],
  component: {
    displayName: 'Search',
    render: RenderView
  }
}

export default Search
