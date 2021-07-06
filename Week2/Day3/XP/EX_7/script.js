let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
let organisation = "";
names = names.sort();
for(name of names) {
    organisation = organisation + name[0];
}
console.log(organisation);
