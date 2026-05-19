import type { Prisma, User } from '@/generated/client'

export interface UserRepository {
  findByEmail(email: string): Promise<User | null>
  create(data: Prisma.UserCreateInput): Promise<User>
}
