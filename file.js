console.log("Hello World") 
const d = new Date();
document.getElementById("yeardate").innerHTML = d.getFullYear();
document.getElementById("btn-alert").addEventListener("click", function() {
    alert("ur mom");
  });

  document.getElementById('btn-alert').onmouseover = () => {
    document.getElementById('btn-alert').innerText = 'SERIOUSLY';
};

document.getElementById('btn-alert').onmouseleave = () => {
    document.getElementById('btn-alert').innerText = 'Do NOT Press';
};
let count = 1;
document.getElementById('btn-counter').onclick = () => {
     count = count + 1;
     if(count % 2 == 0) {
     document.getElementById('txt-counter').classList.add('even');
     document.getElementById('txt-counter').classList.remove('odd');
     } else {
      document.getElementById('txt-counter').classList.add('odd');
      document.getElementById('txt-counter').classList.remove('even');
     }
     document.getElementById('txt-counter').innerHTML = `Number: ${count}`;}

/*var x = 
x % 2 = 1 

if (check for even number) {
  document.getElementById('id').classList.add('even');
} else {
  document.getElementById('id').classList.add('odd');
}*/ 
for (let i = 1; i <= 100; i = i + 1) {
var listItem  = document.createElement("li")


   document.getElementById('numbers').appendChild(listItem);
  if(i % 2 == 0) {listItem.textContent = 'even'
    } else {listItem.textContent = 'odd'

    }
}

