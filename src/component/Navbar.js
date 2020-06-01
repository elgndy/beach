import React ,{Component} from 'react';
import { Link } from 'react-router-dom';
import {FaAlignRight } from 'react-icons/fa';
import logo from '../imgs/logo.png'
class Navbar extends Component {
    state = {
        isopen:false
    }

     toggel = () => {
         this.setState({
             isopen:!this.state.isopen
         })
     }

    render(){
        return(
        
            <nav className="navbar">
                <div className="nav-center">
                <div className="nav-header">
                
                <button className="logo-pair">
                <Link to="/"> <img src={logo} alt="logo" /> </Link>
                </button>   
                <button className="nav-btn" onClick={ this.toggel}>
                <FaAlignRight />
                </button>
                </div>
                <ul className={this.state.isopen ? 'nav-links show-nav' : 'nav-links'}>
                    <li>
                    <Link to="/" > Home </Link>
                    </li>
                    
                    <li>
                    <Link to="/rooms" > rooms </Link>
                    </li>
                </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar