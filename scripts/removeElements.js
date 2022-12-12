/**Created by BJ Rutledg
 * 12/01/2022
 * Licence Apache
 */

const style = "display: none;";

const iterateNodesChangeStyle = (nodes) => {
  for (let node in nodes) {
    const curr = nodes[node];
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
