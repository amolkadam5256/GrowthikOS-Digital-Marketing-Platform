# Digital Marketing / SEO Platform — Complete Product & Build Document

**Product working name:** Growthik OS (under Growthik Media)
**Model:** One user account → multiple projects (one project = one website/domain), each project gets the full tool suite — same structure as Semrush/SEOptimer.

---

## 1. Vision (one line)

A single web platform where a user creates an **account**, adds **one or more projects (websites)**, and inside each project gets a full suite of SEO, GEO, AEO, content, tracking, and reporting tools — with white-label PDF/branded reports, built on your existing Next.js + FastAPI + PostgreSQL + Redis stack.

---

## 2. What the two reference products teach us

**Semrush** — organizes everything around a *domain-first workspace*: you create an "SEO project" for a domain, then every tool (Site Audit, Position Tracking, Domain Overview, Keyword Gap, Backlink Gap, etc.) reads from that same project context. Tools are grouped into clear categories: Site Performance, Competitive Analysis, Keyword Research, Content Ideas, Link Building, Extras. It also pushes AI-search visibility (ChatGPT/AI Mode tracking) alongside classic Google tracking.

**SEOptimer** — is famous for one hero feature (the audit) but wraps a full toolbox around it: SEO/GEO Audit, Crawler, Keyword Research/Tracking, Backlink Research/Monitoring, Bulk Reporting, API, plus a **White-Label PDF report generator** and an **embeddable audit widget** for lead generation. It also separates "Local SEO" and "AI Writing" into their own sub-products.

**What to copy from both:**
- Project-centric data model (not tool-centric)
- One dashboard that aggregates all tool outputs per project
- White-label, brandable PDF reports as a first-class feature
- A free/embeddable mini-audit tool as a growth/lead-gen hook
- AI-search (GEO/AEO) visibility tracking treated as equal to classic SEO, not an afterthought

---

## 3. Core Product Model — Account → Projects → Tools

```
User Account
 │
 ├── Organization / Workspace (for agencies with team members)
 │
 ├── Project 1 (example.com)
 │     ├── Site Audit
 │     ├── Keyword Tracking
 │     ├── Competitor Analysis
 │     ├── Backlinks
 │     ├── AI Content
 │     ├── GEO/AEO Visibility
 │     └── Reports
 │
 ├── Project 2 (client-site.com)
 │     └── (same tool suite, isolated data)
 │
 └── Project N ...
```

Key rule: **all tool data is scoped to `project_id`.** A user can switch projects from a dropdown in the top nav (exactly like Semrush's domain switcher) without leaving the dashboard shell.

---

## 4. Complete Tool / Module List

### A. Core SEO
| Tool | Purpose |
|---|---|
| Site Audit / Crawler | Full-site technical crawl: broken links, missing meta, duplicate content, redirects, status codes, sitemap/robots issues |
| On-Page Checker | Page-level scoring: title, meta, headings, alt text, internal links, readability |
| Technical SEO | Core Web Vitals, mobile-friendliness, indexability, structured data/schema validation |
| Position/Rank Tracking | Daily/weekly keyword rank tracking by country, device, search engine |
| Site Performance | Speed, Core Web Vitals trend over time |

### B. GEO & AEO (AI Search)
| Tool | Purpose |
|---|---|
| AI Search Visibility | Track brand mentions/citations in ChatGPT, Gemini, Perplexity, Google AI Mode |
| LLM Accessibility Checker | Can AI crawlers (GPTBot, ClaudeBot, PerplexityBot) actually read the site? robots.txt / llms.txt check |
| Answer Engine Optimization (AEO) | Structured-answer readiness: FAQ schema, direct-answer formatting, E-E-A-T signals |
| Citability Score | How "quotable" a page is for AI answer engines |

### C. Keyword Research
| Tool | Purpose |
|---|---|
| Keyword Overview | Volume, difficulty, CPC, trend for one keyword |
| Keyword Magic / Explorer | Thousands of related keyword ideas, clustered by intent |
| Keyword Gap | Compare your ranking keywords vs up to 4 competitors |
| Keyword Strategy Builder | Group keywords into content clusters/topics |

### D. Competitive Analysis
| Tool | Purpose |
|---|---|
| Domain Overview | Traffic, authority, top keywords for any domain |
| Organic Rankings | Full list of keywords a domain ranks for |
| Top Pages | Best-performing pages by traffic |
| Compare Domains | Side-by-side metrics for 2–5 competitors |

### E. Content
| Tool | Purpose |
|---|---|
| AI Content Generator | Draft blog/page content from a keyword/brief |
| SEO Writing Assistant | Real-time content scoring while writing (readability, keyword usage, tone) |
| Topic/Content Research | Trending topics + content gap suggestions |
| AI Meta Generator | Auto-generate title tags & meta descriptions |
| Content Gap Analysis | Topics competitors cover that you don't |

### F. Link Building
| Tool | Purpose |
|---|---|
| Backlink Analysis | Full backlink profile of any domain |
| Referring Domains | Unique linking domains, authority scores |
| Backlink Gap | Links competitors have that you don't |
| Backlink Audit / Monitoring | Toxic link detection, new/lost link alerts |

### G. Reporting & White-Label
| Tool | Purpose |
|---|---|
| White-Label PDF Reports | Branded reports (logo, colors, custom domain) |
| Scheduled Reports | Auto-email weekly/monthly PDFs to clients |
| Client Dashboard (read-only) | Share a live view link with a client |
| Bulk Reporting | Run audits across many domains at once (agency use) |

### H. Local SEO (separate module, like SEOptimer)
| Tool | Purpose |
|---|---|
| Google Business Profile Audit | GBP completeness & optimization score |
| GeoGrid Rank Tracking | Local rank checks across a map grid |
| Review Management | Monitor & respond to GBP reviews |

### I. Automation
| Tool | Purpose |
|---|---|
| Scheduled Health Checks | Daily crawl for critical errors |
| Broken Link Monitor | Alert on new 404s/redirect chains |
| Competitor Change Monitor | Alert when a tracked competitor's rankings/content shift |
| AI Recommendations Engine | Weekly prioritized "what to fix next" digest |

### J. Growth/Lead-Gen Extras (public-facing, free)
| Tool | Purpose |
|---|---|
| Free Embeddable Audit Widget | Lead-gen tool other sites can embed |
| Meta Tag Generator | Free utility |
| Robots.txt / Sitemap Generator | Free utility |
| Public "Instant Audit" landing page | No-login single-URL audit, upsell to full account |

---

## 5. Complete Sitemap (page by page)

### Public / Marketing site
- `/` — Homepage (hero + "Enter domain, run audit" input, like Semrush's homepage)
- `/pricing`
- `/features/[tool-slug]` — one landing page per major tool (SEO audit, keyword research, backlinks, GEO tracking, etc.) for SEO acquisition
- `/free-tools` — hub for free utilities (meta tag generator, robots.txt generator, etc.)
- `/free-tools/[tool-slug]`
- `/audit` — public instant single-URL audit (lead-gen, no login)
- `/blog` and `/blog/[slug]`
- `/about`, `/contact`
- `/login`, `/signup`, `/forgot-password`

### App shell (authenticated)
- `/dashboard` — cross-project summary (all projects at a glance)
- `/projects` — list/create/manage projects
- `/projects/new` — add domain, run first crawl
- `/settings/account`, `/settings/team`, `/settings/billing`

### Per-project workspace — `/app/[projectId]/...`
- `/overview` — project home: health score, top issues, ranking trend, traffic trend
- `/site-audit` — crawl results, issue list, filters, fix priority
- `/site-audit/[pageId]` — page-level detail
- `/technical-seo` — Core Web Vitals, schema validation, indexability
- `/ai-visibility` — GEO/AEO dashboard: AI citations, LLM accessibility score
- `/rank-tracking` — keyword position table + trend charts
- `/rank-tracking/keywords/new` — add keywords to track
- `/keyword-research` — keyword explorer/magic tool
- `/keyword-research/gap` — keyword gap vs competitors
- `/competitors` — add/manage tracked competitors
- `/competitors/[domain]` — competitor detail (domain overview, top pages, keyword overlap)
- `/backlinks` — backlink profile, referring domains
- `/backlinks/audit` — toxic link audit
- `/backlinks/gap` — backlink gap vs competitors
- `/content` — content ideas / topic research
- `/content/writer/[docId]` — AI writing assistant editor
- `/content/generator` — AI content generator (brief → draft)
- `/local-seo` — GBP audit + geogrid (only if project is marked "local business")
- `/reports` — list of generated reports
- `/reports/new` — build a white-label report (choose sections, branding)
- `/reports/[reportId]` — view/download report
- `/reports/schedule` — recurring report settings
- `/automation` — alert rules (health checks, broken links, competitor changes)
- `/project-settings` — crawl frequency, tracked locations/devices, branding, integrations (GSC, GA4, GTM)

---

## 6. Core User Flow

1. Visitor lands on `/` or `/audit` → runs a free instant audit (no login) → sees a teaser score → prompted to sign up to see full report.
2. Signup → onboarding wizard: "Add your first project" → enter domain → choose what to track (keywords, competitors, location) → first crawl kicks off (async job).
3. Lands on `/dashboard` → sees Project 1 card with health score, crawl status.
4. Clicks into `/app/[projectId]/overview` → sees prioritized issues → drills into `/site-audit` to fix things.
5. Adds competitors, adds tracked keywords → rank tracking starts populating daily.
6. Generates a branded PDF report from `/reports/new` → schedules it to auto-send monthly to a client.
7. (Agency user) creates Project 2, 3, 4... under the same account/organization, each isolated.

---

## 7. Data Model (high-level, matches your FastAPI "modules" pattern)

```
users
organizations
organization_members        (user_id, org_id, role)
projects                    (org_id, domain, name, industry, is_local_business)
crawls                      (project_id, status, started_at, finished_at)
crawl_pages                 (crawl_id, url, status_code, title, meta, h1, issues[])
issues                      (crawl_page_id, type, severity, recommendation)
keywords                    (project_id, keyword, location, device, search_engine)
keyword_rankings            (keyword_id, date, position, url, search_engine)
competitors                 (project_id, competitor_domain)
backlinks                   (project_id, source_url, target_url, authority, first_seen, lost_at)
ai_visibility_checks        (project_id, engine, query, cited, citation_url, checked_at)
content_docs                (project_id, title, body, seo_score, target_keyword)
reports                     (project_id, type, branding_json, schedule, last_sent_at)
alerts                      (project_id, type, rule_json, last_triggered_at)
integrations                (project_id, provider [gsc|ga4|gtm], credentials_ref)
```

Each of these maps 1:1 to a backend `modules/<name>/` folder (router, service, repository, model, schema) — consistent with the architecture you already settled on.

---

## 8. Architecture Recap (confirmed structure)

```
growthik-platform/
├── apps/
│   ├── web/            Next.js 16 dashboard + marketing site
│   ├── api/             FastAPI backend
│   ├── worker/          Celery/ARQ background jobs (crawls, rank checks, reports)
│   ├── crawler/         Playwright + BeautifulSoup + Trafilatura crawl engine
│   └── docs/
├── packages/
│   ├── seo-engine/ geo-engine/ aeo-engine/
│   ├── crawler-engine/ keyword-engine/ content-engine/
│   ├── schema-engine/ analytics-engine/ report-engine/
│   ├── automation-engine/ ai-engine/ integrations/ shared/
├── infrastructure/  docker/  scripts/
```

**Stack:** Next.js 16 + React + TypeScript + Tailwind + shadcn/ui (web) · FastAPI + SQLAlchemy + Alembic + Pydantic + JWT (api) · PostgreSQL · Redis · Celery/Dramatiq (queue) · Playwright/BeautifulSoup/Trafilatura (crawler) · Ollama/spaCy/Sentence-Transformers (AI) · Docker Compose (deploy).

**Subdomain strategy:** since you want each tool/product separated, use one FastAPI backend + one Next.js app, but expose logical products on subdomains via routing/reverse proxy, e.g.:
- `app.growthikmedia.com` — main authenticated dashboard (all tools live here, project-scoped)
- `audit.growthikmedia.com` — free public instant-audit micro-tool (thin Next.js page hitting the same API)
- `reports.growthikmedia.com` — public share links for client-facing reports
- `api.growthikmedia.com` — FastAPI
This gives you separate subdomains for marketing/lead-gen surfaces without splitting the core product into unrelated codebases (which would slow you down). If a specific tool later becomes big enough to be its own business (e.g., Local SEO), it can be split into its own app inside the same monorepo (`apps/local-seo/`) and given its own subdomain then.

---

## 9. Stage-Wise Development Roadmap

**Stage 0 — Foundation (what your verification prompt already covers)**
Repo, Next.js app, FastAPI app, PostgreSQL, Redis, Docker, auth, base dashboard shell. Nothing SEO-specific yet.

**Stage 1 — Projects & Accounts**
Org/user model, create/list/switch projects, project settings, onboarding wizard.

**Stage 2 — Crawler + Site Audit**
Crawl engine (Playwright/BS4), issue detection rules, `/site-audit` UI, health score calculation.

**Stage 3 — Keyword Research + Rank Tracking**
Keyword data source integration, tracking job (daily cron via worker), `/rank-tracking` and `/keyword-research` UI.

**Stage 4 — Competitive Analysis**
Add competitor domains, domain overview pull, keyword gap, `/competitors` UI.

**Stage 5 — Backlinks**
Backlink data ingestion, referring domains, gap, audit, `/backlinks` UI.

**Stage 6 — GEO/AEO (AI Search)**
LLM-crawler accessibility checks, AI citation tracking, `/ai-visibility` UI — this is your key differentiator vs older tools.

**Stage 7 — Content Tools**
AI content generator, writing assistant with live scoring, `/content` UI.

**Stage 8 — Reporting**
White-label PDF builder, scheduled email reports, client share links.

**Stage 9 — Automation & Alerts**
Health-check cron, broken-link monitor, competitor-change monitor, notification system.

**Stage 10 — Local SEO module**
GBP audit + geogrid tracking (only if you want this as a add-on, mirroring SEOptimer's separate local product).

**Stage 11 — Growth/Lead-gen layer**
Public `/audit` instant tool, embeddable widget, free-tools hub, blog/SEO landing pages for the platform itself.

**Stage 12 — Agency features**
Team members/roles, bulk reporting across projects, API access for power users.

Build strictly in this order — each stage should be fully working and tested (per your Stage 0 verification prompt pattern) before starting the next.

---

## 10. Definition of Done per Stage

For every stage above, before moving on:
- [ ] Backend module has router + service + repository + model + schema + tests
- [ ] Frontend feature has its own folder under `features/`
- [ ] Data is correctly scoped by `project_id`
- [ ] Background jobs (if any) run via the worker, not inline in the request
- [ ] UI states covered: loading, empty, error, populated
- [ ] Manually tested end-to-end for at least one real project/domain

---

*This document is your single source of truth for what the platform is, what it contains, and the order to build it in. Next step: pick Stage 1 (Projects & Accounts) and I can generate the actual FastAPI module + Next.js pages for it.*
