import React from "react";

class AddItem extends React.Component {
    constructor(props){
        super(props);
    }
    state = {
        productName: "",
        productPrice: 0,
    };
  render() {
    return (
      <form  className="row mb-5" onSubmit={(e)=>{
            e.preventDefault();
            this.props.addProduct(this.state.productName,this.state.productPrice);
            this.setState({productName:"",productPrice:0});
            this.props.itemsInCartAdd();
      }}>
        <div className="mb-3 col-5">
          <label htmlFor="Name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            aria-describedby="name"
            name="productName"
            onChange={(e) => {
              this.setState({ productName: e.target.value });
            }}
            value={this.state.productName}
          />
        </div>
        <div className="mb-3 col-5">
          <label htmlFor="inputPrice" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="productPrice"
            onChange={(e) => {
              this.setState({ productPrice: parseFloat(e.target.value) 
               });
            }}
            value={this.state.productPrice}
          />
        </div>
        <button type="submit" className="btn btn-primary col-2 h-25 mt-4" >
          Add
        </button>
      </form>
    );
  }
}

export default AddItem;
