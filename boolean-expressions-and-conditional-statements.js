// Finding the stone of immortality.

const input = require("readline-sync")

let $backPack = ['raw meat', 'flashlight', 'a bottle of water', 'knife']

console.log(`You are inside the mysterious temple, looking for the stone of immortality.
  In your backpack: ${$backPack};
  There are two doors ahead of you;
  First (1) with crocodiles in it, second (2) with fire.`)

let doorNumber1 = input.questionInt("Choose the door by entering either \"1\" or \"2\": ")

if (doorNumber1 === 1) {
  console.log("You chose the crocodile door, you can use raw meat to distract them and make it through")
  let useMeat = input.question("Enter 'Yes' to use your item, 'No' if not: ")
  if (useMeat.toLowerCase() === 'yes' && $backPack.includes("raw meat")) {
    console.log("Congratulations, you moved to the next step!")
    $backPack.splice($backPack.indexOf("raw meat"), 1)
    console.log("Now in your backpack: " + $backPack)
    let nextItemDoor1 = input.questionInt(`Choose only ONE item: 
      (1) - Key.
      (2) - Book with spells
      Enter your item number: `)
    if (nextItemDoor1 === 1) {
      $backPack.push("key")
      console.log("Now in your backpack: " + $backPack)
    } else if (nextItemDoor1 === 2) {
      $backPack.push("book with spells")
      console.log("Now in your backpack: " + $backPack)
    }
    console.log(`There are two more doors ahead of you: 
      (1) - A door that requires a key
      (2) - A door that has the stone of immortality, but requires specific spells to open`)
    let chooseNextDoor = input.questionInt("Choose the next door by entering (1) or (2): ")
    if (chooseNextDoor === 1 && $backPack.includes("key")) {
      console.log("You entered the room and found the stone of immortality! Thanks for playing this game!")
    } else if (chooseNextDoor === 2 && $backPack.includes("book with spells")) {
      console.log("Congratulations, you opened the door with spells and found the stone of immortality")
    } else if (chooseNextDoor === 1 && !$backPack.includes("key") || chooseNextDoor === 2 && !$backPack.includes("book with spells")) {
      console.log("You lost because you do not have the necessary item.\nYour backpack contains: " + $backPack)
    } else {
      console.log("Try again and enter either '1' or '2'.")
    }
  } else if (useMeat.toLowerCase() === "no") {
    console.log("You lost, try again.")
  } else {
    console.log("Try again and enter either 'Yes' or 'No'.")
  }
} else if (doorNumber1 === 2) {
  console.log("You chose the fire door, you can use bucket of water to pass through safely")
  let useBuckOfWater = input.question("Enter 'Yes' to use your item, 'No' if not: ")
  if (useBuckOfWater.toLowerCase() === "no" || (useBuckOfWater.toLowerCase() === "yes" && !$backPack.includes("a bucket of water"))) {
    console.log("You lost, try again.");
    if (useBuckOfWater.toLowerCase() === "yes") {
      console.log("You lost becaue you do not have the necessary item.\nYour backpack contains: " + $backPack)
    }
  } else {
    console.log("Try again and enter either 'Yes' or 'No'.")
  }
} else {
  console.log("Try again and enter either '1' or '2'.")
}