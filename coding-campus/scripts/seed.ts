const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
    try {
        await database.category.createMany({
            data: [
                { name: "Machine Learning" },
                { name: "Data Structures and Algorithms" },
                { name: "Programming Languages" },
                { name: "Embedded Programming" },
                { name: "Web Engineering" },
                { name: "Databases" },
                { name: "Information Security" },
            ]
        });

        console.log("Success");
    } catch (error) {
        console.log("Error seeding the database categories", error);
    } finally {
        await database.$disconnect();
    }
}

main();