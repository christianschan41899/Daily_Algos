/* 
    Optional chaining is a newer syntax that can help with this problem in general (not necessarily intended to be used here): 
        https://levelup.gitconnected.com/new-javascript-features-in-2019-optional-chaining-null-coalescing-a7fd38f4ef2d
    The more you deal with objects, especially ones with many nested objects, where you
    are chaining dot notation to access nested values, the more you run into these errors:
        Uncaught TypeError: Cannot read property 'keyName' of undefined
        Uncaught TypeError: Cannot read property 'keyName' of null
    
    These errors mean, somewhere along your chain of dots, one of the keys did not exist
    on the object so it returned undefined, and then the next dot was trying to access
    a key on undefined, or the key did exist but null was it's value.
    One example of how this might happen is getting JSON data back from an API. Sometimes, 
    the record you requested has more data so there are more levels of nesting, which you get used to,
    so you write your code to access the nested data but then you request a different record, and
    less data is available, so your code breaks when trying to access nested data that isn't there.
    There is an entire library dedicated to solving this problem, the solution is referred to as a "lens",
    you look through a "lens" to help you see into an object and safely attempt to access a nested value.
    Without a lens, you would need to interrupt your dot chaining and check the value after each dot,
    one at a time, to make sure it is not undefined or null before going to the next dot.
*/

/* 
    Input:
        Object,
        Array of strings representing a path of keys in the Object
    Output:
        - Value from traversing the object to the last key
        - null if at any point accessing a key returns undefined
        - this means a key was not found / the Object was not nested as deep as the path of keys goes
        - the given object if array of keys is empty

    EXAMPLE:
    const user = {
        id: 101,
        email: "jack@dev.com",
        personalInfo: {
            name: "Jack",
            address: {
                line1: "westwish st",
                line2: "washmasher",
                city: "wallas",
                state: "WX",
            },
        },
        favorites: {
            number: 0
        }
    };

    const keys1 = ["personalInfo", "address", "city"];
    const keys2 = ["personalInfo", "address", "country"];

    lens(user, keys1) should return "wallas", because user.personalInfo.address.city is "wallas"

    and lens(user, keys2) should return null, because there is no key called country inside of user.PersonalInfo.address
};
*/
function lens(obj, keys){
    let keyCopy = [...keys]// Shallow copy of keys so we aren't modifying an input 
    if(keyCopy[0] in obj){//
        if(keyCopy.length == 1){//If we've hit the last key, return the key value (bracket notation)
            return obj[keyCopy[0]];
        }else{//If last key to check isn't reached and the key is in our current object
            let newObj = Object.assign(obj[keyCopy[0]])//This next key must access a nested object, so get it.
            keyCopy.shift();//Remove that key we checked
            return lens(newObj, keyCopy);//Preform our check on this new object with our updated set of key values
        }
    }else{
        return null;//if key not in object, return null
    }
}

const user = {
    id: 101,
    email: "jack@dev.com",
    personalInfo: {
        name: "Jack",
        address: {
            line1: "westwish st",
            line2: "washmasher",
            city: "wallas",
            state: "WX",
        },
    },
    favorites: {
        number: 0
    }
};

const keys1 = ["personalInfo", "address", "city"];
const keys2 = ["personalInfo", "address", "country"];
const keys3 = ["favorites"]

console.log(lens(user, keys1))
console.log(lens(user, keys2))
console.log(lens(user, keys3))

/* 
    Create a function to determine the max amount of
    servings that can be made based on a recipe and
    available ingredients.
    Input:
        - recipe object where keys are ingredient names
        and values are unit required (int)
        - available ingredients object where keys are ingredient
        names and values are unit available (int)
    Output:
        int (max servings)
    Side note (not needed for solution): Realistically, the values
    would be an object as well with the keys: unit (unit of measure), and amount.
    If the avaialable ingredient was stored in a different unit,
    a conversion table would be needed to convert units of measure.

    EXAMPLE:
    const recipe1 = {
        "organic fat": 99,
        "live squid": 1,
        "birds nest": 1,
        "fried flesh": 1,
        "spicy": 5,
        "gourmet memes": 4200,
    };
    const available1 = {
        "organic fat": 990,
        "live squid": 1,
        "birds nest": 10,
        "fried flesh": 10,
        "spicy": 50,
        "gourmet memes": 42000,
        "sugar": 9001,
        "spice": 5,
        "everything nice": 1,
        "triple point water": 5,
    };

    getMaxServings(recipe1, available1) should return 1, because the limiting ingredient is live squid, and there is only 1 available.
*/
function getMaxServings(recipe, available){
    
}