import request from "supertest";
import app from "../app"; // Asegúrate de que exportas `app` desde el archivo app.ts
import { ZipcodeService } from "../services/ZipCodeService";

jest.mock("../services/ZipcodeService");

describe("ZipcodeController", () => {
  it("debería devolver la información del código postal correctamente", async () => {
    const mockResponse = {
      "post code": "90210",
      country: "United States",
      "country abbreviation": "US",
      places: [
        {
          "place name": "Beverly Hills",
          longitude: "-118.4065",
          state: "California",
          "state abbreviation": "CA",
          latitude: "34.0901",
        },
      ], 
    };

    (ZipcodeService.getZipcodeInfo as jest.Mock).mockResolvedValue(
      mockResponse
    );

    const response = await request(app).get("/zipcode/us/90210");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockResponse);
  });
});
