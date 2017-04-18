// 绑定链接弹出信息的点击弹出事件(中部弹出)
function bindClickLkPop(elId, html, width, height) {
	var $ = layui.jquery;
	var layer = layui.layer;

	var elDom = $("#" + elId);

	var startOpen = function() {
		var content = "<div id=\"" + elId + "PopCon\" class=\"lkPopCon\">" + html + "</div>";
		layer.open({
			anim : -1,
			type : 1,
			area : [ width, height ],
			title : $("#" + elId).text(),
			shade : false,// 该值为false可以重复打开很多个弹出框,也没有遮罩
			content : content,
			success : function(layero, index) {

				// 高亮代码片段的层
				$("pre code").each(function(i, block) {
					hljs.highlightBlock(block);
				});

				// 绑定点击Doc关闭弹出框
				bindClickDocClosePop(elId);
			},
			end : function() {
			}
		});
	};

	elDom.on("click", startOpen);
}

// 绑定链接弹出信息的点击弹出事件(Tip型)
function bindClickLkTip(elId, html, width, height) {
	var $ = layui.jquery;
	var layer = layui.layer;
	
	var elDom = $("#" + elId);

	var startOpen = function() {
		var content = "<div id=\"" + elId + "TipCon\" class=\"lkTipCon\">" + html + "</div>";

		// tips层-下
		layer.tips(content, "#" + elId, {
			tips : 3,
			area : [ width, height ],
			time : 5000
		});

		// 绑定点击Doc关闭弹出框
		bindClickDocClosePop(elId);
	};

	elDom.on("click", startOpen);
}

// 绑定点击Doc关闭弹出框
function bindClickDocClosePop(elId) {
	var $ = layui.jquery;

	$(document).unbind("keydown");
	$(document).bind("keydown", "esc", function(event) {
		// 按Esc可以关闭所有对话框
		if (event.keyCode == "27") {
			layer.closeAll();
		}
	});

	$(document).unbind("click");
	$(document).bind("click", function(event) {
		var tar = $(event.target);
		var isCfEl = (tar.hasClass("lkPop") || tar.hasClass("lkTip"));
		var parents = tar.parents(".layui-layer");
		if (!isCfEl && !parents.length) {
			layer.closeAll();
		}
	});
}

// 参加面试去
function goToInterview() {
	layui.use("layer", function() {
		var $ = layui.jquery;
		var elId = $(this).attr("id");
		var html = "耶！参加面试了哦~~~";
		var content = "<div id=\"" + elId + "PopCon\" class=\"lkPopCon goToInterview\">" + html + "</div>";

		layer.open({
			type : 1,
			title : "参加面试去",
			shade : false,// 该值为false可以重复打很多个弹出框,也没有遮罩
			content : content,
			success : function(layero, index) {

				// 绑定点击Doc关闭弹出框
				bindClickDocClosePop(elId);
			},
			end : function() {
			}
		});
	});
}