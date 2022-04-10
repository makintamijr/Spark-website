import "./styles/App.scss";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import NavigationMenu from "./components/NavigationMenu/NavigationMenu";
import ContactScreen from "./screens/ContactScreen/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="App">
        <NavigationMenu />

        <HomeScreen />

        {/* <ContactScreen /> */}

        <Footer />
      </div>
    </>
  );
}

export default App;
