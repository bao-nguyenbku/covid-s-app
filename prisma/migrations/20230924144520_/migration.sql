-- CreateTable
CREATE TABLE "Doctor" (
    "id" TEXT NOT NULL,
    "fullname" TEXT NOT NULL,
    "workPlace" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,

    CONSTRAINT "Doctor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "District" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "District_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_DistrictToDoctor" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_DistrictToDoctor_AB_unique" ON "_DistrictToDoctor"("A", "B");

-- CreateIndex
CREATE INDEX "_DistrictToDoctor_B_index" ON "_DistrictToDoctor"("B");

-- AddForeignKey
ALTER TABLE "_DistrictToDoctor" ADD CONSTRAINT "_DistrictToDoctor_A_fkey" FOREIGN KEY ("A") REFERENCES "District"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DistrictToDoctor" ADD CONSTRAINT "_DistrictToDoctor_B_fkey" FOREIGN KEY ("B") REFERENCES "Doctor"("id") ON DELETE CASCADE ON UPDATE CASCADE;
