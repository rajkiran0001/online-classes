import React, { Component } from 'react'
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import styled from "styled-components";



class Navbar extends Component {

    render() {
        return (
                <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                    <Link to="/">
                        <img src={logo} alt="store" className="navbar-brand" />
                    </Link>
                    <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                            <Link to="/" className="nav-link">
                                LEARN GERMAN FREELY (LGF)
                             </Link>
                        </li>
                        <li className="nav-item ml-5">
                            <Link to="/" className="nav-link">
                                courses
                             </Link>
                        </li>
                        <li className="nav-item ml-5">
                            <Link to="/appointments" className="nav-link">
                                Appoinments
                             </Link>
                        </li>
                        <li className="nav-item ml-5">
                            <Link to="/contact" className="nav-link">
                                contact us
                             </Link>
                        </li>
                        <li className="nav-item ml-5">

                        <form  action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick" />
<input type="hidden" name="hosted_button_id" value="BV33QQWCR52U8" />
<input type="image" src="https://www.paypalobjects.com/en_US/DK/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
<img alt="" border="0" src="https://www.paypal.com/en_DE/i/scr/pixel.gif" width="1" height="1" />
</form>
                        </li>
                    </ul>
                    {/* <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2">
                        <i className="fas fa-cart-plus" />
                        </span>
                        my cart
                    </ButtonContainer>
                    </Link> */}
                </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
 background: var(--mainBlue);
 .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
    
}
`;



export default Navbar
