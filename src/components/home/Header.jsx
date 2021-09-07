import styles from "./Header.module.css";
import Button from "../form/button/Button";

const Header = () => {
  return (
    <div className={`${styles.header}`}>
      <div className={`${styles.header_content}`}>
        <h1>Investment made easy</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing
          nullam gravida at massa, id nisl porttitor. Non risus in dictum
          tiaenean.
        </p>
        <Button type="button" classNames="" variant="primary">
            Get Started
        </Button>
      </div>
      <div className="header-image"></div>
      {/* <Container fluid>
                <Row>
                    <Col>
                        <h2>Investment made easy</h2>
                        <Button href='#' variant='primary'>Get Started</Button>
                    </Col>
                    <Col>
                        <p>An image is required</p>
                        <img alt='Investment'/>
                    </Col>
                </Row>
            </Container> */}
    </div>
  );
};

export default Header;
