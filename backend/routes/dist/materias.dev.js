"use strict";

var express = require('express');

var router = express.Router(); //No estaba seguro de si era necesario usar el get "de prueba" aqui, asi que lo pase

var materias = require("../models/materia");

router.get("/get", function _callee(req, res) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          try {
            res.status(200).json({
              data: materias,
              message: "materias xd"
            });
          } catch (err) {
            res.status(400).json({
              message: "Some error occured - GET",
              err: err
            });
          }

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
});
router.post("/post", function _callee2(req, res) {
  var materia;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          try {
            materia = new materias({
              name: "Calculo",
              nrc: "43562",
              clave: "I5353",
              date: ["12", "32", "2020"],
              professor: "Yo"
            });
            materia.save().then(function (doc) {
              console.log(doc);
              res.status(200).json({
                data: materia,
                message: ":)"
              });
            });
          } catch (err) {
            res.status(400).json({
              message: "Some error ocurred - PUT",
              err: err
            });
          }

        case 1:
        case "end":
          return _context2.stop();
      }
    }
  });
});
module.exports = router;