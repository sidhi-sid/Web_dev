function fakedownload(done){
    setTimeout(function (){
     let downloadeddata="some data from interwebs";
     done(downloadeddata)
    },1000)	
}
 
 fakedownload(function (data){
 console.log("we downloaded a file,which had this data -->")
 console.log(data)
 })

 function fakedownloadpromise(){
   return new Promise(function(resolve,reject)//executor
   { setTimeout(function(){
   let downloadeddata2="some data from interwebs."
   resolve(downloadeddata2)
   },1000)

   })
 }

 fakedownloadpromise().then(function(data2){
   console.log("we downloaded a file,which had this data -->.")
  
   console.log(data2)
 })

 function fakedownloadpromise1(correct){
   return new Promise(function(resolve,reject)
   { setTimeout(function(){
   let downloadeddata1="some data from interwebs."
   if(correct){
   resolve(downloadeddata1)
   }
   else
   {
   	reject(new error("could not download file"))
   }
   },1000)

   })
 }

 fakedownloadpromise1(true).then(function(data1){
   console.log("we downloaded a file,which had this data -->.")
   console.log(data1)
 }).catch(function (err) {
   console.log(err)
 
 })