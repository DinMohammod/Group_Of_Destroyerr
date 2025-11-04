
document.addEventListener('DOMContentLoaded', function() {
  const districtSelect = document.getElementById('districtSelect');
  const eventsGrid = document.getElementById('eventsGrid');
  const eventCards = document.querySelectorAll('.event-card');
  const joinButtons = document.querySelectorAll('.join-btn');
  const modal = document.getElementById('joinModal');
  const modalMessage = document.getElementById('modalMessage');

  
  districtSelect.addEventListener('change', function() {
    const selectedDistrict = this.value;

    eventCards.forEach(card => {
      const cardDistrict = card.getAttribute('data-district');
      
      if (selectedDistrict === 'all' || cardDistrict === selectedDistrict) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });

  
  joinButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const eventName = this.getAttribute('data-event');
      modalMessage.textContent = `"${eventName}"-এ যোগ দেওয়ার জন্য ধন্যবাদ! শীঘ্রই আপডেট পাবেন।`;
      
      modal.classList.add('show');

      setTimeout(() => {
        modal.classList.add('fade-out');
        setTimeout(() => {
          modal.classList.remove('show', 'fade-out');
        }, 500);
      }, 1000);
    });
  });
});