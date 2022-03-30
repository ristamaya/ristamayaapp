import type { Users } from "@prisma/client";
import bcrypt from "@node-rs/bcrypt";
import { prisma } from "~/utils/db.prisma";

export type { Users } from "@prisma/client";

export async function getUserById(userid: Users["userid"]) {
  return prisma.users.findUnique({ where: { userid } });
}

export async function getUserByEmail(useremail: Users["useremail"]) {
  return prisma.users.findUnique({ where: { useremail } });
}

export async function createUser(
  useremail: Users["useremail"],
  userpassword: Users["userpassword"]
) {
  const hashedPassword = await bcrypt.hash(userpassword, 10);

  return prisma.users.create({
    data: {
      useremail: useremail,
      userpassword: hashedPassword,
      createby: "systemjoin",
    },
  });
}

export async function verifyLogin(
  useremail: Users["useremail"],
  userpassword: Users["userpassword"]
) {
  const user = await prisma.users.findUnique({
    where: { useremail },
  });

  if (!user) {
    return null;
  }

  const isValid = await bcrypt.verify(userpassword, user?.userpassword);
  if (!isValid) {
    return null;
  }

  return user;
}
