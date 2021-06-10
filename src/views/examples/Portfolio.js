/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import cover from "assets/img/theme/cover.webp";
import petSpot from "assets/img/theme/petSpot.PNG";


// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import Download from "../IndexSections/Download.js";
import CardHeader from "reactstrap/lib/CardHeader";

class portfolio extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
              <img src={cover} className="section-profile-cover "></img>
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-light bg-dark">
                        Ali Rahhal{" "}
                        <span >Software Developer</span>
                      </h1>
                      <p className="text-light bg-dark">
                        I put in your hands some of the works, previous projects, that you can look at.
                      </p>
                      <Badge color="gray" className="lead text-light bg-dark" >"no pain, no gain"</Badge>
                      <div className="btn-wrapper">

                        <Button
                          className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                          color="default"
                          href="https://github.com/arahal81"
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="fa fa-github" />
                          </span>
                          <span className="btn-inner--text">
                            Github Projects
                          </span>
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardHeader >
                          <CardImg alt="..." src={petSpot}></CardImg>
                        </CardHeader>
                       
                        <CardBody className="py-5">
                          <h6 className="text-primary text-uppercase">
                            Pet Spot
                          </h6>
                          <p className="description mt-3">
                            This App for Pet Shop online where you can adopt pet and You can buy everything related to pets <br></br><br></br>
                            Team members:
                          </p>
                          <div>
                            <Badge color="primary" pill className="mr-1">
                              Ali Rahhal
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                            Shahed Musleh
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                            Balqees Abusalameh
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                            Osama Noufal
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                            Reem Mubaydeen
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="primary"
                            href="https://final-project2021201.github.io/PetSpot/index.html"
                            target="__blank"
                          >
                            Take a look
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <i className="ni ni-istanbul" />
                          </div>
                          <h6 className="text-success text-uppercase">
                            301 Project
                          </h6>
                          <p className="description mt-3">
                            I'll upload here 301 project.
                          </p>
                         
                          <Button
                            className="mt-4"
                            color="success"
                            href="#"
                            onClick={e => e.preventDefault()}
                          >
                            Soon
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                           401 project
                          </h6>
                          <p className="description mt-3">
                          I'll upload here 401 project.
                          </p>
                        
                          <Button
                            className="mt-4"
                            color="warning"
                            href="#"
                            onClick={e => e.preventDefault()}
                          >
                             soon
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>

        </main>
      
      </>
    );
  }
}

export default portfolio;
