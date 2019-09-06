const HashMap = require('./hashmap');

/**
 * 1. The discrepancy is that maiar and hobbit only
 *    print the second value inserted. Since the keys
 *    maiar and hobbit already exist, the original values
 *    are overwritten. *Note from Casey: in principle, the
 *    hashing table only registers a collision when two keys
 *    of different values hash to the same location, not when
 *    a duplicate key is given.
 * 
 * 2. 20, 10
 * 
 * 3. 10:10, 0:22, 9:31, 4:4, 5:15, 6:28, 7:17, 1:88, 8:59
 *    5:5, 1:28, 2:19, 6:15, 3:20, 
 */

const WhatDoesThisDo = function(){
  let str1 = 'Hello World.';
  let str2 = 'Hello World.';
  let map1 = new HashMap();
  map1.set(str1,10);
  map1.set(str2,20);
  let map2 = new HashMap();
  let str3 = str1;
  let str4 = str2;
  map2.set(str3,20);
  map2.set(str4,10);

  console.log(map1.get(str1));
  console.log(map2.get(str3));
};
WhatDoesThisDo();

function removeDuplicates(str) {
  const noDup = new HashMap();
  for (let c of str) {
    if (!noDup.get(c)) noDup.set(c, c);
  }

  noDup.print();
}
removeDuplicates('google all that you think can think of');

/**
 * use the alphabetized anagram of each string as the hash for each
 * entry
 * the value of each hash will correpond to an index of the
 * output array
 * then for each word, using the alphabetized anagram, place that word
 * into the corresponding array
 * 
 * @param {array} arr 
 */
function anagramGroup(arr) {}
