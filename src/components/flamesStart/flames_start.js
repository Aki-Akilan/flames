import React,{useEffect,useContext} from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import '../flamesStart/flames_start.css'
import {Link} from 'react-router-dom'
import {userContext} from '../../app'
function FlamesStart() {
    const {setwin,setn1,setn2}=useContext(userContext)

    useEffect(()=>{
            setwin("");
            setn1("");
            setn2("");
    })
    return (
        <React.Fragment>
            <Container fluid>
                <Row>
                    <Col className="start">
                    <div className="start-container">
                            <p>Flames</p>
                            <button className="start-button"><Link className="link-button" to="/flamesmain">Start</Link></button>
                    </div>
                    </Col>
                </Row>
            </Container>
        
        </React.Fragment>
    )
}

export default FlamesStart
