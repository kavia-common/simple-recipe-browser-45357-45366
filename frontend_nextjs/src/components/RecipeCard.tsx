import Link from "next/link";
import Tag from "@/components/Tag";
import type { Recipe } from "@/data/recipes";

// PUBLIC_INTERFACE
export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  /** Card showing a recipe preview. Clicking navigates to detail page. */
  return (
    <article className="surface overflow-hidden" aria-labelledby={`${recipe.slug}-title`}>
      <Link href={`/recipes/${recipe.slug}`} className="block focus-ring">
        <figure className="relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={recipe.image}
            alt={`${recipe.title} photo`}
            className="h-48 w-full object-cover"
          />
        </figure>
        <div className="p-4">
          <h3 id={`${recipe.slug}-title`} className="text-lg font-semibold">
            {recipe.title}
          </h3>
          <p className="mt-1 line-clamp-2 text-sm text-gray-600">{recipe.description}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {recipe.tags.slice(0, 3).map((t) => (
              <Tag key={t} label={t} />
            ))}
          </div>
          <div className="mt-4 flex items-center gap-4 text-xs text-gray-600">
            <span>Prep: {recipe.prepTime}m</span>
            <span>Cook: {recipe.cookTime}m</span>
            <span>Serves: {recipe.servings}</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
