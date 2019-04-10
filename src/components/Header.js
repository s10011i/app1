import React, {Component} from 'react';


class Header extends Component{
    render(){
        return(
            <nav className='navbar navbar-default'>
                <div className='navbar-header'>
                    <ul className='nav navbar-nav'>
                    <li><a href=''>Home</a></li>
                    <li><a href=''>User</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}
export default Header;