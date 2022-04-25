import React from 'react'
import { Space } from 'antd'
import styles from './index.module.sass'

export interface NavBarProps {
  footer?: React.ReactNode;
}

const NavBar: React.FC<NavBarProps> = (props) => {
  return (
    <div className={styles.navbar}>
      <Space align='center'>
        <img
          className={styles.navbarLogo}
          src='https://s2.loli.net/2022/03/16/f6AbT7nGh8OQt9y.png'
        />
        <div className={styles.navbarName}>Moyu Free</div>
      </Space>
      <div className={styles.navbarFooter}>{props.footer}</div>
    </div>
  )
}

export default NavBar
