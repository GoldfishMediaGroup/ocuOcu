function hoverLinks () {
    const links = document.querySelectorAll('a, button');

    links.forEach((link) => {
      link.addEventListener('mouseenter', () => {
        document.querySelector('.cursor__eye-wrapper').style.transform = 'scale(1.2)';
      });
      link.addEventListener('mouseleave', () => {
        document.querySelector('.cursor__eye-wrapper').style.transform = 'scale(1)';
      });
    });
}

export default hoverLinks