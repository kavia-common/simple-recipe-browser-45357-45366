import RecipeCard from "@/components/RecipeCard";
import { recipes } from "@/data/recipes";

function filterRecipes(q: string | null) {
  if (!q) return recipes;
  const needle = q.toLowerCase();
  return recipes.filter(
    (r) =>
      r.title.toLowerCase().includes(needle) ||
      r.tags.some((t) => t.toLowerCase().includes(needle))
  );
}

type HomeProps = {
  // Match project PageProps constraint: searchParams is provided as a Promise.
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

// PUBLIC_INTERFACE
export default async function Home({ searchParams }: HomeProps) {
  /** Home page listing recipes with client-side filter via URL query (?q=). */
  const sp = searchParams ? await searchParams : undefined;
  const qParam = sp?.q;
  const q = Array.isArray(qParam) ? qParam[0] : qParam;

  const list = filterRecipes(q ?? null);

  return (
    <div>
      <section aria-labelledby="browse-heading" className="mb-6">
        <h1 id="browse-heading" className="text-2xl font-semibold">
          Browse Recipes
        </h1>
        <p className="mt-1 text-sm text-gray-600">
          Explore curated dishes. Use the search in the top bar to filter by name or tag.
        </p>
      </section>

      <section aria-label="Recipe results">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>

        {list.length === 0 && (
          <div className="mt-10 rounded-lg border border-dashed border-gray-300 bg-white p-8 text-center text-gray-600">
            No recipes match your search.
          </div>
        )}
      </section>
    </div>
  );
}
