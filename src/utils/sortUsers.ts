import { User } from "../../types";

type SortOrder = "asc" | "desc";

export function sortUsers(
  users: User[],
  sortField: keyof User | null,
  sortOrder: SortOrder = "asc"
): User[] {
  if (!sortField) return users;

  return [...users].sort((a, b) => {
    const valA = a[sortField];
    const valB = b[sortField];

    if (typeof valA === "string" && typeof valB === "string") {
      return sortOrder === "asc" ? valA.localeCompare(valB) : valB.localeCompare(valA);
    }

    return sortOrder === "asc" ? (valA as number) - (valB as number) : (valB as number) - (valA as number);
  });
}
