import Create from "./components/Create";
import Edit from "../src/components/Edit";
import Read from "../src/components/Read";
import Home from "../src/components/Home";
// import {useState} from "react"
import Data from "./Data";
// import Sidebar  from "../src/components/Sidebar"
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const reccords = Data.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(Data.length / recordsPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);

  return (
    <>
      <div className="main">
        <div className="sidebar">
          <Sidebar />
        </div>

        <div className="dashboard">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/create" element={<Create />}></Route>
              <Route path="/Edit/id" element={<Edit />}></Route>
              <Route path="/read/id" element={<Read />}></Route>
            </Routes>
          </BrowserRouter>
        </div>
      </div>
      <nav>
        <ul className="pagination">
          <li className="page-link">
            <div href="#" className="page-item" onClick={prePage}>
              prev
            </div>
          </li>
          {/* {
             records.map((n,i) =>(
              <li className={'page-link ${currentPage === n ? 'active" : ''}'}  key= {i} >
              <div className="page-link" onClick={() => changeCPage(n)}>{n}</div>
              </li>
              
               ))
          } */}

          <li className="page-link">
            <div href="#" className="page-item" onClick={nextPage}>
              Next
            </div>
          </li>
        </ul>
      </nav>
    </>
  );

  function prePage() {}

  function changeCPage(id) {}

  function nextPage() {}
}
