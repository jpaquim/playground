const createStore = (initialValue = 0) => {
  const subscribers = [];
  let value = initialValue;
  const private = {
    get value() {
      return value;
    },
    set value(newValue) {
      value = newValue;
      subscribers.forEach(fn => fn(value));
    },
  };
  return {
    getState() {
      return private.value;
    },
    increment() {
      ++private.value;
    },
    decrement() {
      --private.value;
    },
    subscribe(fn) {
      subscribers.push(fn);
    },
  };
};

const createCounter = ({ el, store }) => {
  el.querySelector('#increment').addEventListener('click', store.increment);
  el.querySelector('#decrement').addEventListener('click', store.decrement);
  const render = () => {
    const value = store.getState();
    el.querySelector('#value').innerHTML = value;
    el.querySelector('#another-value').innerHTML = value + 2;
  };
  store.subscribe(render);
  return { render };
};

document.addEventListener('DOMContentLoaded', () => {
  const counter = createCounter({
    el: document.getElementById('counter'),
    store: createStore(2),
  });
  counter.render();
});
