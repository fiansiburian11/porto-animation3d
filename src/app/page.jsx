"use client";
import AnimatedContent from "./components/AnimatedContent/AnimatedContent";
import BlurText from "./components/BlurText/BlurText";
import CircularText from "./components/CircularText/CircularText";
import DecryptedText from "./components/DecryptedText/DecryptedText";
import GradientText from "./components/GradientText/GradientText";
import Lanyard from "./components/Lanyard/Lanyard";
import RotatingText from "./components/RotatingText/RotatingText";
import ScrollVelocity from "./components/ScrollVelocity/ScrollVelocity";
import SplashCursor from "./components/SplashCursor/SplashCursor";
import Squares from "./components/Squares/Squares";
import TrueFocus from "./components/TrueFocus/TrueFocus";

export default function Home() {
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#19222D]">
      <SplashCursor />
      <div className="absolute top-0 right-0 left-0 bottom-0 w-full h-full">
        <Squares
          speed={0.5}
          squareSize={35}
          direction="diagonal" // up, down, left, right, diagonal
          borderColor="#F1FFB3"
          hoverFillColor="#C6F10E"
        />
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-12">
          <div className="col-span-6 space-y-4">
            <div className=" flex flex-col justify-center h-screen">
              <AnimatedContent distance={150} direction="horizontal" reverse={false} config={{ tension: 80, friction: 20 }} initialOpacity={0.2} animateOpacity scale={1.1} threshold={0.2}>
                <div className="flex items-center gap-2">
                  <h1 className="text-white font-bold text-2xl">I'm Ready For Job</h1>
                  <RotatingText
                    texts={["Web Design", "Web Development", "Web Programming", "Mobile Development"]}
                    mainClassName="px-2 sm:px-2 md:px-3 bg-[#C6F10E] text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg font-bold text-2xl inline-flex"
                    staggerFrom={"last"}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={2200}
                  />
                </div>
              </AnimatedContent>

              <AnimatedContent distance={150} direction="vertical" reverse={false} config={{ tension: 80, friction: 20 }} initialOpacity={0.2} animateOpacity scale={1.1} threshold={0.2}>
                <div className="mt-3 space-y-2">
                  <TrueFocus sentence="I'm Firman Parulian S" manualMode={false} blurAmount={5} borderColor="#C6F10E" animationDuration={1} pauseBetweenAnimations={1} />

                  <DecryptedText
                    text="Full Stack Developer"
                    speed={100}
                    maxIterations={20}
                    useOriginalCharsOnly={true}
                    parentClassName="all-letters"
                    encryptedClassName="encrypted"
                    animateOn="view"
                    className="text-4xl mb-8 text-[#C6F10E]"
                  />
                </div>

                <div className="mt-8">
                  <BlurText
                    text="I am a fullstack web developer who loves building web products and applications that can impact millions of lives
                I am a 6th semester computer engineering student with experience building scalable, performance-optimized, and engaging web applications."
                    delay={150}
                    animateBy="words"
                    direction="top"
                    onAnimationComplete={handleAnimationComplete}
                    className="text-xl mb-8 text-white"
                  />
                </div>
              </AnimatedContent>
              <div>
                <GradientText colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]} animationSpeed={3} showBorder={false} className="py-3 px-6 rounded-full">
                  Consultasion Now!
                </GradientText>
              </div>
            </div>
          </div>
          <div className="col-span-6 relative">
            <Lanyard position={[0, 0, 16]} gravity={[0, -40, 0]} />
            <CircularText text="FIRMAN*PARULIAN*SIBURIAN*" onHover="speedUp" spinDuration={20} className="absolute top-64 right-36" />
          </div>
        </div>
        <div className="h-0">
          <ScrollVelocity texts={["Konsisten, Fokus, Semangat, Tekun, Disiplin", "Pantang, Berani, Tangguh, Gigih, Yakin"]} className="custom-scroll-text text-lg w-full" />
        </div>
      </div>
    </div>
  );
}
