export const baseUrl = "https://mtlmhqfjplpqbpyrpgaj.supabase.co/rest/v1/";

export const serviceList = {
  customers: "customers",
  logs: "auditLogs",
  search_customer: "customers?GSMNumber=eq",
  get_single_customer: "customers?id=eq",
  transactions: "transactions?CustomerID=eq",
};
