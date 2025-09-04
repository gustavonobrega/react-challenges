import { useEffect, useState, type ChangeEvent } from "react";
import useDebounce from "./use-debounce";
import { fetchFakeUsers } from "./utils";
import { Loader } from "lucide-react";

export default function DebounceDemo() {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<string[]>([]);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    async function loadUsers() {
      setLoading(true);

      const response = (await fetchFakeUsers(debouncedSearchTerm)) as string[];
      setUsers(response);

      setLoading(false);
    }

    loadUsers();
  }, [debouncedSearchTerm]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="min-h-svh bg-zinc-800 p-8">
      <div className="flex flex-col items-center space-y-4">
        <input
          className="py-2 px-3 text-white placeholder:text-white border rounded"
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange}
        />
        {loading && <Loader className="text-white animate-spin" size={32} />}
        <div className="space-y-1 text-white">
          {!loading && users.map((user) => <p key={user}>{user}</p>)}
        </div>
      </div>
    </div>
  );
}
