import React, { useState } from "react";

function CreateArea(props) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    function handleChange(event){
        if (event.target.name == "title"){
            setTitle(event.target.value);
        }
        else{
            setContent(event.target.value);
        }
    }
    return (
        <div>
            <form>

                <input

                value = {title}
                onChange = {handleChange}
                name="title" placeholder="Title" />

                <textarea
                value = {content}
                onChange = {handleChange}
                name="content" placeholder="Take a note..." rows="3" />

                <button
                onClick = {() => {
                    props.addNote(title, content);
                    setTitle("");
                    setContent("");
                }}
                >Add</button>

            </form>
        </div>
    );
}

export default CreateArea;
