
export const cutWords  = (a:string) =>{

  if(a.length > 30){
    return  a.slice(0, 24) + "..."
   }
   else{
    return  a 
   }
   
  }

 


