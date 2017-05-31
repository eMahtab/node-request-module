var request=require('request');

request('http://localhost:3000/olympic/2016/ranking/4', function (error, response, body) {
  
  if(error){
  	handleError(error);
  }else{
     
      if(response.statusCode != 200){
  	      handleError(response)
        }
      else{
        console.log("Response "+body) 
      }  
  } 

});


function handleError(err){
   console.log('Error '+JSON.stringify(err))
}


