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
    { name: "Team", path: "/team", component: TeamPage },
    { name: "Contact Us", path: "/contact_us", component: ContactUsPage },
    {
        name: "Partnerships",
        path: "/partnerships",
        component: PartnershipsPage,
    },
    { name: "Resources", path: "/resources", component: ResourcesPage },
    {
        name: "Previous Research",
        path: "/previous_research",
        component: PreviousResearchPage,
    },
];
