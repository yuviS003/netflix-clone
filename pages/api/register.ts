import bcrypt from "bcrypt";
import { NextApiResponse, NextApiRequest } from "next";
import prismadb from "@/lib/prismadb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(404).end();

  try {
    const { email, userName, password } = req.body;

    const existingUser = await prismadb.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) return res.status(422).json({ error: "Email taken" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prismadb.user.create({
      data: {
        email,
        hashedPassword,
        name: userName,
        image: "",
        emailVerified: new Date(),
      },
    });

    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(404).end();
  }
}
