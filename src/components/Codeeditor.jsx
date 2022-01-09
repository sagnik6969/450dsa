import axios from "axios";
import React from "react";
import ReactLoading from "react-loading";
import Editor from "@monaco-editor/react";
import "./codeeditor.css";
import { Button } from "@mui/material";

var template = `#include<bits/stdc++.h>
#define int long long
#define mod 1000000007
using namespace std;
int32_t main()
{
    cout<<"hellow";


    return 0;
}`;

function Codeeditor() {
  var [text, settext] = React.useState(template);
  var [output, setoutput] = React.useState("");
  var [custominput, setcustominput] = React.useState("");
  var [buttontext, setbuttontext] = React.useState("COMPILE & RUN");
  var [runtime, setruntime] = React.useState("");
  var [memory, setmemory] = React.useState("");
  var [status, setstatus] = React.useState("");
  function handelSubmit() {
    setbuttontext(<ReactLoading type="bars" height={"70%"} width={"70%"} />);
    console.log(text);
    axios
      .post("/submisson", { content: text, custominput: custominput })
      .then((res) => {
        console.log(res.data);
        if (res.data.compile_output) {
          setoutput(res.data.compile_output);
        } else {
          setoutput(res.data.stdout);
          setruntime(res.data.time);
          setmemory(res.data.memory);
          setstatus(res.data.status.description);
        }
        setbuttontext("COMPILE & RUN");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="Codeeditor">
      <Editor
        className="editor"
        spellCheck="false"
        height="70vh"
        theme="vs-light"
        defaultLanguage="cpp"
        defaultValue={template}
        onChange={(value, event) => settext(value)}
      />

      <div className="rightside">
        <h2>Custom Input</h2>
        <textarea
          value={custominput}
          onChange={(e) => {
            setcustominput(e.target.value);
          }}
        ></textarea>
        <Button
          className="Button"
          variant="contained"
          onClick={() => handelSubmit()}
        >
          {buttontext}
        </Button>
        <h2>Output</h2>
        {status && (
          <p>
            <b>Status: </b>
            {status}
          </p>
        )}
        {memory && (
          <p>
            <b>runtime: </b> {runtime}ms <b>memory: </b> {memory}kb
          </p>
        )}
        <textarea spellCheck="false" value={output}></textarea>
      </div>
    </div>
  );
}

export default Codeeditor;
