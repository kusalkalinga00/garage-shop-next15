"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ButtonHTMLAttributes } from "react";

type Porps = {
  title: string;
  clasName?: string;
  vartiants?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function BackButton({ title, vartiants, clasName,  }: Porps) {
  const router = useRouter();

  return (
    <Button
      variant={vartiants}
      className={clasName}
      onClick={() => router.back()}
      title={title}
    >
      {title}
    </Button>
  );
}
