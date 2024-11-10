const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

const navToggle = document.querySelector(".btn-toggle");

navToggle.addEventListener("click", function () {
  //linksContainer.classList.toggle("show-links-container");
  //backGround.classList.toggle("new-body");

  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;
  console.log(containerHeight);
  console.log(linksHeight);
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }

  navToggle.classList.toggle("zoom-btn-toggle");
});

//console.log(containerHeight);
const navBar = document.getElementById("nav");
const navHeight = navBar.getBoundingClientRect().height;
console.log(navHeight);
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const scrollHeight = window.scrollY;
  console.log(scrollHeight);

  if (scrollHeight > navHeight) {
    navBar.classList.add("fixed-nav");
  } else {
    navBar.classList.remove("fixed-nav");
  }
  if (scrollHeight > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const navHeight = navBar.getBoundingClientRect().height;
    console.log(navHeight);
    const fixedNav = navBar.classList.contains("fixed-nav");
    let position = element.offsetTop;
    if (!fixedNav) {
      position = position - navHeight;
      console.log(position);
    }
    if (navHeight > 292) {
      position = position + containerHeight;
      console.log(position);
    }
    window.scrollTo({
      left: 0,
      top: position,
    });

    linksContainer.style.height = 0;
    backGround.classList.remove("new-body");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  /*const textDisplay = document.getElementById("text-display");*/
  const textItems = document.querySelectorAll(".text-item");
  const leftButton = document.querySelector(".left-button");
  const rightButton = document.querySelector(".right-button");

  let currentIndex = 0;
  const itemWidth = textItems[0].offsetWidth;

  function updateSlide() {
    const offset = -currentIndex * itemWidth;
    textItems.forEach((item) => {
      item.style.transform = `translateX(${offset}px)`;
    });
  }
  rightButton.addEventListener("click", function () {
    rightButton.classList.add("new-right-button");
    leftButton.classList.remove("new-left-button");
    currentIndex = (currentIndex + 1) % textItems.length;
    updateSlide();
  });
  leftButton.addEventListener("click", function () {
    leftButton.classList.add("new-left-button");
    rightButton.classList.remove("new-right-button");
    currentIndex = (currentIndex - 1 + textItems.length) % textItems.length;
    updateSlide();
  });
  updateSlide();
});

const bmiButton = document.querySelector(".bmi-button");
bmiButton.addEventListener("click", (e) => {
  const result = document.querySelector(".result");
  result.classList.add("show-result");
  const heightData = document.getElementById("height-data").value;
  const AgeData = document.getElementById("age-data").value;
  const weightData = document.getElementById("weight-data").value;
  const genderData = document.querySelector(".gender").value;
  const spanHeight = document.querySelector(".value-H");
  const spanAge = document.querySelector(".value-A");
  const spanWeight = document.querySelector(".value-W");
  const spanGender = document.querySelector(".value-G");
  const spanBmi = document.querySelector(".bmi-num");
  const maleImage = document.querySelector(".male-image");
  const femaleImage = document.querySelector(".female-image");
  const profile = document.querySelector(".profile");
  profile.classList.add("hide-profile");

  spanWeight.innerHTML = weightData;
  spanHeight.innerHTML = heightData;
  spanGender.innerHTML = genderData;
  spanAge.innerHTML = AgeData;
  const bmiValue = weightData / (heightData * heightData);
  spanBmi.innerHTML = bmiValue.toFixed(1);
  if (
    weightData === "" ||
    heightData === "" ||
    AgeData === "" ||
    genderData === ""
  ) {
    e.preventDefault();
    alert("Please fill in all fields");
    result.classList.remove("show-result");
    profile.classList.remove("hide-profile");
  }

  if (genderData === "Male") {
    maleImage.classList.add("show-male-image");
  }
  if (genderData === "Female") {
    femaleImage.classList.add("show-female-image");
  }
  if (bmiValue <= 18.5) {
    spanBmi.style.color = "orange";
  }
  if ((bmiValue > 18.5) & (bmiValue < 25)) {
    spanBmi.style.color = "green";
  }
  if (bmiValue >= 25) {
    spanBmi.style.color = "red";
  }
});

const buttonVid = document.querySelector(".button-vid");
/*buttonVid.addEventListener("click", function () {
  const genderVid = document.querySelector(".gender-vid").value;
  const ageVid = document.querySelector(".age-vid").value;
  const bmiVid = document.querySelector(".bmi-vid").value;
  const diet1 = document.querySelector(".diet-link1");
  const work1 = document.querySelector(".work-link1");
  const diet2 = document.querySelector(".diet-link2");
  const work2 = document.querySelector(".work-link2");
  const diet3 = document.querySelector(".diet-link3");
  const work3 = document.querySelector(".work-link3");
  const diet4 = document.querySelector(".diet-link4");
  const work4 = document.querySelector(".work-link4");
  const diet5 = document.querySelector(".diet-link5");
  const work5 = document.querySelector(".work-link5");
  const diet6 = document.querySelector(".diet-link6");
  const work6 = document.querySelector(".work-link6");
  const diet7 = document.querySelector(".diet-link7");
  const work7 = document.querySelector(".work-link7");
  const diet8 = document.querySelector(".diet-link8");
  const work8 = document.querySelector(".work-link8");

  if ((genderVid === "Male") & (ageVid <= 40) & (bmiVid <= 18.5)) {
    diet1.classList.add("show-diet-link1");
    work1.classList.add("show-work-link1");
    diet2.classList.remove("show-diet-link2");
    work2.classList.remove("show-work-link2");
    diet3.classList.remove("show-diet-link3");
    work3.classList.remove("show-work-link3");
    diet4.classList.remove("show-diet-link4");
    work4.classList.remove("show-work-link4");
    diet5.classList.remove("show-diet-link5");
    work5.classList.remove("show-work-link5");
    diet6.classList.remove("show-diet-link6");
    work6.classList.remove("show-work-link6");
    diet7.classList.remove("show-diet-link7");
    work7.classList.remove("show-work-link7");
    diet8.classList.remove("show-diet-link8");
    work8.classList.remove("show-work-link8");
  }
  if ((genderVid === "Male") & (ageVid > 40) & (bmiVid <= 18.5)) {
    diet2.classList.add("show-diet-link2");
    work2.classList.add("show-work-link2");
    diet1.classList.remove("show-diet-link1");
    work1.classList.remove("show-work-link1");
    diet3.classList.remove("show-diet-link3");
    work3.classList.remove("show-work-link3");
    diet4.classList.remove("show-diet-link4");
    work4.classList.remove("show-work-link4");
    diet5.classList.remove("show-diet-link5");
    work5.classList.remove("show-work-link5");
    diet6.classList.remove("show-diet-link6");
    work6.classList.remove("show-work-link6");
    diet7.classList.remove("show-diet-link7");
    work7.classList.remove("show-work-link7");
    diet8.classList.remove("show-diet-link8");
    work8.classList.remove("show-work-link8");
  }
  if ((genderVid === "Female") & (ageVid <= 40) & (bmiVid <= 18.5)) {
    diet3.classList.add("show-diet-link3");
    work3.classList.add("show-work-link3");
    diet1.classList.remove("show-diet-link1");
    work1.classList.remove("show-work-link1");
    diet2.classList.remove("show-diet-link2");
    work2.classList.remove("show-work-link2");
    diet4.classList.remove("show-diet-link4");
    work4.classList.remove("show-work-link4");
    diet5.classList.remove("show-diet-link5");
    work5.classList.remove("show-work-link5");
    diet6.classList.remove("show-diet-link6");
    work6.classList.remove("show-work-link6");
    diet7.classList.remove("show-diet-link7");
    work7.classList.remove("show-work-link7");
    diet8.classList.remove("show-diet-link8");
    work8.classList.remove("show-work-link8");
  }
  if ((genderVid === "Female") & (ageVid > 40) & (bmiVid <= 18.5)) {
    diet4.classList.add("show-diet-link4");
    work4.classList.add("show-work-link4");
    diet1.classList.remove("show-diet-link1");
    work1.classList.remove("show-work-link1");
    diet2.classList.remove("show-diet-link2");
    work2.classList.remove("show-work-link2");
    diet3.classList.remove("show-diet-link3");
    work3.classList.remove("show-work-link3");
    diet5.classList.remove("show-diet-link5");
    work5.classList.remove("show-work-link5");
    diet6.classList.remove("show-diet-link6");
    work6.classList.remove("show-work-link6");
    diet7.classList.remove("show-diet-link7");
    work7.classList.remove("show-work-link7");
    diet8.classList.remove("show-diet-link8");
    work8.classList.remove("show-work-link8");
  }
  if ((genderVid === "Male") & (ageVid <= 40) & (bmiVid >= 25)) {
    diet5.classList.add("show-diet-link5");
    work5.classList.add("show-work-link5");
    diet1.classList.remove("show-diet-link1");
    work1.classList.remove("show-work-link1");
    diet2.classList.remove("show-diet-link2");
    work2.classList.remove("show-work-link2");
    diet3.classList.remove("show-diet-link3");
    work3.classList.remove("show-work-link3");
    diet4.classList.remove("show-diet-link4");
    work4.classList.remove("show-work-link4");
    diet6.classList.remove("show-diet-link6");
    work6.classList.remove("show-work-link6");
    diet7.classList.remove("show-diet-link7");
    work7.classList.remove("show-work-link7");
    diet8.classList.remove("show-diet-link8");
    work8.classList.remove("show-work-link8");
  }
  if ((genderVid === "Male") & (ageVid > 40) & (bmiVid >= 25)) {
    diet6.classList.add("show-diet-link6");
    work6.classList.add("show-work-link6");
    diet1.classList.remove("show-diet-link1");
    work1.classList.remove("show-work-link1");
    diet2.classList.remove("show-diet-link2");
    work2.classList.remove("show-work-link2");
    diet3.classList.remove("show-diet-link3");
    work3.classList.remove("show-work-link3");
    diet4.classList.remove("show-diet-link4");
    work4.classList.remove("show-work-link4");
    diet5.classList.remove("show-diet-link5");
    work5.classList.remove("show-work-link5");
    diet7.classList.remove("show-diet-link7");
    work7.classList.remove("show-work-link7");
    diet8.classList.remove("show-diet-link8");
    work8.classList.remove("show-work-link8");
  }
  if ((genderVid === "Female") & (ageVid <= 40) & (bmiVid >= 25)) {
    diet7.classList.add("show-diet-link7");
    work7.classList.add("show-work-link7");
    diet1.classList.remove("show-diet-link1");
    work1.classList.remove("show-work-link1");
    diet2.classList.remove("show-diet-link2");
    work2.classList.remove("show-work-link2");
    diet3.classList.remove("show-diet-link3");
    work3.classList.remove("show-work-link3");
    diet4.classList.remove("show-diet-link4");
    work4.classList.remove("show-work-link4");
    diet5.classList.remove("show-diet-link5");
    work5.classList.remove("show-work-link5");
    diet6.classList.remove("show-diet-link6");
    work6.classList.remove("show-work-link6");
    diet8.classList.remove("show-diet-link8");
    work8.classList.remove("show-work-link8");
  }
  if ((genderVid === "Female") & (ageVid > 40) & (bmiVid >= 25)) {
    diet8.classList.add("show-diet-link8");
    work8.classList.add("show-work-link8");
    diet1.classList.remove("show-diet-link1");
    work1.classList.remove("show-work-link1");
    diet2.classList.remove("show-diet-link2");
    work2.classList.remove("show-work-link2");
    diet3.classList.remove("show-diet-link3");
    work3.classList.remove("show-work-link3");
    diet4.classList.remove("show-diet-link4");
    work4.classList.remove("show-work-link4");
    diet5.classList.remove("show-diet-link5");
    work5.classList.remove("show-work-link5");
    diet6.classList.remove("show-diet-link6");
    work6.classList.remove("show-work-link6");
    diet7.classList.remove("show-diet-link7");
    work7.classList.remove("show-work-link7");
  }
  if ((bmiVid > 18.5) & (bmiVid < 25)) {
    alert("BMI is within healthy range");
  }
});*/
buttonVid.addEventListener("click", (e) => {
  const genderVid = document.querySelector(".gender-vid").value;
  const ageVid = document.querySelector(".age-vid").value;
  const bmiVid = document.querySelector(".bmi-vid").value;
  const diet1 = document.querySelector(".diet-link1");
  const work1 = document.querySelector(".work-link1");
  const diet2 = document.querySelector(".diet-link2");
  const work2 = document.querySelector(".work-link2");
  const diet3 = document.querySelector(".diet-link3");
  const work3 = document.querySelector(".work-link3");
  const diet4 = document.querySelector(".diet-link4");
  const work4 = document.querySelector(".work-link4");
  const diet5 = document.querySelector(".diet-link5");
  const work5 = document.querySelector(".work-link5");
  const diet6 = document.querySelector(".diet-link6");
  const work6 = document.querySelector(".work-link6");
  const diet7 = document.querySelector(".diet-link7");
  const work7 = document.querySelector(".work-link7");
  const diet8 = document.querySelector(".diet-link8");
  const work8 = document.querySelector(".work-link8");

  if ((genderVid === "Male") & (ageVid <= 40) & (bmiVid <= 18.5)) {
    diet1.classList.add("show-diet-link1");
    work1.classList.add("show-work-link1");
    diet2.classList.remove("show-diet-link2");
    work2.classList.remove("show-work-link2");
    diet3.classList.remove("show-diet-link3");
    work3.classList.remove("show-work-link3");
    diet4.classList.remove("show-diet-link4");
    work4.classList.remove("show-work-link4");
    diet5.classList.remove("show-diet-link5");
    work5.classList.remove("show-work-link5");
    diet6.classList.remove("show-diet-link6");
    work6.classList.remove("show-work-link6");
    diet7.classList.remove("show-diet-link7");
    work7.classList.remove("show-work-link7");
    diet8.classList.remove("show-diet-link8");
    work8.classList.remove("show-work-link8");
  }
  if ((genderVid === "Male") & (ageVid > 40) & (bmiVid <= 18.5)) {
    diet2.classList.add("show-diet-link2");
    work2.classList.add("show-work-link2");
    diet1.classList.remove("show-diet-link1");
    work1.classList.remove("show-work-link1");
    diet3.classList.remove("show-diet-link3");
    work3.classList.remove("show-work-link3");
    diet4.classList.remove("show-diet-link4");
    work4.classList.remove("show-work-link4");
    diet5.classList.remove("show-diet-link5");
    work5.classList.remove("show-work-link5");
    diet6.classList.remove("show-diet-link6");
    work6.classList.remove("show-work-link6");
    diet7.classList.remove("show-diet-link7");
    work7.classList.remove("show-work-link7");
    diet8.classList.remove("show-diet-link8");
    work8.classList.remove("show-work-link8");
  }
  if ((genderVid === "Female") & (ageVid <= 40) & (bmiVid <= 18.5)) {
    diet3.classList.add("show-diet-link3");
    work3.classList.add("show-work-link3");
    diet1.classList.remove("show-diet-link1");
    work1.classList.remove("show-work-link1");
    diet2.classList.remove("show-diet-link2");
    work2.classList.remove("show-work-link2");
    diet4.classList.remove("show-diet-link4");
    work4.classList.remove("show-work-link4");
    diet5.classList.remove("show-diet-link5");
    work5.classList.remove("show-work-link5");
    diet6.classList.remove("show-diet-link6");
    work6.classList.remove("show-work-link6");
    diet7.classList.remove("show-diet-link7");
    work7.classList.remove("show-work-link7");
    diet8.classList.remove("show-diet-link8");
    work8.classList.remove("show-work-link8");
  }
  if ((genderVid === "Female") & (ageVid > 40) & (bmiVid <= 18.5)) {
    diet4.classList.add("show-diet-link4");
    work4.classList.add("show-work-link4");
    diet1.classList.remove("show-diet-link1");
    work1.classList.remove("show-work-link1");
    diet2.classList.remove("show-diet-link2");
    work2.classList.remove("show-work-link2");
    diet3.classList.remove("show-diet-link3");
    work3.classList.remove("show-work-link3");
    diet5.classList.remove("show-diet-link5");
    work5.classList.remove("show-work-link5");
    diet6.classList.remove("show-diet-link6");
    work6.classList.remove("show-work-link6");
    diet7.classList.remove("show-diet-link7");
    work7.classList.remove("show-work-link7");
    diet8.classList.remove("show-diet-link8");
    work8.classList.remove("show-work-link8");
  }
  if ((genderVid === "Male") & (ageVid <= 40) & (bmiVid >= 25)) {
    diet5.classList.add("show-diet-link5");
    work5.classList.add("show-work-link5");
    diet1.classList.remove("show-diet-link1");
    work1.classList.remove("show-work-link1");
    diet2.classList.remove("show-diet-link2");
    work2.classList.remove("show-work-link2");
    diet3.classList.remove("show-diet-link3");
    work3.classList.remove("show-work-link3");
    diet4.classList.remove("show-diet-link4");
    work4.classList.remove("show-work-link4");
    diet6.classList.remove("show-diet-link6");
    work6.classList.remove("show-work-link6");
    diet7.classList.remove("show-diet-link7");
    work7.classList.remove("show-work-link7");
    diet8.classList.remove("show-diet-link8");
    work8.classList.remove("show-work-link8");
  }
  if ((genderVid === "Male") & (ageVid > 40) & (bmiVid >= 25)) {
    diet6.classList.add("show-diet-link6");
    work6.classList.add("show-work-link6");
    diet1.classList.remove("show-diet-link1");
    work1.classList.remove("show-work-link1");
    diet2.classList.remove("show-diet-link2");
    work2.classList.remove("show-work-link2");
    diet3.classList.remove("show-diet-link3");
    work3.classList.remove("show-work-link3");
    diet4.classList.remove("show-diet-link4");
    work4.classList.remove("show-work-link4");
    diet5.classList.remove("show-diet-link5");
    work5.classList.remove("show-work-link5");
    diet7.classList.remove("show-diet-link7");
    work7.classList.remove("show-work-link7");
    diet8.classList.remove("show-diet-link8");
    work8.classList.remove("show-work-link8");
  }
  if ((genderVid === "Female") & (ageVid <= 40) & (bmiVid >= 25)) {
    diet7.classList.add("show-diet-link7");
    work7.classList.add("show-work-link7");
    diet1.classList.remove("show-diet-link1");
    work1.classList.remove("show-work-link1");
    diet2.classList.remove("show-diet-link2");
    work2.classList.remove("show-work-link2");
    diet3.classList.remove("show-diet-link3");
    work3.classList.remove("show-work-link3");
    diet4.classList.remove("show-diet-link4");
    work4.classList.remove("show-work-link4");
    diet5.classList.remove("show-diet-link5");
    work5.classList.remove("show-work-link5");
    diet6.classList.remove("show-diet-link6");
    work6.classList.remove("show-work-link6");
    diet8.classList.remove("show-diet-link8");
    work8.classList.remove("show-work-link8");
  }
  if ((genderVid === "Female") & (ageVid > 40) & (bmiVid >= 25)) {
    diet8.classList.add("show-diet-link8");
    work8.classList.add("show-work-link8");
    diet1.classList.remove("show-diet-link1");
    work1.classList.remove("show-work-link1");
    diet2.classList.remove("show-diet-link2");
    work2.classList.remove("show-work-link2");
    diet3.classList.remove("show-diet-link3");
    work3.classList.remove("show-work-link3");
    diet4.classList.remove("show-diet-link4");
    work4.classList.remove("show-work-link4");
    diet5.classList.remove("show-diet-link5");
    work5.classList.remove("show-work-link5");
    diet6.classList.remove("show-diet-link6");
    work6.classList.remove("show-work-link6");
    diet7.classList.remove("show-diet-link7");
    work7.classList.remove("show-work-link7");
  }
  if ((bmiVid > 18.5) & (bmiVid < 25)) {
    alert("BMI is within healthy range");
  }
});
