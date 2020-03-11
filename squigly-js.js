class Squigly { 
  
    constructor(canvas){
      this.canvas = canvas;
    }
    
    get canvas(){
      console.log(this._canvas);
      return this._canvas;
    }
    
    set canvas(id){
      this._canvas = document.getElementById(id);
      this._context = this._canvas.getContext('2d');
  
    }
    
    draw(){

      let x, y, drawing = false; 

      this._canvas.addEventListener('mousedown', e => {
        e.preventDefault();
  
        x = e.pageX - this._canvas.offsetLeft, y = e.pageY - this._canvas.offsetTop;
        drawing = true;
        console.log(x, y);
      });
  
      this._canvas.addEventListener('mousemove', e => {
        e.preventDefault();
        if(drawing){
          _drawLine(this._context, x, y, e.pageX - this._canvas.offsetLeft, e.pageY - this._canvas.offsetTop);
        }
  
        x = e.pageX - this._canvas.offsetLeft;
        y = e.pageY - this._canvas.offsetTop;
      });
      
      this._canvas.addEventListener('mouseup', e => {
        drawing = false;
      });
  
      this._canvas.addEventListener('mouseleave', e => {
        drawing = false;
      });

      this._canvas.addEventListener('touchstart', e => {
          e.preventDefault();
          drawing = true;
          x = e.pageX - this._canvas.offsetLeft, y = e.pageY - this._canvas.offsetTop; 
      });

      this._canvas.addEventListener('touchmove', e => {
          e.preventDefault();
          if(drawing){
              _drawLine(this._context, x, y, e.pageX - this._canvas.offsetLeft, e.pageY - this._canvas.offsetTop);
          }
          x = e.pageX - this._canvas.offsetLeft;
          y = e.pageY - this._canvas.offsetTop;
      });

      this._canvas.addEventListener('touchend', e => {
          e.preventDefault();
          drawing = false;
      });
    
      // helper function for drawing the lines
      const _drawLine = (context, x1, y1, x2, y2, color, lineWeight) => {
        context.beginPath();
        context.strokeStyle = color || 'black';
        context.lineWidth = lineWeight || 2;
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.stroke();
        context.closePath();
      }
      
    }
    
  }