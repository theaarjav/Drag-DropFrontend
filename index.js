//Following code is for shifting elements from first container to second container only as it was specified in the assignment

const items=document.querySelectorAll('.toDrag')
const first = document.getElementsByClassName('first');
const second=document.getElementsByClassName('second');
const btn=document.querySelector('.btn');


var dragItem;
for(var item of items){

    item.addEventListener('dragstart', dragstart);      
    
    item.addEventListener('dragend', dragend);
}
function dragstart(){
    dragItem=this;
    setTimeout(()=>this.style.display="none", 0)        // As you start dragging the element from box 1, it's display is set to none
}
function dragend(){
    setTimeout(()=>this.style.display="inline-block", 0)        // On finishing the dragging, the display of dragItem is set back to original display
    dragItem=null;
}

//If you want to move from second container to first too, you can run a loop on the boxes element here
second[0].addEventListener('dragover', dragOver);
second[0].addEventListener('dragEnter', dragEnter);
first[0].addEventListener('dragLeave', dragLeave);
second[0].addEventListener('drop', drop);
function drop(){
    this.append(dragItem);
    this.style.border="1px rgb(219, 152, 152) solid"
}
function dragOver(e){
    e.preventDefault();
    this.style.border="2px dotted yellow"
}
function dragEnter(e){
    e.preventDefault();
}
function dragLeave(){
    this.style.border="none"
}

//Again setting all the items to first container
btn.addEventListener('click',()=>{
    console.log("Click triggered")
    const resetItems=document.querySelectorAll(".second>.toDrag");
    for(var item of resetItems){
        first[0].append(item);
    }
})