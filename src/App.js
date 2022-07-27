import "./App.css";
import Header from "./components/header";
import Kursus from "./components/kursus";
import Beranda from "./components/beranda";
import Tentang from "./components/tentang";
import Pengumuman from "./components/pengumuman";
import Footer from "./components/footer";
import Alur from "./components/alur";

function App() {
  return (
    <div>
      <Header />
      <Beranda />
      <Alur/>
      <Kursus/>
      <Tentang/>
      <Pengumuman/>
      <Footer/>
    </div>
  );
}

export default App;
