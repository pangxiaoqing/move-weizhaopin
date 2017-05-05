//第二页 查看更多点击效果
$("#company_profile").on("tap",function(){
//			  	console.log("ni")
		$("#p2_maskblack").show();
		$("#p2_mask").show();
		$(".page2").addClass("swiper-no-swiping")
		})
		$("#p2_mask_close").on("tap",function(){
			$("#p2_maskblack").hide();
			$("#p2_mask").hide();
  		$(".page2").removeClass("swiper-no-swiping");	
});
//第四页 查看更多点击效果
$("#job_details").on("tap",function(){
//			  	console.log("ni")
		$("#p4_maskblack").show();
		$("#p4_mask").show();
		$(".page4").addClass("swiper-no-swiping")
		})
		$("#p4_mask_close").on("tap",function(){
			$("#p4_maskblack").hide();
			$("#p4_mask").hide();
  		$(".page4").removeClass("swiper-no-swiping");	
});
//判断微信和浏览器 分享				
function isWeiXin(){ 
	var ua = window.navigator.userAgent.toLowerCase(); 
	if(ua.match(/MicroMessenger/i) == 'micromessenger'){ 
		$("#share").on("tap",function(){
			$("#share_weixin").show();
		})
		$("#share_weixin").on("tap",function(){
			$("#share_weixin").hide();
		})
		return true; 
	}else{
		$("#share").on("tap",function(){
			//alert(2);
			$("#share_liulanqi").show();
		})
		$("#share_liulanqi").on("tap",function(){
			$("#share_liulanqi").hide();
		})
		return false; 
	} 
} 
isWeiXin();


//更改提示框位置
function sweetalert(msg){
    $(".alertshade").show();
    $(".alertshade").html(msg);
    var alertWidth='-'+$(".alertshade").width()/2+'px';
    $(".alertshade").css("margin-left",alertWidth);
    setTimeout(function(){
        $(".alertshade").hide();
    },3000)
}


var errormsg=[];

//验证手机格式
	
function verPhone(){
	var phone=$.trim($("#tel").val());
	var patrn=/^1[34578]\d{9}$/;
	if(phone===''){
		errormsg.unshift('手机号码不可为空！');
		sweetalert(errormsg[0]);	
	}else{
		if(patrn.test($("#tel").val())==false){
			errormsg.unshift('请输入正确的手机号！');
			sweetalert(errormsg[0]);
		}
	}
}

//表单验证
	$('#tel').blur(function(){
		verPhone();
	})
	
	

$('#btn_job').tap(function(){
	 var UserName = $('#username');
	 var Age = $('#age');
	 var WorkYear = $('#workyear');
	 var Job = $('#job');
	 var Province = $('#province');
	 var City = $('#city');
	 var Tel = $('#tel');
	 var Introduce = $('#introduce');
	 
	 
	 
	 if(UserName.val()==""){
	 	sweetalert("请填写称呼");
	}else if(Age.val()==""){
		sweetalert("请填写年龄");
	}else if(WorkYear.val()==""){
		sweetalert("请选择工作年限");
	}else if(Job.val()==""){
		sweetalert("请填写工作岗位");
	}else if(Province.val()==""){
		sweetalert("请选择省份");
	}else if(City.val()==""){
		sweetalert("请选择城市");
	}else if(Tel.val()==""){
		sweetalert("请输入手机号");
	}else if(Introduce.val()==""){
		sweetalert("请输入个人介绍");
	}
	
	verPhone();
	if(errormsg.length>0){
		return;
	}	
})


//性别选择

$('#sex_man').tap(function(){
	operateSex.call(this,$('#sex_woman'));
});
$('#sex_woman').tap(function(){
	operateSex.call(this,$('#sex_man'));
});

/*
 * @description 操作性别
*/

function operateSex($next){
	var $img = $(this).find('img'),
		url = $(this).attr('url'),
		unurl = $(this).attr('unurl'),
		color = $(this).attr('_color'),
		uncolor = $(this).attr('_uncolor'),
		$span = $(this).find('span');
		
	var	$next_img = $next.find('img'),
		$next_url = $next.attr('url'),
		$next_unurl = $next.attr('unurl'),
		$next_color = $next.attr('_color'),
		$next_uncolor = $next.attr('_uncolor'),
		$next_span = $next.find('span');
	if($(this).attr('status') === 'off'){
		$(this).attr('status','on');
		$img.attr('src',url);
		$span.attr('class',color);
		
		$next.attr('status','off');
		$next_img.attr('src',$next_unurl);
		$next_span.attr('class',$next_uncolor);		
		
	}
}

//点赞效果

$("#zan .ani").on("tap",function(){
	//alert(111);
	$("#zan").hide();
	$("#zan_win").show();
})




