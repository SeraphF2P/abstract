import SignInBtn from "@/features/authantication/components/SignInBtn";
import Link from "next/link";

const page = async () => {
  <>
    <div className="container absolute inset-0 mx-auto flex h-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full max-w-lg flex-col justify-center space-y-6">
        <div className="flex flex-col items-center gap-6 text-center">
          <h1>welcome back</h1>
          <Link href="/">Back to home</Link>
          <h1>Welcome back!</h1>
          <p>Please sign in using your Google account.</p>
        </div>
        <SignInBtn />
      </div>
    </div>
  </>;
};

export default page;
