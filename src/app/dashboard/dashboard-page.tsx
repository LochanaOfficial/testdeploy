"use client";

import { User } from "@prisma/client";

interface DashboardPageProps {
    currentUser: User | null;
}

const DashboardPage = ({currentUser}: DashboardPageProps) => {
  return (
    <div className="flex flex-col">
        <div>{currentUser?.email}</div>
        <div>{currentUser?.name}</div>
    </div>
  )
}


export default DashboardPage;