"use client";

import type { Session } from "@prisma/client";
import * as React from "react";
import { FC } from "react";
import SignInBtn from "./SignInBtn";
import SignOutBtn from "./SignOutBtn";



interface RegesterProps extends React.HTMLAttributes<HTMLDivElement> {
  session : Session | null
}

const Regester: FC<RegesterProps> = ({ className, session }) => {

  return session ? <SignOutBtn /> : <SignInBtn />;

};

export default Regester;
