import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
    Home,
    Signup,
    Login,
    News,
    Favourite,
    Singers,
    Albums
} from "./pages";

import "./assets/App.scss";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />

                    <Route path="/album" element={<Albums />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/favourite" element={<Favourite />} />
                    <Route path="/singers" element={<Singers />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
