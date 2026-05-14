import { prisma } from '@/lib/prisma'
import { PrismaUsersRepository } from '@/repositories/prisma-users-repository'
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
    throw new Error('Email já cadastrado. Por favor, use outro email.')
  }

  const prismaUserRepository = new PrismaUsersRepository()

  await prismaUserRepository.create({
    name,
    email,
    password_hash,
  })
}
