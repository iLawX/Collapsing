let faqs = document.querySelectorAll(".faq-title");

faqs.forEach((faq) => {
  faq.onclick = () => {
    let faqAnswer = faq.nextElementSibling;
    if (faq.classList.contains("active")) {
      faq.classList.remove("active");
      faqAnswer.style.maxHeight = 0;
    } else {
      faqs.forEach((faq) => {
        let faqAnswer = faq.nextElementSibling;
        faq.classList.remove("active");
        faqAnswer.style.maxHeight = 0;
      });
      faq.classList.add("active");
      faqAnswer.style.maxHeight = faqAnswer.scrollHeight + "px";
    }
  };
});
