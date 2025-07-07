import React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarShortcut,
  MenubarTrigger,
} from "../ui/menubar";

export default function Othermenu() {
  return (
    <Menubar className="ml-5">
      <MenubarMenu>
        <MenubarTrigger>Others</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Sign in with passkey<MenubarShortcut>⌘P</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
