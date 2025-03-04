/* Pet Advice Kata */

/* Var, Prompt, Confirm, Alert, Compound Conditional */
// Create pet variable, set equal to empty quotes ("")
var pet = ("")
// Ask if they are allergic, store in a boolean variable with OK/Cancel
var allergic = confirm("are you allergic to fur?")
// If they are allergic, ask if they want a cute pet, store in a boolean variable with OK/Cancel
if (allergic == true) {var cute = confirm("do you Want a cute pet?")
}
// If they are not allergic, ask if they want to be outdoors with their pet.  Store it in a boolean with OK/Cancel.
if (allergic == false){
    var outside = confirm("do you like to go outside?")
}
// If allergic and cute, pet =  bird
if (allergic == true && cute == true){
    pet = ("bird")
}
// Else if allergic and not cute,  pet =  tarantula
else if (allergic == true && !cute) {
    pet = ("tarantula")
}
// Else if not allergic and outdoors,  pet =  dog
else if (!allergic && outside == true){
    pet = ("dog")
}
// Else if not allergic and indoors,  pet =  cat 
else if (!allergic && !outside) {
    pet = ("cat")

}
// Display the type of pet: You would do well with a pet
alert("You would do well with a " + pet)
// Ask for a pet name for the pet starting with the same letter as the pet starts with
var petn = prompt("what would you name your pet?")
// Display petname the pet says hi. 

 alert("your pet " + pet + ", " + petn + " says hi")