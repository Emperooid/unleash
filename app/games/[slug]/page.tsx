import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { GAMES } from "@/lib/games";
import { PrincipleQuiz } from "@/components/games/PrincipleQuiz";
import { WordPuzzle } from "@/components/games/WordPuzzle";
import { DailyChallenge } from "@/components/games/DailyChallenge";
import { ReflectionGame } from "@/components/games/ReflectionGame";

const GAME_COMPONENTS = {
  "principle-quiz": PrincipleQuiz,
  "word-puzzle": WordPuzzle,
  "daily-challenge": DailyChallenge,
  "reflection-game": ReflectionGame,
} as const;

export function generateStaticParams() {
  return GAMES.map((game) => ({ slug: game.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const game = GAMES.find((g) => g.slug === slug);
  if (!game) return {};
  return { title: `${game.name} — UNLEASH Hub`, description: game.description };
}

export default async function GamePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const game = GAMES.find((g) => g.slug === slug);
  if (!game) notFound();

  const GameComponent = GAME_COMPONENTS[slug as keyof typeof GAME_COMPONENTS];

  return (
    <section className="bg-cream py-12 sm:py-20">
      <Container className="max-w-3xl">
        <Link
          href="/games"
          className="inline-flex items-center gap-2 text-sm font-semibold text-ink/60 transition-colors hover:text-ink"
        >
          <ArrowLeft size={16} />
          All games
        </Link>

        <div className="mt-6 mb-8">
          <h1 className="font-display text-3xl font-bold text-ink sm:text-5xl">
            {game.name}
          </h1>
          <p className="mt-3 text-base text-ink/65 sm:text-lg">
            {game.description}
          </p>
        </div>

        <GameComponent />
      </Container>
    </section>
  );
}
