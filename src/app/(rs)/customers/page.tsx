import CustomerSearch from "@/app/(rs)/customers/CustomerSearch";
import { getCustomerSearchResults } from "@/lib/queries/getCustomerSearchResults";
import * as Sentry from "@sentry/nextjs";
import CustomerTable from "@/app/(rs)/customers/CustomerTable";

export const metadata = {
  title: "Customers Search",
};

export default async function Customers({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const { searchText } = await searchParams;

  if (!searchText) return <CustomerSearch />;

  // query db
  const span = Sentry.startInactiveSpan({
    name: "getCustomerSearchResults-2",
  });
  const results = await getCustomerSearchResults(searchText);
  span.end();

  // return results
  return (
    <>
      <CustomerSearch />
      {results.length ? (
        <CustomerTable data={results} />
      ) : (
        <p className="mt-4">No results</p>
      )}
    </>
  );
}
