        let count = 0;
        

function magic(){
    // הגדרה למס רנדומלי
        let dice1 = Math.floor(Math.random() * 6)+1;
        let dice2 = Math.floor(Math.random() * 6)+1;
        // הצמדה לתמונה
        document.getElementById('dice1').src = dice1 +".jpg";  
        document.getElementById('dice2').src = dice2 +".jpg";  
    //    הספירה של המונה
      
        if(dice1 == dice2) {count++;            
        document.getElementById('counter').innerText = "כמות הפעמים שיצא לך דאבל :" + count;
        }
        
        
        // console.log(dice1);
        //   console.log(dice2);
          
  

}