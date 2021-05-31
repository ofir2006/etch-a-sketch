function updateGrid(){
    grid = document.querySelector('#grid-container');
    grid.innerHTML = "";
    size = document.querySelector("#size").value;
    if(size == ""){
      size = 16;
    }
    grid.style.gridTemplate = "repeat(" + size +", 1fr) / repeat(" + size + ", 1fr)";
    for(let i = 0; i < size * size; i++){
        elem = document.createElement('div');
        elem.classList.add('block');
        grid.appendChild(elem);
      }
    }
    
    
    function paintMode(){
        let blocks = document.querySelectorAll('.block');
        blocks.forEach(block => {
            block.removeEventListener('mouseenter', remove);
            block.addEventListener('mouseenter', paint)
        });
    }
    
    
    function removeMode(){
        let blocks = document.querySelectorAll('.block');
        blocks.forEach(block => {
            block.removeEventListener('mouseenter', paint);
            block.addEventListener('mouseenter', remove)
        });
    }
    
    function clear(){
        let blocks = document.querySelectorAll('.block');
        blocks.forEach(block => {
            block.style.backgroundColor = "grey";
        });
    }
    
    function paint(e){
    e.target.style.backgroundColor = "black";
    }
    
    function remove(e){
        e.target.style.backgroundColor = "grey";
    }
    updateGrid();
    
    let paintButton = document.querySelector('#paint-button');
    let removeButton = document.querySelector('#remove-button');
    let clearButton = document.querySelector('#clear-button');
    let sizeButton = document.querySelector('#size-button');
    paintButton.onclick = paintMode;
    removeButton.onclick = removeMode;
    clearButton.onclick = clear;
    sizeButton.onclick = updateGrid;
    