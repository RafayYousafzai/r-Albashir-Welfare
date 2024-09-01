"use client";
import { Image, Show } from "@chakra-ui/react";
import "react-awesome-slider/dist/styles.css";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";

const imageUrls = [
  "https://raw.githubusercontent.com/RafayKhan177/Raw-Images/main/desk%20c/1.png",
  "https://github.com/RafayKhan177/Raw-Images/blob/main/3.png?raw=true",
  "https://raw.githubusercontent.com/RafayKhan177/Raw-Images/main/DDAl-Bashir%20Welfare%20excels%20in%20disaster%20management%2C%20swiftly%20responding%20to%20crises%20with%20effective%20relief%20e.png",
  "https://raw.githubusercontent.com/RafayKhan177/Raw-Images/main/5.png",
  "https://raw.githubusercontent.com/RafayKhan177/Raw-Images/main/homie/Untitled%20design%20..png",
  "https://raw.githubusercontent.com/RafayKhan177/Raw-Images/main/homie/Untitled%20design.png",
  "https://raw.githubusercontent.com/RafayKhan177/Raw-Images/main/aaa.png",
];

const mobileImageUrls = [
  "https://raw.githubusercontent.com/RafayKhan177/Raw-Images/main/mobo%20c/1.png",
  "https://raw.githubusercontent.com/RafayKhan177/Raw-Images/main/homie/AL-BASHIR%20DISASTER%20RELIEF.png",
  "https://raw.githubusercontent.com/RafayKhan177/Raw-Images/main/6.png",
  "https://raw.githubusercontent.com/RafayKhan177/Raw-Images/main/homie/AL-BASHIR%20WEL%20ARE.png",
  "https://raw.githubusercontent.com/RafayKhan177/Raw-Images/main/homie/AL-BASHIR%20SOLAR%20PLANT%20..png",
  "https://raw.githubusercontent.com/RafayKhan177/Raw-Images/main/homie/AL-BASHIR%20SOLAR%20PLANT.png",
  "https://raw.githubusercontent.com/RafayKhan177/Raw-Images/main/aaas.png",
];

const Hero = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  const renderSliderItem = (url, h, w) => (
    <Image
      key={url}
      data-src={url}
      src={url}
      alt="hero-image"
      // style={{
      //   width: w || "100%",
      //   height: h,
      // }}
    />
  );

  return (
    <section style={{ marginBottom: "3rem" }}>
      <Show breakpoint="(min-width: 700px)">
        <AutoplaySlider bullets={false} style={{ height: "86vh" }}>
          {imageUrls.map((url) => renderSliderItem(url, "90vh"))}
        </AutoplaySlider>
      </Show>
      <Show breakpoint="(max-width: 700px)">
        <AwesomeSlider bullets={false} style={{ height: "49vh", width: "100%" }}>
          {mobileImageUrls.map((url) => renderSliderItem(url, "300px", "100%"))}
        </AwesomeSlider>
      </Show>
    </section>
  );
};

export default Hero;
