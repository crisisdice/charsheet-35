import { Pool, neonConfig } from '@neondatabase/serverless';
import { PrismaNeon } from '@prisma/adapter-neon';
import { PrismaClient } from '@prisma/client';

import ws from 'ws';

export const getPrisma = (env: { DATABASE_URL: string; NODE_ENV?: string }) => {
  const connectionString = `${env.DATABASE_URL}`;

  if (env.NODE_ENV === 'development') {
    return new PrismaClient({
      datasources: {
        db: {
          url: connectionString
        }
      }
    });
  }

  neonConfig.webSocketConstructor = ws;

  const pool = new Pool({ connectionString });
  const adapter = new PrismaNeon(pool);
  return new PrismaClient({ adapter });
};
