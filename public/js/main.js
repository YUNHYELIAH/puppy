/*
$(".navi> .nav> li").hover(function(){
 $(".menu_modal").stop().fadeOut();
 $(this).children(".menu_modal").stop().fadeIn(100);
},function(){
    $(".menu_modal").stop().fadeOut();
});
*/

$(".nav >li").hover(function () {
    console.log("...");
    $(".menu_modal").stop().fadeOut(100, function () {
        console.log("...");
        $(this).stop().fadeIn(100);
    });

},
function () {
    $(".menu_modal").stop().fadeOut(0);
}
);

/**사료 */
var cates=[{main:{title:"브랜드별사료"},sub:[{title:"ANF",link:"#"},{title:"GO",link:"#"},{title:"K9",link:"#"},{title:"NOW",link:"#"},
{title:"네츄럴코어",link:"#"},{title:"뉴트리언스",link:"#"},{title:"더독(닥터소프트)",link:"#"},{title:"도그랑",link:"#"},{title:"도그밥(수제사료)",link:"#"},{title:"로얄캐닌",link:"#"},{title:"로직(LOGIC)",link:"#"},
{title:"로투스",link:"#"},{title:"럭셔리 발란스",link:"#"},{title:"맛선",link:"#"},{title:"메라독",link:"#"},{title:"비코푸드",link:"#"},{title:"보레알",link:"#"},{title:"시저",link:"#"},
{title:"아나멧",link:"#"},{title:"아보덤(피너클)",link:"#"},{title:"아침애 수제사료",link:"#"}]},{main:{title:"기능별사료"},sub:[{title:"분유/이유식",link:"#"},{title:"자견용",link:"#"},
{title:"성견용",link:"#"},{title:"전연령",link:"#"},{title:"노견용",link:"#"},{title:"소형견용",link:"#"},{title:"대형견용",link:"#"},
{title:"비만견용",link:"#"},{title:"임신/수유견",link:"#"},
{title:"그레인프리 사료",link:"#"},{title:" 뼈/관절 사료",link:"#"},{title:"피부,모질 사료",link:"#"},{title:"기타 기능성 사료",link:"#"},{title:"위장개선 사료",link:"#"},
{title:"대포장사료",link:"#"},{title:"저알러지사료",link:"#"},
{title:"소프트사료 ",link:"#"},{title:"수제사료",link:"#"},{title:"오븐에 구운 사료",link:"#"},{title:"",link:"#"}]}]

function modalMake1(){
    var html = '';
    for (var i=0; i<cates.length; i++){
        html ='<ul>';
        html += '<li class="title">';
        html += '<a href="'+cates[i].main.link+'">'+ cates[i].main.title+'</a>';
        html += '</li>';

        for(var j=0; j<cates[i].sub.length; j++){
            html += '<li class="cont">';
            html += '<a href='+cates[i].sub[j].link+'>'+cates[i].sub[j].title+'</a>';
            html += '</li>';
        }
        html+= '</ul>';
        $("#modal1").append(html);
    }
}

modalMake1();


/**간식 */
var cates2=[{title:"육포/사시미간식(대용량)",link:"#"},{title:"육포/져키간식(소용량)",link:"#"},{title:"명품수제간식",link:"#"},{title:"강아지 덴탈껌",link:"#"},{title:"습식간식/소시지",link:"#"},{title:"캔/파우치",link:"#"},
    {title:"비스켓/쿠키",link:"#"},{title:"건어물",link:"#"},{title:"중대형견",link:"#"},{title:"기타",link:"#"}]


function modalMake2(){
    var html = '';
    html += '<ul class="clear">';
    for(i=0; i<cates2.length; i++){
      
        html += '<li class="snack_cont">';
        html += '<a href="'+cates2[i].link+'">'+ cates2[i].title+'</a>';
        html +='</li>';}

        html+='</ul>';
        $("#modal2").append(html);
    }

modalMake2();


/**영양제*/
var cates3 = [{title:"종합영양제",link:"#"},{title:"피부/모질영양제",link:"#"},{title:"칼슘/관절영양제",link:"#"},{title:"장/소화관련",link:"#"},{title:"눈관련",link:"#"},{title:"구강관련",link:"#"},{title:"귀 관련",link:"#"},{title:"의약부외품",link:"#"},
    {title:"어린강아지용",link:"#"},{title:"임신견",link:"#"},{title:"기타",link:"#"}]


    function modalMake3(){
        var html = '';
        html += '<ul class="clear">';
        for(i=0; i<cates3.length; i++){
          
            html += '<li>';
            html += '<a href="'+cates3[i].link+'">'+ cates3[i].title+'</a>';
            html +='</li>';}
    
            html+='</ul>';
            $("#modal3").append(html);
        }
    
    modalMake3();


/**목욕/미용*/
    $.ajax({
        url:"../json/cate4.json",
        type:"get",
        datatype:"json",
        data:{},
        success:function(data){
            var cmt=data.result.length;
            var html ='';
            html += '<ul class="clear">';
            for(var i=0; i<cmt; i++){
                html += '<li>';
                html += '<a href="'+data.result[i].link+'">'+data.result[i].title+'</a>';
                html += '</li>';
            }
            html+='</ul>';
            $("#modal4").append(html);
            console.log(html);
        },
        error:function(xhr,status,error){
            console.log(xhr,status,error);
        }
    });

    /**배변위생 */
    $.ajax({
        url:"../json/cate5.json",
        type:"get",
        datatype:"json",
        data:{},
        success:function(data){
            var cmt= data.result.length;
            var html = '';
            html += '<ul class="clear">';
            for(i=0; i<cmt; i++){
                html += '<li>';
                html += '<a href="'+data.result[i].link+'">'+data.result[i].title+'</a>';
                html +='</li>';
            }
            html += '</ul>';
            $("#modal5").append(html);
            console.log(html);
        },
        error:function(xhr,status,error){
            console.log(xhr,status,error);
        }
    });
