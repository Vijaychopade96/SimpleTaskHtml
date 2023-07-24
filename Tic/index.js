var board=[];
var userChioce;
var currentTurn;

function minmax() {
    this.minPlayer=1;
    this.maxPlayer=2;
    
}
minmax.prototype.setMinMax=function(min,max){
    this.minPlayer=min;
    this.maxPlayer=max;
}
minmax.prototype.copyBoard=function(board){
    return board.slice(0);
}
minmax.prototype.makeMove=function(position,board,Player){
    if(board[position]==0){
        var newBoard=this.copyBoard(board);
        newBoard[position]=Player;
        return
         newBoard;
    }
    else{
        return null;
    }
}
