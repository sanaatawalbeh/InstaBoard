import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import "../styles/Layout.css";
export default function Layout({ lightMode, setLightMode, children }) {
  return (
    <div className={`layout-wrapper ${lightMode ? "light" : ""}`}>
      <NavigationBar lightMode={lightMode} setLightMode={setLightMode} />
      <main className="layout-content">{children}</main>
      <Footer lightMode={lightMode} />
    </div>
  );
}
