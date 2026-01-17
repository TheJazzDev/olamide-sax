-- CreateEnum
CREATE TYPE "VideoCategory" AS ENUM ('SAXOPHONE', 'VOCAL', 'KEYBOARD');

-- AlterTable
ALTER TABLE "videos" ADD COLUMN     "category" "VideoCategory";
