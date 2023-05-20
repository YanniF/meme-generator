import logo from '../../assets/Logo.png'

import classes from './Header.module.scss'

const Header = () => (
  <header className={classes.header}>
    <img src={logo} alt="Meme generator logo" />
    <p className={classes.infoText}>React Course - Project 3</p>
  </header>
)

export default Header
