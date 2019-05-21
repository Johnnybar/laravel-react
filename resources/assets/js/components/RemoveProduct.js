import React, { Component } from 'react';

export default class RemoveProduct extends Component {

  constructor(props) {
    super(props);
       /* Initialize the state. */
       this.state = {
          newProduct: {
              title: '',
              description: '',
              price: 0,
              availability: 0
          }
        }

    //Boilerplate code for binding methods with `this`
    // this.handleSubmit = this.handleDelete.bind(this);
  }
  componentDidMount() {
// console.log(this.props,'these are props');
  }

  /* This method dynamically accepts inputs and stores it in the state */


  render() {



    return(
      <div>
         <button onClick= {this.props.handleDelete}>Remove this product </button>
    </div>)
  }
}
