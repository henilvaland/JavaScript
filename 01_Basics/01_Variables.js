const accountId = 12345;
let accountEmail = "henil@gmail.com";
var accountPassword = "12345";
accountCity = "Ahmedabad";
let accountStatus;

accountEmail = "henilvaland@gmail.com";
accountPassword = "456788";
accountCity = "Vadodara";

/* Now a days we dont use var anymore as it was a block scoped in previous
versions of Node and was conflicting with other same named variables from 
project components. */

console.table([accountId, accountEmail, accountPassword, accountCity, accountStatus]);
