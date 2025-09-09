import { Link } from "react-router";
import HeaderLayout from "./HeaderLayout";
import { type PropsWithChildren } from "react";

export default function AppLayout(props: PropsWithChildren) {
  return (
    <>
    {/* header and slogen */}
      <HeaderLayout />
      <nav>
        <Link to="/posts">Post</Link>
        <Link to="/crud">CRUD</Link>
        <Link to="/">Home</Link>
      </nav>
      {props.children}
    </>
  );
}
