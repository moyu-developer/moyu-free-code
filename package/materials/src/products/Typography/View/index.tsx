import React from 'react'
import { Button } from 'antd-mobile'
import { TypographyProps } from 'react-vant/es/typography'

export interface ExtraTypographyProps extends TypographyProps {
  componentType?: 'Title' | 'Link' | 'Text'
}

export default (props: ExtraTypographyProps) => {
  const { componentType = 'Text', children, ...otherProps } = props

  return (
    <div>
      <Button color='primary' fill='solid'>
            Solid
          </Button>
    </div>
  )
}
