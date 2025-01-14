-- DropForeignKey
ALTER TABLE "characters" DROP CONSTRAINT "characters_userId_fkey";

-- DropForeignKey
ALTER TABLE "sessions" DROP CONSTRAINT "sessions_userId_fkey";

-- AlterTable
ALTER TABLE "characters" ADD COLUMN "user_id" INTEGER;
UPDATE "characters" SET "user_id" = "userId";
ALTER TABLE "characters" ALTER COLUMN "user_id" SET NOT NULL, 
DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "sessions" ADD COLUMN "user_id" INTEGER;
UPDATE "sessions" SET "user_id" = "userId";
ALTER TABLE "sessions" ALTER COLUMN "user_id" SET NOT NULL, 
DROP COLUMN "userId";

-- AddForeignKey
ALTER TABLE "characters" ADD CONSTRAINT "characters_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
