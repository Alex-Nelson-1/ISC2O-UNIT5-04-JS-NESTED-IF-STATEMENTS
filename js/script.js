// Created by: Alex Nelson
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-PWA-Test/sw.js", {
    scope: "/ICS2O-PWA-Test/",
  })
}

/**
 * This function displays an alert.
 */
function calculateArea() {
  const lengthA = parseFloat(document.getElementById("sideLengthA").value)
  const lengthB = parseFloat(document.getElementById("sideLengthB").value)
  const lengthC = parseFloat(document.getElementById("sideLengthC").value)

  const angleA =
    Math.acos(
      (lengthB ** 2 + lengthC ** 2 - lengthA ** 2) / (2 * lengthB * lengthC)
    ) *
    (180 / Math.PI)
  const angleB =
    Math.acos(
      (lengthC ** 2 + lengthA ** 2 - lengthB ** 2) / (2 * lengthC * lengthA)
    ) *
    (180 / Math.PI)
  const angleC =
    Math.acos(
      (lengthA ** 2 + lengthB ** 2 - lengthC ** 2) / (2 * lengthA * lengthB)
    ) *
    (180 / Math.PI)

  const sumOfAngles =
    Number(angleA.toFixed(2)) +
    Number(angleB.toFixed(2)) +
    Number(angleC.toFixed(2))

  document.getElementById("angleA").innerHTML = "Angle A = " + angleA + "°"
  document.getElementById("angleB").innerHTML = "Angle B = " + angleB + "°"
  document.getElementById("angleC").innerHTML = "Angle C = " + angleC + "°"
  document.getElementById("angleSum").innerHTML = sumOfAngles + "°"
}
