import {
  AbsoluteFill,
  staticFile,
  Video,
  Img,
  interpolate,
  useCurrentFrame,
} from "remotion";
import { z } from "zod";
import { zColor } from "@remotion/zod-types";
import { linearTiming, TransitionSeries } from "@remotion/transitions";
import { slide } from "@remotion/transitions/slide";
import { none } from "@remotion/transitions/none";
import { fade } from "@remotion/transitions/fade";
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
  const TRANSITION_DURATION = 15;
  const INTERN_VIDEO_DURATION = 300;
  const JUNIOR_VIDEO_DURATION = 270;
  const START_VIDEO_DURATION = 320;
  const SENIOR_VIDEO_DURATION = 300;
  const END_VIDEO_DURATION = 150;
  const STEAM_LOGO_DURATION = 90;

  const fadeDuration = 60;

  return (
    <>
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={INTERN_VIDEO_DURATION}>
          <Video src={staticFile("intern.mp4")} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={slide()}
          timing={linearTiming({ durationInFrames: TRANSITION_DURATION })}
        />
        <TransitionSeries.Sequence durationInFrames={JUNIOR_VIDEO_DURATION}>
          <Video src={staticFile("junior.mp4")} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={slide()}
          timing={linearTiming({ durationInFrames: TRANSITION_DURATION })}
        />
        <TransitionSeries.Sequence durationInFrames={START_VIDEO_DURATION}>
          <Video src={staticFile("start.mp4")} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={slide()}
          timing={linearTiming({ durationInFrames: TRANSITION_DURATION })}
        />
        <TransitionSeries.Sequence durationInFrames={SENIOR_VIDEO_DURATION}>
          <Video src={staticFile("senior.mp4")} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: TRANSITION_DURATION })}
        />
        <TransitionSeries.Sequence durationInFrames={fadeDuration}>
          <AbsoluteFill
            style={{
              justifyContent: "center",
              fontFamily,
              alignItems: "center",
              fontSize: 100,
              color: "white",
              backgroundColor: "black",
            }}
          ></AbsoluteFill>
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: TRANSITION_DURATION })}
        />
        <TransitionSeries.Sequence durationInFrames={END_VIDEO_DURATION}>
          <Video src={staticFile("end.mp4")} />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={none()}
          timing={linearTiming({ durationInFrames: TRANSITION_DURATION * 2 })}
        />
        <TransitionSeries.Sequence durationInFrames={STEAM_LOGO_DURATION}>
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

      {/* <AbsoluteFill
        style={{
          backgroundColor: "black",
          opacity: interpolate(
            frame,
            [
              fadeStart - TRANSITION_DURATION,
              fadeStart + fadeDuration,
              fadeStart + fadeDuration + TRANSITION_DURATION,
            ],
            [0, 1, 0]
          ),
        }}
      ></AbsoluteFill> */}
    </>
  );
};
