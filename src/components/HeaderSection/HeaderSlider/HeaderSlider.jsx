import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Autoplay,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper";
import "swiper/swiper-bundle.css";
import bgSlide1 from "../../../assets/img/head_section_bg1.jpg";
import bgSlide2 from "../../../assets/img/head_section_bg2.jpg";
import bgSlide3 from "../../../assets/img/head_section_bg3.jpg";
import arrowToLeft from "../../../assets/img/arrowToLeft.png";
import arrowToRight from "../../../assets/img/arrowToRight.png";
import poolStairsIcon from "../../../assets/img/head_section_icon_pool_stairs.png";
import poolStairsIconActive from "../../../assets/img/head_section_icon_pool_stairs_active.png";
import poolMasageIcon from "../../../assets/img/head_section_icon_pool_masage.png";
import poolMasageIconActive from "../../../assets/img/head_section_icon_pool_masage_active.png";
import poolSportIcon from "../../../assets/img/head_section_icon_pool_sport.png";
import poolSportIconActive from "../../../assets/img/head_section_icon_pool_sport_active.png";

import styles from "./HeaderSlider.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const HeaderSlider = (props) => {
  const [slide, setSlide] = useState(0);
  SwiperCore.use([Navigation, Autoplay, Pagination, Scrollbar, A11y]);

  return (
    <div className={styles.headerSlider}>
      <Swiper
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper_button_next",
          prevEl: ".swiper_button_prev",
        }}
        autoplay={true}
        onSlideChange={(e) => {
          console.log(slide);
          setSlide((currentSlide) => (currentSlide > 1 ? 0 : currentSlide + 1));
          // setSlide(slide);
        }}
        onSwiper={(swiper) => {
          console.log(swiper);
        }}
      >
        <Container className={styles.slideControl}>
          <Row>
            <Col lg={6} md={6}>
              <div className={styles.swiper_button_prev}>
                <img
                  className={"swiper_button_prev"}
                  src={arrowToLeft}
                  alt="previous slide"
                />
              </div>
            </Col>
            <Col lg={6} md={6}>
              <div className={styles.swiper_button_next}>
                <img
                  className={"swiper_button_next"}
                  src={arrowToRight}
                  alt="next slide"
                />
              </div>
            </Col>
          </Row>
        </Container>

        <Container className={styles.poolTypes}>
          <Row>
            <Col>
              <div className={styles.poolIcons}>
                <div className={styles.icon}>
                  <span className={slide === 0 && styles.yellowText}>
                    Плавательные бассейны для частного и коммерческого
                    использования
                  </span>
                  <img
                    src={slide === 0 ? poolStairsIconActive : poolStairsIcon}
                    alt="icon"
                  />
                </div>
                <div className={styles.icon}>
                  <span className={slide === 1 && styles.yellowText}>
                    Гидромассажные бассейны для wellness-зон и частного
                    использования
                  </span>
                  <img
                    src={slide === 1 ? poolMasageIconActive : poolMasageIcon}
                    alt="icon"
                  />
                </div>
                <div className={styles.icon}>
                  <span className={slide === 2 && styles.yellowText}>
                    Спортивные бассейны для профессионального назначения
                  </span>
                  <img
                    src={slide === 2 ? poolSportIconActive : poolSportIcon}
                    alt="icon"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        <SwiperSlide>
          <img className={styles.sliderSlideImg} src={bgSlide1} alt="" />

          <Container>
            <Row className={styles.slideContent}>
              <Col>
                <p>
                  <span>Профессиональное проектирование,</span>
                  <span className={styles.slideContent_yellow_text}>
                    строительство бетонных бассейнов
                  </span>
                  <span>любых форм и размеров</span>
                  <span>«Под ключ» с гарантией соблюдения сроков</span>
                </p>

                <div className={styles.slideContent_getOffer}>
                  <form action="">
                    <input
                      className={styles.phone_input}
                      placeholder={`+38 (093) 333 33 33`}
                      type="text"
                    />
                    <button className={styles.getOffer_btn}>
                      Узнать стоимость
                    </button>
                  </form>
                </div>
              </Col>
            </Row>
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <img className={styles.sliderSlideImg} src={bgSlide2} alt="" />

          <Container>
            <Row className={styles.slideContent}>
              <Col>
                <p>
                  <span>Любой другой текст,</span>
                  <span className={styles.slideContent_yellow_text}>
                    какой вы пожелаете
                  </span>
                  <span>любых форм и размеров</span>
                  <span>«Под ключ» с гарантией соблюдения сроков</span>
                </p>

                <div className={styles.slideContent_getOffer}>
                  <form action="">
                    <input
                      className={styles.phone_input}
                      placeholder={`+38 (093) 333 33 33`}
                      type="text"
                    />
                    <button className={styles.getOffer_btn}>
                      Узнать стоимость
                    </button>
                  </form>
                </div>
              </Col>
            </Row>
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <img className={styles.sliderSlideImg} src={bgSlide3} alt="" />

          <Container>
            <Row className={styles.slideContent}>
              <Col>
                <p>
                  <span>Ну за практику спасибо,</span>
                  <span className={styles.slideContent_yellow_text}>
                    поломал я голову с этой секцией
                  </span>
                  <span></span>
                  <span>«Под ключ» с гарантией соблюдения сроков</span>
                </p>

                <div className={styles.slideContent_getOffer}>
                  <form action="">
                    <input
                      className={styles.phone_input}
                      placeholder={`+38 (093) 333 33 33`}
                      type="text"
                    />
                    <button className={styles.getOffer_btn}>
                      Узнать стоимость
                    </button>
                  </form>
                </div>
              </Col>
            </Row>
          </Container>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeaderSlider;
