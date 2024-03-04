/*Deliverable:

1. Make the 3rd element in the list have yellow background color.

2. Make all the elements in the list have bold font.



Final output should be as goal image:*/

//1

const li=document.getElementsByClassName('fruit');
li[2].style.backgroundColor='yellow';

for(let i=0; i<li.length; i++){
    li[i].style.fontWeight='bold';
}

