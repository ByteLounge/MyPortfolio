import { SplitText } from "gsap-trial/SplitText";
import gsap from "gsap";
import { smoother } from "../Navbar";

export function initialFX() {
  const forceShow = () => {
    document.body.style.overflowY = "auto";
    const mainElements = document.getElementsByTagName("main");
    if (mainElements.length > 0) {
      mainElements[0].classList.add("main-active");
    }
    gsap.to("body", { backgroundColor: "#050505", duration: 0 });
    gsap.to([".header", ".icons-section", ".nav-fade", ".landing-info-h2"], { opacity: 1, duration: 0 });
  };

  // Safety fallback after 3 seconds
  const safetyTimeout = setTimeout(forceShow, 3000);

  document.body.style.overflowY = "auto";
  if (smoother) {
    smoother.paused(false);
  }
  const mainElements = document.getElementsByTagName("main");
  if (mainElements.length > 0) {
    mainElements[0].classList.add("main-active");
  }
  gsap.to("body", {
    backgroundColor: "#050505",
    duration: 0.5,
    delay: 1,
    onComplete: () => clearTimeout(safetyTimeout)
  });

  const landingTargets = [".landing-info h3", ".landing-intro h2", ".landing-intro h1"].filter(s => document.querySelector(s));
  if (landingTargets.length > 0) {
    var landingText = new SplitText(landingTargets, {
      type: "chars,lines",
      linesClass: "split-line",
    });
    if (landingText.chars) {
      gsap.fromTo(
        landingText.chars,
        { opacity: 0, y: 40, filter: "blur(10px)" },
        {
          opacity: 1,
          duration: 1.5,
          filter: "blur(0px)",
          ease: "expo.out",
          y: 0,
          stagger: 0.015,
          delay: 0.5,
        }
      );
    }
  }

  let TextProps = { type: "chars,lines", linesClass: "split-h2" };

  if (document.querySelector(".landing-h2-info")) {
    var landingText2 = new SplitText(".landing-h2-info", TextProps);
    if (landingText2.chars) {
      gsap.fromTo(
        landingText2.chars,
        { opacity: 0, y: 80, filter: "blur(5px)" },
        {
          opacity: 1,
          duration: 1.2,
          filter: "blur(0px)",
          ease: "power3.inOut",
          y: 0,
          stagger: 0.025,
          delay: 0.3,
        }
      );
    }
  }

  gsap.fromTo(
    ".landing-info-h2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      y: 0,
      delay: 0.8,
    }
  );
  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );

  const t3 = document.querySelector(".landing-h2-info-1");
  const t4 = document.querySelector(".landing-h2-1");
  const t5 = document.querySelector(".landing-h2-2");

  if (t3 && typeof landingText2 !== 'undefined' && landingText2.chars) {
    var landingText3 = new SplitText(".landing-h2-info-1", TextProps);
    if (landingText3.chars) LoopText(landingText2, landingText3);
  }
  if (t4 && t5) {
    var landingText4 = new SplitText(".landing-h2-1", TextProps);
    var landingText5 = new SplitText(".landing-h2-2", TextProps);
    if (landingText4.chars && landingText5.chars) LoopText(landingText4, landingText5);
  }
}

function LoopText(Text1: SplitText, Text2: SplitText) {
  var tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
  const delay = 4;
  const delay2 = delay * 2 + 1;

  if (Text1.chars && Text2.chars) {
    tl.fromTo(
      Text2.chars,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        duration: 1.2,
        ease: "power3.inOut",
        y: 0,
        stagger: 0.1,
        delay: delay,
      },
      0
    )
      .fromTo(
        Text1.chars,
        { y: 80 },
        {
          duration: 1.2,
          ease: "power3.inOut",
          y: 0,
          stagger: 0.1,
          delay: delay2,
        },
        1
      )
      .fromTo(
        Text1.chars,
        { y: 0 },
        {
          y: -80,
          duration: 1.2,
          ease: "power3.inOut",
          stagger: 0.1,
          delay: delay,
        },
        0
      )
      .to(
        Text2.chars,
        {
          y: -80,
          duration: 1.2,
          ease: "power3.inOut",
          stagger: 0.1,
          delay: delay2,
        },
        1
      );
  }
}
