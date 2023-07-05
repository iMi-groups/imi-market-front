import { Routes, Route } from "react-router-dom";
import { routes } from "./utils/routes";

const App = () => {
  return (
    <Routes>
      {routes.map(({ id, path, component }) => (
        <Route key={id} path={path} element={component()} />
      ))}
    </Routes>
  );
};

export default App;
