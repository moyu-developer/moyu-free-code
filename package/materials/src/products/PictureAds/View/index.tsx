import React, { ReactNode } from 'react'
import { Image, ImageProps } from 'react-vant'
import styles from './index.module.sass'

console.log(styles, 'styles')

interface PictureAdsProps {
  style?: React.CSSProperties,
  imageProps?: ImageProps;
  children?: ReactNode;
  coordinates?: Array<{
    height: number;
    id: string;
    width: number;
    x: number;
    y: number;
  }>;
}

const PictureAds: React.FunctionComponent<PictureAdsProps> = (props) => {
  console.log(props, 'props')

  return (
    <div className={styles.image} style={props.style}>
      {
        props.coordinates?.map((item) => (
          <div
            key={item.id} className={styles.imageCoordinate} style={{
              top: item.x,
              left: item.y,
              height: item.height,
              width: item.width
            }}
          />
        ))
      }
      <Image {...props.imageProps} fit='cover' />
    </div>
  )
}

export default React.memo(PictureAds)
