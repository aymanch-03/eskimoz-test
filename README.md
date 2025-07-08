# Frontend Technical Test: Card Component with Dynamic Filtering

## Objective

Create a React component that displays a grid of "cards" styled with Tailwind CSS, where each card represents a person. Implement a dynamic filtering system based on specific categories.

## Requirements

### Card Structure

Each card should display:

- Name (e.g., "Alice")
- Age (e.g., "25")
- Job (e.g., "Developer")
- Location (e.g., "Paris")

### Data

Sample data structure (to be defined in a static JSON file):

```json
[
  { "name": "Alice", "age": 25, "job": "Developer", "location": "Paris" },
  { "name": "Bob", "age": 30, "job": "Designer", "location": "London" },
  { "name": "Charlie", "age": 35, "job": "Developer", "location": "Berlin" },
  { "name": "Diane", "age": 28, "job": "Marketer" "location": "New York" }
]
```

### Dynamic Filtering

- Select a job from a dropdown menu to filter cards
- Display all cards when no filter is applied
- Show "No results found" message when filter returns no results

### Design Requirements

- Responsive grid layout using Tailwind CSS
- Modern styling
- Smooth visual transitions for filtering actions

### Technical Constraints

- React only (no third-party libraries for filtering/state management)
- Tailwind CSS exclusively for styling and animations
- Real-time updates without page reload

### Bonus Features (Optional)

- Search bar to filter cards by name

## Submission

- Publish project to a public Git repository
- Share repository link as submission

### Setup

```console
- npm install
- npm run dev
```

Install Tailwind CSS and its peer dependencies:
(look at the documentation)
