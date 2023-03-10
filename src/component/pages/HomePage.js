import React, { useState } from 'react';
import styles from "./HomePage.module.scss";
import down from "./../img/icon/down.png";
import Slider from "../ui/slider/Slider";
import img1 from "./../img/imgMain/slider/1.jpg";
import img2 from "./../img/imgMain/slider/2.jpg";
import img3 from "./../img/imgMain/slider/3.jpg";
import img4 from "./../img/imgMain/slider/4.jpg";
import img5 from "./../img/imgMain/slider/5.jpg";
import img6 from "./../img/imgMain/slider/6.jpg";
import Tc__img1 from "./../img/imgMain/photoTc/1.jpg";
import Tc__img2 from "./../img/imgMain/photoTc/2.jpg";
import Tc__img3 from "./../img/imgMain/photoTc/3.jpg";
import Tc__img4 from "./../img/imgMain/photoTc/4.jpg";
import Tc__img5 from "./../img/imgMain/photoTc/5.jpg";
import left from "./../img/icon/left.png"
import right from "./../img/icon/right.png"


export default function HomePage() {
    const slides = [
        img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img1,
        img3,
        img5,
      ];

    let [startIndex, setStartIndex] = useState(0);
    const endIndex = startIndex + 3;
    const currentSlides = slides.slice(startIndex, endIndex);

    return(
        <div className={styles.HomePage}>

            <div className={styles.location}>
                <p>Главная &gt; <span>Аренда</span></p>
            </div>

             <div className={styles.about}>{/*about */}
                <div className={styles.about__photo}></div>
                <div className={styles.about__text}>
                    <div className={styles.title}>Аренда в ТУЦ “Сарафан”</div>
                    <div className={styles.about__subtitle}><p>Торговый центр «Сарафан», расположенный по адресу: г. Тула, ул. Путейская, д.5 (Площадь Московского вокзала), предлагает помещения в аренду от собственника от 25 до 1000 кв. м.</p></div>
                    <div className={styles.download}>Скачать презентацию<button><a href="/"><img src={down}
                    alt="down"></img></a></button></div>

                    <div className={styles.list}>
                        <p>Преимущества аренды в нашем торговом центре:</p>
                        <ul>
                            <li><span>ТЦ «Сарафан» находится в 5 минутах езды от центра города на площади Московского вокзала на одной из самых оживленных улиц города – Красноармейский проспект.</span></li>
                            <li><span>Рядом жилой массив, пересечение основных транспортных и пешеходных потоков –конечная остановка общественного транспорта, железнодорожный вокзал.</span></li>
                            <li><span>На территории ТЦ «Сарафан» есть бесплатная парковка для клиентов, более 500 машиномест, удобный подъезд.</span></li>
                            <li><span>Ежедневно наш ТЦ посещает порядка 10 000 тысяч человек различной целевой аудитории</span></li>
                            <li><span>Демократичные цены за аренду площади</span></li>
                            <li><span>У нас Вы можете арендовать площадь под магазины белья, одежды и обуви, салоны, точки общепита и др. </span></li>
                        </ul>
                    </div>
                    <div className={styles.last__text}>
                        Открытие торговой точки в одном из оживленных мест города обеспечит доходность, развитие и процветание Вашего бизнеса.
                    </div>

                </div>
            </div>  {/* //about */}
            
            <div className={styles.complicity}>
                <div className={styles.title}>
                    Более 130 бутиков и магазинов уже арендуют у нас помещения
                </div>
                <div className={styles.complicity__info}>

                    <div className={styles.slider}>
                        <Slider className={styles.slider__img} slides={currentSlides} />
                        <div className={styles.slider__but}>
                            <img  onClick={() => setStartIndex(startIndex === 0 ? startIndex = 0 : startIndex - 3)} src={left} alt="btn__left"></img>
                            <div className={styles.curcle__inner}>
                                <span style={startIndex === 0 ? {backgroundColor:"#6B7073", width:"9px", height:"9px"} : {backgroundColor:"#6B7073", opacity:"0.5"}} className={styles.curcle}></span>
                                <span style={startIndex === 3 ? {backgroundColor:"#6B7073", width:"9px", height:"9px"} : {backgroundColor:"#6B7073", opacity:"0.5"}} className={styles.curcle}></span>
                                <span style={startIndex === 6 ? {backgroundColor:"#6B7073", width:"9px", height:"9px"} : {backgroundColor:"#6B7073", opacity:"0.5"}} className={styles.curcle}></span>
                            </div>
                            <img  onClick={() => setStartIndex(startIndex === 6 ?  startIndex = 6 : startIndex + 3)} src={right} alt="btn__right"></img> 
                        </div>   
                    </div>

                    <div className={styles.list}>
                        <ul>
                            <li><span>Якорные арендаторы - Лента, Детский Мир, Технопарк, Модис, Familia, Читай город, Тутанхамон, Л'Этуаль</span></li>
                            <li><span>Бренды - EWA, Artigli, Gerzedo, Goergo, Du monde, Petek, Neri Karra, Ledy Collection, Paolo Conte, P'Cont, VINZER, Ace, Tonnelli, Milavitsa, и др.</span></li>
                            <li><span>Магазины спортивной одежды и инвентаря: Адреналин, Спорт Лайн.</span></li>
                            <li><span>Зона фудкорта - Burger King, Империя вкуса, Про Кофий, Добрая сдоба</span></li>
                            <li><span>Салоны связи: Билайн, Мегафон, YOTA, Связной, Теле2</span></li>
                            <li><span>Зоосад, аптека «Здесь аптека», «Арт-оптика», Fresh Оптика, ковры, салоны штор, текстиль Missis Hatson и Home TEX, салон Арт-Самовар, посуда, подарки, картины, сувениры и другие. </span></li>
                        </ul>
                    </div>

                </div>
            </div>{/* //complicity */}

            <div className={styles.info__tc}>
                <div className={styles.info__tcText}>
                    <div className={styles.text__marg}>
                        <p>Общая площадь <br/>торгового центра</p>
                        <p><span className={styles.top}>25 816 м<sup>2</sup></span></p>
                    </div>
                    <div className={styles.text__marg}>
                        <p>Площадь, сдаваемая<br/> в аренду</p>
                        <p><span className={styles.top}>16 675 м<sup>2</sup></span></p>
                    </div>
                    <div className={styles.text__marg}>
                        <p>Парковка<br/> (машиномест)</p>
                        <p><span>500</span></p></div>
                    <div className={styles.text__marg}>
                        <p>Посещаемость<br/> (в неделю)<br/></p>
                        <p><span> 100 000 чел</span></p> 
                    </div>
                </div>
                <div className={`${styles.info__tcImg} ${styles.info__tcImg1}`}>
                    <img src={Tc__img1} alt="TcPhoto 1"></img>
                    <img src={Tc__img2} alt="TcPhoto 2"></img>
                </div>
                <div className={`${styles.info__tcImg} ${styles.info__tcImg2}`}>
                    <img src={Tc__img3} alt="TcPhoto 3"></img>
                    <img src={Tc__img4} alt="TcPhoto 4"></img>
                    <img src={Tc__img5} alt="TcPhoto 5"></img>
                </div>
                   
                

            </div>
        {/* //HomePage */}</div> 
    )
}