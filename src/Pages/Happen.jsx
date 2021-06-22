import React from "react";
import Navbar from "../Navbar";
import hapone from "../Image/hapone.png";
import haptwo from "../Image/haptwo.png";
import hapthree from "../Image/hapthree.png";

const Happen = () => {
  return (
    <>
      <Navbar />
      <div class="jumbotron jumbotron-fluid happ-page mt-0 pt-5">
        <br />
        <br />
        <br />
        <br />
        <br />
        <div class="container border border-warning border-top-0">
          <h1> Happening </h1>
        </div>
      </div>
      <div className="container-fluid hap-bg">
        <div className="row">
          <div className="col-xl-10 m-auto order-xl-2 mb-5 p-3 mb-xl-0 ">
            <div className="container p-0 bg-white">
              <div className="row">
                <div className="col-md-4  p-5">
                  <h5>
                    <strong>
                      Databand raises $14.5M led by Accel for its data pipeline
                      observablity tools
                    </strong>
                  </h5>
                  <h6>
                    <strong>Ingrid Lunden</strong>
                  </h6>
                  <small className="text-muted">
                    2:05 PM GMT +5:30 December 1, 2020
                  </small>
                </div>
                <div className="col-md-4  p-5">
                  <h7 className="text-muted">
                    DevOps continues to get a lot of attention as a wave of
                    companies develop more sophisticated tools to help
                    developers manage increasingly complex architectures and
                    workloads. In the latest development,
                  </h7>
                </div>
                <div className="col-md-4  p-5">
                  <img
                    src={hapone}
                    className="card-img"
                    alt="artificial intelligence"
                  />
                </div>
              </div>
              <hr className="mx-5" />
              <div className="row">
                <div className="col-md-4  p-5">
                  <h5>
                    <strong>
                      Intelli-Hacks Hackathon.What is a Hackathon?
                      <span style={{ color: "blue" }}>
                        INNOVATION UNLOCKS VALUE
                      </span>
                    </strong>
                  </h5>
                  <h6>
                    <strong>Manish Singh</strong>
                  </h6>
                  <small className="text-muted">
                    3:05 PM GMT +5:30 December 10, 2020
                  </small>
                </div>
                <div className="col-md-4  p-5">
                  <h7 className="text-muted">
                    Hackathon is a nationwide initiative to provide students
                    with a platform to solve some of the pressing problems we
                    face in our daily lives, and thus inculcate a culture of
                    product innovation and a mindset of problem-solving.
                  </h7>
                </div>
                <div className="col-md-4  p-5">
                  <img src={haptwo} className="card-img" alt="hack" />
                </div>
                <hr />
              </div>
              <hr className="mx-5" />
              <div className="row">
                <div className="col-md-4  p-5">
                  <h5>
                    <strong>
                      <span style={{ color: "orange" }}>SAP and DSAG:</span>
                      Joint Forecasts for Digital Transformation
                    </strong>
                  </h5>
                  <h6>
                    <strong>Holger Eriksdotter</strong>
                  </h6>
                  <small className="text-muted">
                    8:05 PM GMT +5:30 December 12, 2020
                  </small>
                </div>
                <div className="col-md-4  p-5">
                  <h7 className="text-muted">
                    In the recent position paper jointly written by SAP and
                    DSAG, the German-speaking SAP User Group, the authors
                    develop scenarios for the “next but one” generation of
                    digitalization.
                  </h7>
                </div>
                <div className="col-md-4  p-5">
                  <img src={hapthree} className="card-img" alt="hack" />
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Happen;
