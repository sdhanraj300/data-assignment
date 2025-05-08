export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  age: number;
  web: string;
  company_name?: string;
  job_title?: string;
}
export interface UserTableProps {
  users: User[];
  onSort: (field: keyof User) => void;
  sortField: keyof User | null;
  sortOrder: "asc" | "desc";
  setSortOrder: React.Dispatch<React.SetStateAction<"asc" | "desc">>;
}

export interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}
