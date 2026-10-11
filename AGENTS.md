<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Rules

- Keep Home featured projects and the Projects listing sourced from the shared project content module, so card names, descriptions and images stay consistent.

- Route loaders must return only serializable data — never React components (e.g. lucide icons). Resolve icon components inside the page component from the static content module instead. Why: TanStack Start serializes loader data for SSR handoff and a component reference throws, turning the page into a 500.
- The site header switches to its solid light style on any route deeper than one segment (`/expertise/<slug>`, `/solutions/<slug>`, `/insights/<slug>`), because those pages open on a white band rather than a dark hero. Why: the transparent dark-hero style renders white text on white and hides the whole menu.

- Source Home expertise previews from the shared expertise content module so ordering, imagery, titles and detail links stay consistent with the Expertise listing.
