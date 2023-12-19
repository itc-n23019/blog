import Logo from 'compornents/logo'
import Nav from 'compornents/nav'
import styles from 'styles/header.module.css'
const Header = () => {
  return (
    <header>
	  <div className={styles.flexContainer}>
      <Logo boxOn />
      <Nav />
	  </div>
    </header>
  )
}
export default Header
