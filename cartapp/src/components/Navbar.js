import React from 'react'


class Navbar extends React.Component {
    state = {  } 
    render() { 
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      CartApp
    </a>
    <h2>Example heading <span className="navbar-item badge bg-secondary">Items in Cart: {this.props.items}</span></h2>    
  </div>
</nav>

        );
    }
}
 
export default Navbar;