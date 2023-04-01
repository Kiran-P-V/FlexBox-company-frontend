import { Container } from "@mui/system";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { UserRoute } from "./Routes/User/UserRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Container id="rootDiv">
          <UserRoute />
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
