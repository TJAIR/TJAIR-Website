import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainPage from "./pages/main_page";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={MainPage} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
