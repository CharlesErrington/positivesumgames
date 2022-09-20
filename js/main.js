const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hiddenLeft');
hiddenElements.forEach((el) => observer.observe(el));

const hiddenElementsRight = document.querySelectorAll('.hiddenRight');
hiddenElementsRight.forEach((el) => observer.observe(el));