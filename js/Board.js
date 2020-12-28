class Board {
   constructor() {
      this.rows = 6;
      this.columns = 7;
      this.spaces = createSpaces();
   }
   /** 
 * Generates 2D array of spaces. 
 * @return  {Array}     An array of space objects
 */
   createSpaces() {
      const spaces = [];
      for(let x = 0; x < this.columns; x++ ) {
         const column = [];
         for(let y = 0; y < this.rows; y++) {
            const space = new Space(x, y);
            column.push(space);
         }
         spaces.push(column);
      }
      return spaces; 
   }
   /** draws associated SVG spaces for all game spaces */
   drawHTMLBoard() {
      for(const column of this.spaces) {
         for(let space of column){
            drawSVGSpace();
         }
      }
   }
}