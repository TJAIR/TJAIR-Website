import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainPage from "./pages/main_page";
import Navbar from "./components/navbar";
import PartnershipsPage from "./pages/partnerships_page";
import TeamPage from "./pages/team_page";
import ContactPage from "./pages/contact_page";
import ResourcesPage from "./pages/resources_page";
import Footer from "./components/footer";

function App() {
    return (
        <BrowserRouter>
            <div className="flex min-h-screen flex-col">
                <Navbar />
                <div className="flex-grow">
                    <Routes>
                        <Route path="/" Component={MainPage} />
                        <Route
                            path="/partnerships"
                            Component={PartnershipsPage}
                        />
                        <Route path="/team" Component={TeamPage} />
                        <Route path="/contact" Component={ContactPage} />
                        <Route path="/resources" Component={ResourcesPage} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
