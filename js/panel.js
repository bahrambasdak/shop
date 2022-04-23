const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


function toggleMenuDisplay(){
    let menuItemNames = document.querySelectorAll(".menu .menu-items .item .name");
    let userName = document.querySelector(".menu .user .userName");
    let menu = document.querySelector(".menu");
    let adminPanel = document.querySelector('.admin-panel');
    menuItemNames.forEach(element => {
        if (element.style.display != 'none') {
            element.style.display = 'none';
        }
        else element.style.display = 'inline'
    });

    if (userName.style.display != 'none') {
        userName.style.display = 'none';
        //menu.style.display = 'none';
        adminPanel.style.gridTemplateColumns = "1fr 13fr";
    } else {
        userName.style.display = 'inline';
        adminPanel.style.gridTemplateColumns = "2fr 11fr";
    }
        
    
}
