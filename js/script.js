// Created by: Alex Nelson
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ISC2O-UNIT5-05-JS-NESTED-IF-STATEMENTS/sw.js", {
    scope: "/ISC2O-UNIT5-05-JS-NESTED-IF-STATEMENTS/",
  })
}

/**
 * This function calculates the angles of the triangle
 */
function calculateArea() {
  //input variables for angles
  const lengthA = parseFloat(document.getElementById("sideLengthA").value)
  const lengthB = parseFloat(document.getElementById("sideLengthB").value)
  const lengthC = parseFloat(document.getElementById("sideLengthC").value)

  //Proccess calculates the angles of the of the triangle using cosign
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

  //Variable for the total sum of the angles to two decimal points
  const sumOfAngles =
    Number(angleA.toFixed(2)) +
    Number(angleB.toFixed(2)) +
    Number(angleC.toFixed(2))

  //Output functions
  if (sumOfAngles != 180) {
    document.getElementById("output").innerHTML = "Not a triangle"
  }
  //Function for Equilateral triangles
  else if (angleA == angleB && angleA == angleC) {
  document.getElementById("output").innerHTML = "Equilateral triangle" }  
  //Function for Isoscolese triangles
  else if (angleA == angleB || angleA == angleC || angleB == angleC) {
  document.getElementById("output").innerHTML = "Isoscolese triangle" }
  //Function for Scalene triangles
  else if (angleA !== angleB && angleA !== angleC && angleC !== angleB) {
  document.getElementById("output").innerHTML = "Scalene triangle" }
  //if the input somehow bypass all checks
  else {
    document.getElementById("output").innerHTML = "You have somehow broken the script"
  }
  console.log(sumOfAngles)
}
