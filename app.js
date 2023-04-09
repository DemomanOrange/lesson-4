var tags = ['li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1', 'p', 'h1', 'ol', 'br'];

var count = {};

for (let i = 0; i < tags.length; i++) {
  var tag = tags[i];
  count[tag] = (count[tag] || 0) + 1;
}

var wall = Object.entries(count)
  .sort((a, b) => b[1] - a[1])
  .reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});

console.log(wall);



const array = ['div', 'li', 'li', 'p', 'div', 'li', 'h1', 'ol', 'li'];

const uniqueArray = array.filter((item, index) => {
  return array.indexOf(item) === index;
});

console.log(uniqueArray);






