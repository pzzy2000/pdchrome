$(function () {

    $.ajax({
        url: "http://www.jisuxiadan.com/content/popup/config.html?_=" + Math.random(),
        complete: function (xhr) {
            if (xhr.status != 200) return;
            $(".content").html(xhr.responseText);
            loadConfig();
        }
    });

    $("body").on("click", "a", function () {
        var action = $(this).attr("data-action");
        var url = $(this).attr("data-url");
        if (url == "") {
            return;
        }
        if (action == "createTab") {
            var req = { type: "createTab", Url: url, select: "true" };
            chrome.extension.sendRequest(req, function () { });
            window.close();
        }
        else if (action == "updateTab") {
            var req = { type: "updateTab", Url: url, select: "true" };
            chrome.extension.sendRequest(req, function () { });
            window.close();
        }
        else if (action == "pop") {
            chrome.windows.create({ url: URL + "sendWindow.html", left: 800, top: 300, width: 350, height: 250, type: "popup" }, function () {
            });
            window.close();
        }
    });

    $("body").on("click", "input[type=checkbox]", function () {
        save();
        showTip("设置修改成功！");
        $("#IsFixedComment").prop("disabled", !$("#AutoComment").prop("checked"));
        $("#FixedComment").prop("disabled", !$("#AutoComment").prop("checked") || !$("#IsFixedComment").prop("checked"));
    });

    $("body").on("change", "input[type=text],textarea", function () {
        save();
        showTip("设置修改成功！");
    });

    loadConfig();
});

function loadConfig() {
    var manifest = chrome.runtime.getManifest();
    $(".title:first").text(manifest.name + " v" + manifest.version);
    $("#trStaff").hide();
    if (manifest.name == "易下单") {
        $("#trStaff").show();
    }

    var options = JSON.parse(localStorage.options || "{}");

    if (typeof options.AutoSyncAddr == "undefined") options.AutoSyncAddr = true;
    if (typeof options.AutoComment == "undefined") options.AutoComment = true;
    $("input[type=checkbox]").each(function () {
        $(this).prop("checked", options[this.id] == true);
    });

    $("input[type=text],textarea").each(function () {
        $(this).val(options[this.id] || "");
    });

    $("#IsFixedComment").prop("disabled", !$("#AutoComment").prop("checked"));
    $("#FixedComment").prop("disabled", !$("#AutoComment").prop("checked") || !$("#IsFixedComment").prop("checked"));
}

function save() {
    var options = {};
    $("input[type=checkbox]").each(function () {
        options[this.id] = $(this).prop("checked");
    });
    $("input[type=text],textarea").each(function () {
        options[this.id] = $(this).val();
    });
    localStorage.options = JSON.stringify(options);
}

function showTip(text, showTime) {
    clearTimeout(window.tmr);
    var tipBox = $(".fo-tipbox");
    if (tipBox.length == 0) {
        tipBox = $("<div class='fo-tipbox' style='width:180px; color:white;background:green;padding:3px;z-index: 99999999;'></div>");
        $("td:last").append(tipBox);
    }
    tipBox.text(text);
    tipBox.fadeIn(200);
    showTime = showTime || 1000;

    window.tmr = setTimeout(function () {
        tipBox.fadeOut(200);
    }, showTime);
}