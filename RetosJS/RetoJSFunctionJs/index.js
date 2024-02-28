function likes(number) {
  const result =
    number < 1000
      ? number.toString()
      : number < 1000000
      ? Math.floor(number / 1000) + "K"
      : Math.floor(number / 1000000) + "M";

  return result;
}

console.log(likes(1400));
console.log(likes(34567));
console.log(likes(7456345));
console.log(likes(567));
