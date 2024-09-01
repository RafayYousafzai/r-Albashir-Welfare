"use client"

import { AddFounder, StatsGrid, PasswordInput } from "components/Index";
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
          <StatsGrid /> <AddFounder />
        </>
      )}
    </>
  );
}
