const selectEl = document.getElementById("problemSelect");
const infoBox = document.getElementById("infoBox");
const btn = document.getElementById("showInfoBtn");

const healthData = {
  fever: { title:"জ্বর", steps:["বিশ্রাম নিন ও প্রচুর পানি পান করুন।","প্যারাসিটামল (500mg) খেতে পারেন।","৩ দিনের বেশি স্থায়ী হলে চিকিৎসকের পরামর্শ নিন।"], hospital:"Comilla General Hospital", hospitalPhone:"01712-445566", doctor:"Dr. Afsana Rahman", doctorPhone:"01911-332244" },
  cut: { title:"কাটা বা রক্তপাত", steps:["ক্ষত পরিষ্কার পানি দিয়ে ধুয়ে নিন।","রক্তপাত বন্ধ করতে চাপ দিন।","অ্যান্টিসেপটিক ক্রিম লাগিয়ে ব্যান্ডেজ করুন।"], hospital:"City Medical & Trauma Center", hospitalPhone:"01622-556677", doctor:"Dr. Mahmud Hasan", doctorPhone:"01788-998877" },
  anxiety: { title:"মানসিক চাপ / দুশ্চিন্তা", steps:["গভীর শ্বাস নিন ও ধীরে ছাড়ুন।","পছন্দের গান শুনুন বা হাঁটুন।","বিশ্বস্ত কারো সাথে অনুভূতি শেয়ার করুন।"], hospital:"Comilla Mental Health Clinic", hospitalPhone:"01888-112233", doctor:"Dr. Nabila Islam", doctorPhone:"01777-223344" },
  burn: { title:"পোড়া", steps:["ঠান্ডা পানি দিয়ে পোড়া জায়গা ধুয়ে নিন।","বরফ বা টুথপেস্ট ব্যবহার করবেন না।","যদি ফোসকা পড়ে, ফাটাবেন না।"], hospital:"Comilla Burn & Plastic Center", hospitalPhone:"01822-667788", doctor:"Dr. Shahriar Kabir", doctorPhone:"01999-554433" },
  headache: { title:"মাথাব্যথা", steps:["বিশ্রাম নিন।","প্রয়োজনে পেইনকিলার নিন।","পানি বেশি পান করুন।"], hospital:"Comilla General Hospital", hospitalPhone:"01712-445566", doctor:"Dr. Afsana Rahman", doctorPhone:"01911-332244" },
  cold: { title:"ঠান্ডা ও সর্দি", steps:["বেশি পানি পান করুন।","গরম চা বা স্যুপ পান করুন।","বেশি শ্বাস-প্রশ্বাস করার চেষ্টা করুন।"], hospital:"Comilla Health Clinic", hospitalPhone:"01888-112233", doctor:"Dr. Nabila Islam", doctorPhone:"01777-223344" },
  stomachache: { title:"পেট ব্যথা", steps:["হালকা খাবার খান।","প্রয়োজনে অ্যান্টাসিড খেতে পারেন।","৩ দিনের বেশি হলে ডাক্তারের পরামর্শ নিন।"], hospital:"City Medical & Trauma Center", hospitalPhone:"01622-556677", doctor:"Dr. Mahmud Hasan", doctorPhone:"01788-998877" },
  diarrhea: { title:"ডায়রিয়া", steps:["পানি বেশি পান করুন।","ওআরএস খেতে পারেন।","সদ্য রোগীদের দেখুন।"], hospital:"Comilla General Hospital", hospitalPhone:"01712-445566", doctor:"Dr. Afsana Rahman", doctorPhone:"01911-332244" },
  vomiting: { title:"বমি", steps:["বিশ্রাম নিন।","সামান্য পানি খান।","তীব্র হলে ডাক্তারের পরামর্শ নিন।"], hospital:"City Medical & Trauma Center", hospitalPhone:"01622-556677", doctor:"Dr. Mahmud Hasan", doctorPhone:"01788-998877" },
  chestPain: { title:"বুকে ব্যথা", steps:["বসা বা শুয়ে বিশ্রাম নিন।","প্রয়োজনে জরুরি হাসপাতালে যান।"], hospital:"Comilla Heart Clinic", hospitalPhone:"01999-667788", doctor:"Dr. Kazi Alam", doctorPhone:"01755-223344" },
  allergy: { title:"অ্যালার্জি", steps:["অ্যালার্জি থেকে দূরে থাকুন।","প্রয়োজনে এন্টিহিস্টামিন খেতে পারেন।"], hospital:"Comilla Allergy Clinic", hospitalPhone:"01888-334455", doctor:"Dr. Sultana Yasmin", doctorPhone:"01766-112233" },
  coldFever: { title:"সর্দি ও জ্বর", steps:["বিশ্রাম নিন।","গরম পানীয় খান।","প্রয়োজনে চিকিৎসকের পরামর্শ নিন।"], hospital:"Comilla General Hospital", hospitalPhone:"01712-445566", doctor:"Dr. Afsana Rahman", doctorPhone:"01911-332244" },
  toothache: { title:"দাঁতের ব্যথা", steps:["গরম পানি দিয়ে গার্গল করুন।","ডেন্টাল ক্লিনিকে দেখান।"], hospital:"Comilla Dental Care", hospitalPhone:"01822-556677", doctor:"Dr. Farhana Kabir", doctorPhone:"01788-112244" },
  sprain: { title:"মোচড়/চোট", steps:["প্রয়োজনে আইস প্যাক ব্যবহার করুন।","শারীরিক চাপ কমান।"], hospital:"City Medical & Trauma Center", hospitalPhone:"01622-556677", doctor:"Dr. Mahmud Hasan", doctorPhone:"01788-998877" },
  fracture: { title:"হাড় ভাঙা", steps:["জরুরি চিকিৎসা নিন।","হাসপাতাল বা ক্লিনিকে দেখান।"], hospital:"Comilla General Hospital", hospitalPhone:"01712-445566", doctor:"Dr. Afsana Rahman", doctorPhone:"01911-332244" },
  skinRash: { title:"ত্বকের দাগ/চুলকানি", steps:["এন্টিসেপটিক ব্যবহার করুন।","ডার্মাটোলজিস্ট দেখান।"], hospital:"Comilla Skin Care", hospitalPhone:"01888-667788", doctor:"Dr. Rubina Akter", doctorPhone:"01777-445566" },
  eyePain: { title:"চোখ ব্যথা", steps:["গরম পানি দিয়ে চোখ ধুয়ে নিন।","চোখ বিশেষজ্ঞ দেখান।"], hospital:"Comilla Eye Hospital", hospitalPhone:"01999-223344", doctor:"Dr. Imran Hossain", doctorPhone:"01766-334455" },
  earPain: { title:"কানের ব্যথা", steps:["সফলভাবে কান পরিষ্কার করুন।","অথবা ENT ডাক্তার দেখান।"], hospital:"Comilla ENT Clinic", hospitalPhone:"01822-112233", doctor:"Dr. Tanvir Rahman", doctorPhone:"01755-667788" },
  fatigue: { title:"অতিরিক্ত ক্লান্তি", steps:["পর্যাপ্ত বিশ্রাম নিন।","সঠিক খাবার খান।"], hospital:"Comilla General Hospital", hospitalPhone:"01712-445566", doctor:"Dr. Afsana Rahman", doctorPhone:"01911-332244" },
  coldSore: { title:"ঠোঁটের ফোসকা", steps:["হালকা অ্যান্টিসেপটিক ক্রিম ব্যবহার করুন।" ,"মুখ পরিষ্কার রাখুন।"], hospital:"Comilla Dental Care", hospitalPhone:"01822-556677", doctor:"Dr. Farhana Kabir", doctorPhone:"01788-112244" }
};

btn.addEventListener("click", function(){
  const val = selectEl.value;
  if(val && healthData[val]){
    const data = healthData[val];
    infoBox.style.display = "block";
    infoBox.innerHTML = `
      <h3>${data.title}</h3>
      <strong>প্রাথমিক পদক্ষেপ:</strong>
      <ul>${data.steps.map(step => `<li>${step}</li>`).join('')}</ul>
      <div class="contact"><strong>নিকটস্থ হাসপাতাল:</strong> ${data.hospital} (${data.hospitalPhone})</div>
      <div class="contact"><strong>ডাক্তার:</strong> ${data.doctor} (${data.doctorPhone})</div>
    `;
  } else {
    infoBox.style.display = "none";
  }
});





