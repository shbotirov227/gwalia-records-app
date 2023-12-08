import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import News from "./pages/News/News";
import Favourite from "./pages/Favourite/Favourite";
import Singers from "./pages/Singers/Singers";
import Alboms from "./pages/Alboms/Alboms";

import "./assets/App.scss";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />

                    <Route path="/albom" element={<Alboms />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/favourite" element={<Favourite />} />
                    <Route path="/singers" element={<Singers />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
