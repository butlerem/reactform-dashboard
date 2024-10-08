"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Menu, X, Folder, CreditCard } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const HeaderMenu = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <DropdownMenu open={open} onOpenChange={toggleMenu}>
      <DropdownMenuTrigger asChild>
        <Button
          onClick={toggleMenu}
          className="mr-4 bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-[var(--primary-foreground)]"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-[var(--card-alt)] text-[var(--foreground)]">
        <DropdownMenuItem asChild>
          <Link href="/dashboard" className="flex">
            <Folder className="mr-2 h-4 w-4 text-[var(--primary)]" />
            <span>Projects</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/payments" className="flex">
            <CreditCard className="mr-2 h-4 w-4 text-[var(--primary)]" />
            <span>Billing</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default HeaderMenu;
