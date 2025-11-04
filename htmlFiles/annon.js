document.addEventListener("DOMContentLoaded", function(){
    const form = document.getElementById("anonForm");
    const notification = document.getElementById("notification");

    form.addEventListener("submit", function(e){
        e.preventDefault();
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;

        if(subject && message){
            
            notification.textContent = "আপনার মেসেজ সফলভাবে সেন্ড হয়েছে!";
            notification.classList.add("show");

            
            setTimeout(function(){
                notification.classList.remove("show");
            }, 1000);

            
            this.reset();
        }
    });
});
