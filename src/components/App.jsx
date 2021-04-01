import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";

import CreateArea from "./CreateArea";

function App() {
	const [notes, setNotes] = React.useState([]);

	function addNote(newNote) {
		console.log(newNote);
		setNotes((prevNotes) => {
			return [...prevNotes, newNote];
		});
	}

	function deleteNote(id) {
		setNotes((prevNotes) => {
			return prevNotes.filter((note, index) => {
				return index !== id;
			});
		});
	}

	return (
		<div>
			<Header />
			<CreateArea onAdd={addNote} />
			{notes.map((noteItem, index) => (
				<Note
					onDelete={deleteNote}
					key={index}
					id={index}
					title={noteItem.title}
					content={noteItem.content}
				/>
			))}
			<Footer />
		</div>
	);
}

export default App;
