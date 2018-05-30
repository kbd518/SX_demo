window.onload = function () {
    var nameText = $("#input_name");
    var submit = $("#btn_submit");
    var inputText = $("input");
    var labelText = $("label");

    //生日日历表
    layui.use('laydate', function Calendar(){
        var layDate = layui.laydate;

        layDate.render({
            elem: "#input_birthday"
        })
    });

    //判断input内容是否正确
    submit.click(function Submit() {
        layui.use('layer', function Layer() {
            var layer = layui.layer;

            for (var i = 0; i < inputText.length; i++) {
                if (inputText[i].value == "" | null) {
                    console.log("fail to submit " + inputText[i].name);
                    layer.open({
                        type: 4, //样式，4为tip
                        content: [inputText[i].parentNode.innerText+"不能为空", inputText[i]], //内容和对象
                        tips: [2, "#F7D358"], //出现位置及背景颜色
                        time: 2000, //时间
                        anim: 6, //动画效果
                        tipsMore: false, //是否允许多弹窗
                        //area: ["150px"], //宽,高
                        shade: 0, //关闭提示外背景暗化
                        closeBtn: 0, //关闭按钮
                    });
                    break;
                }
            }
        });
    });
}
