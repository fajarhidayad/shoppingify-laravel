import { Head } from "@inertiajs/react";
import Nav from "../Components/Nav";
import Menu from "../Components/Menu";

export default function Layout({ children, title }) {
  return (
    <div className="flex min-h-screen">
      <Head>
        <title>{title}</title>
      </Head>
      <Nav />
      <main className="bg-gray-100 flex-1 py-9 px-20">{children}</main>
      <Menu />
    </div>
  );
}
