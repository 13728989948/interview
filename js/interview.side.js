// 创建边栏
function createSideBar() {
	var html = "";
	html += "  <div class=\"layui-side layui-bg-black\">" + "\n";
	html += "   <div class=\"layui-side-scroll\">" + "\n";
	html += "    <ul id=\"layui-nav-ul\" class=\"layui-nav layui-nav-tree\">" + "\n";
	html += "     <li class=\"layui-nav-item layui-nav-title\"><a>Java基础</a></li>" + "\n";
	html += "     <li class=\"layui-nav-item\"><a href=\"" + pathQz + "/interQus/JavaBase/JavaBase.html\">Java基础</a></li>" + "\n";
	html += "     <li class=\"layui-nav-item\"><a href=\"" + pathQz + "/interQus/JavaBase/JavaBase-Thread.html\">Java基础-线程</a></li>" + "\n";
	html += "     <li class=\"layui-nav-item\"><a href=\"" + pathQz + "/interQus/JavaBase/JavaBase-HashMap.html\">Java基础-HashMap</a></li>" + "\n";
	html += "     <li class=\"layui-nav-item\"><a href=\"" + pathQz + "/interQus/JavaBase/JavaBase-ArrayList.html\">Java基础-ArrayList</a></li>" + "\n";
	html += "" + "\n";
	html += "     <li class=\"layui-nav-item layui-nav-title\"><a>Java多线程</a></li>" + "\n";
	html += "     <li class=\"layui-nav-item\"><a href=\"" + pathQz + "/interQus/JavaMtt/JavaMtt-ncmx.html\">Java内存模型</a></li>" + "\n";
	html += "     <li class=\"layui-nav-item\"><a href=\"" + pathQz + "/interQus/JavaMtt/JavaMtt-cjds.html\">Java常见的锁</a></li>" + "\n";
	html += "" + "\n";
	html += "     <li class=\"layui-nav-item layui-nav-title\"><a>Dubbo</a></li>" + "\n";
	html += "     <li class=\"layui-nav-item\"><a href=\"" + pathQz + "/interQus/Dubbo/Dubbo-base.html\">Dubbo基础</a></li>" + "\n";
	html += "     <li class=\"layui-nav-item\"><a href=\"" + pathQz + "/interQus/Dubbo/Dubbo-gzyl.html\">Dubbo工作原理</a></li>" + "\n";
	html += "     <li class=\"layui-nav-item\"><a href=\"" + pathQz + "/interQus/Dubbo/Dubbo-pzcs.html\">Dubbo配置参数</a></li>" + "\n";
	html += "     <li class=\"layui-nav-item\"><a href=\"" + pathQz + "/interQus/Dubbo/Dubbo-jqrc.html\">Dubbo集群容错</a></li>" + "\n";
	html += "     <li class=\"layui-nav-item\"><a href=\"" + pathQz + "/interQus/Dubbo/Dubbo-fzjh.html\">Dubbo负载均衡</a></li>" + "\n";
	html += "     <li class=\"layui-nav-item\"><a href=\"" + pathQz + "/interQus/Dubbo/Dubbo-xcmx.html\">Dubbo线程模型</a></li>" + "\n";
	html += "     <li class=\"layui-nav-item\"><a href=\"" + pathQz + "/interQus/Dubbo/Dubbo-ybdy.html\">Dubbo异步调用</a></li>" + "\n";
	html += "     " + "\n";
	html += "     <li class=\"layui-nav-item layui-nav-title\"><a>MySql</a></li>" + "\n";
	html += "     <li class=\"layui-nav-item\"><a href=\"" + pathQz + "/interQus/MySql/MySql-skz.html\">MySql锁控制</a></li>" + "\n";
	html += "     <li class=\"layui-nav-item\"><a href=\"" + pathQz + "/interQus/MySql/MySql-ccyq.html\">MySql存储引擎</a></li>" + "\n";
	html += "     <li class=\"layui-nav-item\"><a href=\"" + pathQz + "/interQus/MySql/MySql-gljb.html\">MySql隔离级别</a></li>" + "\n";
	html += "     " + "\n";
	html += "     <li class=\"layui-nav-item layui-nav-title\"><a>Linux</a></li>" + "\n";
	html += "     <li class=\"layui-nav-item\"><a href=\"" + pathQz + "/interQus/Linux/Linux-Cpu.html\">Linux-Cpu</a></li>" + "\n";
	html += "    </ul>" + "\n";
	html += "   </div>" + "\n";
	html += "  </div>" + "\n";

	document.write(html);

	// 添加选中背景
	var title = $.trim(document.title);
	$(".layui-nav-item").not(".layui-nav-title").each(function() {
		var self = $(this);
		var selfText = $.trim(self.text());
		if (selfText == title) {
			$(this).addClass("layui-this");
		}
	});
}