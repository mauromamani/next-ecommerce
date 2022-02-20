import { PrismaClient } from '@prisma/client';
import { Request } from 'express';
import { getUserId } from '../utils/jsonwebtoken';

export interface Context {
  prisma: PrismaClient;
  uid?: string | null;
}

const prisma = new PrismaClient();

interface Params {
  req: Request;
}

export const context = ({ req }: Params): Context => {
  const ctx: Context = { prisma };
  const token = req.headers['x-token'] as string;

  if (token) {
    ctx.uid = getUserId(token);
  }
  return ctx;
};
