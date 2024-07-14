import { Link } from "react-router-dom";
import { MainDashboardContainer, MainDashboardTitle } from "../LayoutStyles.js";

import { Button } from "../../assets/styles/Buttons";

export default function MainDashboard() {
  return (
    <MainDashboardContainer>
      <MainDashboardTitle>UI/UX dan testga xush kelibsiz!</MainDashboardTitle>

      <Link to={"/quiz"}>
        <Button bgColor={"#0F172A"} color={"#fff"}>
          <ion-icon name="flash-outline" />
          Testni boshlash
        </Button>
      </Link>
    </MainDashboardContainer>
  );
}
