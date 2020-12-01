import React from "react";
import styles from "./HeaderComponent.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
/**/
import logo from "../../assets/img/logo_new.png";

/**/

const HeaderComponent = (props) => {
  return (
    <>
      <header>
        <Container>
          <Row>
            <Col lg={2} md={2} className={styles.logo}>
              <img src={logo} alt="logo" />
            </Col>
            <Col lg={4} md={6} className={styles.header_nav}>
              <nav>
                <span className={styles.nav_item}>Работы</span>
                <span className={styles.nav_item}>Услуги</span>
                <span className={styles.nav_item}>Преимущества</span>
                <span className={styles.nav_item}>Команда</span>
              </nav>
            </Col>
            <Col lg={6} md={4} className={styles.phone_number}>
              <span>+&nbsp;380&nbsp;(67)&nbsp;629&nbsp;79&nbsp;72</span>
            </Col>
          </Row>
        </Container>
      </header>
    </>
  );
};

export default HeaderComponent;
