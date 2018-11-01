import * as React from 'react';

const Header = () => {
    const style = {
        nav: {
            display: 'flex',
            justifyContent: 'space-between',
            padding: '30px',
            background: 'linear-gradient(to left, rgb(21, 113, 192) 24%,rgb(48, 203, 153) 68%)',
            lineHeight: '36px',
            color: '#fff',
            fontFamily: 'monospace',
            fontSize: 20,
            fontWeight: 600
        },
        image: {
            marginRight: 10
        },
        icon: {
            fontSize: 35
        }
    }
    return (
        <div style={style.nav}>
            <span className="logo">AISensum</span>
            <span>Customer Profile</span>
            <div className="links-container">
                <div className="links">
                    <span style={style.image}><i className="fa fa-user-o" style={style.icon}></i></span>
                    <span style={style.image}><i className="fa fa-envelope" style={style.icon}></i></span>
                    <span style={style.image}><i className="fa fa-power-off" style={style.icon}></i></span>
                </div>
            </div>
        </div>
    )
};
export default Header;