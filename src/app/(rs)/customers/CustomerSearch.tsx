import Form from "next/form";
import { Input } from "@/components/ui/input";
import SearchButton from "@/components/SearchButton";

const CustomerSearch = () => {
  return (
    <Form action={"/customers"} className="flex gap-2 items-center mt-1">
      <Input
        name="searchText"
        type="text"
        placeholder="Search Customers"
        className="w-full"
      />
      <SearchButton  />
    </Form>
  );
};

export default CustomerSearch;
