import React, { Suspense } from "react";
import "./styles/App.scss";
import NavigationMenu from "./components/NavigationMenu/NavigationMenu";
import Footer from "./components/Footer/Footer";
import useLocalStorage from "use-local-storage";
import Loader from "./components/Loader/Loader";

const AnimatedRoutes = React.lazy(async () => {
  const [moduleExports] = await Promise.all([
    import("./AnimatedRoutes"),
    new Promise((resolve) => setTimeout(resolve, 3000)),
  ]);
  return moduleExports;
});

function App() {
  //
  const lightMode = window.matchMedia("(prefers-color-scheme: light)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    lightMode ? "light" : "dark"
  );
  //

  // const [isLoading, setLoading] = useState(true);

  const changeMode = () => {
    const newMode = theme === "dark" ? "light" : "dark";
    setTheme(newMode);
  };

  // const handleLoading = () => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);
  // };

  return (
    <>
      <div className="App" data-theme={theme}>
        <NavigationMenu changeMode={changeMode} />

        <Suspense fallback={<Loader />}>
          <AnimatedRoutes />
        </Suspense>

        <Footer />

        {/* <button onClick={changeMode}>change</button>
        <button onClick={handleLoading}>
          {" "}
          {isLoading ? "loading" : "clickme"}
        </button> */}
      </div>
    </>
  );
}

export default App;
