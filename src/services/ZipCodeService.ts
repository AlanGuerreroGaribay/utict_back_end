import axios from "axios";
import { URL } from "../app";

export class ZipcodeService {
  static async getZipcodeInfo(country: string, zip: string): Promise<any> {
    const response = await axios.get(`${URL}${country}/${zip}`);
    return response.data;
  }
}
