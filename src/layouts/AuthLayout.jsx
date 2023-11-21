import { Outlet, Link, NavLink } from "react-router-dom";

export default function AuthLayout() {

  return (
    <>
    <main>
        <h1 className="mainHeader">LibraryGuru</h1>
        <section id="login">
            <div id="imagem"></div>
            <div id="formulario">
            <Outlet />
            </div>
        </section>
    </main>
    </>
  );
}
