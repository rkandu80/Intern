let sub=document.getElementById('abc');
        sub.addEventListener('click',(event)=>{
            console.log("form sumbit");
            alert('The details has been submitted ');
        })

        


        document.getElementById('time').addEventListener('click',Displaydate);
        function Displaydate(){
            document.getElementById('para').innerHTML=Date();
            console.log('The button is clicked to know the date');
            
        }

        
        