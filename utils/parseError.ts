export const parseError = (error: any): string => {
  if (error) {
    if (typeof error?.message === "string") {
      return error.message;
    }
  }
  return "Unexpected error occurred";
};
