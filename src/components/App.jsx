import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import React, { useState } from "react";
import CreateArea from "./CreateArea";

function App(){
    const [notes, setNotes] = useState([]);

    function addNote(title, content){
        setNotes((prevNotes) => {
            [
                ...prevNotes,
                {title: {title},
                content: {content}
                }
            ]
        });
    }


    return  (
    <div>
            <Header/>
            <CreateArea
                addNote={addNote}
            />
            {notes.map((note) => {
                <Note  title={note.title} content={note.content} />
            })}
            <Footer/>
    </div>
    );
}

export default App;