export default {
    name: "HomePage",
    props: {
      msg: String
    }
  };
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });
  
  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach(el => observer.observe(el)); 






  let sections = document.querySelectorAll("section");
window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let heith = sec.offsetHeight;

    if (top >= offset && top < offset + heith) {
      sec.classList.add("show-animate");
    } else {
      sec.classList.remove("show-animate");
    }
  });
};