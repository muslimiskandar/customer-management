import { Navbar } from "../../common/Navbar";
import { SearchBar } from "./SearchBar";
import { ViewAllCustomers } from "./ViewAllCustomers";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { searchBarSchema } from "../../../schemas/searchBarSchema";
import { TSearchBar } from "../../../models";
import { NotFoundCustomer } from "./NotFoundCustomer";
import { Loading } from "../../common/Loading";
import { useSearchCustomer } from "../../../hooks";

export const Home: React.FC = () => {
  const {
    loading: singleCustomerLoading,
    data: responseData,
    searchCustomer,
  } = useSearchCustomer();

  const searchMethods = useForm<TSearchBar>({
    mode: "all",
    criteriaMode: "all",
    reValidateMode: "onBlur",
    resolver: yupResolver(searchBarSchema),
  });

  const onSubmit: SubmitHandler<TSearchBar> = async (data: TSearchBar) => {
    searchCustomer(data);
  };
  return (
    <>
      <SearchBar searchMethods={searchMethods} onSubmit={onSubmit} />
      {singleCustomerLoading ? (
        <Loading />
      ) : responseData && responseData.length ? (
        <ViewAllCustomers singleCustomerData={responseData} />
      ) : responseData ? (
        <NotFoundCustomer />
      ) : (
        ""
      )}
    </>
  );
};
