import { redirect } from "next/navigation";
import getCurrentUser from "../actions/getCurrentUser";
import DashboardPage from "./dashboard-page";

const page = async() => {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return redirect("/");
    }
    
  return <DashboardPage currentUser={currentUser} />
}


export default page;