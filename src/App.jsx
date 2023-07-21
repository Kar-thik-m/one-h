import React, { useState } from "react";
import Addcard from "../src/card";




function App() {
  
 const [count,setCount]=useState(0);

const inc =()=>{
  setCount(count+1);
}
const dec=()=>{
  setCount(count-1);
}
 
  return (
    <div className="App">

      <div className="App">

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#"><b>Start Bootstrap</b></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Shop
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">All Products</a>
                  <a className="dropdown-item" href="#">Popular Items</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">New Arrivals</a>
                </div>
              </li>

            </ul>

          </div>
          <button className="btn btn-outline-dark" type="submit">
            <i className="bi-cart-fill me-1"></i>
            Cart
            <span className="badge bg-dark text-white ms-1 rounded-pill" >{count}</span>
          </button>

        </nav>


        <header className="bg-dark py-5">
          <div className="container px-4 px-lg-5 my-5">
            <div className="text-center text-white">
              <h1 className="display-4 fw-bolder">Shop in style</h1>
              <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
            </div>
          </div>
        </header>

        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <div className="col mb-5">
              <div className="card h-100">

                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />

                <div className="card-body p-4">
                  <div className="text-center">

                    <h5 className="fw-bolder">Fancy Product</h5>

                    $40.00 - $80.00
                  </div>
                </div>

                <button type="button" class="btn btn-outline-secondary" style={{width:'100px',marginLeft:'77px',marginBottom:'15px'}}>View Card</button>
              </div>
            </div>
            
           
            
            <Addcard 
            inc={inc}
            dec={dec}
            price={'Special Item'}
            item={'$20.00 $18.00'}
            />
            <Addcard 
            inc={inc}
            dec={dec}
            price={'Sale Item'}
            item={'$50.00 $25.00'}
            />
            <Addcard 
            inc={inc}
            dec={dec}
            price={'Popular Item'}
            item={'$40.00'}
            />
            <Addcard 
            inc={inc}
            dec={dec}
            price={'Sale Item'}
            item={'$50.00 $25.00'}
            />
            <Addcard 
            inc={inc}
            dec={dec}
            price={'Fancy Product'}
            item={'$120.00 - $280.00'}
            />
            <Addcard 
            inc={inc}
            dec={dec}
            price={'Special Item'}
            item={'$20.00 $18.00'}
            />
             <Addcard 
            inc={inc}
            dec={dec}
            price={'Popular Item'}
            item={'$40.00'}
            />
          

          </div>
        </div>
      </div>
    </div>


  );
}
export default App;


