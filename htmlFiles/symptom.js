
document.addEventListener('DOMContentLoaded', function() {
  const symptomSelect = document.getElementById('symptomSelect');
  const checkBtn = document.getElementById('checkBtn');
  const resultSection = document.getElementById('resultSection');
  const symptomsList = document.getElementById('symptomsList');
  const notification = document.getElementById('notification');

  
  const symptomData = {
    fever: {
      symptoms: ['শরীর গরম', 'কাঁপুনি', 'ঘাম', 'মাথাব্যথা'],
      advice: ['বিশ্রাম নিন', 'পানি/ওআরএস খান', 'প্যারাসিটামল (ডোজ অনুসারে)', '৩ দিন না কমলে ডাক্তার']
    },
    cough: {
      symptoms: ['শুকনো কাশি', 'কফ উঠা', 'বুকে ব্যথা', 'জ্বর'],
      advice: ['গরম পানি + মধু', 'ধূমপান এড়ান', 'হিউমিডিফায়ার', 'কোভিড টেস্ট যদি সন্দেহ হয়']
    },
    stomach: {
      symptoms: ['পেট ফাঁপা', 'গ্যাস', 'বমি ভাব', 'অম্বল'],
      advice: ['হালকা খাবার', 'আদা চা', 'খাবার ছোট ছোট অংশে', 'অতিরিক্ত তেল এড়ান']
    },
    headache: {
      symptoms: ['চোখে চাপ', 'ঘুরঘুর', 'আলোতে অস্বস্তি', 'উল্টি'],
      advice: ['ডার্ক রুমে বিশ্রাম', 'পানি খান', 'স্ট্রেস কমান', 'মাইগ্রেন হলে ডাক্তার']
    },
    sore_throat: {
      symptoms: ['গিলতে ব্যথা', 'কণ্ঠস্বর ভারী', 'জ্বর', 'টনসিল ফোলা'],
      advice: ['গরম পানি + লবণ দিয়ে কুলকুচি', 'লজেন্স', 'ঠান্ডা এড়ান', '৩ দিন না কমলে ডাক্তার']
    },
    breathing: {
      symptoms: ['শ্বাস নিতে কষ্ট', 'হাঁপানি', 'বুকে চাপ', 'নীল ঠোঁট'],
      advice: ['শান্ত থাকুন', 'ইনহেলার ব্যবহার', 'তাৎক্ষণিক হাসপাতাল', '১০৮ কল করুন']
    },
    vomit: {
      symptoms: ['বারবার উল্টি', 'পেটে ব্যথা', 'জ্বর', 'ডিহাইড্রেশন'],
      advice: ['ওআরএস ধীরে ধীরে', 'খাবার এড়ান', '৬ ঘণ্টা না থামলে ডাক্তার']
    },
    diarrhea: {
      symptoms: ['পাতলা পায়খানা', 'পেটে মোচড়', 'জ্বর', 'ডিহাইড্রেশন'],
      advice: ['ওআরএস প্রচুর', 'চালের মাড়', 'বাইরের খাবার এড়ান', '৪৮ ঘণ্টা না কমলে হাসপাতাল']
    },
    eye: {
      symptoms: ['চোখ লাল', 'জল পড়া', 'ঝাপসা দৃষ্টি', 'আলোতে ব্যথা'],
      advice: ['ঠান্ডা পানিতে ধোয়া', 'চোখ ডলবেন না', 'সানগ্লাস', '২ দিন না কমলে চক্ষু বিশেষজ্ঞ']
    },
    rash: {
      symptoms: ['ত্বকে লাল দাগ', 'খুজলি', 'ফোলা', 'জ্বর'],
      advice: ['ঠান্ডা সেঁক', 'ক্যালামাইন লোশন', 'নতুন সাবান/ক্রিম এড়ান', 'এলার্জি হলে ডাক্তার']
    },
    fatigue: {
      symptoms: ['অতিরিক্ত ক্লান্তি', 'ঘুম হলেও ক্লান্ত', 'মনোযোগ কম', 'পেশিতে ব্যথা'],
      advice: ['নিয়মিত ঘুম', 'পুষ্টিকর খাবার', 'হালকা ব্যায়াম', 'অ্যানিমিয়া টেস্ট করান']
    },
    joint_pain: {
      symptoms: ['হাঁটু/কোমর ব্যথা', 'ফোলা', 'শক্ত হয়ে যাওয়া', 'জ্বর'],
      advice: ['গরম সেঁক', 'বিশ্রাম', 'আইস প্যাক', 'রিউমাটয়েড/আর্থ্রাইটিস হলে ডাক্তার']
    }
  };

  checkBtn.addEventListener('click', function() {
    const selected = symptomSelect.value;
    if (!selected) {
      showNotification('দয়া করে একটি সমস্যা সিলেক্ট করুন!');
      resultSection.style.display = 'none';
      return;
    }

    const data = symptomData[selected];
    let html = `
      <h4>সম্ভাব্য লক্ষণ:</h4>
      <ul>${data.symptoms.map(s => `<li>${s}</li>`).join('')}</ul>
      <h4>প্রাথমিক পরামর্শ:</h4>
      <ul>${data.advice.map(a => `<li>${a}</li>`).join('')}</ul>
    `;

    symptomsList.innerHTML = html;
    resultSection.style.display = 'block';
    showNotification('তথ্য লোড হয়েছে!');
  });

  function showNotification(msg) {
    notification.textContent = msg;
    notification.classList.add('show');
    setTimeout(() => notification.classList.remove('show'), 3000);
  }
});