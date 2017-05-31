var request=require('request');
var URL="http://localhost:3000";

var getRanking=function get_rank(error,response,body){
   if(error){
  	    handleError(error);
     }else{         
       if(response.statusCode != 200){
  	      handleError(response);
        }
       else{        
          console.log("Response 1 "+body);
          request(URL+'/iso/country/'+JSON.parse(body).Country,getISO);
        }
     }
}

var getISO=function get_iso(error,response,body){
	if(error){
         handleError(error);          
     }else{
       	if(response.statusCode != 200){
  	         handleError(response)
           }
        else{
             console.log("Response 2 "+body);
             request(URL+'/olympic/2016/medal/'+JSON.parse(body).iso,getMedalCount);
            }
       } 
}

var getMedalCount=function get_medal_count(error,response,body){
	if(error){
          handleError(error);
    }else{
       if(response.statusCode != 200){
  	          handleError(response);
          }
       else{        
           console.log("Response 3 "+body);
           }
     }  
}

function handleError(err){
   console.log('Error '+JSON.stringify(err))
}

request(URL+'/olympic/2016/ranking/4', getRanking);

