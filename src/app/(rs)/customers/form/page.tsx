import { getCustomer } from "@/lib/queries/getCustomer";
import { BackButton } from "@/components/BackButton";
import CustomerForm from "@/app/(rs)/customers/form/CustomerForm";

export default async function CustomersFormPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  try {
    const { customerId } = await searchParams;

    if (customerId) {
      const customer = await getCustomer(parseInt(customerId));
      console.log(customer);

      if (!customer) {
        return (
          <>
            <h2 className="text-2xl mb-2">
              Customer ID #{customerId} not found
              <BackButton title="Go Back" vartiants={"default"} />
            </h2>
          </>
        );
      }

      // form here
      return <CustomerForm customer={customer} />;
    } else {
      // new customer form here
      return <CustomerForm />;
    }
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
  }
}
