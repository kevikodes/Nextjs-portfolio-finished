import React from 'react'
import { personalDetails } from '../../data/personalDetails'

const Footer = () => {
  const style = {
    wrapper: `w-full mx-auto py-4 text-white h-auto bg-blue flex justify-center items-center`,
    line: `w-96 border-violet`,
    text: `mx-3 mx-6 text-7xl font-light`,
    emoji: `mx-2 animate-pulse`,
  }
  return (
    <div className={style.wrapper}>
      <hr className={style.line} />
      <p className={style.text}>
        Made with{' '}
        <span className={style.emoji} role='img'>
          ❤️
        </span>
        by {personalDetails.name}
      </p>
      <hr className={style.line} />
    </div>
  )
}

export default Footer
