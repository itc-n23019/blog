import Container from 'compornents/contaiiner'
import Logo from 'compornents/logo'
import styles from 'styles/footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
<Container>
	  <div className={styles.flexcontainer}>
        <Logo />
        [ソーシャル]
      </div>
	 </Container>
    </footer>
  )
}
export default Footer
