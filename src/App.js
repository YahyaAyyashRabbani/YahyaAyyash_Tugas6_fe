import {BrowserRouter, Routes, Route} from "react-router-dom";
import Note from "./components/Note";
import AddNote from "./components/AddNote";
import EditNote from "./components/EditNote";

function App() {
  return (
    <BrowserRouter >
    <Routes>
      <Route path="/" element={<Note/>}/>
      <Route path="add" element={<AddNote/>}/>
      <Route path="edit/:id" element={<EditNote/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
