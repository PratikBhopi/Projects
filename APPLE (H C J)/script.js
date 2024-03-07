const accordion =document.querySelectorAll(".accordion_dropbox");

accordion.forEach(dropbox => {
    const answerAccordion = dropbox.querySelector(".accordion_answer");
    const dropboxIcon = dropbox.querySelector(".icons");

    dropbox.addEventListener("click",()=>{
        answerAccordion.classList.toggle("active");
        dropboxIcon.classList.toggle("active");
    })

})

// image slider    =================================== animation
const container = document.querySelector('.slider');
const slider = document.querySelector(".slide")
    let scrollInterval;

    function autoPlay() {
      const scrollWidth = container.scrollWidth;
    //   const scrollWidth = slider.scrollWidth;
      const containerWidth = container.offsetWidth;
      const slidewidth = slider.offsetWidth
      let scrollLeft = container.scrollLeft;

      if (scrollLeft >= scrollWidth - slidewidth) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: slidewidth , behavior: 'smooth' });
      }
    }

    function startAutoPlay() {
      scrollInterval = setInterval(autoPlay, 2000); // Adjust timing as needed
    }

    function stopAutoPlay() {
      clearInterval(scrollInterval);
    }

    // play pause btns================================================
    const  PauseBtn=document.getElementById("pause-play-btn");
    let curranimation="play"
    PauseBtn.addEventListener("click",()=>{
        if(curranimation==="play"){
        PauseBtn.innerText="||";
        curranimation="pause";
        startAutoPlay();

        }else{
            PauseBtn.innerText="▶";
            curranimation="play";
            stopAutoPlay();

        }
    });

    // moving buttons ====================left right===============================

const image=document.querySelectorAll(".slide");
        let scrollcontainer=document.querySelector(".slider")
        let backBtn = document.querySelector("#prev-btn")
        let nextBtn =document.querySelector("#next-btn")

        nextBtn.addEventListener("click",()=>{
            scrollcontainer.scrollLeft += 600;
            scrollcontainer.scrollBehavior = "smooth";
        })
        backBtn.addEventListener("click",()=>{
            scrollcontainer.scrollLeft -= 600;
            scrollcontainer.scrollBehavior = "smooth";
        });
        // ================================================================================




        let nav =document.querySelectorAll(".navbar-main")

        nav.forEach(navbtn=>{
          const aaa = navbtn.querySelector(".a");

          navbtn.addEventListener("mouseenter",()=>{
            aaa.classList.toggle("active12")
          });
          navbtn.addEventListener("mouseleave",()=>{
            aaa.classList.toggle("active12")
          })
        })




