import { Link } from "@remix-run/react";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => (
  <>
    <header>
      <div className="header-nav">Keldan Rafuse</div>
      <nav>
        <Link to="/aboutme">About</Link>
        <Link to="/projects">Projects</Link>
      </nav>
    </header>
    <main>{children}</main>
  </>
);
