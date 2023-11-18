import { useGetUsers } from "@/lib/react-query/queries";
import { useToast } from "../ui/use-toast";
import Loader from "./Loader";
import UserCard from "./UserCard";

const RightSiderbar = () => {
  const { toast } = useToast();

  const { data: creators, isLoading, isError: isErrorCreators } = useGetUsers();

  if (isErrorCreators) {
    toast({ title: "Something went wrong." });

    return;
  }
  return (
    <div className="user-card custom-scrollbar overflow-scroll md:hidden lg:block">
      <div className="user-container h-full">
        <h2 className="h3-bold">All Creators</h2>
        {isLoading && !creators ? (
          <Loader />
        ) : (
          <ul>
            {creators?.documents.map((creator) => (
              <li
                key={creator?.$id}
                className="flex1 min-w-[300px] w-full my-2"
              >
                <UserCard user={creator} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default RightSiderbar;
