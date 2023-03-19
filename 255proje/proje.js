$(document).ready(function(){
    //alert("hello");

    let letters=["U","O","E","S","H"];
    let words=["HOSE","SHE","SUE","USE","SHOE","HOUSE"];
    let temp = [];

    $("#shuffle").click(function(){
        //alert("hh");
        let newLetters=[];
        let array=["U","O","E","S","H"]
        for( let i=0;i<5;i++){
            rnd = Math.floor(Math.random()* array.length); //5 random number.
            //console.log(rnd);
            newLetters.push(array[rnd]);
            array.splice(rnd,1);
        }
        //console.log(newLetters);
        $("#letter-1").html(newLetters[0]);
        $("#letter-2").html(newLetters[1]);
        $("#letter-3").html(newLetters[2]);
        $("#letter-4").html(newLetters[3]);
        $("#letter-5").html(newLetters[4]);
        
    })

    let selectedLetters=[];
    
    $("#letter-1").click(function(){
        document.getElementById("shuffle").disabled = true;
        
        if(!selectedLetters.includes($(this).text())){
            $("#textt").fadeIn();
            selectedLetters.push($(this).text());
            $("#textt").append($(this).text());
            $(this).css("background","black").css("color","white");
        }
        else{
            $(this).animate({left: "+=20px"}, 50)
                    .animate({left: "-=20px"}, 50)
                    .animate({left: "+=20px"}, 50)
                    .animate({left: "-=20px"}, 50);
        }
    })

    $("#letter-2").click(function(){
        document.getElementById("shuffle").disabled = true;
        
        if(!selectedLetters.includes($(this).text())){
            $("#textt").fadeIn();
            selectedLetters.push($(this).text());
            $("#textt").append($(this).text());
            $(this).css("background","black").css("color","white");
        }
        else{
            $(this).animate({left: "+=20px"}, 50)
                    .animate({left: "-=20px"}, 50)
                    .animate({left: "+=20px"}, 50)
                    .animate({left: "-=20px"}, 50);
        }
    })

    $("#letter-3").click(function(){
        document.getElementById("shuffle").disabled = true;
        
        if(!selectedLetters.includes($(this).text())){
            $("#textt").fadeIn();
            selectedLetters.push($(this).text());
            $("#textt").append($(this).text());
            $(this).css("background","black").css("color","white");
        }
        else{
            $(this).animate({left: "+=20px"}, 50)
                    .animate({left: "-=20px"}, 50)
                    .animate({left: "+=20px"}, 50)
                    .animate({left: "-=20px"}, 50);
        }
    })

    $("#letter-4").click(function(){
        document.getElementById("shuffle").disabled = true;
        
        if(!selectedLetters.includes($(this).text())){
            $("#textt").fadeIn();
            selectedLetters.push($(this).text());
            $("#textt").append($(this).text());
            $(this).css("background","black").css("color","white");
        }
        else{
            $(this).animate({left: "+=20px"}, 50)
                    .animate({left: "-=20px"}, 50)
                    .animate({left: "+=20px"}, 50)
                    .animate({left: "-=20px"}, 50);
        }
    })
    
    $("#letter-5").click(function(){
        document.getElementById("shuffle").disabled = true;
        
        if(!selectedLetters.includes($(this).text())){
            $("#textt").fadeIn();
            selectedLetters.push($(this).text());
            $("#textt").append($(this).text());
            $(this).css("background","black").css("color","white");
        }
        else{
            $(this).animate({left: "+=20px"}, 50)
                    .animate({left: "-=20px"}, 50)
                    .animate({left: "+=20px"}, 50)
                    .animate({left: "-=20px"}, 50);
        }
    })

    //console.log(selectedLetters); 

    window.oncontextmenu = function (e) {
        //alert('Right Click')
        e.preventDefault(); 
        document.getElementById("shuffle").disabled = false;
        var word = selectedLetters.join("");
        //console.log(word);
        $("#letter-1").css("background", "none").css("color","black");
        $("#letter-2").css("background", "none").css("color","black");
        $("#letter-3").css("background", "none").css("color","black");
        $("#letter-4").css("background", "none").css("color","black");
        $("#letter-5").css("background", "none").css("color","black");
        $("#textt").text('');
        $("#textt").fadeOut();

        selectedLetters = [];
        console.log(selectedLetters);

        //checking puzzle !
        for(let i=0;i<words.length;i++){
            if(word==words[i]){
                if(temp.indexOf(words[i]) > -1){
                    if(i==0){
                        $(`.word0 > p`).fadeIn().css('display','block').animate({opacity: 1.0});
                    }
                    if(i==1){
                        $(`.word1 > p`).fadeIn().css('display','block').animate({opacity: 1.0});
                    }
                    if(i==2){
                        $(`.word2 > p`).fadeIn().css('display','block').animate({opacity: 1.0});
                    }
                    if(i==3){
                        $(`.word3 > p`).fadeIn().css('display','block').animate({opacity: 1.0});
                    }
                    if(i==4){
                        $(`.word4 > p`).fadeIn().css('display','block').animate({opacity: 1.0});
                    }
                    if(i==5){
                        $(`.word5 > p`).fadeIn().css('display','block').animate({opacity: 1.0});
                    }
                }else{
                    temp.push(words[i]);
                
                    console.log(temp);
                    
                    $("#textt").text('');
                    $("#textt").fadeOut();
                    
                    if(i==0){
                        $(`.word0 > p`).css("visibility", "visible").animate({opacity: 1.0});
                        $(".word0").css("background", "yellow");
                        $(`.word0 > p`).removeClass("unused");
                    }
                    if(i==1){
                        $(`.word1 > p`).css("visibility", "visible").animate({opacity: 1.0});
                        $(".word1").css("background", "yellow");
                        $(`.word1 > p`).removeClass("unused");
                    }
                    if(i==2){
                        $(`.word2 > p`).css("visibility", "visible").animate({opacity: 1.0});
                        $(".word2").css("background", "yellow");
                        $(`.word2 > p`).removeClass("unused");
                    }
                    if(i==3){
                        $(`.word3 > p`).css("visibility", "visible").animate({opacity: 1.0});
                        $(".word3").css("background", "yellow");
                        $(`.word3 > p`).removeClass("unused");
                    }
                    if(i==4){
                        $(`.word4 > p`).css("visibility", "visible").animate({opacity: 1.0});
                        $(".word4").css("background", "yellow");
                        $(`.word4 > p`).removeClass("unused");
                    }
                    if(i==5){
                        $(`.word5 > p`).css("visibility", "visible").animate({opacity: 1.0});
                        $(".word5").css("background", "yellow");
                        $(`.word5 > p`).removeClass("unused");
                    }
                }
        }

                
        }
    }

    $("#hint").click(function(){
        $(`.unused`).css({opacity: 0.0, visibility: "visible"}).animate({opacity: 0.6}).animate({opacity: 0.0});
    })
})