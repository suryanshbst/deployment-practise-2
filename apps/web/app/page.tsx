import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import { prisma } from "@repo/db/prisma";
import styles from "./page.module.css";

export default async function Home() {
  const users = await prisma.user.findMany();
  return <div>{JSON.stringify(users)}</div>;
}
