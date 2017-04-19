// 创建头部
function createHeader() {
	var html = "";
	html +="<div class=\"layui-header header\">"+"\n";
	html +=" <div class=\"mbx-exp\"><label for=\"clickShowBtn\" class=\"mbx-exp-label\"><img id=\"mbx_image\" src=\"../../images/qt/index/index_s_004.svg\"></label></div>"+"\n";
	html +=" <a class=\"logo-lk\" href=\"\">"+"\n";
	html +="  <div class=\"logo-wrap\">"+"\n";
	html +="   <div class=\"logo-div\"></div>"+"\n";
	html +="  </div>"+"\n";
	html +=" </a>"+"\n";
	html +=" <ul class=\"layui-nav\">"+"\n";
	html +="  <li class=\"layui-nav-item layui-this\"><a target=\"_blank\" href=\"http://115.28.154.106\">Yoo视频直连</a></li>"+"\n";
	html +=" </ul>"+"\n";
	html +="</div>"+"\n";

	document.write(html);

	// 绑定点击面包线
	$("#mbx_image").on("click", function() {
		$("body").addClass("site-mobile");
		$("#mobileShade").remove();
		$("body").append("<div id=\"mobileShade\" class=\"site-mobile-shade\"></div>");
		
		// 绑定点击遮罩层
		$("#mobileShade").on("click", function() {
			$("body").removeClass("site-mobile");
		});
	});
}