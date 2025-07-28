import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import "../styles/Layout.css";
export default function Layout({ children }) {
  return (
    <>
      <div className="layout-wrapper">
        <NavigationBar />
        <main className="layout-content">{children}</main>
        <Footer />
      </div>
    </>
  );
}
