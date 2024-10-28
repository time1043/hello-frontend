import { redirect } from "next/navigation";
import { auth } from "../lib/auth";

// This function checks if the user is logged in or not. If not, it redirects to the login page.
export async function requireUser() {
  const session = await auth();

  if (!session?.user) {
    return redirect("/");
  }
  return session;
}
