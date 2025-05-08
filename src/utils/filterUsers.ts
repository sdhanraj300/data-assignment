import { User } from "../../types";
export function filterUsers(users: User[], query: string): User[] {
  if (!query) return users;

  const lowerQuery = query.toLowerCase();
  return users.filter(
    (user) =>
      user.first_name.toLowerCase().includes(lowerQuery) ||
      user.last_name.toLowerCase().includes(lowerQuery)
  );
}
