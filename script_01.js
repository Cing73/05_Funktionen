"use strict";

/***** Funktionen 01 *****/

// 1. Kapselung von Codeblöcken

// Funktionsaufruf (call)
// test();

// Funktionsrumpf (body) | callee
function test()
{
    console.log("Hallo Robert!");
}

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

// ausgabeNamen()

function ausgabeNamen() {
    let firstName = "Anna";
    console.log("Hallo " + firstName + "!");
}

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

ausgabeNamenParam("Anna"); // Argument
ausgabeNamenParam("Craig");
ausgabeNamenParam("Fatih");

function ausgabeNamenParam(firstName) { // Parameter
    
    console.log("Hallo " + firstName + "!");
}
