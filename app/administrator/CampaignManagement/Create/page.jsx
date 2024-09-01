"use client";
import { AddProject, PasswordInput, StatsGrid } from "components/Index";
import { useState } from "react";

export default function Page() {
  const [passwordVerified, setPasswordVerified] = useState(false);

  return (
    <>
      {!passwordVerified ? (
        <PasswordInput onSuccess={() => setPasswordVerified(true)} />
      ) : (
        <>
          {" "}
          <StatsGrid /> <AddProject />
        </>
      )}
    </>
  );
}
