// /**Created by BJ Rutledg
//  * 12/12/2022
//  * Licence Apache
//  */

/**figured out the css insertion for this. Script no longer needed. 
 * 12/16/2022
 */

// /**
//  * I had a heck of a time injecting the CSS to change the size
//  * of the text, so did it programatically. I wanted to
//  * keep the existing css, so, rather than overwriting the
//  * css, I assigned a new prop to it.
//  *
//  * 12/13/2022
//  * After testing, I discovered that the style (text size) that
//  * I set is being changed back to shopware styling whenever
//  * there is an RO transfered to a technician, therefore, I
//  * added an event listener, to that triggers when there
//  * is a change, we reset the text size.
//  */

// const addStyleProp = () => {
//   const className = "section-title";
//   const styleObj = { "font-size": "40px" };
//   elms = document.getElementsByClassName(className);

//   for (let elm in elms) {
//     let curr = elms[elm];

//     if (typeof curr === "object") {
//       try {
//         Object.assign(curr.style, styleObj);
//       } catch (error) {
//         console.log(
//           "Error attempting to change styling on the current node.",
//           elm
//         );
//       }
//     }
//   }
// };

// addStyleProp();
// document.getElementById('workorders-index').addEventListener('change',addStyleProp);
// //add a DOM listener to handle changes to the DOM
// document.addEventListener("DOMContentLoaded", addStyleProp);
