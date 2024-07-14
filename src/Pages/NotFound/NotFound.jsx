import { NotFoundContainer } from "./NotFoundStyles.js";
import { Link } from "react-router-dom";
import { Button } from "../../assets/styles/Buttons.jsx";

export default function NotFound() {
  return (
    <NotFoundContainer>
      <h2>404</h2>
      <p>Bunday sahifa mavjud emas!</p>
      <Link to={"/"}>
        <Button>
          <ion-icon name="arrow-back-outline" />
          Bosh sahifaga qaytish
        </Button>
      </Link>
    </NotFoundContainer>
  );
}
