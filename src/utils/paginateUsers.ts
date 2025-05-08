import { User } from "../../types";
export function paginateUsers(users: User[], currentPage: number, usersPerPage: number): User[] {
  const startIdx = (currentPage - 1) * usersPerPage;
  return users.slice(startIdx, startIdx + usersPerPage);
}
