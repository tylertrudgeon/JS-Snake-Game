//Targeting canvas by it's ID.
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

//Setting canvas to have squares.
const scale = 10;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

let snake;