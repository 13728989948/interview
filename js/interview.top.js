var pathQz = location.href.indexOf("/interview") == -1 ? "" : "/interview";

// 创建头部
function createHeader() {
	var html = "";
	html += "<div class=\"layui-header header\">" + "\n";
	html += " <div class=\"mbx-exp\"><label for=\"clickShowBtn\" class=\"mbx-exp-label\"><img id=\"mbx_image\" src=\"" + pathQz + "/images/qt/index/index_s_001.svg\"></label></div>" + "\n";
	html += " <a class=\"logo-lk\" href=\"javascript:;\">" + "\n";
	html += "  <div class=\"logo-wrap\">" + "\n";
	html += "   <div class=\"logo-div\"></div>" + "\n";
	html += "  </div>" + "\n";
	html += " </a>" + "\n";
	html += " <div id=\"glSeBtn\" class=\"searchImg\"></div>" + "\n";
	html += "</div>" + "\n";

	document.write(html);

	// 绑定点击面包线
	$("#mbx_image").on("click", function() {

		// 若已展开侧边栏
		if ($("body").hasClass("site-mobile")) {
			$("body").removeClass("site-mobile");
			$("#mobileShade").remove();
			return;
		}

		$("body").addClass("site-mobile");
		$("#mobileShade").remove();
		$("body").append("<div id=\"mobileShade\" class=\"site-mobile-shade\"></div>");

		// 绑定点击遮罩层
		var mobileShade = $("#mobileShade");
		mobileShade.unbind("click");
		mobileShade.on("click", function() {
			$("body").removeClass("site-mobile");
		});
	});
	
	// 绑定点击全局搜索按钮
	$("#glSeBtn").on("click", function() {
	});
}