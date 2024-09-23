import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/img/logo.svg"

const NavBar = () => {
  return (
    <div className="nav-style w-100">
      <Container>
        <Row className="pt-2">
            <Col xs="2" lg="1">
            <img className="logo" src={logo} alt="logo"/>
            </Col>
            <Col xs="10" lg="11" className=" d-flex align-items-center">
            <div className="search w-100">
              <input type="text" className="form-control" placeholder="Search..."/>
            </div>
            </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NavBar;
