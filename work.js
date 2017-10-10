$(document).ready(function(){

    var $list = $(".table1");
    var SEGMENT = $(".line_of_table1").html();
    var $not_bought = $(".line_of_table2");
    var $bought = $(".last_line_of_table2");
    var label = $(".label").html();
    var $new_input = $("#area_to_write");


    function addItem(title){
        if(document.getElementById("area_to_write").value != "") {

            var $node = $(SEGMENT);
            var $lab_node = $(label);
            var count = 1;

            $node.find(".simple_textarea").text(title);
            $lab_node.find(".title").text(title);

            $seg_count = $node.find(".button_result");
            $lab_count = $lab_node.find(".number");


            $seg_count.text(count);
            $lab_count.text(count);

            $not_bought.append($lab_node);
            $list.append($node);

            $node.find(".button_plus").click(function(){
                count += 1;
                $seg_count.text(count);
                $lab_count.text(count);
            });

            $node.find(".button_minus").click(function(){
                if(count>1){ count -= 1;
                    $seg_count.text(count);
                    $lab_count.text(count);
                }
            });

            $node.find(".button_cross").click(function(){
                $node.hide();
                $lab_node.hide();
            });

            $node.find(".button_buy").click(function(){
                $bought.append($lab_node);

            });

            document.getElementById("area_to_write").value = null;
        }}

    $(".button_add").click(function(){
        var new_name = $new_input.val();
        addItem(new_name);
    });


});