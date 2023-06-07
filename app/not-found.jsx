"use client";
import React from "react";
import Link from "next/link";

const Error = () => {
  return (
    <div>
      haaman ini tidak ada!
      <Link href={"/"}>
        <button>kembali ke halaman utaman</button>
      </Link>
    </div>
  );
};

export default Error;
