import TicketSearch from "@/app/(rs)/tickets/TicketSearch";
import { getOpenTickets } from "@/lib/queries/getOpenTickets";
import { getTicketSearchResults } from "@/lib/queries/getTicketSearchResults";

export const metadata = {
  title: "Tickets Search",
};

export default async function Tickets({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const { searchText } = await searchParams;

  if (!searchText) {
    // query default results
    const result = await getOpenTickets();
    return (
      <>
        <TicketSearch />
        <p>{JSON.stringify(result)}</p>
      </>
    );
  }

  // query  db
  const results = await getTicketSearchResults(searchText);

  // return results
  return (
    <>
      <TicketSearch />
      <p>{JSON.stringify(results)}</p>
    </>
  );
}
