"use strict";

/***** Funktionen 01 *****/

// 1. Kapselung von Codeblöcken

// Funktionsaufruf (call)
// test();

// Funktionsrumpf (body) | callee
// function test()
// {
//     console.log("Hallo Robert!");
// }

// ***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

// ausgabeNamen()

// function ausgabeNamen() {
//     let firstName = "Anna";
//     console.log("Hallo " + firstName + "!");
// }

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

// ausgabeNamenParam("Anna"); // Argument
// ausgabeNamenParam("Craig");
// ausgabeNamenParam("Fatih");

// function ausgabeNamenParam(firstName) { // Parameter
    
//     console.log("Hallo " + firstName + "!");
// }

/***** Funktionen 02c *****/
// 2c. Mehrere Parameter

// ausgabeNamenParams("Maxine","Mütze");
// ausgabeNamenParams(prompt("Vorname?"), prompt("Nachname?"));

function ausgabeNamenParams(firstName, familyName) { // Parameter
    console.log("Hallo " + firstName + " " + familyName + "!");
    
}

/***** Funktionen 03a *****/
// 03a. Vorbereitung
// Postulat: one function = one job (Uncle Bob)
// SRP Single Responsibility Principle

// ausgabeNamenParams2("Max","Mütze");

function ausgabeNamenParams2(firstName, familyName) { // Parameter

    // 1. Funtionalität: string composing
    const gap = " ";
    const outputStr = "Hallo"+ gap + firstName + gap + familyName + "!";
    
 
    // 2. Funtionalität: data ouput
    console.log(outputStr);
}

/***** Funktionen 03b *****/
// Trennen der Funktionalitäten | return



// 1. Funtionalität: string composing
output(getString("Maxine","Mütze"));
function getString(firstName, familyName) {
    const gap = " ";
    const outputStr = "Hallo"+ gap + firstName + gap + familyName + "!";
    return outputStr; // ---> Daten zum Call
    console.log("hi"); // return BEENDET die Funktion!
}

// 2. Funtionalität: data ouput
// output("Hi");
function output(outputData) {
    console.log(outputData);
}