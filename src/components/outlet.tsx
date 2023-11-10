import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import ParticleBackground from "./particleBackground";

export default function Layout(): JSX.Element {
  return (
    <>
      <Header />
      <main className="flex flex-col min-h-full items-center content-center">
        <ParticleBackground />
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
