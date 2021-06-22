import React from "react";
import Navbar from "../Navbar";

const Worklist = () => {
  return (
    <>
      <div className="container work-dash p-0">
        <Navbar />
        <h1 style={{ justifyContent: "center", textAlign: "center" }}>
          Worklist
        </h1>
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-xl-8 m-auto order-xl-2 mb-5 mb-xl-0 ">
              <div className="card shadow-lg rounded work-trans">
                <div className="container m-3 p-3">
                  {/**First Input */}
                  <div class="form-check shadow-sm p-2 m-2 bg-white rounded">
                    <label class="form-check-label" for="check1">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="check1"
                        name="option1"
                        value="something"
                      />
                      Create dashboard.
                    </label>
                  </div>
                  {/**First Innput */}
                  {/**Second Input */}
                  <div class="form-check shadow-sm p-2 m-2 bg-white rounded">
                    <label class="form-check-label" for="check2">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="check2"
                        name="option2"
                        value="something"
                      />
                      Add animation to homepage.
                    </label>
                  </div>
                  {/**Second Input */}
                  {/**Third Input */}
                  <div class="form-check shadow-sm p-2 m-2 bg-white rounded">
                    <label class="form-check-label" for="check3">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="check3"
                        name="option3"
                        value="something"
                      />
                      Add profile details in database.
                    </label>
                  </div>
                  {/**Third Input */}
                  {/**Fourth Input */}
                  <div class="form-check shadow-sm p-2 m-2 bg-white rounded">
                    <label class="form-check-label" for="check4">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="check4"
                        name="option4"
                        value="something"
                      />
                      Sync web app with central database
                    </label>
                  </div>
                  {/**Fourth Input */}
                  {/**Fifth Input */}
                  <div class="form-check shadow-sm p-2 m-2 bg-white rounded">
                    <label class="form-check-label" for="check5">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="check5"
                        name="option5"
                        value="something"
                      />
                      Create a login form
                    </label>
                  </div>
                  {/**Fifth Input */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Worklist;
