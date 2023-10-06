import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
// import data from "../data"
export default function Home() {
  const [data, setData] = useState([
    {
      id: 1,
      firstname: "Intern1",
      lastname: "Techcurve",
      email: "Intern1conqt@gmail.com",
      category: "ERP",
      phone: "7789645632",
      date: "04-27-2022"
    },
    {
      id: 2,
      firstname: "Intern1",
      lastname: "Techcurve",
      email: "Intern1conqt@gmail.com",
      category: "ERP",
      phone: "7789645632",
      date: "04-27-2022"
    },
    {
      id: 3,
      firstname: "Intern1",
      lastname: "Techcurve",
      email: "Intern1conqt@gmail.com",
      category: "ERP",
      phone: "7789645632",
      date: "04-27-2022"
    },
    {
      id: 4,
      firstname: "Intern1",
      lastname: "Techcurve",
      email: "Intern1conqt@gmail.com",
      category: "ERP",
      phone: "7789645632",
      date: "04-27-2022"
    },
    {
      id: 5,
      firstname: "Intern1",
      lastname: "Techcurve",
      email: "Intern1conqt@gmail.com",
      category: "ERP",
      phone: "7789645632",
      date: "04-27-2022"
    },
    {
      id: 6,
      firstname: "Intern1",
      lastname: "Techcurve",
      email: "Intern1conqt@gmail.com",
      category: "ERP",
      phone: "7789645632",
      date: "04-27-2022"
    },
    {
      id: 7,
      firstname: "Intern1",
      lastname: "Techcurve",
      email: "Intern1conqt@gmail.com",
      category: "ERP",
      phone: "7789645632",
      date: "04-27-2022"
    },
    {
      id: 8,
      firstname: "Intern1",
      lastname: "Techcurve",
      email: "Intern1conqt@gmail.com",
      category: "ERP",
      phone: "7789645632",
      date: "04-27-2022"
    },
    {
      id: 9,
      firstname: "Intern1",
      lastname: "Techcurve",
      email: "Intern1conqt@gmail.com",
      category: "ERP",
      phone: "7789645632",
      date: "04-27-2022"
    },
    {
      id: 10,
      firstname: "Intern1",
      lastname: "Techcurve",
      email: "Intern1conqt@gmail.com",
      category: "ERP",
      phone: "7789645632",
      date: "04-27-2022"
    }
    // {
    //   id: 3,
    //   firstname: "Intern1",
    //   lastname:"Techcurve",
    //   email: "huzaifafaridi57@gmail.com",
    //   category:"ERP",
    //   phone:"7789645632",
    //  date:"04-27-2022",
    // },
    // {
    //   id: 4,
    //   firstname: "Intern1",
    //   lastname:"Techcurve",
    //   email: "huzaifafaridi57@gmail.com",
    //   category:"ERP",
    //   phone:"7789645632",
    //  date:"04-27-2022",
    // },
    // {
    //   id: 5,
    //   firstname: "Intern1",
    //   lastname:"Techcurve",
    //   email: "huzaifafaridi57@gmail.com",
    //   category:"ERP",
    //   phone:"7789645632",
    //  date:"04-27-2022",
    // }
  ]);

  return (
    <>
      <div className="justify-content-end">
        <Link
          to="/create"
          className="btn btn-secondary  justify-content-between"
        >
          Import Contact{" "}
        </Link>
      </div>

      <hr />

      <div classname="column1">
        <div>
          <div className=" ">
            <table className="  dash table table-striped ">
              <thead>
                <tr>
                  <th>Email Address</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Phone No</th>
                  <th>Email Category</th>
                  <th> Register Date</th>
                </tr>
              </thead>
              <tbody>
                {data.map((d, i) => (
                  <tr key={i}>
                    <td>{d.email}</td>
                    <td>{d.firstname}</td>
                    <td>{d.lastname}</td>
                    <td>{d.category}</td>
                    <td>{d.phone}</td>
                    <td>{d.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
