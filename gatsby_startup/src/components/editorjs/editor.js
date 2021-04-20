import React, { useState, useEffect } from "react"
import EditorJS from "react-editor-js"
import EDITOR_TOOLS from "./config"
import { navigate } from "@reach/router"

const AppEditor = () => {
  const [editor, setEditor] = useState(null)
  const [postData, setPostData] = useState({
    userName: null,
    subject: null,
  })

  useEffect(() => {
    // console.log(editor)
    console.log("hello")
  }, [])

  const saveData = () => {
    editor.save().then(data => {
      console.log(data.time)
      const fetchData = {
        id: data.time,
        username: postData.userName,
        subject: postData.subject,
        content: data.blocks,
      }
      console.log(JSON.stringify(fetchData))
      fetch("http://localhost:3000/jsonEditorPosts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fetchData),
      }).then(res => console.log(res))
    })
    navigate("/confirm")
  }
  return (
    <>
      <EditorJS
        tools={EDITOR_TOOLS}
        instanceRef={instance => setEditor(instance)}
        holder="custom"
      >
        <div
          style={{
            border: "1px solid whitesmoke",
            backgroundColor: "white",
            width: "100%",
            color: "rgba(0,0,0,0.6)",
            maxHeight: "400px",
            overflowY: "scroll",
          }}
          id="custom"
        />
      </EditorJS>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "10px",
        }}
      >
        <div style={{ padding: "10px" }}>
          <input
            type="text"
            onChange={e =>
              setPostData({
                ...postData,
                userName: e.target.value,
              })
            }
            value={postData.userName}
            label="user-field"
          />
          <label style={{ marginLeft: "10px" }} htmlFor="user-field">
            User name
          </label>
        </div>
        <div style={{ padding: "10px" }}>
          <input
            type="text"
            onChange={e =>
              setPostData({
                ...postData,
                subject: e.target.value,
              })
            }
            value={postData.subject}
            label="subject-field"
          />
          <label style={{ marginLeft: "10px" }} htmlFor="subject-field">
            Subject
          </label>
        </div>
      </div>
      <div>
        <button onClick={saveData}>Submit post</button>
      </div>
    </>
  )
}

export default AppEditor
