import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";

export async function getAllVideoRoute(app: FastifyInstance) {
  app.get("/videos", async () => {
    const prompts = await prisma.prompt.findMany();

    return prompts;
  });
}
