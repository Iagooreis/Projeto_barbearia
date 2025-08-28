import { PrismaClient } from "@prisma/client"

// Augmenta o escopo global para o TypeScript reconhecer `global.cachedPrisma`
declare global {
  // precisa ser `var` em ambient context; silenciamos o ESLint aqui:
  // eslint-disable-next-line no-var, @typescript-eslint/no-unused-vars
  var cachedPrisma: PrismaClient | undefined
}

let prisma: PrismaClient

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient()
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient()
  }
  prisma = global.cachedPrisma
}

export const db = prisma
