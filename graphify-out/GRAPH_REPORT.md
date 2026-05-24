# Graph Report - VPW Portfolio  (2026-05-24)

## Corpus Check
- 15 files · ~10,940 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 56 nodes · 64 edges · 7 communities (5 shown, 2 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `ba30b134`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]

## God Nodes (most connected - your core abstractions)
1. `SmoothScroll()` - 2 edges
2. `LINKS` - 1 edges
3. `containerVariants` - 1 edges
4. `itemVariants` - 1 edges
5. `BELIEFS` - 1 edges
6. `BUILT_FOR` - 1 edges
7. `QUICK_ACTIONS` - 1 edges
8. `TRUST_POINTS` - 1 edges
9. `STATS` - 1 edges
10. `SERVICES` - 1 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Communities (7 total, 2 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.17
Nodes (9): AI_CHIPS, AI_FEATURES, FOUNDING_PERKS, INSPIRED_BY, PROBLEM_POINTS, RESEARCH_CARDS, STEPS, TIERS (+1 more)

### Community 2 - "Community 2"
Cohesion: 0.2
Nodes (3): QUICK_ACTIONS, TRUST_POINTS, PILLARS

### Community 3 - "Community 3"
Cohesion: 0.25
Nodes (5): containerVariants, FAQS, itemVariants, SERVICES, STATS

### Community 4 - "Community 4"
Cohesion: 0.33
Nodes (4): BELIEFS, BUILT_FOR, containerVariants, itemVariants

### Community 5 - "Community 5"
Cohesion: 0.4
Nodes (3): CHARGES_DATA, HIGHLIGHTS, NOTES

## Knowledge Gaps
- **25 isolated node(s):** `LINKS`, `containerVariants`, `itemVariants`, `BELIEFS`, `BUILT_FOR` (+20 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What connects `LINKS`, `containerVariants`, `itemVariants` to the rest of the system?**
  _25 weakly-connected nodes found - possible documentation gaps or missing edges._