//Following code is for shifting elements from first container to second container only as it was specified in the assignment

const items=document.querySelectorAll('.toDrag')        // Selects all the draggable items
const first = document.getElementsByClassName('first');     // Selects the list of objects having "first" in their classes
const second=document.getElementsByClassName('second');     // Selects the list of objects having "second" in their classes
const btn=document.querySelector('.btn');           // Selects the button


var dragItem;               // Object to be dragged
for(var item of items){

    item.addEventListener('dragstart', dragstart);          //Function call to dragstart func whenever the item is started being dragged.
    
    item.addEventListener('dragend', dragend);              //Function call to dragend func whenever the item is done dragging.
}
function dragstart(){
    dragItem=this;                                      // Since the opject that is dragged calls the function, this will be the object that is dragged and dragItem is set to that object
    setTimeout(()=>this.style.display="none", 0)        // As you start dragging the element from first box, it's display is set to none
}
function dragend(){
    setTimeout(()=>this.style.display="inline-block", 0)        // On finishing the dragging, the display of dragItem is set back to original display
    dragItem=null;                                                //On finishing the dragging, dragItem is setback to null, meaning that no object is been dragged
}

//If you want to move from second container to first too, you can run a loop on the boxes element here
second[0].addEventListener('dragover', dragOver);           // Whenever the object is dragged OVER the second box, the dragOver function is called, that changes the css of second box
second[0].addEventListener('dragEnter', dragEnter);         // Whenever the object that is dragged ENTERs the second box, the dragOver function is called
first[0].addEventListener('dragLeave', dragLeave);          // Whenever the object that is dragged LEAVEs the first box, the dragOver function is called
second[0].addEventListener('drop', drop);                   //Whenever the object is DROPped in the second box, the drop function is called
function drop(){
    this.append(dragItem);                                      //Inserts item to the second box
    this.style.border="1px rgb(219, 152, 152) solid"            //Sets the second box back to original state.
    this.style.opacity="1"
}
function dragOver(e){
    e.preventDefault();
    this.style.border="2px dotted yellow"                       //Animation when the object is dragged over the box
    this.style.opacity="0.5"
}
function dragEnter(e){
    e.preventDefault();
}
function dragLeave(){
    this.style.border="none"                                   //When the object leaves the box
    this.style.opacity="1"

}

//Again setting all the items to first container
btn.addEventListener('click',()=>{
    const resetItems=document.querySelectorAll(".second>.toDrag");          //Selecting the dragged items only for the second container
    for(var item of resetItems){
        first[0].append(item);                              //Sending them back to the first container
    }
})