window.addEventListener('DOMContentLoaded', () => {
fetch('https://cricket-api.vercel.app/live.php')
        .then(response => {
            return response.json()})
        .then(data => {
            // console.log(data.livescore.current)
            if(data.livescore.current==="Data Not Found"){
                const setTitle=document.getElementById('title');
                setTitle.innerHTML= "No Live Matches Found";
                const setScore=document.getElementById('score');
                setScore.innerHTML="<h4>Recent Match Updates:-</h4>" + data.livescore.teamone + "<br>" + data.livescore.teamtwo + "<br>" + data.livescore.update
            }
            else{
                // console.log(data.livescore);
                const setTitle=document.getElementById('title');
                setTitle.innerHTML= data.livescore.title;
                const setScore=document.getElementById('score');
                setScore.innerHTML=data.livescore.teamone + "<br>" + data.livescore.teamtwo + "<br>" + data.livescore.update
                setTimeout(function () {
                    window.location.reload();
                }, 15000);
            }
            
        })
    })