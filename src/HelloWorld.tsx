import { AbsoluteFill, staticFile, Video, Img } from "remotion";
import { z } from "zod";
import { zColor } from "@remotion/zod-types";
import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { slide } from "@remotion/transitions/slide";
import { fade } from "@remotion/transitions/fade";
import { none } from "@remotion/transitions/none";
import { loadFont } from "@remotion/fonts";

export const myCompSchema = z.object({
  titleText: z.string(),
  titleColor: zColor(),
  logoColor1: zColor(),
  logoColor2: zColor(),
});

const fontFamily = "upheavett";
loadFont({
  family: fontFamily,
  url: staticFile("upheavtt.ttf"),
});

export const HelloWorld: React.FC<z.infer<typeof myCompSchema>> = ({
  titleText: propOne,
  titleColor: propTwo,
  logoColor1,
  logoColor2,
}) => {
  return (
    <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={530}>
        <Video src={staticFile("start.mp4")} />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({ durationInFrames: 15 })}
      />
      <TransitionSeries.Sequence durationInFrames={300}>
        <Video src={staticFile("intern.mp4")} />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={slide()}
        timing={linearTiming({ durationInFrames: 15 })}
      />
      <TransitionSeries.Sequence durationInFrames={270}>
        <Video src={staticFile("junior.mp4")} />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={slide()}
        timing={linearTiming({ durationInFrames: 15 })}
      />
      <TransitionSeries.Sequence durationInFrames={380}>
        <Video src={staticFile("senior.mp4")} />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={fade()}
        timing={linearTiming({ durationInFrames: 15 })}
      />
      <TransitionSeries.Sequence durationInFrames={150}>
        <Video src={staticFile("end.mp4")} />
      </TransitionSeries.Sequence>
      <TransitionSeries.Transition
        presentation={none()}
        timing={linearTiming({ durationInFrames: 30 })}
      />
      <TransitionSeries.Sequence durationInFrames={60}>
        <AbsoluteFill
          style={{
            justifyContent: "center",
            fontFamily,
            alignItems: "center",
            fontSize: 100,
            color: "white",
            backgroundColor: "black",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Wishlist now on{" "}
            <Img
              style={{ width: "128px", height: "128px" }}
              src={staticFile("steam_logo.svg")}
            />
          </div>
        </AbsoluteFill>
      </TransitionSeries.Sequence>
    </TransitionSeries>
  );
};
