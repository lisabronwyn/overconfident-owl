// Let's get rid of the
// self
// usage, by using arrow functions!
// This can be achieved without arrow functions as well, but the point would be to learn the differences.

function Counter(){
  const counting = this;
  counting.count = 0;

  counting.updateCount = () => {
    counting.count++
  };
}
