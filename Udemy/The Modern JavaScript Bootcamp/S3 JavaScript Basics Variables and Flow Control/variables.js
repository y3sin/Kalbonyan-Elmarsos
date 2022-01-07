//1. We Can't define a variable more than once
let name = "yasin"
/*let name = "samy"*///      ==> [Error]
name = "samy"        //      ==> [Reset The Value Of Variable]
console.log(name)    //      ==> Print The Latest Value ["samy"]

//2. There Are Rules Related To Variable Names
/* Available */
let test_ = true
let _test = true
let _     = true
let test1 = true
/* Unavailable */
//let @test = false
//let 1test = false
//let 12345 = false

//3. Variable Names Cannot Be Reversed Keywords
/* Unavailable */
//let let = true
//let var = true
//let true = true
//let false = true
