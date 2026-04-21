import { Layout } from "lucide-react";
import { Toaster } from "react-hot-toast";
import { Routes } from "react-router-dom";
import Login from "./pages/Login";

const App = () => {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
