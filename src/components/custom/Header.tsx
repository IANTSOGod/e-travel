"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowLeft, LogOut, PlaneLanding, User } from "lucide-react";
import LoginComponent from "./LoginComponent";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Label } from "../ui/label";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

export default function Header() {
  // Récupération de la session utilisateur via Better Auth
  const session = authClient.useSession();

  // ✅ Déclare un état pour afficher ou non le header (pas besoin de type `Boolean`)
  const [ishow, setisshow] = useState<boolean>(true);

  // Permet d'obtenir le path actuel (utile pour cacher certains headers)
  const pathname = usePathname();

  // ✅ On doit appeler les hooks comme `useQuery` **directement**, pas dans un `if`
  // Si pas de session, `userId` devient `undefined` et Convex retournera `undefined`
  const userId = session?.data?.user?.id;
  const notifications = useQuery(
    api.notifications.getNotifications,
    userId ? { userId } : "skip"
  );

  // Affichage pour debug
  useEffect(() => {
    if (notifications) {
      console.log(notifications);
    }
  }, [notifications]);

  // Fonction de déconnexion
  const logout = async () => {
    await authClient.signOut();
  };

  // ✅ Cache le header si on est sur des routes d'authentification
  useEffect(() => {
    const hiddenRoutes = ["/register", "/reset-password", "/request-reset"];
    setisshow(!hiddenRoutes.includes(pathname));
  }, [pathname]);

  return (
    <div
      className={`${
        ishow ? "flex" : "hidden"
      } h-[65px] bg-none pt-[20px] md:px-[150px] px-[50px] gap-x-[70px] ${
        pathname === "/me" ? "border-b-2 border-gray" : ""
      }`}
    >
      {/* Logo / retour vers accueil */}
      <div className="text-red-500 font-bold flex gap-x-2">
        {pathname === "/me" && (
          <Link href={"/"}>
            <ArrowLeft />
          </Link>
        )}
        <PlaneLanding />
        e-Travel
      </div>

      {/* Menu principal (masqué en mobile) */}
      <div className="hidden md:flex gap-x-[30px] font-bold text-blue-400">
        <Link href={"/"}>Home</Link>
        <Link href={"/"}>About</Link>
        <Link href={"/"}>Adventures</Link>
        <Link href={"/"}>Contact</Link>
      </div>

      {/* Si l'utilisateur est connecté */}
      {session?.data?.user ? (
        <div className="ml-auto flex text-red-400 gap-x-2">
          <User className="rounded-3xl bg-gray-100 w-[30px] h-[30px] p-1 border-1 border-red-400" />
          <Label className="-mt-5 md:text-md font-bold md:flex hidden">
            {session.data.user.name}
          </Label>
          <LogOut className="!text-black cursor-pointer" onClick={logout} />
        </div>
      ) : (
        // Si l'utilisateur n'est pas connecté
        <div className="mt-[-5px] ml-auto md:flex hidden gap-x-2">
          <LoginComponent />
          <Link href={"/register"}>
            <Button className="w-[150px] bg-red-400 text-white hover:bg-red-700">
              Register
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}
