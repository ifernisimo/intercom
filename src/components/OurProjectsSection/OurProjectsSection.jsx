import React from "react";
/*BOOTSTRAP*/
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
/*SWIPER*/
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Autoplay,
  Pagination,
  Scrollbar,
  A11y,
  Zoom,
} from "swiper";
/**/

const OurProjectsSection = () => {
  SwiperCore.use([Navigation, Autoplay, Pagination, Scrollbar, A11y, Zoom]);
  return (
    <>
      <Container>
        <Row>
          <Col lg={{ span: 4, offset: 4 }} md={{ span: 4, offset: 4 }}>
            <h4>Галерея наших работ</h4>
          </Col>
        </Row>
        <Row>
          <Swiper
            slidesPerView={4}
            slidesPerColumn={2}
            zoom={true}
            spaceBetween={20}
            navigation={{
              nextEl: ".swiper_button_next",
              prevEl: ".swiper_button_prev",
            }}
            autoplay={true}
            onSlideChange={(e) => {}}
            onSwiper={(swiper) => {}}
          >
            <SwiperSlide>
              <img
                src="https://sun9-63.userapi.com/c854220/v854220034/13b193/jvcSWJ2BqgU.jpg?ava=1"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://sun9-63.userapi.com/c854220/v854220034/13b193/jvcSWJ2BqgU.jpg?ava=1"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://sun9-63.userapi.com/c854220/v854220034/13b193/jvcSWJ2BqgU.jpg?ava=1"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://sun9-63.userapi.com/c854220/v854220034/13b193/jvcSWJ2BqgU.jpg?ava=1"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://sun9-63.userapi.com/c854220/v854220034/13b193/jvcSWJ2BqgU.jpg?ava=1"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://sun9-63.userapi.com/c854220/v854220034/13b193/jvcSWJ2BqgU.jpg?ava=1"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://sun9-63.userapi.com/c854220/v854220034/13b193/jvcSWJ2BqgU.jpg?ava=1"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://sun9-63.userapi.com/c854220/v854220034/13b193/jvcSWJ2BqgU.jpg?ava=1"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://sun9-63.userapi.com/c854220/v854220034/13b193/jvcSWJ2BqgU.jpg?ava=1"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://sun9-63.userapi.com/c854220/v854220034/13b193/jvcSWJ2BqgU.jpg?ava=1"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://sun9-63.userapi.com/c854220/v854220034/13b193/jvcSWJ2BqgU.jpg?ava=1"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://sun9-63.userapi.com/c854220/v854220034/13b193/jvcSWJ2BqgU.jpg?ava=1"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </Row>
      </Container>
    </>
  );
};

export default OurProjectsSection;
