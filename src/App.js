import { Routes,Route } from "react-router-dom";
import Layout from './components/Layout/Layout';
import ContactPage from "./containers/ContactPage/ContactPage";
import CreateContact from "./containers/CreateContact/CreateContact";
import EditContact from "./containers/EditContact/EditContact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
          <Route index element={<ContactPage/>}/>
          <Route path="/new-contact" element={<CreateContact/>}/>
          <Route path="/:id/edit" element={<EditContact/>}/>
      </Route>
    </Routes>
  );
}

export default App;
