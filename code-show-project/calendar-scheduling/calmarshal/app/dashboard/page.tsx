import { requireUser } from "../lib/hooks";

export default async function DashboardPage() {
  const session = await requireUser(); // hooks

  return (
    <div>
      <h1>Dashboard Page</h1>
    </div>
  );
}
