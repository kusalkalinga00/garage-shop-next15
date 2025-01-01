import { createSafeActionClient } from "next-safe-action";
import { z } from "zod";
import * as Sentry from "@sentry/nextjs";

export const actionClient = createSafeActionClient({
  defineMetadataSchema() {
    return z.object({
      actionName: z.string(),
    });
  },

  handleServerError(e, utils) {
    
    const { clientInput, metadata } = utils;
    Sentry.captureException(e, (scope) => {
      scope.clear();
      scope.setContext("serverError", {
        message: e.message,
      });
      scope.setContext("metadata", {
        actionName: metadata.actionName,
      });
      scope.setContext("clientInput", {
        clientInput,
      });
      return scope;
    });

    if (e.constructor.name === "NeonDbError") {
      return "Database error : Your data did not save. Please try again.";
    }

    return e.message;
  },
});