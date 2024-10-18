import { Router } from "express";
import { ZipcodeController } from "../controllers/ZipCodeController";

const router = Router();

router.get("/zipcode/:country/:zip", ZipcodeController.getZipcodeInfo);

export default router;
