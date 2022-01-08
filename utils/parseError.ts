export const parseError = (error: unknown): string => {
  if (error) {
    if (typeof error?.message === "string") {
      return error.message;
    }
  }
  return "Unexpected error occurred";
};
