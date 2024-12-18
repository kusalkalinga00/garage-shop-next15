import { getCustomer } from "@/lib/queries/getCustomer";
import { getTicket } from "@/lib/queries/getTicket";
import { BackButton } from "@/components/BackButton";
import TicketForm from "@/app/(rs)/tickets/form/TicketForm";

export default async function TicketsFormPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  try {
    const { customerId, ticketId } = await searchParams;

    if (!customerId && !ticketId) {
      return (
        <>
          <h2 className="text-2xl mb-2">
            Ticket Id or Customer Id not found !
            <BackButton title="Go Back" vartiants={"default"} />
          </h2>
        </>
      );
    }

    // New ticket form

    if (customerId) {
      const customer = await getCustomer(parseInt(customerId));

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

      if (!customer.active) {
        return (
          <>
            <h2 className="text-2xl mb-2">
              Customer ID #{customerId} is not active
              <BackButton title="Go Back" vartiants={"default"} />
            </h2>
          </>
        );
      }

      // ticket form here
      console.log("customer =>", customer);
      return <TicketForm customer={customer} />;
    }

    // Edit ticket form

    if (ticketId) {
      const ticket = await getTicket(parseInt(ticketId));

      if (!ticket) {
        return (
          <>
            <h2 className="text-2xl mb-2">
              Ticket ID #{ticketId} not found
              <BackButton title="Go Back" vartiants={"default"} />
            </h2>
          </>
        );
      }

      const customer = await getCustomer(ticket.customerId);

      // ticket form here
      console.log("ticket =>", ticket);
      console.log("customer =>", customer);
      return <TicketForm customer={customer} ticket={ticket} />;
    }
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
  }
}
