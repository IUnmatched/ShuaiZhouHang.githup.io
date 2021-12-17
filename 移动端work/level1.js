window.addEventListener('load', () => {
    var a = document.querySelector("a");
    var pic = document.getElementById("pic");
    var sec = document.querySelector(".sec");
    var mask = document.querySelector(".mask");
    a.addEventListener('mouseenter', () => {
        pic.src = "img/fault.png";
        sec.style.display = "block";
        mask.style.display = "block";
        a.addEventListener('mouseleave', () => {
            pic.src = "img/table.png";
            sec.style.display = "none";
            mask.style.display = "none";
        })
    })

    var foot = document.querySelector("footer");
    var table = document.querySelector('table');
    $.ajax({
        url: "https://api.oick.cn/lishi/api.php",
        type: "GET",
        dataType: "json",
        success: (e) => {
            console.log(e.result);
            for (var i = 0; i < e.result.length; i++) {
                var tr = document.createElement('tr');
                var td1 = document.createElement('td');
                var td2 = document.createElement('td');
                td1.innerHTML = e.result[i]['date'].substring(0, 5);
                td2.innerHTML = e.result[i]['title'];
                table.appendChild(tr);
                tr.appendChild(td1);
                tr.appendChild(td2);
                td1.style.borderRight = '1px solid #ccc';
                
            }
        }
    })

})


