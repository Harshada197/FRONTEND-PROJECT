  var startTime = new Date().getTime();
        // for  generating random colors
        function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
        // for generating random position and size of the box
        function move(){
            var left ;
            var top;
            var wh ;
            left= Math.random()*300;
            top=  Math.random()*300;
            wh= ((Math.random()*400) + 100); // Width and height between 50 and 150
            document.getElementById("shape").style.left = left+"px";
            document.getElementById("shape").style.top = top+"px";
            document.getElementById("shape").style.width = wh+"px";
            document.getElementById("shape").style.height = wh+"px";
            document.getElementById("shape").style.display = "block";
            document.getElementById("shape").style.backgroundColor = getRandomColor();
            startTime = new Date().getTime();
        }
        move();
            document.getElementById("shape").onclick = function(){
            document.getElementById("shape").style.display="none";
            var endTime = new Date().getTime();
            var reactionTime = (endTime - startTime) / 1000; // Convert to seconds
            alert("Your reaction time is: " + reactionTime + " seconds");
            move();
        }