import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import astronaut from "../assets/astronaut.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';


const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Web Designer", "Tech Integrator" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
                <span className="tagline">Welcome to my Portfolio</span> <br/>
                <h1>{`Hello! I'm Zelle`} <span><span className="wrap">{text}</span></span></h1>  <br/>
                  <p>I originally worked as a registered pharmacist but transitioned into a web developer due to the pandemic. <br/> <br/>
                  In 2020, I took a leap and resigned from my onsite job to explore opportunities in the online world. Luckily, I landed positions as a social media associate and virtual assistant, building my portfolio by assisting personal brands and companies with a wide range of tasks. Along the way, I discovered my love for tech automations, web development and found it to be my true calling.
                  </p>
                  <button onClick={() => window.location = 'mailto:contact@deozzellbusiness.com'}>Let’s Connect <ArrowRightCircle size={25} /></button>
          </Col>
          <Col xs={12} md={6} xl={5} className="image">
                  <img src={astronaut} alt="Header Img"/>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Banner;