import prisma from "@/lib/prisma-client";

export async function getUsers() {
  return prisma.user.findMany();
}
