import React, { useState, useEffect } from "react";
import "./App.css";

import Editor from './Editor'

function App() {
  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');
  const [srcDoc, setSrcDoc] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
      <html>${html}</html>
      <style>${css}</style>
      <script>${js}</script>
    `)
    }, 300)
    return () => clearTimeout(timeout)
  }, [html, css, js])



  return (
    <div className="App">
      <div className="pane top-pane">
        <Editor language="xml" displayName="HTML" value={html} onChange={setHtml}></Editor>
        <Editor language="css" displayName="CSS" value={css} onChange={setCss}></Editor>
        <Editor language="javascript" displayName="Javascript" value={js} onChange={setJs}></Editor>
      </div>

      <div className="pane bottom-pane">
        <iframe srcDoc={srcDoc} title="output" sandbox="allow-scripts" frameBorder="0" width="100%" height="100%" />
      </div>
    </div>
  );
}

export default App;
