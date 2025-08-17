import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";

const reviews = [
  {
    name: "Aarav",
    body: "Turning my textbooks into CBTs made studying so much easier. I practiced like it was the real exam.",
    img: "https://avatar.vercel.sh/aarav",
  },
  {
    name: "Meera",
    body: "The analysis report showed exactly which topics I was weak in. I could focus and improve faster.",
    img: "https://avatar.vercel.sh/meera",
  },
  {
    name: "Rohan",
    body: "PDF-to-CBT saved me hours. I didn’t just read notes — I actively tested myself every day.",
    img: "https://avatar.vercel.sh/rohan",
  },
  {
    name: "Ishita",
    body: "The question-solving style felt exactly like my real exams. On the day, I was completely stress-free.",
    img: "https://avatar.vercel.sh/ishita",
  },
  {
    name: "Kabir",
    body: "Mockcrack helped me go from 65% to 85% in just one semester. The practice tests were a game-changer.",
    img: "https://avatar.vercel.sh/kabir",
  },
  {
    name: "Priya",
    body: "Detailed performance tracking made my study plan 10x more effective. I knew exactly where I stood.",
    img: "https://avatar.vercel.sh/priya",
  },
  {
    name: "Aditya",
    body: "With PDF-to-CBT, I could revise anywhere, anytime. No more carrying heavy books around.",
    img: "https://avatar.vercel.sh/aditya",
  },
  {
    name: "Simran",
    body: "Every wrong answer came with clear explanations, so I never repeated the same mistake twice.",
    img: "https://avatar.vercel.sh/simran",
  },
  {
    name: "Arjun",
    body: "Mockcrack’s smart analysis helped me cover my syllabus in half the usual time.",
    img: "https://avatar.vercel.sh/arjun",
  },
  {
    name: "Ananya",
    body: "The interactive CBT tests boosted my confidence like nothing else. I walked into the exam ready to win.",
    img: "https://avatar.vercel.sh/ananya",
  },
];


const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username?: string;
  body: string;
}) => {
  return (
<figure
  className={cn(
    "relative h-full w-72 cursor-pointer overflow-hidden rounded-2xl border p-5 shadow-md transition-all duration-300",
    // light styles
    "border-gray-200 bg-white hover:shadow-lg",
    // dark styles
    "dark:border-gray-800 dark:bg-gray-900 dark:hover:bg-gray-800"
  )}
>
  {/* Header: Avatar + Name */}
  <div className="flex flex-row items-center gap-3">
    <Image
      className="rounded-full ring-2 ring-gray-200 dark:ring-gray-700"
      width="40"
      height="40"
      alt=""
      src={img}
    />
    <div className="flex flex-col">
      <figcaption className="text-sm font-semibold text-gray-900 dark:text-white">
        {name}
      </figcaption>
      <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
        {username}
      </p>
    </div>
  </div>

  {/* Quote body */}
  <blockquote className="mt-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
    {body}
  </blockquote>
</figure>

  );
};

export function Marquee1() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
