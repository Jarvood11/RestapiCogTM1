
function connectsource() {
    var textsource = $(".sourcemodel").val();
    $('.sourcemodel').focus();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": textsource + "GitInit",
        "method": "POST",
        "xhrFields": {"withCredentials": "true"},
        "headers": {
            "Content-Type": "application/json",
            //"Authorization":  getlogin(),
            "Accept": "*/*",
            "Cache-Control": "no-cache"
        },
        "processData": false,
        "data": "         {\r\n            \"URL\" : \"file:///c:/GIT\",\r\n            \"Deployment\" : \"test\",\r\n            \"Force\" : false}"
    }

   /* var json_example = {"name" : "asd1", settings : { "quality" : "high", "status" : "OK" } };*/

    $.ajax(settings).done(function (response) {
        console.log(response);

        $(".buttonconnectrepo").attr('disabled', true);

        //document.getElementById("connectsource_output").innerHTML = "Вы подключились к репозиторию <br/>";
        //document.getElementById("connectsource_output").innerText += textsource;

        $("#connectsource_output").html("Вы подключились к репозиторию <br/>");
        $("#connectsource_output").text(
            $("#connectsource_output").text() + textsource);

        $("#connectsource_output").css('opacity', '1');
    });
}

function toggleBtn(elem) {
    var t = elem.innerText;
    if(t==="[-]") {
        elem.innerText="[+]";
        //закрыть
        $(elem).siblings('.prokrutka_container').css('display', 'none');
        //elem.nextSibling.nextSibling.nextSibling.setAttribute("style", "margin: 5px; display: none;");
    }else{
        elem.innerText="[-]";
        //открыть
        $(elem).siblings('.prokrutka_container').css('display', '');
        //elem.nextSibling.nextSibling.nextSibling.setAttribute("style", "margin: 5px; display: block;");
    }
}

function comit(elem) {
    var textsource = $(".sourcemodel").val();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": textsource + "GitPush",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "Authorization": getlogin(),
            "Accept": "*/*",
            "Cache-Control": "no-cache",
        },
        "processData": false,
        "data": "{\r\n  \"Branch\": \"NewChalange1\",\r\n  \"Force\": true,\r\n  \"Message\": \"Added some cubes\",\r\n  \"Author\": \"TM1 designer\",\r\n  \"Email\": \"tm1designer@ibm.com\"\r\n}"
    }

    $.ajax(settings).done(function (response) {
        console.log(response);
        var output = JSON.stringify(response.SourceFiles, null, '\t') + "\n";
        $(elem).siblings(".prokrutka_container").children(".prokrutka").text(output);

        var files_html = "";
        for (var k in response.SourceFiles) {
            var f = response.SourceFiles[k];

            files_html += "<label><input type='checkbox' value='" + f + "'/>" + f + "</label><br/>";
        }
        $("#json_files").append(files_html);

    });

    /*
        $(document).ready(function()
        {
            $('file_').change(function()
            {
                if(this.checked!=true)
                {
                    //alert('you need to be fluent in English to apply for the job');
                }
            });
        });
    */

       return 0;
   }  // доделать автора и ветки




    function func() {


        function showOrHide(cb, cat) {
            cb = document.getElementById(cb);
            cat = document.getElementById(cat);
            if (cb.checked) cat.style.display = "block";
            else cat.style.display = "none";
        }

    }


    function GitInit() {
        var textsource = $(".sourcemodel").val();
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": textsource + "GitInit",
            "method": "POST",
            "Force": true,
            "headers": {
                "Content-Type": "application/json",
                "Authorization": getlogin(),
                "Accept": "*/*",
                "Cache-Control": "no-cache",
            },
            "processData": false,
            "data": "{\r\n  \"Branch\": \"master\",\r\n  \"Deployment\":\"dev\",\r\n  \"Force\": true,\r\n  \"Message\": \"Added some cubes\",\r\n  \"Author\": \"TM1 designer\",\r\n  \"Email\": \"tm1designer@ibm.com\"\r\n}"
        }
        $.ajax(settings).done(function (response) {
            console.log(response);
        });

        return 0;

    }
function upload() {

    var arr = [];
    var i = 0;
    var files = $("#json_files input:checked ").map(function (index) {
        arr[i++] = $(this).val();
        return $(this).val();
    });
    //console.log(JSON.stringify(arr));

    var textsource = $(".sourcemodel").val();
    var settings = {
        "async": true,
        "crossDomain": true,
        //"url": textsource + "!tm1project",
        "url": "http://srv-ibmstudsale.axapta.local:4551/api/v1/!tm1project",
        "method": "PUT",
        "Force": true,
        "headers": {
            "Content-Type": "application/json",
            //"Authorization": getlogin(),
            "Authorization":"CAMNamespace dmlzY2hlbmtvOmx5dHE2NTZwdTpBWEFQVEE=",
            "Accept": "*/*",
            "Cache-Control": "no-cache",
        },
        "processData": false,
        //"data": "{\r\n  \"Branch\": \"NewChalange1\",\r\n  \"Message\": \"Added some cubes\",\r\n  \"Author\": \"TM1 designer\",\r\n  \"Email\": \"tm1designer@ibm.com\",\r\n    \"Version\": \"1.0\"}"
        "data": "{\r\n    \"Version\": \"1.0\", \"Files\":"+JSON.stringify(arr)+"}"
    }


    //return 0;

    $.ajax(settings).done(function (response) {
        console.log(response);
    });


}
    function getCookie(name) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length == 2) return parts.pop().split(";").shift();
    }

    function GitPull(elem) {
        var textsource = $(".sourcemodel").val();
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": textsource + "GitPull",
            "method": "POST",
            "Force": true,
            "xhrFields": {"withCredentials": "true"},
            "headers": {
                "Content-Type": "application/json",
                //"Authorization": getlogin(),
                "Accept": "*/*",
                "Cache-Control": "no-cache",
            },
            "processData": false,


            "data": "{        \"Branch\": \"NewChalange1\",\"ExecutionMode\": \"SingleCommit\",        \"Force\": true  }"
            // "data" : "{        \"Branch\": \"/cubes/plan_BudgetPlan.json\",        \"ExecutionMode\": \"SingleCommit\",        \"Force\": true  }"
            // /cubes/plan_BudgetPlan.json
        }
        // source=/cubes/plan_BudgetPlan.json
        // target=?
        $.ajax(settings).done(function (response) {
            console.log(response);
            var output = JSON.stringify(response, null, '\t') + "\n";
            $(elem).siblings(".prokrutka_container").children(".prokrutka").text(output);
        });

        return 0;

    }


    function clone() {
        return 0;
    }

    function getobject() {
        return 0;
    }

    function getobjecttest(elem) {

        var textsource = $(".sourcemodel").val();
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": textsource + "Cubes('Plan_BudgetPlan')/Dimensions",
            "method": "GET",
            "Force": true,


            "headers": {
                "Content-Type": "application/json",
                "Authorization": getlogin(),
                "Accept": "*/*",
                "Cache-Control": "no-cache",
            }


        }


        $.ajax(settings).done(function (response) {
            console.log(response);

            var output = JSON.stringify(response, null, '\t') + "\n";
            $(elem).siblings(".prokrutka_container").children(".prokrutka").text(output);
        });
    }

    function getobjecttest3(elem) {

        var textsource = $(".sourcemodel").val();
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": textsource + "Cubes('Plan_BudgetPlan')/Views('Budget Input Detailed')/tm1.Execute?$expand=Cells",
            "method": "POST",
            "Force": true,


            "headers": {
                "Content-Type": "application/json",
                "Authorization": getlogin(),
                "Accept": "*/*",
                "Cache-Control": "no-cache",
            }


        }


        $.ajax(settings).done(function (response) {
            console.log(response);

            var output = JSON.stringify(response, null, '\t') + "\n";
            $(elem).siblings(".prokrutka_container").children(".prokrutka").text(output);
        });
    }

    function getobjecttest4(elem) {

        var textsource = $(".sourcemodel").val();
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": textsource + "Cubes('Plan_BudgetPlan')/Views('zero out FY 2004 Budget')?" +
                "$expand=tm1.NativeView/Rows/Subset($expand=Elements($select=Name))",
            "method": "GET",
            "Force": true,


            "headers": {
                "Content-Type": "application/json",
                "Authorization": getlogin(),
                "Accept": "*/*",
                "Cache-Control": "no-cache",
            }


        }


        $.ajax(settings).done(function (response) {
            console.log(response);

            var output = JSON.stringify(response, null, '\t') + "\n";
            $(elem).siblings(".prokrutka_container").children(".prokrutka").text(output);
        });
    }

    function getobjecttest2(elem) {

        var textsource = $(".sourcemodel").val();
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": textsource + "Cubes('Plan_BudgetPlan')?$select=Name&\n" +
                "      $expand=Dimensions($select=Name;$top=2;\n" +
                "      $expand=Hierarchies($select=Name))",
            "method": "GET",
            "Force": true,


            "headers": {
                "Content-Type": "application/json",
                "Authorization": getlogin(),
                "Accept": "*/*",
                "Cache-Control": "no-cache",
            }
        }
        $.ajax(settings).done(function (response) {
            console.log(response);

            var output = JSON.stringify(response, null, '\t') + "\n";
            $(elem).siblings(".prokrutka_container").children(".prokrutka").text(output);
        });

    }

    function getlogin() {
        if ($(".AD").val() != '') {
            var pass = "CAMNamespace " + utf8_to_b64($('.AD').val() + ':' + $('.login').val() + ':' + $('.password').val());
        } else {
            var pass = "Basic " + utf8_to_b64($('.login').val() + ':' + $('.password').val());  //Перекодируем пароль в понятный tmу прим admin:apple
        }
        return pass;
    } // составляем пароль для ТМ
    function utf8_to_b64(str) {
        return window.btoa(unescape(encodeURIComponent(str)));
    }

    function b64_to_utf8(str) {
        return decodeURIComponent(escape(window.atob(str)));
    }

    /*
    13556 - bad request
    4551 - unauthorized <-правильный, потому что используется в postman  там работает
    https не работает на 4551, но postpman использует http
"Authorization":"CAMNamespace dmlzY2hlbmtvOmx5dHE2NTZwdTpBWEFQVEE="
     */

    /*
    https 13556 - отсюда получаем список кубов (логин/пароль admin/apple)
    из имеющегося списка кубов выбираем те, которые хотим сохранить в репозиторий
    http 4551 - это репозиторий, логин/пароль указан в поле Authorization в функции upload(), адрес репозитория другой, и он указан тоже в upload()
    и в репозиторий мы отправляем выбранные кубы


request payload:
{
  "Branch": "NewChalange1",
  "Force": true,
  "Message": "Added some cubes",
  "Author": "TM1 designer",
  "Email": "tm1designer@ibm.com"
}
respone:
{"error":{"code":"290","message":"Version is not specified in tm1project."}}

     */