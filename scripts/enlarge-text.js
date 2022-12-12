/**Created by BJ Rutledg 
 * 12/12/2022
 * Licence Apache 
 */

/**
 * I had a heck of a time injecting the CSS to change the size
 * of the text, so did it programatically. I wanted to
 * keep the existing css, so, rather than overwriting the
 * css, I assigned a new prop to it.
 */
const resizeElms = () => {
  elms = document.getElementsByClassName("section-title");
  for (let elm in elms) {
    let curr = elms[elm];
    if (typeof curr === 'object') {
      try {
        Object.assign(curr.style, { "font-size": "40px" });
      } catch (error) {
        console.log(
          "Error attempting to change styling on the current node.",
          elm
        );
      }
    }
  }
};

resizeElms();
