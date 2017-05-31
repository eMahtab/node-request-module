var request=require('request');

var URL="http://localhost:3000";

request(URL+'/olympic/2016/ranking/4', function (error, response, body) {
  
  if(error){
  	handleError(error);
  }else{
     
      if(response.statusCode != 200){
  	      handleError(response);
        }
      else{        
          console.log("Response 1 "+body);

         request(URL+'/iso/country/'+JSON.parse(body).Country,function(error,response,body){         	
            if(error){
            	handleError(error);
            }
            else{

            	if(response.statusCode != 200){
  	                 handleError(response)
                  }else{
                     console.log("Response 2 "+body) 
                 }
            }
         })
      }  
  }

});

function handleError(err){
   console.log('Error '+JSON.stringify(err))
}


