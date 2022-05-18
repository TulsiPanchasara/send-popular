import { useRouter } from 'next/router'
import React, { createRef } from 'react'
import { MenuIcon } from '../../assets/svgs/MenuIcon'
import styles from './styles.module.css'

const Header = () => {
  const items = [
    {
      text: 'Home',
      link: '/'
    },
    {
      text: 'About Us',
      link: '/about-us'
    },
    {
      text: 'Products',
      link: '/products'
    },
    {
      text: 'Production',
      link: '/production'
    },
    {
      text: 'Quality',
      link: '/quality'
    },
    {
      text: 'Markets',
      link: '/markets'
    },
    {
      text: 'Contacts',
      link: '/#contact-us'
    }
  ]

  const logo = {
    img: '/images/AppLogo.png',
    link: '/'
  }


  const styled = {
    barStyles: {
      background: 'white',
      fontFamily: 'Josefin Sans, sans-serif',
    },
    logoStyles: {
      fontSize: '20px',
      color: 'white'
    },
    sidebarStyles: {
      background: 'white',
      buttonColor: '#707070',
    },
  }
  const cross = createRef()
  const onOpen = () => {
    //@ts-ignore
    cross.current.style.width = '200px'
  }
  const onClose = () => {
    //@ts-ignore
    cross.current.style.width = '0'
  }

  const router = useRouter()
  console.log('Router ', router );

  return (
    <div
      className={styles.navbar_wrapper}
      style={{
        ...styled.barStyles,
      }}
    >
      <div className={styles.logo_wrapper}>
        <a style={{ ...styled.logoStyles, display: "flex" }} href={logo.link}>
          <img src={logo.img} alt='SendPopular' />
          <img src='/images/popular-logo.png' alt='SendPopular' />
        </a>
      </div>
      <div className={styles.nav_elements}>
        {items.map(({ text, link }, indx) => {
          return (
            <a href={link} key={indx} className={`${router.pathname === link ? 'text-customRed-1 hover:text-opacity-25' : 'hover:text-opacity-30 text-customGray-1' }`} >
              {text}
            </a>
          )
        })}
      </div>
      <div className={styles.mob_nav}>
        <MenuIcon
          onClick={onOpen}
        />
        <div
          className={styles.sidebar_wrapper}
          //@ts-ignore
          ref={cross}
          style={{ ...styled.sidebarStyles }}
        >
          <button
            onClick={onClose}
            style={{ color: styled.sidebarStyles.buttonColor }}
          >
            &#x2716;
          </button>
          {items.map(({ text, link }, indx) => {
            return (
              <a
                href={link}
                key={indx}
                className={`${router.pathname === link ? 'text-customRed-1 hover:text-opacity-25' : 'hover:text-opacity-30 text-customGray-1' }`}
                style={{
                  background: styled.sidebarStyles.background
                }}
              >
                {text}
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Header;
