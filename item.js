const items = require("./fakeDb")

class Item {
    constructor(name, price) {
        this.name = name;
        this.price = price;

        items.push(this);
    }

    // Find all items.
    static findAll(){
        return items
    }

    // Find item by name.
    static find(name) {
        const foundItem = items.find(v => v.name === name);
        if(foundItem === undefined){
          throw { message: "Not Found. Please try again.", status: 404 }
        }
        return foundItem
      }

    // Update item by name
    static update(name, data) {
        let foundItem = Item.find(name);
        if (foundItem === undefined) {
        throw {message: "Not Found. Please try again.", status: 404}
        }
        foundItem.name = data.name;
        foundItem.price = data.price;

        return foundItem;
    }

    // Remove item by name
    static remove(name) {
        let foundIdx = items.findIndex(v => v.name === name);
        if (foundIdx === -1) {
        throw {message: "Not Found. Please try again.", status: 404}
        }
        items.splice(foundIdx, 1);
    }
}

module.exports = Item;