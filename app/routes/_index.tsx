import type { V2_MetaFunction } from "@remix-run/node";
import { random } from "~/utils/random";
import { shuffle } from "~/utils/shuffle";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Portfolio" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const TAGS = [
  "Keldan Rafuse",
  "Guitar",
  "Computers",
  "Java",
  "HTML",
  "CSS",
  "UI",
  "Hockey",
  "Soccer",
  "Dirtbiking",
];
const DURATION = 30_000;
const ROWS = 5;
const TAGS_PER_ROW = 8;

type InfiniteLoopSliderProps = {
  children: React.ReactNode;
  duration: number;
  reverse: boolean;
};

const InfiniteLoopSlider = ({
  children,
  duration,
  reverse = false,
}: InfiniteLoopSliderProps) => {
  const style = {
    "--duration": `${duration}ms`,
    "--direction": reverse ? "reverse" : "normal",
  } as any;

  return (
    <div className="loop-slider" style={style}>
      <div className="inner">{children}</div>
    </div>
  );
};

type TagProps = {
  text: string;
};

const Tag = ({ text }: TagProps) => {
  return (
    <div className="tag">
      <span>#</span> {text}
    </div>
  );
};

export default function Index() {
  return (
    <>
      <div className="header-tsx">
        <h1>Keldan Rafuse</h1>
        <p>Learning UI Design</p>
      </div>

      <div className="tag-list">
        {[...new Array(ROWS)].map((_, i) => {
          const tagsOnRow = shuffle(TAGS)
            .slice(0, TAGS_PER_ROW)
            .map((tag) => <Tag text={tag} key={tag} />);

          const tagsOnRowTwice = [...tagsOnRow, ...tagsOnRow];

          return (
            <InfiniteLoopSlider
              key={i}
              duration={random(DURATION - 5000, DURATION + 5000)} // any number not 0 truthy, else falsy
              reverse={!!(i % 2)}
            >
              {tagsOnRowTwice}
            </InfiniteLoopSlider>
          );
        })}
        <div className="fade" />
      </div>
    </>
  );
}
