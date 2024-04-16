import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

/**
 * @param {NextRequest} req
 * @param {NextResponse} res
 */

export async function GET(req, res) {
  const cookieCreator = cookies();

  cookieCreator.delete("session");
  cookieCreator.delete("role");
  cookieCreator.delete("name");

  return NextResponse.json({ message: "logged out" });
}
