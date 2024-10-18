import { Request, Response } from "express";
import { ZipcodeService } from "../services/ZipCodeService";

export class ZipcodeController {
  static async getZipcodeInfo(req: Request, res: Response): Promise<void> {
    const { country, zip } = req.params;
    try {
      const data = await ZipcodeService.getZipcodeInfo(country, zip);
      res.json(data);
    } catch (error: any) {
      if (error.response && error.response.status === 404) {
        res.status(404).json({ error: "Zip code not found!" });
      } else {
        res.status(500).json({ error: "Internal server error!" });
      }
    }
  }
}
