window.onload = function () {
    var nameText = $("#input_name");
    var submit = $("#btn_submit");
    var inputText = $("input");
    var labelText = $("label");
    var requireFiled = $(".require");

    layui.use('laydate', function Calendar(){
        var layDate = layui.laydate;
    
        //生日日历表
        layDate.render({
            elem: "#input_birthday"
        });
        
        //事件时间表
        layDate.render({
            elem: "#start_date",
            type: "datetime",
            range: true,
            btns: ["clear", "now", "confirm"]
        });
        layDate.render({
            elem: "#end_date",
            type: "datetime",
            range: true,
            btns: ["clear", "now", "confirm"]
        })
    });

    //判断input内容是否正确
    submit.click(function Submit() {
        layui.use('layer', function Layer() {
            var layer = layui.layer;

            for (var i = 0; i < requireFiled.length; i++) {
                if (requireFiled[i].value == "" | null) {
                    console.log("fail to submit " + requireFiled[i].name);
                    layer.open({
                        type: 4, //样式，4为tip
                        content: [requireFiled[i].parentNode.innerText+"不能为空", requireFiled[i]], //内容和对象
                        tips: [2, "#F7D358"], //出现位置及背景颜色
                        time: 2000, //时间
                        anim: 6, //动画效果
                        tipsMore: false, //是否允许多弹窗
                        //area: ["150px"], //宽,高
                        shade: 0, //关闭提示外背景暗化
                        closeBtn: 0, //关闭按钮
                    });
                    return false;
                    break;
                }
            }
        });
    });
}
