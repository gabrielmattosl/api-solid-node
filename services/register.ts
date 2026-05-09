import { prisma } from '@/lib/prisma'
import { hash } from 'bcryptjs'

interface RegisterData {
  name: string
  email: string
  password: string
}

export async function registerUserCase({
  name,
  email,
  password,
}: RegisterData) {
  const password_hash = await hash(password, 6)

  const userWithSameEmail = await prisma.user.findUnique({
    where: {
      email,
    },
  })

  if (userWithSameEmail) {
    throw new Error('já tem email aqui')
  }

  await prisma.user.create({
    data: {
      name,
      email,
      password_hash,
    },
  })
}
