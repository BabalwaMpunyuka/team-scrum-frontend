import { Card, Container, Button, Row, Col } from "react-bootstrap";

const Header = () => {

    return (
        <div>
            <Container fluid>
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
            </Container>
            <Container fluid>
                <h2>Our area of expertise</h2>
                <Row>
                    <Col>
                        <h2>Financial Appraisal</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, quos excepturi ex fuga ratione quidem. Dolor quis iusto ipsa nemo?</p>
                    </Col>
                    <Col>
                        <h2>Financial Diagnosis</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, quos excepturi ex fuga ratione quidem. Dolor quis iusto ipsa nemo?</p>
                    </Col>
                    <Col>
                        <h2>Financial Modelling and Evaluation</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, quos excepturi ex fuga ratione quidem. Dolor quis iusto ipsa nemo?</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>An image is required</p>
                        <img alt="Investment"/>
                    </Col>
                    <Col>
                        <h2>Security and encryption</h2>
                        <Button href="#" variant='primary'>Learn More</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2>Learn tips and gain more knowledge</h2>
                        <Button href="#" variant='primary'>Watch videos</Button>
                    </Col>
                    <Col>
                        <p>An video is required</p>
                        <img alt="Investment video"/>
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <h2>Investment news blog</h2>
                <Row>
                    <Col>
                        <Card style={{width:'18rem'}}>
                            <Card.Img variant='top'/>
                            <Card.Body>
                                <Card.Text>
                                    Some information about the project
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{width:'18rem'}}>
                            <Card.Img variant='top'/>
                            <Card.Body>
                                <Card.Text>
                                    Some information about the project
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{width:'18rem'}}>
                            <Card.Img variant='top'/>
                            <Card.Body>
                                <Card.Text>
                                    Some information about the project
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Button href='#' className='ml-5' variant='primary'>More news</Button>
            </Container>
        </div>
    )
}

export default Header;