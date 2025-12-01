import App from "./app";
import prisma from "@/app/lib/prisma";

export const dynamic = "force-dynamic";

export default async function Page() {
  const channels = await prisma.channel.findMany({
    orderBy: {
      weight: "asc",
    },
  });

  return <App channelList={channels} />;
}
