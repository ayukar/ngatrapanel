import { auth } from "@/auth";
import prisma from "@/lib/prisma";
import Link from "next/link";
import React from "react";
import NotFound from "../not-found";

type Props = {
  domain: string;
};

const Site = async ({ domain }: Props) => {
  const website = await prisma.website.findFirst({
    where: {
        name : domain
    },
  });
  if(!website){
    return <NotFound/>
  }
  return (
    <div>
      <div className="text-xl">Selamat datang di {website?.name}</div>
      <div className="text-sm">websitenya :</div>
      <div className="flex flex-col items-center justify-center text-sm text-blue-500">
        
      </div>
    </div>
  );
};

export default Site;
