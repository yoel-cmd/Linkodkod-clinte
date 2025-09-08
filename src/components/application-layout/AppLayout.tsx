import HeaderLayout from "./HeaderLayout";
import { Children, type PropsWithChildren } from "react";

export default function AppLayout(props: PropsWithChildren) {
  return (
    <>
      <HeaderLayout />
      {props.children}
    </>
  );
}
