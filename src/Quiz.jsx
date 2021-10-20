import React,{useState,useEffect} from 'react'
import questions from './question'
import './App.css';



function Quiz() {

    


    const [index,setIndex]=useState(0);
    const [score,setScore]=useState(0);
    const [current_question,setCurrent_question]=useState(questions[index].question );
    const [answers,setAnswer]=useState(questions[index].answers);
   
    


    const orig_col="white";
    const [direct,setDirect]=useState(false);
    const [first_op,setFirst_op] =useState(orig_col);
    const [second_op,setSecond_op] =useState(orig_col);
    const [third_op,setThird_op] =useState(orig_col);
    const [fourth_op,setFourth_op] =useState(orig_col);



    const pressed=(e)=>{

        const opt=e.target.dataset.key;
        //console.log(opt);
        const selected_ans=e.target.value;

        const col=validate(selected_ans);
        console.log(col);

        if(col=="green"){
            setScore(score+1);
           
        
        }
       

        turn_col(opt,col);

        setTimeout(() => {
            
            next();
            
        },1000);

        
       
       
        
       
        
        
        
        
       
    }


    const turn_col=(opt,col)=>{
       // console.log("turning col"+opt+col);

       if(col=="green"){
           setScore(score+1);
       }
        

        

        if(opt==0){
            setFirst_op(col);
        }
        if(opt==1){
            setSecond_op(col)
        }
        if(opt==2){
            setThird_op(col);
        }
        if(opt==3){
            setFourth_op(col);
        }

    }
   

    const validate=(ans)=>{
      
        

        const correct_answer=questions[index].correct_answer;
      

        if(correct_answer==ans){
             return "green"
            
           
        }
        else{
            return "red";
        }

       
    }





    const undo=(c)=>{
        

        setFirst_op(c);
        setSecond_op(c);
        setThird_op(c);
        setFourth_op(c)
    }



    const next=()=>{
       

        if(index==questions.length-1){
            
            undo("white");
            
            setTimeout(() => {
                
                setDirect(true);
            },2000);
           
        }
        else{
            setIndex(index+1);
        }

       




        
       

        
       
           
           
      
       
      
       
    }


    useEffect(()=>{
        setCurrent_question(questions[index].question);
        setAnswer(questions[index].answers);
        undo("white");
       
      
        
        
    },[index] );

   




    

    



if(direct){
    return (
        <div className="score">

            <div>Congratulations!!!!! Your score is {score} </div>




        </div>
    )

}
else{
    return(
        <div>




        

            <div className="question">
                {current_question}
            </div>

          

            <div className="options">
        <input className="option" style={{backgroundColor:first_op }} data-key={0} type="button" onClick={(e)=>{pressed(e) } }  value={answers[0]}  />   
        <input className="option" style={{backgroundColor:second_op }} data-key={1} type="button" onClick={(e)=>{pressed(e) } }  value={answers[1] }  />   
        <input className="option" style={{backgroundColor:third_op }}  data-key={2} type="button" onClick={(e)=>{pressed(e) } }  value={answers[2] }  />   
        <input className="option" style={{backgroundColor: fourth_op }} data-key={3} type="button" onClick={(e)=>{pressed(e) } }  value={answers[3] }  />   
            </div>
        
        
     

        </div>
        
    )

}


    





    
       
     
       
    
}

export default Quiz
