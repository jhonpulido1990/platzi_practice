function newUser(name, age, country) {
  var name = name || "jhon";
  var age = age || "32";
  var country = country || "colombia";
  console.log(name, age, country);
}

newUser();
newUser("pablo", 24, "mexico")

function newAdmin(name = "david", age = 18, country = "miami") {
  console.log(name, age, country)
}

newAdmin();
newAdmin("claudia", 48, "madrid");
