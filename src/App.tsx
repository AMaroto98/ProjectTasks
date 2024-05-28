import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Sidebar } from "./Components/Common/Sidebar";
import { CreateProject } from "./Components/CreateProject";
import { NoProjectSelected } from "./Components/NoProjectSelected";
import { EditProject } from "./Components/EditProject";
import { ProjectProvider } from "./Providers/ProjectProvider";

function App() {
  return (
    <BrowserRouter>
      <ProjectProvider>
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" Component={NoProjectSelected} />
            <Route path="/CreateProject" Component={CreateProject} />
            <Route path="/EditProject/:id" Component={EditProject} />
          </Routes>
        </div>
      </ProjectProvider>
    </BrowserRouter>
  );
}

export default App;
