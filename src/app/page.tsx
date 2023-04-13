import Btn from "@/components/Btn";
import { NotifyBtn } from "@/components/test";
import ThemeToggler from "@/components/ThemeToggler";
import { Session } from "@prisma/client";
import { getServerSession } from "next-auth";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import { Regester } from "@/authantication";
import { SignUp } from "@/authantication";
import { authOptions } from "../lib/auth";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "800"],
});

const Wrapper = ({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) => {
  return (
    <div className=" group:  relative flex flex-grow flex-wrap items-center justify-around gap-8   border border-slate-700/80 p-8     dark:border-slate-100/80      ">
      {children}
      <span className="absolute bottom-0 left-0 w-full overflow-hidden py-1 text-center  animate-in  fade-in-50 slide-in-from-bottom-5 duration-700">
        {title}
      </span>
    </div>
  );
};

export default async function Home() {
  const session: Session | null = await getServerSession(authOptions);

  return (
    <main className={`${inter.variable} grid min-h-screen p-8 font-inter `}>
      <div className=" m-auto flex w-[80vw]   flex-wrap bg-gray-300 dark:bg-gray-700 ">
        <Wrapper title="fill/disabled">
          <Btn variant="fill">click</Btn>
          <Btn disabled={true} variant="fill">
            click
          </Btn>
        </Wrapper>
        <Wrapper title="outline/disabled">
          <Btn variant="outline">click</Btn>
          <Btn disabled={true} variant="outline">
            click
          </Btn>
        </Wrapper>
        <Wrapper title="ghost/disabled">
          <Btn variant="ghost">click</Btn>
          <Btn disabled={true} variant="ghost">
            click
          </Btn>
        </Wrapper>
        <Wrapper title="toast">
          <NotifyBtn type="default" message="sign up successfully">
            default
          </NotifyBtn>
          <NotifyBtn type="success" message="sign up successfully">
            success
          </NotifyBtn>
          <NotifyBtn type="error" message="somthing went wrong">
            error
          </NotifyBtn>
          <NotifyBtn type="warn" message="user alredy exist">
            warn
          </NotifyBtn>
          <NotifyBtn
            type="info"
            message="password should be at least 8 charcter"
          >
            info
          </NotifyBtn>
        </Wrapper>
        <Wrapper title="Regester">
          <Regester session={session} />
        </Wrapper>
        <Wrapper title="theme provider">
          <ThemeToggler />
        </Wrapper>
        <Wrapper title="form elements">
          <SignUp />
        </Wrapper>
      </div>
    </main>
  );
}
