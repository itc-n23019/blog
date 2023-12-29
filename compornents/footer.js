import Container from 'compornents/container'
import Logo from 'compornents/logo'
import styles from 'styles/footer.module.css'
import Social from 'compornents/social'
const Footer = () => {
  return (
    <footer className={styles.wrapper}>
<Container>
	  <div className={styles.flexcontainer}>
        <Logo />

	  <Social />
      </div>
	 </Container>
    </footer>
  )
}
export default Footer
