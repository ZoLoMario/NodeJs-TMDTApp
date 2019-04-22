$(document).ready(function(){
        $("#avande").click(function(){
            $("#showhiden").toggle();
        });
    $("#sendPOST").click(
        function(){    
            $.post(  
                "provider",
                {text:$("#showhiden").text(),
                 html:$("#showhiden").html(),
                 val:$("#form-user input:nth-child(2)").val(),
                 val:$("#form-user input:nth-child(3)").attr("name")
                },
                function(ketqua){
                    alert("thanh cong gui");
                    console.log(ketqua);
                },"JSON"
                    )});
});