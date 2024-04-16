import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

/**
 * @param {NextRequest} req
 * @param {NextResponse} res
 */
export async function POST(req, res) {
  /**
   * @type {{ session: string, role: string, name: string }}
   */
  const body = await req.json();

  const { session, role, name } = body;

  const cookieCreator = cookies();

  cookieCreator.set("session", session);
  cookieCreator.set("role", role);
  cookieCreator.set("name", name);

  return NextResponse.json({ session, role });
}
