import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Button } from "@mui/material";
import "./index.css";
import {
 CharacterCards,
 TextData,
 Layout,
 PaginationMaker,
} from "./components";
import axios from "axios";

const App = () => {
 // State
 const [hidden, setHidden] = useState(false);
 const [text, setText] = useState([]);
 const [loading, setLoading] = useState(false);
 const [currentPage, setCurrentPage] = useState(1);
 const [textPerPage] = useState(15);

 // Fetching data from the API
 useEffect(() => {
  const fetchText = async () => {
   setLoading(true);
   const res = await axios.get(`http://localhost:3030/text`);
   setText(res.data);
   setLoading(false);
  };
  fetchText();
 }, []);

 const paginate = (pageNumber) => {
  setCurrentPage(pageNumber);
 };

 // this is the logic for the pagination
 const indexOfLastText = currentPage * textPerPage;
 const indexOfFirstText = indexOfLastText - textPerPage;
 const currentText = text.slice(indexOfFirstText, indexOfLastText);

 return (
  <Layout>
   <Button onClick={() => setHidden(!hidden)} variant='outlined'>
    Toggle Characters List
   </Button>
   {hidden ? <CharacterCards /> : null}
   <TextData text={currentText} loading={loading} />
   <PaginationMaker
    textPerPage={textPerPage}
    totalPages={Math.ceil(text.length / textPerPage)}
    paginate={paginate}
   />
  </Layout>
 );
};

const root = ReactDOM.createRoot(document.getElementById("app-root"));

root.render(
 <React.StrictMode>
  <App />
 </React.StrictMode>,
);
