/**Created by BJ Rutledg 
 * 12/01/2022
 * Licence Apache 
 */


const style = 'display: none;'

var traverseTreeChangeStyle = (node) => {
    //traverse tree and set style to display none to each element in the tree 
    node.style = style;
    for(let n in node) {
        const curr = node[n];
        if(curr.hasChildNodes){
            curr.style = style;
            traverseTreeChangeStyle(curr.childNodes);
        }
    };
}

var removeElements = () => {
    const classes = [
        'sidebar closed', 
        'header clearfix',
        'top-border',
        'current-shop-breadcrumb',
        'non-technician-section clearfix',
        'section-seperator draggable'


    ]
    
    classes.forEach(_class => {
        traverseTreeChangeStyle(document.getElementsByClassName(_class)); 
    });
}

removeElements();