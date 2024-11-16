import prisma from "@/lib/prisma";
import React from "react";
import NotFound from "../not-found";

const Site = async ({ params }: { params: { domain: string } }) => {
    const domain = params.domain

  return (
    <div>
      <div className="text-xl">Selamat datang di </div>
      <div className="text-sm">websitenya :</div>
      <div className="flex flex-col items-center justify-center text-sm text-blue-500"></div>
    </div>
  );
};

export default Site;
