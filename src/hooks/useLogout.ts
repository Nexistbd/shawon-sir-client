import { useLogOutFromServerMutation } from "@/redux/feature/auth/authApi";
import { signOut, useSession } from "next-auth/react";

export const useLogout = () => {
  const [logoutServer] = useLogOutFromServerMutation();
  const { data: session } = useSession();

  const handleLogout = async () => {
    try {
      if (session?.user?.phone) {
        await logoutServer({ phone: session.user.phone }).unwrap();
      }

      await signOut({ redirect: true });
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return { handleLogout };
};
