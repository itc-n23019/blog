import Container from 'compornents/container'
import Logo from 'compornents/logo'
import Nav from 'compornents/nav'
import styles from 'styles/header.module.css'

const Header = () => {
  return (
    <header>
	  <Container large>
	  <div className={styles.flexContainer}>
      <Logo boxOn />
      <Nav />
	  </div>
	  </Container>
    </header>
  )
}
export default Header
