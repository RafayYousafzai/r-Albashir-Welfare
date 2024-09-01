"use client";

import { useEffect, useState } from "react";
import { StatsGrid, UserRoles } from "../../../components/Index";
import { getCollection } from "app/api/firebase/functions/get";
import { updateDoc } from "app/api/firebase/functions/post";

export default function Page() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const get = async () => {
      const users = await getCollection("users");
      setUsers(users);
    };
    get();
  }, []);

  const handleRole = (selectedRole, userEmail) => {
    updateDoc("users", userEmail, { role: selectedRole });
  };

  return (
    <>
      <StatsGrid />
      <UserRoles users={users} handleRole={handleRole} />
    </>
  );
}
