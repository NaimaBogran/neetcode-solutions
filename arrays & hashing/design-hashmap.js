
// Design HashMap
// Easy
// Topics
// Company Tags
// Design a HashMap without using any built-in hash table libraries.

// Implement the MyHashMap class:

// MyHashMap() initializes the object with an empty map.
// void put(int key, int value) inserts a (key, value) pair into the HashMap. If the key already exists in the map, update the corresponding value.
// int get(int key) returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
// void remove(key) removes the key and its corresponding value if the map contains the mapping for the key.
// Example 1:

// Input: ["MyHashMap", "put", "put", "get", "get", "put", "get", "remove", "get"]
// [[], [1, 1], [2, 2], [1], [3], [2, 1], [2], [2], [2]]

// Output: [null, null, null, 1, -1, null, 1, null, -1]
// Explanation:
// MyHashMap myHashMap = new MyHashMap();
// myHashMap.put(1, 1); // The map is now [[1,1]]
// myHashMap.put(2, 2); // The map is now [[1,1], [2,2]]
// myHashMap.get(1); // return 1, The map is now [[1,1], [2,2]]
// myHashMap.get(3); // return -1 (i.e., not found), The map is now [[1,1], [2,2]]
// myHashMap.put(2, 1); // The map is now [[1,1], [2,1]] (i.e., update the existing value)
// myHashMap.get(2); // return 1, The map is now [[1,1], [2,1]]
// myHashMap.remove(2); // remove the mapping for 2, The map is now [[1,1]]
// myHashMap.get(2); // return -1 (i.e., not found), The map is now [[1,1]]

// Constraints:

// 0 <= key, value <= 1,000,000
// At most 10,000 calls will be made to put, get, and remove.

class MyHashMap {
    constructor() {
        this.size = 1000;

        // Create buckets (array of arrays)
        this.buckets = new Array(this.size).fill(null).map(() => []);
    }

    // Hash function
    hash(key) {
        return key % this.size;
    }

    put(key, value) {
        const index = this.hash(key);
        const bucket = this.buckets[index];

        // Check if key already exists
        for (let pair of bucket) {
            if (pair[0] === key) {
                // Update value
                pair[1] = value;
                return;
            }
        }

        // If not found, add new pair
        bucket.push([key, value]);
    }

    get(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];

        for (let pair of bucket) {
            if (pair[0] === key) {
                return pair[1];
            }
        }

        return -1; // not found
    }

    remove(key) {
        const index = this.hash(key);
        const bucket = this.buckets[index];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket.splice(i, 1);
                return;
            }
        }
    }
}