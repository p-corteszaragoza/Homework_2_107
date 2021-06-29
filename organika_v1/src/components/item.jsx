import React, { Component } from 'react'; //imrc
import "./item.css"
import QuantityPicker from './quantityPicker';

class Item extends Component { //cc
    state = {  };

    render() { 
        return ( 
          <div className="item-bar">
             <img src="https://picsum.photos/200/300" alt="item" />
            
             <h6>This is the title of this product</h6>
             <label> Total: $120.93 </label>
             <label> Price: $12.09 </label>
             <div className="item-controls">
             <QuantityPicker></QuantityPicker>
             <button className="btn btn-sm btn-primary btn-add"> Add </button>
             </div>
          </div> )
    }
}
 
export default Item;