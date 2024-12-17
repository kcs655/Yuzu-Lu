"use server";
import prisma from "@/app/lib/prisma";
import { put } from "@vercel/blob";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createPost(formData: FormData) {
  const email = "take@example.com";
  const title = formData.get("title") as string;
  const author = formData.get("author") as string;
  const subject = formData.get("subject") as string;
  const grade_level = formData.get("grade_level") as string;
  const details = formData.get("details") as string;
  const image_url = formData.get("image") as File;

  const blob = await put(image_url.name, image_url, {
    access: "public",
  });

  const user = await prisma.user.findFirstOrThrow({
    where: {  email },
  });

  await prisma.textbook.create({
    data: {
      title,
      author,
      subject,
      grade_level,
      details,
      image_url: blob.url,
      user_id: user.user_id,
    },
  });

  revalidatePath("/mypage");
  redirect("/mypage");
}
