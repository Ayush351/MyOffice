import React from "react";
import Navbar from "../Navbar";
import ai from "../Image/ai.jpg"
import machine from "../Image/machine.jpg";
import vr from "../Image/vr.jpg";
import data from "../Image/data.jpg";
import networking from "../Image/networking.jpg";

const Learning = () => {
  return (
    <>
      <Navbar />
      <div className="jumbotron jumbotron-fluid learn-page mt-0">
        <div className="container border border-warning border-right-0">
          <h1> Learning </h1>
          <p>
            “Education is the passport to the future, for tomorrow belongs to
            those who prepare for it today.” ―Malcolm X
          </p>
        </div>
      </div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-xl-12 m-auto order-xl-2 mb-5 mb-xl-0 ">
            <div className="container p-2 m-2 mx-auto">
            
              <div className="card mb-3" style={{ maxWidth: "1366px" ,minHeight: "250px",maxHeight:"250px" ,borderWidth: "3px", borderColor: "#839b97"  }}>
                <div className="row no-gutters ai">
                  <div className="col-md-4">
                    <img src={ai} className="card-img" alt="artificial intelligence" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body" >
                      <h1 className="card-title">Artificial Intelligence</h1>
                      <p className="card-text">
                      “Is artificial intelligence less than our intelligence?”
                      </p>
                    </div>
                  </div>
                </div>
              </div>
             
              <div className="card mb-3" style={{ maxWidth: "1366px" ,minHeight: "250px" ,maxHeight: "250px" ,borderWidth: "3px", borderColor: "#839b97" }}>
                <div className="row no-gutters ml">
                  <div className="col-md-4">
                    <img src={machine} className="card-img" alt="Machine Learning" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body ">
                      <h1 className="card-title">Machine Learning</h1>
                      <p className="card-text">
                      “Computers are able to see, hear and learn.  Welcome to the future.”
                      </p>
                    </div>
                  </div>
                </div>
              </div>
         
              <div className="card mb-3" style={{ maxWidth: "1366px" ,minHeight : "250px" , maxHeight: "250px" ,borderWidth: "3px", borderColor: "#839b97" }}>
                <div className="row no-gutters vr">
                  <div className="col-md-4">
                    <img src={vr} className="card-img" alt="Virtual Reality" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h1 className="card-title">Virtual Reality</h1>
                      <p className="card-text">
                      “There are as many applications for VR as you can think of, it’s restricted by your imagination.”
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="card mb-3" style={{ maxWidth: "1366px" ,minHeight : "250px" ,minWidth : "250px" ,borderWidth: "3px", borderColor: "#839b97" }}>
                <div className="row no-gutters data">
                  <div className="col-md-4">
                    <img src={data} className="card-img" alt="Data Analytics" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h1 className="card-title">Data Analytics</h1>
                      <p className="card-text">
                      “You can have data without information, but you cannot have information without data.”
                      </p>
                    </div>
                  </div>
                </div>
              </div>
             
              <div className="card mb-3" style={{ maxWidth: "1366px" , minHeight: "250px" , minWidth: "250px" ,borderWidth: "3px", borderColor: "#839b97" }}>
                <div className="row no-gutters net">
                  <div className="col-md-4">
                    <img src={networking} className="card-img" alt="Networking" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h1 className="card-title"> Computer Networking</h1>
                      <p className="card-text">
                        Learn and Enjoy Computer Networking
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

export default Learning;
