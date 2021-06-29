import React, { Component } from 'react'; //imrc
import "./footerBar.css"

class FooterBar extends Component { //cc
    state = {  };

    render() { 
        return ( 
            <footer className="footerbar-page">
                <span className="text-footer"> Copyright &copy;  2020-2021 Organika | Copyright &copy; 2020-2021 Organika store. All rights reserved.</span>
            </footer>
         );
    }
}
 
export default FooterBar;