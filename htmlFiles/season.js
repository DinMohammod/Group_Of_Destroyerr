document.addEventListener("DOMContentLoaded", function(){
    const seasonalProblems = [
        {title:"জ্বর", why:"ভাইরাস সংক্রমণ, হঠাৎ তাপমাত্রা পরিবর্তন", when:"বর্ষা ও শীতের সময়", prevent:"হাত ধোয়া, গরম কাপড় পরা", cure:"ডাক্তারের পরামর্শ অনুযায়ী ওষুধ"},
        {title:"ঠান্ডাজনিত কাশি", why:"ভাইরাস সংক্রমণ, ঠান্ডা পরিবেশ", when:"শীতকাল", prevent:"হালকা কাপড়, গরম পানীয়", cure:"প্রয়োজনমতো কাশি ওষুধ"},
        {title:"ডায়রিয়া", why:"অশুদ্ধ খাবার ও পানি", when:"গরম ও বর্ষা", prevent:"পরিষ্কার খাবার ও পানি, হাইজিন বজায় রাখা", cure:"ওষুধ ও হাইড্রেশন"},
        {title:"হাইপোথের্মিয়া", why:"শরীরের তাপ কমে যাওয়া", when:"শীতকাল", prevent:"গরম কাপড়, পর্যাপ্ত খাদ্য", cure:"গরম পরিবেশে রাখা, হাইড্রেশন ও চিকিৎসা"},
        {title:"সানবার্ন", why:"সূর্যের অতিরিক্ত UV", when:"গরমকাল", prevent:"সানস্ক্রিন, হালকা কাপড়", cure:"চর্মরোগের ক্রীম"},
        {title:"হিটস্ট্রোক", why:"উচ্চ তাপ, দেহের অতিরিক্ত গরম", when:"গরমকাল", prevent:"জল পান, হালকা পোশাক", cure:"শীতল পরিবেশে রাখা, ডাক্তার পরামর্শ"},
        {title:"অ্যালার্জি", why:"পরাগকণা বা ধুলো", when:"বসন্ত", prevent:"পরিবেশ পরিষ্কার রাখা, মাস্ক ব্যবহার", cure:"অ্যান্টি-অ্যালার্জি ওষুধ"},
        {title:"গ্যাস্ট্রিক সমস্যা", why:"অস্বাস্থ্যকর খাবার, মানসিক চাপ", when:"যেকোনো মৌসুম", prevent:"পর্যাপ্ত খাবার, হাইজিন", cure:"ওষুধ ও ডায়েট রেগুলার"},
        {title:"ডিহাইড্রেশন", why:"জল কম খাওয়া, অতিরিক্ত ঘাম", when:"গরমকাল", prevent:"পর্যাপ্ত জল পান", cure:"হাইড্রেশন, ডাক্তার পরামর্শ"},
        {title:"সিনুস ইনফেকশন", why:"ঠান্ডা/ধুলো", when:"শীতকাল", prevent:"মুখ ঢাকা, হাইজিন বজায় রাখা", cure:"ডাক্তারের পরামর্শ, ওষুধ"},
        {title:"মাইগ্রেন", why:"মানসিক চাপ, আলো বা গন্ধ", when:"যেকোনো মৌসুম", prevent:"চোখের বিশ্রাম, চাপ কমানো", cure:"ডাক্তারের পরামর্শ, ওষুধ"},
        {title:"ফুড পয়জনিং", why:"অশুদ্ধ খাবার", when:"গরমকাল", prevent:"পরিষ্কার খাবার", cure:"ডিহাইড্রেশন কেয়ার, ডাক্তার পরামর্শ"}
    ];

    const cardsContainer = document.getElementById("cardsContainer");
    const modal = document.getElementById("modal");
    const closeModal = document.getElementById("closeModal");

    const modalTitle = document.getElementById("modalTitle");
    const modalWhy = document.getElementById("modalWhy");
    const modalWhen = document.getElementById("modalWhen");
    const modalPrevent = document.getElementById("modalPrevent");
    const modalCure = document.getElementById("modalCure");

    // generate cards
    seasonalProblems.forEach((problem, index) => {
        const card = document.createElement("div");
        card.className = "card";
        card.textContent = problem.title;
        card.addEventListener("click", function(){
            modalTitle.textContent = problem.title;
            modalWhy.textContent = problem.why;
            modalWhen.textContent = problem.when;
            modalPrevent.textContent = problem.prevent;
            modalCure.textContent = problem.cure;
            modal.style.display = "block";
        });
        cardsContainer.appendChild(card);
    });

    closeModal.addEventListener("click", function(){
        modal.style.display = "none";
    });

    window.addEventListener("click", function(e){
        if(e.target == modal){
            modal.style.display = "none";
        }
    });
});
