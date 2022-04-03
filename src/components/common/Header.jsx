import React from 'react';
import Menu from '../common/Menu';
const Header = () => {
    return (<div>
        <header className="header">
            <div className='container'>
                <div className='col-md-12'>
                   Headlines Today
                </div>
            </div>
            <Menu />
        </header>

    </div>)
}

export default Header;