document.addEventListener('DOMContentLoaded', () => {
    const headerOffset = 100; 

    function setActiveTab(targetId) {
        const tabBtns = document.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');

        tabBtns.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => {
            content.classList.remove('active');
            content.style.display = 'none';
        });

        const targetContent = document.getElementById(targetId);
        if (targetContent) {
            targetContent.style.display = 'block';
            setTimeout(() => {
                targetContent.classList.add('active');
            }, 10);
        }

        const relatedBtn = document.querySelector(`.tab-btn[data-target="${targetId}"]`);
        if (relatedBtn) {
            relatedBtn.classList.add('active');
        }
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            const targetId = href.substring(1);
            
            let scrollTargetId = targetId;
            if (targetId === 'curriculo' || targetId === 'portfolio') {
                e.preventDefault();
                setActiveTab(targetId);
                scrollTargetId = 'secao-tabs'; 
            }

            const element = document.getElementById(scrollTargetId);

            if (element || targetId === 'hero' || targetId === 'inicio') {
                e.preventDefault();

                let scrollToPosition;
                if (targetId === 'hero' || targetId === 'inicio') {
                    scrollToPosition = 0;
                } else {
                    const elementPosition = element.getBoundingClientRect().top;
                    scrollToPosition = elementPosition + window.pageYOffset - headerOffset;
                }

                window.scrollTo({
                    top: scrollToPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    document.querySelectorAll('.tab-btn').forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            setActiveTab(targetId);
        });
    });

    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});