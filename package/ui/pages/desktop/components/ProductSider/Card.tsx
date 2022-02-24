import { DropNames } from '@/common/constant'
import { Dispatch } from '@/common/model'
import {Typography,  Card as SemiCard, Col } from '@douyinfe/semi-ui'
import { useDrag } from 'react-dnd'
import { useDispatch } from 'react-redux'
import styles from './index.module.css'

export interface ComponentSiderCard {
  name?: string
}

const Card: React.FC<ComponentSiderCard> = (props) => {

  const dispatch: Dispatch = useDispatch()

  const [{ isDragging }, drag] = useDrag(() => ({
    type: DropNames.Field,
    item: { name: 'test' },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()
      console.log(dropResult, item, 'dropResult ...')
      if (item && dropResult) {
        dispatch.schema.setSchemaViews(props.name)
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }))

  console.log(isDragging, 'isDragging')

  

  return  <Col span={12}>
    <div ref={drag} >
      <SemiCard className={styles['card']}>
        <Typography.Text 
                ellipsis={{ 
                  rows: 1
                }}
                style={{width: '100%'}}>

{ props.name }
        </Typography.Text>
      </SemiCard>
    </div>
  
</Col>
}

export default Card