
document.addEventListener('DOMContentLoaded', function() {
  const districtSelect = document.getElementById('districtSelect');
  const volCards = document.querySelectorAll('.vol-card');
  const contactBtns = document.querySelectorAll('.contact-btn');
  const notification = document.getElementById('notification');

  
  volCards.forEach(card => {
    const isOnline = card.getAttribute('data-online') === 'true';
    const contactInfo = card.querySelector('.contact-info');
    const name = card.querySelector('h3').textContent.trim();

    
    const phone = `01${String(Math.floor(700000000 + Math.random() * 199999999))}`;

    if (isOnline) {
      contactInfo.innerHTML = `
        <button class="imu-btn" data-phone="${phone}">
          ইমুতে কল করুন
        </button>
      `;
      contactInfo.querySelector('.imu-btn').addEventListener('click', function() {
        const imuLink = `imapp://call?number=${this.getAttribute('data-phone')}`;
        window.location.href = imuLink;
        showNotification(`"${name}"-এর সাথে ইমুতে কল করা হচ্ছে...`);
      });
    } else {
      contactInfo.innerHTML = `
        <a href="tel:${phone}" class="phone-link">${formatPhone(phone)}</a>
      `;
    }
  });

  
  districtSelect.addEventListener('change', function() {
    const selected = this.value;
    volCards.forEach(card => {
      const district = card.getAttribute('data-district');
      if (selected === 'all' || district === selected) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });

  
  contactBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const name = this.parentElement.querySelector('h3').textContent;
      showNotification(`"${name}"-এর সাথে যোগাযোগের জন্য ধন্যবাদ!`);
    });
  });

  function showNotification(msg) {
    notification.textContent = msg;
    notification.classList.add('show');
    setTimeout(() => notification.classList.remove('show'), 3000);
  }

  function formatPhone(num) {
    return num.replace(/(\d{5})(\d{6})/, '$1-$2');
  }
});