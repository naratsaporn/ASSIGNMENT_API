const express = require('express')
const app = express()


app.get('/xyz', (req, res) => {
    var Range = 0
    var num = 3;
    var answer = new Array();
    for( var i = 0 ; i <= 6 ; i++ ) {
        if( i!= 0 && i!= 1){
            Range = Range + 2
        }
        num = num + Range
        answer[i] = num
        // console.log( num )
    }
    var myJSON = JSON.stringify(answer);
    res.json( {massage : "ฟังชั่น xyz" , data : myJSON , status : 1001 } );

})

app.get('/bc', (req, res) => {
    
    var A = 21 ;
    finding( A )

res.send('Start bc')

})
function finding(A) {

    var B = 23-A ; // A + B = 23 
    var C  = -21-A; // A + C = -21

    console.log(B)
    console.log(C)
}
app.listen(3000, () => {
  console.log('Start server at port 3000.')
})