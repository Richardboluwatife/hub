import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Png1 from './assets/Png1.png'

const Landing = () => {
    return (
        <div>
            <div className="Landing">
                <div className="Name">
                    <h1 style={{ color: "rgb(19, 105, 7)" }}>Farm</h1>
                    <h1 style={{ color: "rgb(247, 111, 40)" }}>Hub</h1>
                </div>
                <nav className="bg-body-tertiary">
                    <Navbar className="bg-body-tertiary" style={{ color: "rgb(19, 105, 7)", fontSize: '25px' }}>
                        <Container>
                            <Navbar.Brand><h1>Home</h1></Navbar.Brand>
                        </Container>
                    </Navbar>
                    <br />
                    <Navbar className="bg-body-tertiary" style={{ fontSize: '25px' }}>
                        <Container>
                            <Navbar.Brand><h1>About Us</h1></Navbar.Brand>
                        </Container>
                    </Navbar>
                    <br />
                    <Navbar className="bg-body-tertiary" style={{ fontSize: '25px' }}>
                        <Container>
                            <Navbar.Brand><h1>Our Services</h1></Navbar.Brand>
                        </Container>
                    </Navbar>
                    <Navbar className="bg-body-tertiary" style={{ fontSize: '25px' }}>
                        <Container>
                            <Navbar.Brand><h1>Contact Us</h1></Navbar.Brand>
                        </Container>
                    </Navbar>

                    <div className="" style={{ paddingTop: "25px" }}>
                        <button style={{ borderRadius: "30px", width: '140px', height: "48px", fontSize: '20px' }}>Get Started</button>
                    </div>
                </nav>
            </div>

            <div className="secondface">
                <div className="secondword">
                    <h1>Looking for the heart <br /> of agriculture? <br /> Welcome to FarmHub</h1>
                    <h3>The place where purchase meets delight</h3>

                    <div className="">
                        <div class="hm2">
                            <form>
                                <i class="fas fa-search"></i>
                                <input type="text" placeholder="What do you want to purchase " style={{ backgroundColor: "whitesmoke" }} />
                                <button type="submit">search</button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="Png1">
                    <img src={Png1} alt="" srcset="" />
                </div>
            </div>

            <div className="">
                <h3 style={{textAlign:'center'}}>Trusted by various partners</h3>
                <div className=""style={{backgroundColor:"red"}}>

                </div>
            </div>

        </div>
    )
}

export default Landing