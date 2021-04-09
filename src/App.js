import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/jquery/dist/jquery.slim";
import "../node_modules/popper.js/dist/popper";
import "../node_modules/bootstrap/dist/js/bootstrap";
import Header from "./component/Header";
import Carousel from "./component/Carousel";
import ProductList from "./component/ProductList";
import Footer from "./component/Footer";

function App() {
  return (
    <div>
      <Header />
      <Carousel />
      <ProductList />
      <Footer />
    </div>
  );
}

export default App;
