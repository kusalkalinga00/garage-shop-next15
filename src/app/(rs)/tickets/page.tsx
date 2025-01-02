import TicketSearch from "@/app/(rs)/tickets/TicketSearch";
import { getOpenTickets } from "@/lib/queries/getOpenTickets";
import { getTicketSearchResults } from "@/lib/queries/getTicketSearchResults";
import TicketTable from "@/app/(rs)/tickets/TicketTable";

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
        {result.length ? (
          <TicketTable data={result} />
        ) : (
          <p className="mt-4">No Open Tickets</p>
        )}
      </>
    );
  }

  // query  db
  const results = await getTicketSearchResults(searchText);

  // return results
  return (
    <>
      <TicketSearch />
      {results.length ? (
        <TicketTable data={results} />
      ) : (
        <p className="mt-4">No Results</p>
      )}
    </>
  );
}
