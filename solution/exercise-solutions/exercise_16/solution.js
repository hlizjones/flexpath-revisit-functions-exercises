function getPermutations(arr) {
  const results = [];

  if (arr.length === 0) return [[]];

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    const remaining = arr.slice(0, i).concat(arr.slice(i + 1));
    const remainingPerms = getPermutations(remaining);

    for (let perm of remainingPerms) {
      results.push([current, ...perm]);
    }
  }

  return results;
}

// Testing
const permutations = getPermutations([1, 2, 3]);
console.log(permutations);
// Outputs all permutations of [1, 2, 3]
