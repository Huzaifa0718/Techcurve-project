import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import data from "../Data";

export default function Create() {
  const [items, setItems] = useState(data);
  // const [values, Setvalues] = useState({
  //   email: "",
  //   firstname: "",
  //   lastname: "",
  //   phone: "",
  //   date: "",
  //   Register: ""
  // });
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  // };

  const addNewItem = (event) => {
    const newItem = {
      email: "",
      firstname: "",
      lastname: "",
      phone: "",
      date: "",
      Register: ""
    };
    // setItems([...items, newItem]);
  };

  return (
    <div className="d-flex w-300 vh-100 justify-content-center align-items-center bg-light my-3">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-rounded my-3">
        <form>
          <div class="form-row">
            <div class="col my-3">
              <input
                type="text"
                class="form-control"
                placeholder="Email Address"
                onChange={(e) => setItems({ ...items, email: e.target.value })}
              />
            </div>
            <div class="col my-3">
              <input
                type="text"
                class="form-control"
                placeholder="First name"
                onChange={(e) =>
                  setItems({ ...items, firstname: e.target.value })
                }
              />
            </div>
            <div class="col my-3">
              <input
                type="text"
                class="form-control"
                placeholder="Last name"
                onChange={(e) =>
                  setItems({ ...items, lastname: e.target.value })
                }
              />
            </div>
            <div class="col my-3">
              <input
                type="text"
                class="form-control"
                placeholder="Email Category"
                onChange={(e) => setItems({ ...items, phone: e.target.value })}
              />
            </div>
            <div class="col my-3">
              <input
                type="number"
                class="form-control"
                placeholder="Phone No"
                onChange={(e) => setItems({ ...items, date: e.target.value })}
              />
            </div>
            <div class="col my-3">
              <input
                type="date"
                class="form-control"
                placeholder="Register Date"
                onChange={(e) =>
                  setItems({ ...items, Register: e.target.value })
                }
              />
            </div>
            <div>
              <button className="btn btn-success  mx-3 " onClick={addNewItem}>
                Submit
              </button>
              <Link to="/" className="btn btn-primary  mx-2 my-3">
                Close{" "}
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
