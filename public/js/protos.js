
HTMLElement.prototype.expand = function(expand = true){
	this.style.maxHeight = expand? `${this.scrollHeight}px` : null
}

HTMLElement.prototype.changeClass = function(clases){
    clases.add = clases.add? clases.add.split(' ') : [];
    clases.rem = clases.rem? clases.rem.split(' ') : [];
    clases.rem.forEach(clas => {
        this.classList.remove(clas);
    });
    clases.add.forEach(clas => {
        this.classList.add(clas);
    });
}