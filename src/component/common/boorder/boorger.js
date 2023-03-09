import React from "react";
import styles  from './boorger.module.scss'
const Boorger = () => {
    return(
        <div className={styles.boorger}>
        <div className={styles.boorger__inner}>
            <nav className={styles.boorger__nav}>
              <ul className={styles.boorger__line}>
                <li>О нас</li>
                <li>События</li>
                <li>Галерея</li>
                <li>Аренда</li>
                <li>Карта ТЦ</li>
                <li>Контакты</li>
                <li>Вакансии</li>
                <li>Тендеры</li>
              </ul>
            </nav>
            <div className={`${styles.boorger__link} ${styles.boorger__link__f}`}>
              <ul> 
                <li>Магазины</li>
                <li>Все магазины</li>
                <li>Женская одежда</li>
                <li>Мужская одежда</li>
                <li>Детская одежда</li>
                <li>Детские товары</li>
                <li>Обувь</li>
                <li>Кожгалантерея</li>
                <li>Продукты</li>
              </ul>
            </div>
            <div className={styles.boorger__link}>
              <ul> 
                <li>Товары</li>
                <li>Цифровая и бытовая техника</li>
                <li>Парфюмерия, косметика</li>
                <li>Ювелирные украшения</li>
                <li>Сувениры, подарки</li>
                <li>Полезное</li>
                <li>Товары для дома</li>
                <li>Спортивные товары, одежда</li>
                <li>Товары для животных</li>
              </ul>
            </div>
            <div className={styles.boorger__link}>
              <ul> 
                <li>Кафе и рестораны</li>
                <li>Кафе и рестораны</li>
                <li>Рестораны быстрого обслуживания</li>
                <li>Кофейни</li>
                <li>Мороженое и десерты</li>
              </ul>
            </div>
            <div className={styles.boorger__link}>
              <ul> 
                <li>Услуги и сервисы</li>
                <li>Банкоматы</li>
                <li>Салоны связи</li>
                <li>Парикмахерские</li>
                <li>Администрация</li>
                <li>Продукты</li>
                <li>Другое</li>
              </ul>
            </div>
            <div className={styles.boorger__link}>
              <ul> 
                <li>Развлечения</li>
                <li>Джунгли парк</li>
                <li>Мероприятия</li>
                <li>Акции</li>
                <li>Новости</li>
              </ul>
            </div>
          </div> {/*//link__inner */}
     {/*//boorger */} </div> 
        
  
    )
}

export default Boorger;
            
           
                