import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { routes } from "./shared";
import MainPage from "./pages/main_page";

function App() {
    return (
        <BrowserRouter>
            <div className="flex min-h-screen flex-col">
                <Navbar />
                <div className="flex-grow">
                    <Routes>
                        <Route path="/" Component={MainPage} />
                        {routes.map((j) => (
                            <Route path={j.path} Component={j.component} />
                        ))}
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
