import { Col, Container, Row, Button } from "react-bootstrap";
import atta from './atta.jpeg';
import jeera from './jeera.jpeg';
import dhone from './dhone.jpg';
import food from './food.jpg';
import glucond from './glucond.jpg';
import oil from './oil.jpg';
import "bootstrap/dist/css/bootstrap.css";
import './Home.css';
import { useEffect, useRef, useState } from "react";

const Home = () => {
    const [price, setPrice] = useState(399);
    const [qty, setQty] = useState(1);
    const [amt, setAmt] = useState(399);

    useEffect(() => {
        const p = parseInt(localStorage.getItem('price'));
        console.log(p);
        const q = parseInt(localStorage.getItem('qty'));
        const a = parseInt(localStorage.getItem('amt'));
        if(!p)
        setPrice(399);
        else
        setPrice(p);
        if(!q)
        setQty(1);
        else
        setQty(q);
        if(!a)
        setAmt(399);
        else
        setAmt(a);
    }, []);


    const isInitialMount = useRef(true);

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            localStorage.setItem("price", price.toString());
            localStorage.setItem("qty", qty.toString());
            localStorage.setItem("amt", amt.toString());
        }
    }, [price, qty, amt]);

    return (
        <>
            <Container className="mt-5">
                <Row>
                    <Col md={5} className="text-center">
                        <img src={atta} className="img-fluid" alt="" />
                    </Col>
                    <Col md={7}>
                        <h4>Ashirvaad Atta - Whole Wheat, 10 kg Pouch</h4>
                        <h5>Rs. {price}</h5>
                        <h5 className="pt-3">Pack Sizes</h5>
                        {price == 399 ? <Button className="selectedtab mr-2" onClick={() => setPrice(399)}>10 kg<br />Rs. 399</Button> : <Button className="tabbtn mr-2" onClick={() => setPrice(399)}>10 kg<br />Rs. 399</Button>}
                        {price == 209 ? <Button className="selectedtab ml-2" onClick={() => setPrice(209)}>5 kg<br />Rs. 209</Button> : <Button className="tabbtn ml-2" onClick={() => setPrice(209)}>5 kg<br />Rs. 209</Button>}
                        <h5 className="pt-3">Quantity :</h5>
                        <Button className="mr-2 incdecbtn" onClick={() => setQty(qty > 1 ? qty - 1 : 1)}>-</Button>
                        {qty}
                        <Button className="ml-2 incdecbtn" onClick={() => setQty(qty + 1)}>+</Button>
                        <br />
                        <br />
                        <span><Button onClick={() => setAmt(price * qty)}>Payable</Button></span>
                        <span className="pt-3"> = Rs. {amt}</span>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="pt-5 mb-5">
                <Row>
                    <Col md={4} className="r mx-3 pt-5 text-center shadowCutom">
                        <img src={jeera} className="pt-5 img-fluid" alt="" />
                        <h5 className="pt-4">Masalas, Spices & Cooking Paste</h5>
                    </Col>
                    <Col>
                        <Container>
                            <Row className="pt-5 text-center mt-md-n5">
                                <Col xs={6} className="r py-5 borr borb shadowCutom">
                                    <img src={glucond} className="img-fluid" alt="" />
                                    <h5 className="pt-3">Energy Drinks</h5>
                                </Col>
                                <Col xs={6} className="r py-5 borl borb shadowCutom">
                                    <img src={oil} className="img-fluid" alt="" />
                                    <h5 className="pt-3">Oils</h5>
                                </Col>
                            </Row>
                            <Row className="pt-5 text-center mt-n5">
                                <Col xs={6} className="r py-5 borr bort shadowCutom">
                                    <img src={food} className="img-fluid" alt="" />
                                    <h5 className="pt-3">Health & Nutrition</h5>
                                </Col>
                                <Col xs={6} className="r py-5 borl bort shadowCutom">
                                    <img src={dhone} className="img-fluid" alt="" />
                                    <h5 className="pt-3">Masalas, Spices & Cooking Paste</h5>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Home;