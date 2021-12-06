var express = require("express");
var router = express.Router();

const con = require("../../../modules/mysql");

router.post("/", (req, res) => {
  // 한개의 이미지 저장
});

router.get("/", (req, res) => {
  // 전체 프로필 정보 조회
});

router.post("/", (req, res) => {
  // 프로필 저장
});

module.exports = router;
