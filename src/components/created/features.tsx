import { ArcTimeline, ArcTimelineItem } from "@/components/magicui/arc-timeline";
import {
  Rocket,
  Box,
  Globe,
  Settings,
  Zap,
  Star,
  Wand,
  Book,
  Clipboard,
  Award,
  User,
} from "lucide-react";

export function MockCrackWorkflowTimeline() {
  return (
    <ArcTimeline
      data={TIMELINE}
      defaultActiveStep={{ time: "Step 1", stepIndex: 0 }}
      arcConfig={{
        circleWidth: 4500,
        angleBetweenMinorSteps: 0.4,
        lineCountFillBetweenSteps: 6,
        boundaryPlaceholderLinesCount: 40,
      }}
    />
  );
}

const TIMELINE: ArcTimelineItem[] = [
  {
    time: "Step 1",
    steps: [
      {
        icon: <User size={20} />,
        content: "User signs up or logs into MockCrack.",
      },
      {
        icon: <Box size={20} />,
        content: "User sets their subjects and study goals.",
      },
    ],
  },
  {
    time: "Step 2",
    steps: [
      {
        icon: <Book size={20} />,
        content: "Upload notes, PDFs, or study material.",
      },
      {
        icon: <Wand size={20} />,
        content:
          "AI analyzes and converts content into interactive questions and quizzes.",
      },
    ],
  },
  {
    time: "Step 3",
    steps: [
      {
        icon: <Clipboard size={20} />,
        content:
          "Generate practice tests and mock exams based on uploaded notes.",
      },
      {
        icon: <Zap size={20} />,
        content:
          "Take AI-powered timed mock tests that simulate real exams.",
      },
    ],
  },
  {
    time: "Step 4",
    steps: [
      {
        icon: <Settings size={20} />,
        content:
          "AI evaluates performance and provides smart feedback and insights.",
      },
      {
        icon: <Star size={20} />,
        content:
          "Identify weak areas and receive personalized practice recommendations.",
      },
    ],
  },
  {
    time: "Step 5",
    steps: [
      {
        icon: <Award size={20} />,
        content:
          "Track progress over time and compete on leaderboards with peers.",
      },
      {
        icon: <Globe size={20} />,
        content:
          "Access study content and progress anytime, anywhere.",
      },
    ],
  },
  {
    time: "Step 6",
    steps: [
      {
        icon: <Box size={20} />,
        content:
          "Earn rewards and unlock additional study materials and skins in the shop.",
      },
      {
        icon: <Rocket size={20} />,
        content:
          "Continue learning and iterating on practice tests for better performance.",
      },
    ],
  },
];
