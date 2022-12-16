/**Created by BJ Rutledg
 * 12/01/2022
 * Licence Apache
 */

const style = "display: none;";

const iterateNodesChangeStyle = (elements) => {
  for (let elm in elements) {
    const curr = elements[elm];
    if (typeof curr === "object") {
      curr.style = style;
    }
  }
};

const removeElements = () => {
  const classes = [
    "sidebar closed",
    "sidebar", //if sidebar is open
    "header clearfix",
    "top-border",
    "current-shop-breadcrumb",
    "non-technician-section clearfix",
    // 'section-seperator draggable'
  ];

  classes.forEach((_class) => {
    iterateNodesChangeStyle(document.getElementsByClassName(_class));
  });
};


removeElements();
