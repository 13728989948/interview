layui.define([ "layer", "code", "form", "element", "util" ], function(exports) {
	var $ = layui.jquery, layer = layui.layer, form = layui.form(), util = layui.util, device = layui.device();

	// 首页banner
	setTimeout(function() {
		$(".site-zfj").addClass("site-zfj-anim");
		setTimeout(function() {
			$(".site-desc").addClass("site-desc-anim");
		}, 5000);
	}, 100);

	// 展示当前版本
	$(".site-showv").html(layui.v);

	// 固定Bar
	util.fixbar({
		bar1 : true,
		click : function(type) {
			if (type === "bar1") {
				location.href = "javascript:alert(\"你好，要干啥？要跳转？no,no，除非你自己打开\");";
			}
		}
	});

	// 代码修饰
	layui.code({
		elem : "pre"
	});

	// 目录
	var siteDir = $(".site-dir");
	if (siteDir[0] && $(window).width() > 750) {
		layer.open({
			type : 1,
			content : siteDir,
			skin : "layui-layer-dir",
			area : "auto",
			title : "目录",
			offset : "r",
			shade : false,
			success : function(layero, index) {
				layer.style(index, {
					marginLeft : -15
				})
			}
		});

		siteDir.find("li").on("click", function() {
			var othis = $(this);
			othis.find("a").addClass("layui-this");
			othis.siblings().find("a").removeClass("layui-this");
		});
	}

	// 在textarea焦点处插入字符
	var focusInsert = function(str) {
		var start = this.selectionStart, end = this.selectionEnd, offset = start + str.length;
		this.value = this.value.substring(0, start) + str + this.value.substring(end);
		this.setSelectionRange(offset, offset);
	};

	// 演示页面
	$("body").on("keydown", "#LAY_editor, .site-demo-text", function(e) {
		var key = e.keyCode;
		if (key === 9 && window.getSelection) {
			e.preventDefault();
			focusInsert.call(this, "  ");
		}
	});

	var iframe = $("#LAY_demo").prop('contentWindow');
	$("#LAY_demo_run").on("click", function() {
		iframe.layui.jquery("body").html($("#LAY_editor").val());
		if (iframe.layui.form) {
			iframe.layui.form().render();
		}
		if (iframe.layui.element) {
			iframe.layui.element().init();
		}
	});

	// 手机设备的简单适配
	var treeMobile = $(".site-tree-mobile"), shadeMobile = $(".site-mobile-shade");

	treeMobile.on("click", function() {
		$("body").addClass("site-mobile");
	});

	shadeMobile.on("click", function() {
		$("body").removeClass("site-mobile");
	});

	exports("global", {});
});