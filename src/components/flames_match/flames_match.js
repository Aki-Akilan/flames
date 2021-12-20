import React,{useContext}from 'react'
import '../flames_match/flames_match.css'
import { userContext } from '../../app'
import {Link} from 'react-router-dom'
import {Container,Row,Col} from 'react-bootstrap'
function FlamesMatch() {
    const {n1,n2,win}=useContext(userContext);
    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col className="match text-center">
                        <Row className="justify-content-center"><Col xs={12} sm={7} md={7} lg={5} xl={4} xxl={5}>
                    <div className="match-con">
                            <div className="matches">
                                
                            <p className="r">Relationship Between</p>
                                
                                <p className="n1">{n1}</p>
                                <p className="is">and</p>
                                <p className="n2">{n2}
                                </p>
                                <p className="is">is</p>                            
                                <button className="match-button mb-4"><Link className="br" to="/">{win}</Link></button>
                            </div>
                    </div>
                    </Col></Row>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default FlamesMatch
