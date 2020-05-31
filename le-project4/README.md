Lightning Exercise: Given the object below, output each of the values to the console using dot notation.

const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
}
You can also use dot notation to create a new key on an object if you need to.

wardrobe.material = "Cedar"
You just added a new key to the object stored in the wardrobe variable. If you output it to the console, you will see it along with the others that were already defined.

console.log(wardrobe)

> contents: (5) ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"]
depth: 38
height: 80
manufacturer: "Killibrew & Sons"
material: "Cedar"
width: 50