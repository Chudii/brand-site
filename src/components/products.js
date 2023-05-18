import { Container, Row, Col, TabContainer, Tab, Nav } from "react-bootstrap"
import { ProductCard } from "./productCard"
import colorSharp2 from '../assets/img/color-sharp2.png'
import prodImg1 from '../assets/img/product-img1.jpg'
import prodImg2 from '../assets/img/product-img2.jpg'

export const Products = () => {
    const products = [
        {
            title: "Shades",
            description: "Wood & Green Elixir Shades w/ Casing",
            imgUrl: prodImg1
        },
        {
            title: "Casing",
            description: "Wood & Blue Elixir Casing",
            imgUrl: prodImg2
        },
    ]

    return (
        <section className="product" id="product">
            <Container>
                <Row>
                    <Col>
                        <h2>Products</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <TabContainer id="products-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab One</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab Two</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third" >
                                    Tab Three
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            products.map((product, index) => {
                                                return (
                                                    <ProductCard
                                                        key={index}
                                                        {...product}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </TabContainer>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} />
        </section>
    )
}