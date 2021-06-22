import React from "react";
import Navbar from "../Navbar";
import ins from "../Image/ins.jpg";
import holi from "../Image/holi.jpg";
import shop from "../Image/shop.jpg";
import relax from "../Image/relax.jpg";
import acti from "../Image/acti.jpg";



const Myben = () => {
  return (
    <>
      <Navbar />
      <div className="jumbotron jumbotron-fluid ben-page mt-0">
        <div className="container border border-warning border-top-0">
          <h1> My Benefits </h1>
          <p>We care for you.</p>
        </div>
      </div>
      <div
        className="container-fluid p-3"
        style={{ backgroundColor: "#e8e8e8" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div
                className="card re"
                style={{ borderWidth: "3px", borderColor: "#fff" }}
              >
                <div className="card-body">
                  <h5 className="card-title">
                    <strong>My Rewards</strong>
                  </h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="blank" className="btn btn-outline-dark">
                    Get in.
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div
                className="card re"
                style={{ borderWidth: "3px", borderColor: "#fff" }}
              >
                <div className="card-body">
                  <h5 className="card-title">
                    <strong>My Incentives</strong>
                  </h5>
                  <p className="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="blank" className="btn btn-outline-dark">
                    Get in.
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row my-3">
            <div className="col-xl-12 m-auto order-xl-2 mb-5 mb-xl-0 ">
            <div className="card mb-3" style={{ maxWidth: "1366px" ,minHeight: "250px",maxHeight:"250px",borderWidth: "3px", borderColor: "#839b97" }}>
                <div className="row no-gutters med">
                  <div className="col-md-4">
                    <img src={ins} className="card-img" alt="medical" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body" >
                      <h1 className="card-title">Medical Insurance</h1>
                      <p className="card-text">
                      “Health insurance takes care of your medical expenses and ensures that out-of-pocket expenses are curtailed up to the Sum insured”
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row my-3">
            <div className="col-xl-12 m-auto order-xl-2 mb-5 mb-xl-0 ">
            <div className="card mb-3" style={{ maxWidth: "1366px" ,minHeight: "250px",maxHeight:"250px" ,borderWidth: "3px", borderColor: "#839b97" }}>
                <div className="row no-gutters holi">
                  <div className="col-md-4">
                    <img src={holi} className="card-img" alt="Paid" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body" >
                      <h1 className="card-title">Paid Holidays</h1>
                      <p className="card-text">
                      “A vacation is what you take when you can no longer take what you've been taking.”
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row my-3">
            <div className="col-xl-12 m-auto order-xl-2 mb-5 mb-xl-0 ">
            <div className="card mb-3" style={{ maxWidth: "1366px" ,minHeight: "250px",maxHeight:"250px",borderWidth: "3px", borderColor: "#839b97" }}>
                <div className="row no-gutters shop">
                  <div className="col-md-4">
                    <img src={shop} className="card-img" alt="shop" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body" >
                      <h1 className="card-title">Shopping Vouchers</h1>
                      <p className="card-text">
                      “There is a little bit of magic found in buying something new. It is instant gratification, a quick fix.”
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row my-3">
            <div className="col-xl-12 m-auto order-xl-2 mb-5 mb-xl-0 ">
            <div className="card mb-3" style={{ maxWidth: "1366px" ,minHeight: "250px",maxHeight:"250px" ,borderWidth: "3px", borderColor: "#839b97" }}>
                <div className="row no-gutters rel">
                  <div className="col-md-4">
                    <img src={relax} className="card-img" alt="relax" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body" >
                      <h1 className="card-title">Relaxation Classes</h1>
                      <p className="card-text">
                      "Act the way that you want to feel." 
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row my-3 ">
            <div className="col-xl-12 m-auto order-xl-2 mb-5 mb-xl-0 ">
            <div className="card mb-3 " style={{ maxWidth: "1366px" ,minHeight: "250px",maxHeight:"250px" ,borderWidth: "3px", borderColor: "#839b97" }}>
                <div className="row no-gutters act">
                  <div className="col-md-4">
                    <img src={acti} className="card-img" alt="relax" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body" >
                      <h1 className="card-title">Activity Encouragement</h1>
                      <p className="card-text">
                      “Physical Activity”--Think of it as a medication you need to take daily.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Myben;
