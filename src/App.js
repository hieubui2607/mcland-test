import { Header } from "./app/views/Header";
import Footer from "./app/components/Footer/Footer";
import RouterApp from "./app/router-app";
import "./App.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

  
export default function App() {
  return (
    <div className="App">
      <Header />
      <RouterApp />
      <Footer />
    </div>
  );
}
