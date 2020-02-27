export const arrayIncludes = (requiredArray: any[], actualArray: any[]) => {
  for (let val of requiredArray) {
    if (!actualArray.includes(val)) {
      console.log(val);
      console.log(actualArray);
      return false;
    }
  }
  return true;
};
