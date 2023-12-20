import Logo from 'compornents/logo'
import styles from 'styles/footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.flexcontainer}>
        <Logo />
        [ソーシャル]
      </div>
    </footer>
  )
}
export default Footer
