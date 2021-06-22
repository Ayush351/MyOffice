import React from "react";
import Navbar from "../Navbar";
import pro from "../Image/pro.jpg";

const Myprofile = () => {
  return (
    <>
      <div className=" container prof-dash p-0 ">
        <Navbar />
        <h1 style={{ justifyContent: "center", textAlign: "center" }}>
          My Profile
        </h1>

        <div className="container-fluid m-5 ">
          <div className="row">
            <div className="col-xl-8 m-auto order-xl-2 mb-5 mb-xl-0 ">
              <div
                className="card border-light shadow-lg rounded"
                style={{ borderWidth: "3px" }}
              >
                <div className="container p-3 ">
                  <div className="row">
                    <div className="col-9">
                      <div class="shadow-sm p-3 mb-3 bg-white rounded">
                        <strong>Name :</strong> Vichaar Shrestha
                      </div>
                      <div class="shadow-sm p-3 mb-3 bg-white rounded">
                        <strong>Employee ID :</strong> VIC012789
                      </div>
                      <div class="shadow-sm p-3 mb-3 bg-white rounded">
                        <strong>Rank :</strong>  Senior Developer
                      </div>
                    </div>
                    <div className="col-3">
                      <img src={pro} className="card-img" style={{maxHeight:"200px" , maxwidth:"120px"}} alt="profile" />
                    </div>
                  </div>
                  <div class="shadow-sm p-3 mb-3 bg-white rounded">
                    <strong>Team ID :</strong> VICT9999
                  </div>
                  <div className="row">
                    <div className="col-lg-6 col-sm-12">
                      <div class="shadow-sm p-3 mb-3 bg-white rounded">
                        <strong>Email :</strong> VichaarShrestha@vichaardhara.com
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                      <div class="shadow-sm p-3 mb-3 bg-white rounded">
                        <strong>Github :</strong> Vichy-Shrestha
                      </div>
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

export default Myprofile;
