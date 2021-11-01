if (4 == 9) {
  console.log("ok!");
} else {
  console.log("erroe");
}

const num = 50;

if (num < 49) {
  console.log("error");
} else if (num > 100) {
  console.log("Many");
} else {
  console.log("ok");
}

const num = 50;
switch (num) {
  case 49:
    console.log("error");
    break;
  case 100:
    console.log("erroe");
    break;
  case 50:
    console.log("true");
    break;
  default:
    console.log("sorry");
    break;
}
