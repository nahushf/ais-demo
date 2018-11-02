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
            fontSize: 20,
        },
        image: {
            // marginRight: 10
        },
        icon: {
            fontSize: 24,
            padding: '0 15px'
        }
    };
    return (
        <div style={style.nav}>
            <div style={{ margin: 'auto', maxWidth: '1250px', width: '90%', display: 'flex', justifyContent: 'space-between' }}>
                <span className="logo" style={{ fontWeight: 'bold' }}>AiSensum Report</span>
                <div className="links-container">
                    <div className="links">
                        <span style={style.image}><i className="fa fa-user-o" style={style.icon}></i></span>
                        <span style={style.image}><i className="fa fa-envelope" style={style.icon}></i></span>
                        <span style={style.image}><i className="fa fa-power-off" style={{ ...style.icon, paddingRight: '0px' }}></i></span>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Header;