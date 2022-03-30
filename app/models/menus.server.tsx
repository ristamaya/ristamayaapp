import type { Menus } from "@prisma/client";
import { prisma } from "~/utils/db.prisma";
import { getUserId } from "./session.server";

export async function saveMenus(request: Request, param: Menus) {
  const userid = await getUserId(request);

  prisma.menus.create({
    data: {
      menurole: param.menurole,
      menutype: param.menutype,
      title: param.title,
      icon: param.icon,
      parent: param.parent,
      path: param.path,
      pathtype: param.pathtype,
      createby: userid,
    },
  });
}
