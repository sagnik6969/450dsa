import React from "react";
import data from "../DATA";
import "./feed.css";
import { Button, Card, Tooltip } from "@mui/material";
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
import { Typography } from "@mui/material";
import ReactLoading from "react-loading";
import { useNavigate } from "react-router-dom";
import { Checkbox } from "@mui/material";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

// import app from "../firebase";
export default function Allquestions(props) {
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
        .filter((e) =>
          e.Problem.toLowerCase().includes(props.searchtext.toLowerCase())
        )
        .map((val, idx) => {
          return (
            <TableRow
              style={{
                backgroundColor: docdata.includes(val.index)
                  ? "#f5f5f5"
                  : "#fff",
              }}
              key={val.index}
              className="r"
            >
              <TableCell scope="row">{idx + 1}</TableCell>
              <TableCell>{val.Problem}</TableCell>
              <TableCell className="text-center">
                {docdata.includes(val.index) ? "Done" : "Pending"}
              </TableCell>
              <TableCell className="text-center">
                <Tooltip
                  title={
                    docdata.includes(val.index)
                      ? "Mark as unsolved"
                      : "Mark as solved"
                  }
                >
                  <Checkbox
                    // className="form-check-input"
                    checked={docdata.includes(val.index) ? true : false}
                    id={val.index.toString()}
                    type="checkbox"
                    value=""
                    onChange={handleChange}
                  />
                </Tooltip>
              </TableCell>
              <TableCell className="text-center">
                <Button className="Button" variant="contained" href={val.URL}>
                  SOLVE
                </Button>
              </TableCell>
            </TableRow>
          );
        })
    );
  }, [props.data, props.searchtext, docdata]);

  return loading ? (
    <div style={{ marginTop: "15%" }}>
      <ReactLoading
        type={"bubbles"}
        color={"#1976d2"}
        height={"100vh"}
        width={"10%"}
        className="ml-auto mr-auto"
      />
    </div>
  ) : (
    <div
      style={{
        margin: "3rem",
        minHeight: "100vh",
      }}
    >
      <ToastContainer />
      <Typography
        style={{ color: "#1565c0", marginBottom: "2rem" }}
        variant="h3"
        className="text-center"
      >
        {props.data}
      </Typography>
      <Card>
        <Table size="small">
          <TableHead
            style={{
              backgroundColor: "#93FFD8",
            }}
          >
            <TableRow>
              <TableCell>SL.NO</TableCell>
              <TableCell>QUESTION</TableCell>
              <TableCell className="text-center">STATUS</TableCell>
              <TableCell className="text-center">SOLVED</TableCell>
              <TableCell className="text-center">LINK</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{Tabledata}</TableBody>
        </Table>
      </Card>
    </div>
  );
}
