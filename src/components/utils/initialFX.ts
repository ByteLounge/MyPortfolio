import SplitType from "split-type";
import gsap from "gsap";

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

  const safetyTimeout = setTimeout(forceShow, 3000);

  document.body.style.overflowY = "auto";

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
    const landingText = new SplitType(landingTargets as any, {
      types: "chars,lines",
      lineClass: "split-line",
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

  if (document.querySelector(".landing-h2-info")) {
    const landingText2 = new SplitType(".landing-h2-info", {
        types: "chars,lines",
        lineClass: "split-h2"
    });
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

    const t3 = document.querySelector(".landing-h2-info-1");
    if (t3) {
      const landingText3 = new SplitType(".landing-h2-info-1", {
          types: "chars,lines",
          lineClass: "split-h2"
      });
      if (landingText3.chars) LoopText(landingText2, landingText3);
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

  const t4 = document.querySelector(".landing-h2-1");
  const t5 = document.querySelector(".landing-h2-2");

  if (t4 && t5) {
    const landingText4 = new SplitType(".landing-h2-1", {
        types: "chars,lines",
        lineClass: "split-h2"
    });
    const landingText5 = new SplitType(".landing-h2-2", {
        types: "chars,lines",
        lineClass: "split-h2"
    });
    if (landingText4.chars && landingText5.chars) LoopText(landingText4, landingText5);
  }
}

function LoopText(Text1: SplitType, Text2: SplitType) {
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
