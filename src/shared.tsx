import MainPage from "./pages/main_page";
import TeamPage from "./pages/team_page";
import ContactUsPage from "./pages/contact_us_page";
import PartnershipsPage from "./pages/partnerships_page";
import PreviousResearchPage from "./pages/previous_research_page";
import ResourcesPage from "./pages/resources_page";


export const routes: {
    name: string;
    path: string;
    component: () => JSX.Element;
}[] = [
    { name: "Home", path: "/home", component: MainPage },
    { name: "Team", path: "/team", component: TeamPage },
    { name: "Resources", path: "/resources", component: ResourcesPage },
    {
        name: "Research",
        path: "/previous_research",
        component: PreviousResearchPage,
    },
    {
        name: "Partnerships",
        path: "/partnerships",
        component: PartnershipsPage,
    },
    { name: "Contact", path: "/contact_us", component: ContactUsPage }    
];
