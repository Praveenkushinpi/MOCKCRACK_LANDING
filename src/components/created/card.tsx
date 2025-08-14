import { Code, PenTool, BarChart3, Workflow, Users, Target } from "lucide-react";
import Image from "next/image";

export default function MeshyCards() {
const cards = [
  {
    title: "Smart Test Generator",
    description:
      "Turn your notes into high-quality mock tests instantly. Practice smarter, not harder.",
    icon: Code,
    stat: "95% syllabus coverage",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80",
  },
  {
    title: "Content Enhancer",
    description:
      "Get AI-powered explanations, hints, and summaries for tough topics.",
    icon: PenTool,
    stat: "Boost retention rate",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
  },
  {
    title: "Performance Insights",
    description:
      "Track your progress with real-time analytics and pinpoint weak areas.",
    icon: BarChart3,
    stat: "Detailed progress reports",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80",
  },
  {
    title: "Automated Practice",
    description:
      "Schedule tests, flashcards, and revision sessions automatically.",
    icon: Workflow,
    stat: "Saves 40+ study hours/month",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=80",
  },
  {
    title: "Collaborative Learning",
    description:
      "Join study groups, share tests, and discuss solutions with peers.",
    icon: Users,
    stat: "Active learner community",
    image:
      "https://images.unsplash.com/photo-1755038996155-b1e2bb7c1795?q=80&w=694&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Goal Tracker",
    description:
      "Set targets, track milestones, and stay motivated until exam day.",
    icon: Target,
    stat: "Achieve 2x faster results",
    image:
      "https://images.unsplash.com/photo-1751401373805-ee41ae83df75?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];


  return (
    <div className="mx-auto my-8 w-full max-w-7xl px-6">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
        {cards.map((card, i) => (
          <div
            key={i}
            className="group relative h-[420px] cursor-pointer overflow-hidden rounded-3xl shadow-lg transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl"
          >
            <Image
              src={card.image}
              alt={card.title}
              className="absolute inset-0 h-full w-full object-cover"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500"></div>

            <div className="relative z-10 flex h-full flex-col justify-end p-8 text-white">
              <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-white/20">
                <card.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-2xl font-semibold">{card.title}</h3>
              <p className="mb-4 text-white/80">{card.description}</p>
              <span className="text-sm text-white/60">{card.stat}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
