import React,{useContext} from 'react'
import {Form,Container,Row,Col} from 'react-bootstrap'
import {Link} from "react-router-dom"
import '../flamesmain/flames_main.css'
import {userContext} from '../../app'
function FlamesMain() {
    const {n1,n2,win,setwin,setn1,setn2}=useContext(userContext)
    // const [n1,setn1]=useState("")
    // const [n2,setn2]=useState("")

    var flames=["F","L","A","M","E","S"];
    // const [win,setwin]=useState("");
    const submites=(e)=>{
            e.preventDefault();
            if(n1!=""&&n2!=""){
            var namesplit1=n1.split("");
            var namesplit2=n2.split("");        
            var reset=0;
            var m=0;
            if(namesplit1.lenght>=namesplit2.length){
                for(var i=reset;namesplit1.length>=i;i++){
                    for(var j=0;namesplit2.length>=j;j++){
                        if(namesplit1[i]==namesplit2[j]){
                            delete namesplit1[i];
                            delete namesplit2[j];
                            reset=0;
                            m++;
                        }
                    }
                }
            }
            else{
                for(var i=reset;namesplit2.length>=i;i++){
                    for(var j=0;namesplit1.length>=j;j++){
                        if(namesplit2[i]==namesplit1[j]){
                            delete namesplit2[i];
                            delete namesplit1[j];
                            reset=0;
                            m++;
                        }
                    }
                }

            } 
        var a=namesplit1.join("").split("").length;    
        var b=namesplit2.join("").split("").length;    
        var total=a+b;
        console.log(total);
        var count=0;
        console.log(flames);
            for(var j=0;flames.length>j;++j){
                ++count;

                console.log(`count ${count} j ${j}`);
                    if(flames.length==1)
                    {
                        console.log("wining");
                        switch(flames[flames.length-1]){
                            case "F":
                            setwin("Friends")
                            break;
                            case "L":
                            setwin("Love")
                            break;
                            case "A":
                            setwin("Affection")
                            break;
                            case "M":
                            setwin("Marriage")
                            break;
                            case "E":
                            setwin("Enemy")
                            break;
                            case "S":
                            setwin("Sister")
                            break;
                            default:
                            setwin("error")
                            break;                                    
                        }
                        j=1000;
                } 
            if(count==total){
            delete flames[j]
            flames=flames.join("").split("");
            console.log(flames);
            count=0;
            if(j==0){
                j=-1;
            }
            else
            {
                --j;
            }
            console.log("red",j);
            } 
            console.log(`length ${flames.length}`);
            if(j==flames.length-1){
                j=-1;
                console.log("j");
            }
            }
        }
    }
    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col  className="main">
                        
                        
        <div className="main-con text-center">
            <p className="ss">Flames</p>
            
            <Form  onSubmit={submites}> 
  <Form.Group className="mb-3" controlId="formBasicEmail">
   <Form.Control id="bx" autoComplete="off" className="input" type="text" placeholder=" Your Name" value={n1} onChange={(e)=>{setn1(e.target.value);}}/>
   
  </Form.Group>

  <Form.Group className="box mb-3" controlId="formBasicPassword">
      <Form.Control id="bx1" autoComplete="off" className="input" type="text" placeholder=" Patner Name" value={n2} onChange={(e)=>setn2(e.target.value)} />
  </Form.Group>
  {win==""?<button className="main-button" type="submit">
Match
  </button>:<button className="mains-button" >
    <Link className="mainr-button" to="/flamesmatch">Result</Link>
  </button>}
</Form >
            </div>
            </Col>
            </Row>
                    
                 
            </Container>
        </React.Fragment>
    )
}

export default FlamesMain
