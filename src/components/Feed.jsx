import React from "react";
import data from "../DATA";
import "./feed.css";
import { Button, Tooltip } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  doc,
  onSnapshot,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
// import { onAuthStateChanged } from "firebase/auth";
import { Typography, Link } from "@mui/material";
import ReactLoading from "react-loading";
import { useNavigate } from "react-router-dom";
import { Checkbox } from "@mui/material";
// import app from "../firebase";
export default function Feed(props) {
  // var [bgcolour, setbgcolour] = React.useState("#fff");
  var [Tabledata, setTabledata] = React.useState();
  var [docdata, setdocdata] = React.useState([]);
  var [loading, setloading] = React.useState(true);

  const db = getFirestore();

  function handleChange(event) {
    // toast.dark(`${solvedproblems}/${total_problems} Problem solved`);
    let UserId = getAuth().currentUser.uid;
    let docref = doc(db, "Users", UserId);
    let id = event.target.id;
    let checked = event.target.checked;
    if (checked) {
      // parent.style.backgroundColor = "#f5f5f5";

      updateDoc(docref, {
        solvedproblems: arrayUnion(parseInt(id)),
      }).catch((err) => toast.error("Something went wrong"));
    } else {
      updateDoc(docref, {
        solvedproblems: arrayRemove(parseInt(id)),
      }).catch((arr) => toast.error("Something went wrong"));
      // parent.style.backgroundColor = "#fff";
    }
  }

  const navigate = useNavigate();

  React.useEffect(() => {
    injectStyle();
    getAuth().onAuthStateChanged((user) => {
      if (user) {
        let UserId = user.uid;
        let docref = doc(db, "Users", UserId);
        onSnapshot(docref, (doc) => {
          if (doc.exists()) {
            setloading(false);
            toast.info(
              `${doc.data().solvedproblems.length} / ${
                data.length
              } problems solved`
            );
            setdocdata(doc.data().solvedproblems);
            // console.log("Current data: ", doc.data());
          } else {
            toast.error("Something went wrong");
          }
        });
      } else {
        navigate("/login");
      }
    });
  }, []);

  React.useEffect(() => {
    setTabledata(
      data
        .filter(
          (e) =>
            e.Topic === props.data &&
            e.Problem.toLowerCase().includes(props.searchtext.toLowerCase())
        )
        .map((val, idx) => {
          return (
            <tr
              style={{
                backgroundColor: docdata.includes(val.index)
                  ? "#f5f5f5"
                  : "#fff",
              }}
              key={val.index}
              className="r"
            >
              <th scope="row">{idx + 1}</th>
              <td>{val.Problem}</td>
              <td className="text-center">
                {docdata.includes(val.index) ? "Done" : "Pending"}
              </td>
              <td className="text-center">
                <Tooltip
                  title={
                    docdata.includes(val.index)
                      ? "Mark as unsolved"
                      : "Mark as solved"
                  }
                >
                  <Checkbox
                    // className="form-check-input"
                    checked={docdata.includes(val.index) ? "checked" : ""}
                    id={val.index}
                    type="checkbox"
                    value=""
                    onChange={handleChange}
                  />
                </Tooltip>
              </td>
              <td className="text-center">
                <Button className="Button" variant="contained" href={val.URL}>
                  SOLVE
                </Button>
              </td>
            </tr>
          );
        })
    );
  }, [props.data, props.searchtext, docdata]);

  return loading ? (
    <div style={{ marginTop: "15%" }}>
      <ReactLoading
        type={"bubbles"}
        color={"#1976d2"}
        height={"4%"}
        width={"10%"}
        className="ml-auto mr-auto"
      />
    </div>
  ) : (
    <div
      className="row"
      style={{
        margin: "3rem",
        // minHeight: "100vh",
      }}
    >
      <ToastContainer />
      <table className="table">
        <thead
          style={{
            backgroundColor: "#93FFD8",
          }}
          className="thead"
        >
          <tr>
            <th scope="col">SL.NO</th>
            <th scope="col">QUESTION</th>
            <th scope="col" className="text-center">
              STATUS
            </th>
            <th scope="col" className="text-center">
              SOLVED
            </th>
            <th scope="col text-center" className="text-center">
              LINK
            </th>
          </tr>
        </thead>
        <tbody>{Tabledata}</tbody>
      </table>
      <Typography
        className="ml-auto mr-auto mt-auto"
        variant="body2"
        color="text.secondary"
        align="center"
        style={{
          marginTop: "2rem",
        }}
      >
        {"Copyright © "}
        <Link color="inherit" href="https://twitter.com/sagnikjana2001">
          Sagnik Jana
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </div>
  );
}
