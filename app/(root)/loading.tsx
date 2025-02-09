import React from "react";
import loading from "@/public/loading.gif";
import Image from "next/image";

export default function LoadingPage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Image src={loading} alt="loading" width={64} height={64} />
    </div>
  );
}
