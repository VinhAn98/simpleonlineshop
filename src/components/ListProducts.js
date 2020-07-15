import React from "react";
import {connect} from 'react-redux';
import {fetchProducts} from "../actions";
import Shoe from '../images/shoe.jpg';

class ListProduct extends  React.Component{
   componentDidMount() {
       this.props.fetchProducts();
       console.log(this.props.products);
   }
    renderList() {
        return this.props.products.map( product => {
            return(
                <div className="column" key={product.id}>
                    <div className="ui segment">
                        <div className="ui two column grid">
                           <img src={Shoe}  />
                           <div>
                               <div>
                                   {product.id}
                               </div>
                               {product.description}
                           </div>
                        </div>
                        <div style={{margin:"auto",display:"flex",justifyContent:"center"}} >
                            <button className="ui  button primary" >
                                see info
                            </button>
                        </div>
                    </div>

                </div>

            );
        });
    }
    render() {
        return(
            <div className="">
                <h1 style={{textAlign: "center"}}>List Product</h1>
                <div className="ui two column grid">
                    {this.renderList()}
                </div>
            </div>

        );
    }
}
const mapStateToProps = (state) => {
    return {
        products:Object.values(state.products)
    };
};
export default connect(
    mapStateToProps,
    {fetchProducts}
)(ListProduct);