import React, { useState } from 'react';
import styles from'./header.module.scss'
import logo from "./../../img/лого.png"
import Search from '../../ui/search/Search';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  function handleSearch(searchTerm) {
    console.log("Search term: ", searchTerm);
  }

  return (
    <header>
      <nav className={styles.navbar}>

        <div className={styles.navbar__brand}>
          <img src={logo} alt="logo"></img>
        </div>

        <div className={styles.block__info}>

            <div className={styles.time__work}>
                <div className={styles.time__text}>
                    <p> Режим работы:</p>
                </div>
                <div className={styles.time__min}>
                    <p>пн-вс 10:00-21:00</p>
                    <p>Лента 8:00-22:00</p>
                </div>
               
            </div>

            <div className={styles.navbar__end}>
                <a className={styles.navbar__item} href="/">
                Контакты
                </a>
                <a className={styles.navbar__item} href="/">
                Карта ТЦ
                </a>
            </div>

          <div className={styles.search}>
              <Search onSearch={handleSearch}/>
          </div>
        
        

            <button className={`hamburger__button ${isMenuOpen ? 'open' : ''}`} onClick={handleMenuClick} >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>
            {/* <div className={`navbar_burger burger ${ isMenuOpen ? 'open' : ''}`} style={!isMenuOpen ? {display:"none"} : {display:"block"}}>
                меню
            </div> */}  
        </div>
        
      </nav>
    </header>
  );
};

export default Header;