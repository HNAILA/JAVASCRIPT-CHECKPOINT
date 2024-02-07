//exo1:
function hello() {
  return "hello edabit.com";
}
//exo2:
function cubes(a) {
  return a ** 3;
}
//exo3:
function addition(a, b) {
  var result = a + b;

  return result;
}
//exo4:
function convert(minutes) {
  return minutes * 60;
}
//exo5:
function addition(num) {
  return num + 1;
}
//exo6:
function triArea(base, height) {
  var area = (base * height) / 2;
  return area;
}
//exo7:
function calcAge(age) {
  return age * 365;
}
//exo8:
function addUp(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) sum += i;

  return sum;
}
//exo9:
function matchHouses(step) {
  if (step === 0) {
    return 0;
  }
  if (step === 1) {
    return 6;
  }
  if (step === 2) {
    return 11;
  }
  return 11 + (step - 2) * 5;
}
//exo10:
function getFirstValue(arr) {
  return arr[0];
}
//exo11:
function circuitPower(voltage, current) {
  return voltage * current;
}
//exo12:
function remainder(x, y) {
  return x % y;
}
//exo13:
function findPerimeter(length, width) {
  return (length + width) * 2;
}
//exo14:
function squared(a) {
  return a * a;
}
//exo15:
function howManySeconds(hours) {
  return hours * 3600;
}
//exo16:
function whichIsLarger(f, g) {
  var fResult = f();
  var gResult = g();
  if (fResult === gResult) {
    return "neither";
  }
  return fResult > gResult ? "f" : "g";
}
//exo17:
function crazyfunction(a, b) {
  return a ^ b;
}
//exo18:
function error(n) {
  var errorCodes = {
    1: "Check the fan: e1",
    2: "Emergency stop: e2",
    3: "Pump Error: e3",
    4: "c: e4",
    5: "Temperature Sensor Error: e5",
    emergency: "emergency",
  };
  return errorCodes[n] || 101;
}
//exo19:
function lessThanOrEqualToZero(num) {
  return num <= 0;
}
//exo20:
function points(twoPointers, threePointers) {
  var totalPoints = 2 * twoPointers + 3 * threePointers;
  return totalPoints;
}
//exo21:
function and(a, b) {
  return a && b;
}
//exo22:
function greeting(name) {
  if (name === "Mubashir") {
    return "Hello, my Love!";
  } else {
    return "Hello, " + name + "!";
  }
}
//exo23:
function boolToString(flag) {
  return flag ? "true" : "false";
}
//exo24:
function giveMeSomething(a) {
  return "something " + a;
}
//exo25:
function shiftToLeft(x, y) {
  return x * Math.pow(2, y);
}
//exo26:
function lessThan100(a, b) {
  return a + b < 100;
}
//exo27:
function comp(str1, str2) {
  return str1.length === str2.length;
}
//exo28:
function divisibleByFive(n) {
  return n % 5 === 0;
}
//exo29:
function returnNegative(n) {
  return Math.abs(n) * -1;
}
//exo30:
function getLength(arr) {
  let totalElements = 0;

  arr.forEach((element) => {
    if (Array.isArray(element)) {
      totalElements += getLength(element);
    } else {
      totalElements += 1;
    }
  });

  return totalElements;
}
//DONE.
