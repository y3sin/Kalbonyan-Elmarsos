let name = "Yasin";
console.log("1) " + name);//        ==> "Yasin"    (global)

if (true) {
  let name = "Samy";
  console.log("2) " + name);//      ==> "Samy"     (local)

  if (true) {
    let name = "Mohammed";
    console.log("3) " + name);//    ==> "Mohammed" (local)
  }
}
console.log("4) " + name);//        ==> "Yasin"    (global)

if (true) {
  console.log("5) " + name);//      ==> "Yasin" (global)
}
