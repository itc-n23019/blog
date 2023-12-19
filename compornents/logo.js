import Link from 'next/link'
import styles from 'styles/logo.module.css'

const Logo = ({ boxOn = false }) => {
  return (
    <Link href='/'>
      <p className={boxOn ? styles.box : styles.basi}>CUBE</p>
    </Link>
  )
}

export default Logo
