import express from "express";
import { run } from "./services";

const router = express.Router();

router.use('/main', run);

export default router;