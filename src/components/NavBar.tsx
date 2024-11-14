"use client";

import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import UserButton from "./UserButton";
import { Button } from "./ui/button";

export default function NavBar() {
  const session = useSession();
  const user = session.data?.user;

  return (
    <header className="sticky top-0 bg-background px-3 shadow-sm">
      <nav className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between gap-3">
        <Link href="/" className="font-bold">
          NgatPanel
        </Link>
        {user && <UserButton user={user} />}
        {!user && <SignInButton />}
      </nav>
    </header>
  );
}

function SignInButton() {
  return <Link href={"/signin"}>
    <Button>Sign in</Button>
  </Link>
}
