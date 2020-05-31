const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
}

console.log(`My wardrobe is  ${wardrobe.height}inches high`)
console.log(`The manufacturer of my wardrobe is ${wardrobe.manufacturer}`)
console.log(`The contents of my wardrobe are  ${wardrobe.contents}`)
console.log(`The depth of my wardrobe is  ${wardrobe.depth}inches`)
console.log(`The width of my wardrobe is  ${wardrobe.width}inches`)


wardrobe.material = "Cedar"
console.log(wardrobe);

