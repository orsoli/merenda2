function rimuoviDuplicati(arr) {
  // A voi!
  const newArr = arr.filter((nr, i) => {
    return arr.indexOf(nr) === i;
  });
  return newArr;
}
