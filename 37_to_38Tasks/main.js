let day = "   friday  ";
// You Need To Remove Spaces And Make First Letter Capital => Friday
day = day.trim().slice(0, 1).toUpperCase() + day.trim().slice(1);
console.log(day);
switch (day) {
  case "Friday":
  case "Saturday":
  case "Sunday":
    console.log(`No Appointments Available , ${day}`);
    break;
  case "Monday":
  case "Thursday":
    console.log(`From 10:00 AM To 5:00 PM  , ${day}`);
    break;
  case "Tuesday":
    console.log(`From 10:00 AM To 6:00 PM  , ${day}`);
    break;
  case "Wednesday":
    console.log(`From 10:00 AM To 7:00 PM , ${day}`);
    break;
default:
console.log(`Its Not A Valid Day , ${day}`);
}
