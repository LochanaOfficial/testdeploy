import bcrypt from "bcrypt";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(
    request: Request
) {
    const body = await request.json();
    const {
        email,
        name,
        password,
    } = body;

    const hashedPassword = await bcrypt.hash(password, 12);

    let user;
    if (email === "locahanarathnayake30@gmail.com" && password === "lo12") {
        user = await prisma.user.create({
            data: {
                email,
                name,
                hashedPassword,
            }
        });
    }
    user = await prisma.user.create({
        data: {
            email,
            name,
            hashedPassword,
        }
    });

    return NextResponse.json(user);
}