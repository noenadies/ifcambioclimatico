

myFunction();
function myFunction() {



			  $.ajax({
               
                url:   'web.json',
                 dataType:  'json',
                type:  'post',
                cache:false,
                success:  function (data) { 
                  var as=Object.keys(data.inicio);
                  for(var i=0; i<as.length;i=i+1){
                  //  data.inicio[i].web
                document.getElementById("iframe").src=data.inicio[i].web;
                  alert(ata.inicio[i].web);
                  }
                }
                });
      }
