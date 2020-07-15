import React from "react";

class Header extends  React.Component{
    render() {
        return(
            <div className="ui  secondary pointing menu">
                Header
                <div className="right menu" >
                    <div className="item">
                        number of product
                    </div>

                    <div className="item">
                        cart
                    </div>

                </div>
            </div>

        );
    }
}

export default Header;