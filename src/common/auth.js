export function getItem(name) {
  return localStorage.getItem(name);
}

export function setItem(name, value) {
  localStorage.setItem(name, value);
}

export function removeItem(name) {
  localStorage.removeItem(name);
}

export function clear() {
  localStorage.clear();
}
