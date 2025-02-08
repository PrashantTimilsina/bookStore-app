import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import { Toaster } from "react-hot-toast";

import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import Contact from "./components/Contact";
import { useAuth } from "./context/AuthProvider";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/course"
              element={authUser ? <Courses /> : <Navigate to="/signup" />}
            />
            <Route path="/signup" element={<Signup />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
        <Toaster />
      </div>
    </>
  );
}
export default App;
