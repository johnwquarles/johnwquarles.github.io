"use strict";

var title = document.querySelector(".header h1");

function changeTitleText() {
  title.style.color = randomColor();
}

function randomColor() {
  return "#" + Math.floor(Math.random() * Math.pow(16, 6)).toString(16);
}

function randomColorTimeout() {
  changeTitleText();
  setTimeout(randomColorTimeout, 3000);
}

randomColorTimeout();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDOztBQUdqRCxTQUFTLGVBQWUsR0FBRztBQUN6QixPQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxXQUFXLEVBQUUsQ0FBQztDQUNuQzs7QUFFRCxTQUFTLFdBQVcsR0FBRztBQUNyQixTQUFPLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztDQUNyRTs7QUFFRCxTQUFTLGtCQUFrQixHQUFHO0FBQzVCLGlCQUFlLEVBQUUsQ0FBQztBQUNsQixZQUFVLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLENBQUM7Q0FDdEM7O0FBRUQsa0JBQWtCLEVBQUUsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXIgaDFcIik7XG5cblxuZnVuY3Rpb24gY2hhbmdlVGl0bGVUZXh0KCkge1xuICB0aXRsZS5zdHlsZS5jb2xvciA9IHJhbmRvbUNvbG9yKCk7XG59XG5cbmZ1bmN0aW9uIHJhbmRvbUNvbG9yKCkge1xuICByZXR1cm4gXCIjXCIgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqTWF0aC5wb3coMTYsIDYpKS50b1N0cmluZygxNik7XG59XG5cbmZ1bmN0aW9uIHJhbmRvbUNvbG9yVGltZW91dCgpIHtcbiAgY2hhbmdlVGl0bGVUZXh0KCk7XG4gIHNldFRpbWVvdXQocmFuZG9tQ29sb3JUaW1lb3V0LCAzMDAwKTtcbn1cblxucmFuZG9tQ29sb3JUaW1lb3V0KCk7XG4iXX0=
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyIGgxXCIpO1xuXG5cbmZ1bmN0aW9uIGNoYW5nZVRpdGxlVGV4dCgpIHtcbiAgdGl0bGUuc3R5bGUuY29sb3IgPSByYW5kb21Db2xvcigpO1xufVxuXG5mdW5jdGlvbiByYW5kb21Db2xvcigpIHtcbiAgcmV0dXJuIFwiI1wiICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKk1hdGgucG93KDE2LCA2KSkudG9TdHJpbmcoMTYpO1xufVxuXG5mdW5jdGlvbiByYW5kb21Db2xvclRpbWVvdXQoKSB7XG4gIGNoYW5nZVRpdGxlVGV4dCgpO1xuICBzZXRUaW1lb3V0KHJhbmRvbUNvbG9yVGltZW91dCwgMzAwMCk7XG59XG5cbnJhbmRvbUNvbG9yVGltZW91dCgpO1xuIl0sImZpbGUiOiJtYWluLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=