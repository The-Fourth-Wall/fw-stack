# AGENTS.md

Read this file before every task.

**Working code only. Finish the job. Plausibility is not correctness.**

---

## 0. Non-negotiables

These override everything else:

1. **No flattery, no filler.** Start with the answer or action.
2. **Disagree when you disagree.** Never agree with false premises to be polite.
3. **Never fabricate.** If you don't know, read the file, run the command, or
   say so.
4. **Touch only what you must.** Every changed line must trace to the user's
   request.

---

## 1. Before writing code

- State your plan before editing. For non-trivial tasks, produce numbered steps
  with verification checks.
- Read files you'll touch and files that call them. Use subagents for
  exploration to keep main context clean.
- Match existing codebase patterns, even if you'd do it differently in a
  greenfield repo.
- Surface assumptions explicitly. Don't bury them in the implementation.

---

## 2. Writing code: minimum viable solution

- No features, abstractions, configurability, or error handling beyond what
  was asked.
- If 200 lines could be 50, rewrite before showing.
- Stop if you catch yourself adding "for future extensibility."
- Bias toward deleting code over adding it.

---

## 3. Surgical changes

- Don't "improve" adjacent code, comments, formatting, or imports not part of
  the task.
- Don't refactor working code just because you're in the file.
- Don't delete pre-existing dead code unless asked (mention it if you notice it).
- Clean up orphans from your own changes (unused imports, variables, functions).
- Match project style exactly: indentation, quotes, naming, file layout.

---

## 4. Verification

- Never report "done" from a plausible-looking diff alone.
- Debug root causes, not symptoms. Suppressing ≠ fixing.
- Use CLI tools (gh, aws, gcloud, kubectl) when they exist—they're more
  context-efficient.
- Read entire stack traces. Half-read traces produce wrong fixes.

---

## 5. Session hygiene

- Context is the constraint. Fresh sessions beat long ones with accumulated
  failures.
- After two failed corrections on the same issue, stop and ask user to reset
  with a sharper prompt.
- Use subagents for exploration tasks that'd pollute main context.
- Never commit anything by yourself.

---

## 6. Communication style

- Direct, not diplomatic. "This won't scale because X" beats "Interesting
  approach, but..."
- Concise by default. 2-3 short paragraphs unless user asks for depth.
- Clear answers when possible; when not, say so and give tradeoffs.
- No excessive bullets, unprompted headers, or emoji. Prose > structure for
  short answers.

---

## 7. Project context

### Stack

- TypeScript (prefer inference); Astro + React (islands for interactivity);
  Convex backend; Ruby for `scripts/`.
- pnpm only (never npm/yarn).
- Deployment: Railway. Ref: https://railway.com/llms.txt.

### Commands

- Install: `pnpm install`
- Build: `pnpm build`
- Test: `pnpm test` (Vitest; watch by default) / `pnpm test path/to/file.test.ts`
- Lint: `pnpm lint` / `pnpm eslint`
- Format: `pnpm prettier`
- Typecheck: `pnpm check`
- Dev: `pnpm run:dev`

### Layout

- Source: `src/client/` (pages, atoms→templates, actions, hooks, styles),
  `src/app/`, `src/authentication/`, `src/database/`, `src/models/`,
  `src/state/`, `src/types/`, `src/security/`, static in `public/`.
- Agent artifacts: `context/plans/`, `context/reviews/`, `context/wiki/`.
- Tests: colocated `*.test.ts` beside source.
- Don't modify: `src/database/convex/functions/_generated/` (generated);
  lockfiles (unless dependency change).

### Conventions

- Naming: `snake_case` vars/funcs; `PascalCase` components/classes;
  `kebab-case` CSS; hooks `useCamelCase` with `snake_case` hook functions.
- Imports: path aliases (`@app`, `@atoms`, `@molecules`, `@organisms`,
  `@templates`, `@hooks`, `@styles`, `@authentication`, `@database`, `@models`,
  `@security`, `@state`).
- Error handling: match the module. For Convex, read
  `src/database/convex/functions/_generated/ai/guidelines.md` first.
- Testing: Vitest unit tests (colocated).

### Ruby Scripts (`scripts/`)

- **Always end statements with semicolons.** Non-negotiable.
- Double quotes; `snake_case` funcs with keyword params returning hashes;
  `PascalCase` classes.
- Single-statement lambdas: `->`; multi: `do...end`.
- Max 80 chars/line. Follow existing script style.

### Forbidden

- Committing from an agent (human commits only).
- Editing `src/database/convex/functions/_generated/` or changing lockfiles
  without dependency-change task.
- New non-JSDoc comments or deleting existing comments.
- UI components outside atomic layers (`src/client/01-atoms` →
  `04-templates`/`pages`).
