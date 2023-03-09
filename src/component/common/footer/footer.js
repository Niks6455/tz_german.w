import React from "react"
import styles from "./footer.module.scss"
import img__logo from "./../../img/logo/лого2.png"
import img__vk from "./../../img/icon/вк.png"
import img__tel from "./../../img/icon/телега.png"
import Search from "../../ui/search/Search"


export default function Footer() {
    
    function handleSearch(searchTerm) {
        console.log("Search term: ", searchTerm);
      }

    return(
        <footer className={styles.footer}>
            <div className={styles.footer__inner}>
                <div className={styles.img}>
                    <img src={img__logo} alt="logo"></img>
                </div>
              
                <div className={styles.list__container}>
                     <ul >          
                        <li>  Магазины </li> 
                        <li>  Кафе и рестораны </li>
                        <li>  Услуги и сервисы </li>
                        <li>  Развлечения</li>
                    </ul> 
                    <ul> 
                        <li>  О нас </li>
                        <li>  События </li>  
                        <li>  Галерея </li>
                    </ul> 
                        
                    <ul> 
                        <li>  Контакты </li>
                        <li>  Аренда</li>
                        <li>  Вакансии </li>
                    </ul>
                    <ul>
                          <li>  Тендеры </li> 
                          <li>  Карта ТЦ  </li> 
                          <li>  Политика конфиденциальности </li> 
                    </ul> 
                </div>
                <div className={styles.search}>
                    <Search onSearch={handleSearch}/>
                    <div className={styles.search__icon}>
                        <a href="https://web.telegram.org/k/#@germanweb" target="_blank" rel="noreferrer"><img src={img__tel} alt="telegram"></img></a>
                        <a href="https://web.telegram.org/k/#@germanweb" target="_blank" rel="noreferrer"><img src={img__vk} alt="vk"></img></a>
                    </div>
                </div>
              

                <div className={styles.contact}>
                    <p><a href="https://www.google.ru/maps/place/ул.+Путейская,+5,+Тула,+Тульская+обл.,+300041/@54.1981597,37.5793306,17z/data=!3m1!4b1!4m6!3m5!1s0x4134406672d93ab5:0x7fb23709f3f1ec45!8m2!3d54.1981597!4d37.5815193!16s%2Fg%2F11c3q39h2w" target="_blank" rel="noreferrer">300041, Тульская обл.,<br/> г. Тула, ул. Путейская, д. 5</a></p>
                    <p>ТЦ Сарафан: 10:00-21:00<br/> Лента: 08:00-22:00</p>
                    <p>+7 (4872) 33-80-55</p>
                </div>
            </div>
        </footer>
    )
}