import { useEffect, useState } from "react";
import { User } from "../../types";

const USERS_API =
  "https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json";

interface UseUsersResult {
  users: User[];
  isLoading: boolean;
  error: string | null;
}

export default function useUsers(): UseUsersResult {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(USERS_API)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch users");
        return res.json();
      })
      .then((data: User[]) => {
        setUsers(data);
        setIsLoading(false);
      })
      .catch((err: Error) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  return { users, isLoading, error };
}
