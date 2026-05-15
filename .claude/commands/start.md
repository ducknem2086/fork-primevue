---
name: start
description: Sequential workflow that processes a request through brainstorm → research → solution-architect → frontend-developer → tester agents
argument-hint: <description of the feature, change, or problem to solve>
allowed-tools: [Agent, Read, Glob, Grep, Bash, TaskCreate, TaskGet, TaskUpdate, TaskList]
---

# Sequential Agent Workflow

You are orchestrating a **sequential agent pipeline**. The user's request below must be processed through exactly five agents in strict order. Each agent's output is the input context for the next.

**User request:** $ARGUMENTS

---

## Workflow Rules

1. **Run agents sequentially** — do NOT run them in parallel. Each agent depends on the previous agent's output.
2. **Pass accumulated context forward** — each agent receives the original request PLUS all previous agents' outputs.
3. **Preserve full fidelity** — do not summarize or truncate agent outputs when passing them forward. Include the complete result.
4. **Report progress** — after each agent completes, print a short status line before spawning the next.
5. **Final summary** — after the tester agent completes, present a consolidated summary to the user.

---

## Pipeline Execution

### Step 1: Brainstorm

Spawn the `brainstorm` agent with this prompt:

> You are the first agent in a sequential pipeline. Your task is to brainstorm solutions for the following request. Read the codebase as needed (start with CLAUDE.md). Produce a structured brainstorm report — do NOT ask clarifying questions, work with what you have. Be concise and actionable.
>
> **Request:** $ARGUMENTS

Wait for the brainstorm agent to complete. Save its full output as `BRAINSTORM_RESULT`.

Print: `--- Brainstorm complete. Passing to Research agent. ---`

### Step 2: Research

Spawn the `research` agent with this prompt:

> You are the second agent in a sequential pipeline. A brainstorm agent has already analyzed this request and produced findings. Your task is to research the technical approaches identified, validate feasibility, find relevant libraries/patterns, and produce a research report. Read the codebase as needed (start with CLAUDE.md). Be concise and actionable — do NOT ask clarifying questions.
>
> **Original request:** $ARGUMENTS
>
> **Brainstorm findings:**
> {BRAINSTORM_RESULT}

Wait for the research agent to complete. Save its full output as `RESEARCH_RESULT`.

Print: `--- Research complete. Passing to Solution Architect agent. ---`

### Step 3: Solution Architect

Spawn the `solution-architect` agent with this prompt:

> You are the third agent in a sequential pipeline. A brainstorm agent and a research agent have already analyzed this request. Your task is to design a concrete implementation plan grounded in the project's actual architecture. You MUST read CLAUDE.md and the relevant source files to produce a file-level blueprint. Be precise — reference real files, real interfaces, real patterns.
>
> **Original request:** $ARGUMENTS
>
> **Brainstorm findings:**
> {BRAINSTORM_RESULT}
>
> **Research findings:**
> {RESEARCH_RESULT}

Wait for the solution-architect agent to complete. Save its full output as `ARCHITECT_RESULT`.

Print: `--- Architecture plan complete. Passing to Frontend Developer agent. ---`

### Step 4: Frontend Developer

Spawn the `frontend-developer` agent with this prompt:

> You are the fourth agent in a sequential pipeline. Previous agents have brainstormed, researched, and designed a complete architecture plan for this request. Your task is to **implement the solution** by writing the actual production code following the architecture plan exactly. You MUST:
> - Read CLAUDE.md and the project's coding conventions before writing any code
> - Implement all files specified in the architecture plan
> - Follow existing project patterns, naming conventions, and code style
> - Write clean, type-safe, production-ready code (no `any`, no placeholders, no TODOs unless explicitly required by the plan)
> - Verify each file integrates correctly with existing modules referenced in the plan
> - Report each file created/modified with a brief description of what was implemented
>
> Do NOT skip any file in the architecture plan. Do NOT add features beyond the plan's scope.
>
> **Original request:** $ARGUMENTS
>
> **Brainstorm findings:**
> {BRAINSTORM_RESULT}
>
> **Research findings:**
> {RESEARCH_RESULT}
>
> **Architecture plan:**
> {ARCHITECT_RESULT}

Wait for the frontend-developer agent to complete. Save its full output as `DEVELOPER_RESULT`.

Print: `--- Implementation complete. Passing to Tester agent. ---`

### Step 5: Tester

Spawn the `tester` agent with this prompt:

> You are the fifth and final agent in a sequential pipeline. Previous agents have brainstormed, researched, designed an architecture, and **implemented the solution**. Your task is to define a comprehensive test strategy AND write test cases for the implemented code: what tests are needed (unit, integration, E2E), what to mock, edge cases to cover, and a testing execution plan. You MUST review the actual files created by the frontend-developer to ensure tests match the real implementation. If the project doesn't have a test runner configured yet, recommend the setup. Be concrete — reference the actual files and interfaces from both the architecture plan and the implemented code.
>
> **Original request:** $ARGUMENTS
>
> **Brainstorm findings:**
> {BRAINSTORM_RESULT}
>
> **Research findings:**
> {RESEARCH_RESULT}
>
> **Architecture plan:**
> {ARCHITECT_RESULT}
>
> **Implementation results:**
> {DEVELOPER_RESULT}

Wait for the tester agent to complete. Save its full output as `TESTER_RESULT`.

Print: `--- Testing strategy complete. Pipeline finished. ---`

---

## Final Consolidated Output

After all five agents have completed, present the user with a consolidated summary:

```
## Pipeline Results

### 1. Brainstorm
[Key decisions and recommended approach — 3-5 bullet points from BRAINSTORM_RESULT]

### 2. Research
[Key findings and validated approaches — 3-5 bullet points from RESEARCH_RESULT]

### 3. Architecture
[Implementation blueprint summary — affected files, execution order from ARCHITECT_RESULT]

### 4. Implementation
[Files created/modified and key implementation details from DEVELOPER_RESULT]

### 5. Test Strategy
[Testing plan summary — test types, coverage targets, generated test files from TESTER_RESULT]

### Next Steps
[Actionable next steps the user can take — e.g., run tests, review implementation, deploy]
```

Then ask the user if they would like to proceed with running the test suite or making further refinements based on the pipeline results.