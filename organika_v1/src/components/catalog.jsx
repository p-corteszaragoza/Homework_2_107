import React, { Component } from 'react'; //imrc
import Item from "./item";
import "./catalog.css"

class Catalog extends Component { //cc
    state = {  
      items: []
    };

    constructor(){
      super();
    }
    
    // display element on the screen
    render() { 
        return ( 
          <div className="catalog-container">
             <Item></Item>
             <Item></Item>
             <Item></Item>
             <Item></Item>
             <Item></Item>
             <Item></Item>
             <Item></Item>
             <Item></Item>
             <Item></Item>
             <Item></Item>
          </div>
       );
    }
}
 
export default Catalog;