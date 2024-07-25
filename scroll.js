// Function to debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function (...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            timeout = null;
            func.apply(context, args);
        }, wait);
    };
}

// Function to handle scroll events for custom full-page scrolling
function handleScroll(event) {
    const sections = document.querySelectorAll('.container');
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY;

    let maxVisibleHeight = 0;
    let targetContainerIndex = 0;

    sections.forEach((container, index) => {
        const containerTop = container.offsetTop;
        const containerHeight = container.offsetHeight;
        const visibleHeight = Math.min(windowHeight, containerTop + containerHeight) - Math.max(0, containerTop);

        if (visibleHeight > maxVisibleHeight) {
            maxVisibleHeight = visibleHeight;
            targetContainerIndex = index;
        }
    });

    const targetContainer = sections[targetContainerIndex];
    const targetContainerTop = targetContainer.offsetTop;
    window.scrollTo({
        top: targetContainerTop,
        behavior: 'smooth'
    });
}

// Add scroll event listener with debounce to trigger custom full-page scrolling
window.addEventListener('scroll', debounce(handleScroll, 250)); // Adjust the debounce delay as needed
