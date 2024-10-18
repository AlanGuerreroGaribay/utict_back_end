"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ZipCodeController_1 = require("../controllers/ZipCodeController");
const router = (0, express_1.Router)();
router.get("/zipcode/:country/:zip", ZipCodeController_1.ZipcodeController.getZipcodeInfo);
exports.default = router;
