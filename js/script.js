// Copyright (c) 2022 Timothy Manwell All rights reserved
//
// Created by: Timothy Manwell
// Created on: Oct 2022
// This file contains the JS functions for index.html

/**
 * This function gets users first name and age and shows it back to user.
 */
function enterClicked() {
  // input
  const streetNumber = parseInt(document.getElementById("street-number").value)
  const streetName = document.getElementById("street-name").value

  // output
  document.getElementById("address").innerHTML =
    "Your adress is: " + streetNumber + " " + streetName + "."
}
