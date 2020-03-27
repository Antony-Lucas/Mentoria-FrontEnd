var html = document.getElementById("html"),
    css = document.getElementById("css"),
    js = document.getElementById("js"),
    csharp = document.getElementById("csharp"),
    python = document.getElementById("python"),
    sql = document.getElementById("sql");

var write = ["html", "css", "javaScript",
 "C#", "Python", "Sql"];

function languageWrite(strng, del) {
    var char = strng.split('').reverse();
    var type = setInterval(function(){
        if(!char.length) return clearInterval(type);
            var forward =  char.pop();
            del.innerHTML += forward;
    }, 150);
}

languageWrite(write[0], html);

languageWrite(write[1], css);

languageWrite(write[2], js);

languageWrite(write[3], csharp);

languageWrite(write[4], python);

languageWrite(write[5], sql);