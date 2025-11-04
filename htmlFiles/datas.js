
document.addEventListener('DOMContentLoaded', function() {
  
  const genderCtx = document.getElementById('genderChart').getContext('2d');
  new Chart(genderCtx, {
    type: 'pie',
    data: {
      labels: ['মেল', 'ফিমেল'],
      datasets: [{
        data: [2850, 2384],
        backgroundColor: ['#00a884', '#6aa6ff'],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { position: 'top' } }
    }
  });

  
  const topicCtx = document.getElementById('topicChart').getContext('2d');
  new Chart(topicCtx, {
    type: 'bar',
    data: {
      labels: ['Mental Health', 'Symptom Guide', 'Event', 'Volunteer'],
      datasets: [{
        label: 'Views',
        data: [1200, 950, 750, 600],
        backgroundColor: '#00a884',
        borderColor: '#008a70',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      scales: { y: { beginAtZero: true } }
    }
  });

  
  const satCtx = document.getElementById('satisfactionChart').getContext('2d');
  new Chart(satCtx, {
    type: 'doughnut',
    data: {
      labels: ['উপকারী', 'সাধারণ', 'উন্নতি প্রয়োজন'],
      datasets: [{
        data: [4200, 800, 234],
        backgroundColor: ['#00a884', '#6aa6ff', '#f59e0b']
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { position: 'bottom' } }
    }
  });

  
  const healthCtx = document.getElementById('healthChart').getContext('2d');
  new Chart(healthCtx, {
    type: 'doughnut',
    data: {
      labels: ['স্বাস্থ্যকর', 'ঝুঁকিপূর্ণ'],
      datasets: [{
        data: [1893, 689],
        backgroundColor: ['#00a884', '#ef4444']
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { position: 'bottom' } }
    }
  });

  
  const growthCtx = document.getElementById('growthChart').getContext('2d');
  new Chart(growthCtx, {
    type: 'line',
    data: {
      labels: ['অক্টোবর ১', 'অক্টোবর ১৫', 'অক্টোবর ৩০', 'নভেম্বর ১৫'],
      datasets: [{
        label: 'ভিজিটস',
        data: [1200, 1800, 2200, 2800],
        borderColor: '#00a884',
        backgroundColor: 'rgba(0,168,132,0.1)',
        tension: 0.4
      }]
    },
    options: {
      responsive: true,
      scales: { y: { beginAtZero: true } }
    }
  });

  
  document.getElementById('year').textContent = new Date().getFullYear();
});