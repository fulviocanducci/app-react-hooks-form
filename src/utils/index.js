export function validateEmail(email) {
  return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

export function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

export function cssValidOrInvalid(obj, name) {
  if (isEmpty(obj)) {
    return "";
  }
  //return obj[name] ? " is-invalid" : " is-valid";
  return obj[name] ? " is-invalid" : "";
}
