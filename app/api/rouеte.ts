import { createTodo, getTodos } from "./db";

export async function GET() {
  return Response.json(getTodos());
}

export async function POST(request: Request) {
  const body = await request.json();

  createTodo(body.text);
  return Response.json("Created");
}
