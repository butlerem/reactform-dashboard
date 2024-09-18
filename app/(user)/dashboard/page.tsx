import NewProjBtn from "@/components/new-proj";
import {db} from "@/db";
import { projects } from "@/db/schema";
import { auth, currentUser } from "@clerk/nextjs/server";


export default async function Page() {
  const allProjects = await db.select().from(projects);

  const { userId } = auth();

  console.log(userId);

  return (
    <div><NewProjBtn /></div>
  )
}