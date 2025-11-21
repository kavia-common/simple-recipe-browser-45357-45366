import type { Metadata } from "next";
import { getRecipeBySlug, recipes } from "@/data/recipes";
import Tag from "@/components/Tag";

type RouteParams = { slug: string };

// PUBLIC_INTERFACE
export async function generateStaticParams() {
  /** Provides static params for prerendering recipe detail pages. */
  return recipes.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);
  return {
    title: recipe ? `${recipe.title} • Ocean Recipes` : "Recipe • Ocean Recipes",
    description: recipe?.description ?? "Recipe details and instructions.",
  };
}

type RecipeDetailProps = {
  params: Promise<RouteParams>;
};

// PUBLIC_INTERFACE
export default async function RecipeDetail({ params }: RecipeDetailProps) {
  /** Recipe detail page with hero image, meta info, ingredients, and steps. */
  const { slug } = await params;
  const recipe = getRecipeBySlug(slug);

  if (!recipe) {
    // Allow Next.js to serve not-found.tsx
    // This component runs server-side in App Router.
    // Throwing here allows proper 404.
    throw new Error("NOT_FOUND");
  }

  const total = recipe.prepTime + recipe.cookTime;

  return (
    <article className="overflow-hidden rounded-xl bg-white shadow">
      <header>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={recipe.image}
          alt={`${recipe.title} hero image`}
          className="h-72 w-full object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-semibold">{recipe.title}</h1>
          <p className="mt-2 text-gray-700">{recipe.description}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {recipe.tags.map((t) => (
              <Tag key={t} label={t} />
            ))}
          </div>

          <dl className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div className="rounded-lg bg-blue-50 p-3 text-blue-800">
              <dt className="text-xs uppercase tracking-wide">Prep</dt>
              <dd className="text-lg font-semibold">{recipe.prepTime} min</dd>
            </div>
            <div className="rounded-lg bg-blue-50 p-3 text-blue-800">
              <dt className="text-xs uppercase tracking-wide">Cook</dt>
              <dd className="text-lg font-semibold">{recipe.cookTime} min</dd>
            </div>
            <div className="rounded-lg bg-amber-50 p-3 text-amber-900">
              <dt className="text-xs uppercase tracking-wide">Servings</dt>
              <dd className="text-lg font-semibold">{recipe.servings}</dd>
            </div>
            <div className="rounded-lg bg-gray-50 p-3 text-gray-800">
              <dt className="text-xs uppercase tracking-wide">Total</dt>
              <dd className="text-lg font-semibold">{total} min</dd>
            </div>
          </dl>
        </div>
      </header>

      <div className="grid gap-8 p-6 lg:grid-cols-2">
        <section aria-labelledby="ingredients-heading">
          <h2 id="ingredients-heading" className="text-xl font-semibold">
            Ingredients
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-800">
            {recipe.ingredients.map((ing, idx) => (
              <li key={idx}>{ing}</li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="steps-heading">
          <h2 id="steps-heading" className="text-xl font-semibold">
            Instructions
          </h2>
          <ol className="mt-3 list-decimal space-y-3 pl-6 text-gray-800">
            {recipe.steps.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ol>
        </section>
      </div>
    </article>
  );
}
