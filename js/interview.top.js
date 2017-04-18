// 创建头部
function createHeader() {
	var html = "";
	html +="  <div class=\"layui-header header header-demo\">"+"\n";
	html +="   <div class=\"layui-main\">"+"\n";
	html +="    <a class=\"logo\" href=\"/\"></a>"+"\n";
	html +="    <ul class=\"layui-nav\">"+"\n";
	html +="     <li class=\"layui-nav-item layui-this\"><a id=\"goToInterview\" href=\"javascript:goToInterview();\">参加面试去</a></li>"+"\n";
	html +="    </ul>"+"\n";
	html +="   </div>"+"\n";
	html +="  </div>"+"\n";

	document.write(html);
}