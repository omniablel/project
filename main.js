        //function countdown(){
            //var now = new Date();
            //var eventDate = new Date(2020,7,6 );
            //var currentTime = now.getTime();
            //var eventTime = eventDate.getTime();
            //var remTime = eventTime - currentTime;

            //var s = Math.floor(remTime / 1000);
            //var m = Math.floor(s/ 60);
            //var h = Math.floor(m/ 60);
            //var d = Math.floor(h/ 24);

            //h %= 24 ;
            //m %= 60 ;
            //s %= 60 ;

            //h = (h < 10) ?"0" + h : h;
            //m = (m < 10) ?"0" + m : m;
            //s = (s < 10) ?"0" + s : s;

            //document.getElementById("days").textContent = d;
            //document.getElementById("days").innerText = d;
            //document.getElementById("hours").textContent = h;
            //document.getElementById("minutes").textContent = m;
            //document.getElementById("seconds").textContent = s;
        //}
            //setTimeout(countdown, 1000);
            // Set the date we're counting down to
            var countDownDate = new Date("july 5, 2020 15:37:25").getTime();

            // Update the count down every 1 second
            var x = setInterval(function() {
            
              // Get today's date and time
              var now = new Date().getTime();
            
              // Find the distance between now and the count down date
              var distance = countDownDate - now;
            
              // Time calculations for days, hours, minutes and seconds
              var days = Math.floor(distance / (1000 * 60 * 60 * 24));
              var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
              var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
              var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
              // Display the result in the element with id="demo"
              //document.getElementById("demo").innerHTML = days + "d " + hours + "h "
              //+ minutes + "m " + seconds + "s ";
                        document.getElementById("days").textContent = days;
                        document.getElementById("hours").textContent = hours;
                        document.getElementById("minutes").textContent = minutes;
                        document.getElementById("seconds").textContent = seconds;
            
              // If the count down is finished, write some text
              //if (distance < 0) {
                //clearInterval(x);
                //document.getElementById("demo").innerHTML = "EXPIRED";
              //}
            }, 1000);
                    