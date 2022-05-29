import React, { useEffect } from "react";

function Facturation() {
  //get user from local storage-------------------------------------------
  const user = JSON.parse(localStorage.getItem("userInfo")).data;

  //get customer data from local storage-----------------------------------
  const customerData = JSON.parse(localStorage.getItem("CustomerData"));
  console.log(customerData);

  //facturation date--------------------------------------------------------
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  return (
    <>
      <div className="card facturation">
        <div className="card-header bg-black"></div>
        <div className="card-body">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 facturation-heading">
                <div className="div-logo-fac">
                  <div className="card-heading facturation-logo"></div>
                </div>
                <ul className="list-unstyled float-end">
                  <li style={{ fontSize: "30px", color: "#26953c" }}>
                    AgriKit
                  </li>
                  <li>Av. Allal Al Fassi, Rabat</li>
                  <li>06 32 13 14 65</li>
                  <li>elmourtazakkawtar39@gmail.com</li>
                </ul>
              </div>
            </div>

            <div className="row text-center">
              <h3
                className="text-uppercase text-center mt-3"
                style={{ fontSize: "40px" }}
              >
                Invoice
              </h3>
            </div>
            <hr></hr>
            <div className="row mx-3">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Description</th>
                    <th scope="col">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {customerData.customerCart.carts.map((produc) => {
                    return (
                      <>
                        <tr>
                          <td>{produc.pName}</td>
                          <td className="span-quantity-fac">
                            {produc.pPrice * produc.pQuantity} ${" "}
                            <span className="fac-span">{produc.pQuantity}</span>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="row">
              <div className="col-xl-8">
                <ul className="list-unstyled float-end me-0">
                  <li>
                    <span className="me-3 float-start">Total Amount:</span>
                    {customerData.customerCart.totalPrice} $
                  </li>
                  <li>
                    {" "}
                    <span className="me-5">Discount:</span>0 $
                  </li>
                </ul>
              </div>
            </div>
            <hr></hr>
            <div className="row">
              <div className="col-xl-12 facturation-heading">
                <ul className="list-unstyled float-end">
                  <li style={{ fontSize: "30px", color: "#26953c" }}>
                    Mr. {customerData.customerDetails.customerName}
                  </li>
                  <li>
                    Address: {customerData.customerDetails.customerAddress}{" "}
                  </li>
                  <li>Email: {user.uEmail}</li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-8">
                <p
                  className="float-end"
                  style={{
                    fontSize: "30px",
                    color: "red",
                    fontWeight: "400",
                    fontFamily: "Arial, Helvetica, sans-serif",
                  }}
                >
                  Total:
                  <span>{customerData.customerCart.totalPrice} $</span>
                </p>
              </div>
            </div>

            <div className="row mt-2 mb-5">
              <p className="fw-bold">
                Date: <span className="text-muted">{date}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="card-footer bg-black"></div>
      </div>
    </>
  );
}

export default Facturation;
