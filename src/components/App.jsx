import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import React from "react";
import notes from "../notes.js";



function App(){
    return  (
    <div>
            <Header/>
            {notes.map(noteEntry =>
                <Note
                    title={noteEntry.title}
                    content={noteEntry.content}
                    key={noteEntry.id} />
            )}
            <Footer/>
    </div>
    );
}

export default App;