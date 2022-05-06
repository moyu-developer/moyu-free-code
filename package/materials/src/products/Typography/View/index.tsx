import React from 'react'
import { Typography } from 'react-vant'
import { TypographyProps } from 'react-vant/es/typography'

export interface ExtraTypographyProps extends TypographyProps {
  componentType?: 'Title' | 'Link' | 'Text'
}

export default (props: ExtraTypographyProps) => {
  const { componentType = 'Text', children, ...otherProps } = props

  const Component = Typography[componentType]

  return (
    <Component {...otherProps}>{children}</Component>
  )
}
