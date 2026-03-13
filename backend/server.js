import pkg from '@prisma/client';
const { PrismaClient } = pkg;
import express from "express";
import cors from "cors";

const app = express();
app.use(cors()); // ← permite o frontend acessar o backend
app.use(express.json());

const prisma = new PrismaClient();

app.get("/tasks", async (req, res) => {
  const tasks = await prisma.task.findMany();
  res.json(tasks);
});

app.post("/tasks", async (req, res) => {
  const task = await prisma.task.create({
    data: req.body,
  });
  res.status(201).json(task);
});

app.delete("/tasks/:id", async (req, res) => {
  try {
    const task = await prisma.task.delete({
      where: { id: parseInt(req.params.id) },
    });
    res.json(task);
  } catch (error) {
    res.status(404).json({ message: "Task não encontrada" });
  }
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});