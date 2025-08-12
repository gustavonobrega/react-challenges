import { menu } from './data'
import Tree from './tree'

export default function TreeViewDemo() {
  return (
    <div className='h-svh'>
      <Tree menu={menu} />
    </div>
  )
}
