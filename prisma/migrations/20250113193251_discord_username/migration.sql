-- AlterTable
ALTER TABLE "users" ADD COLUMN     "discord_username" TEXT,
ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "password_hash" DROP NOT NULL;
