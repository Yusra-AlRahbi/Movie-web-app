import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import MovieList from "./components/MovieList";

function App() {
  return (
    <div className="color-body">
      <NavBar />
      <Container>
        <MovieList/>
      </Container>
    </div>
  );
}

export default App;
