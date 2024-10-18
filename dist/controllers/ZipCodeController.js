"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZipcodeController = void 0;
const ZipCodeService_1 = require("../services/ZipCodeService");
class ZipcodeController {
    static getZipcodeInfo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { country, zip } = req.params;
            try {
                const data = yield ZipCodeService_1.ZipcodeService.getZipcodeInfo(country, zip);
                res.json(data);
            }
            catch (error) {
                if (error instanceof Error) {
                    console.log(error.message);
                }
            }
        });
    }
}
exports.ZipcodeController = ZipcodeController;
