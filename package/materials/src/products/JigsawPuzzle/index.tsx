import { MaterialComponentType } from '@moyu-code/shared'
import RenderView from './View'
import * as SearchPanel from './Panel'

const Search: MaterialComponentType = {
  name: '拼图',
  defaultProps: {
  },
  gridLayout: {
    minH: 20,
    h: 375 / 5
  },
  icon: 'https://s2.loli.net/2022/05/12/uoa1qVZ7f84mMr2.png',
  panel: [SearchPanel],
  component: {
    displayName: 'Search',
    render: RenderView
  }
}

export default Search
