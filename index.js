let count = 0;

const element = document.getElementById('counter');

let increase = () => {
  count++;
  element.innerText = count;
};

let decrease = () => {
  count--;
  element.innerText = count;
};

let reset = () => {
  count = 0;
  element.innerHTML = "<mark>" + count + "</mark>";
};

let selectTheme = theme => {
  document.getElementsByTagName("body")[0].className = theme; // left right thing
  document.getElementsByTagName("main")[0].className = theme;
  const buttons = document.getElementsByTagName("button");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].className = theme;
  }
}

