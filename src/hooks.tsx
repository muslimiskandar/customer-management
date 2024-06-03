import { baseUrl, serviceList } from "./config/serviceList";
import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import {
  TCardClose,
  TSearchBar,
  TSingleCustomerDetails,
  TSingleCustomerResponse,
} from "./models";
import dayjs from "dayjs";

const defaultReqHeaders = {
  headers: {
    apikey: process.env.REACT_APP_ANON_KEY,
    Authorization: "Bearer" + process.env.REACT_APP_ANON_KEY,
  },
};

export const useSearchCustomer = () => {
  const toast = useToast();
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>();

  const searchCustomer = async (data: TSearchBar) => {
    try {
      setLoading(true);
      const result = await axios.get(
        `${baseUrl}${serviceList.search_customer}.994${data.gsmNumber}&select=*`,
        defaultReqHeaders
      );
      setData(result.data);
    } catch (error) {
      toast({
        title: "Xəta baş verdi",
        description: "Biraz sonra yenidən cəhd edin",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return { searchCustomer, loading, data };
};

export const useGetSingleCustomer = () => {
  const toast = useToast();
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>();

  const getSingleCustomer = async (id: string) => {
    try {
      setLoading(true);
      const result = await axios.get(
        `${baseUrl}${serviceList.get_single_customer}.${id}&select=*`,
        defaultReqHeaders
      );
      setData(result.data);
    } catch (error) {
      toast({
        title: "Xəta baş verdi",
        description: "Biraz sonra yenidən cəhd edin",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return { getSingleCustomer, loading, data };
};

export const useGetRelevantCustomerTransactions = () => {
  const toast = useToast();
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>();

  const getCustomerTransactions = async (id: string) => {
    try {
      setLoading(true);
      const result = await axios.get(
        `${baseUrl}${serviceList.transactions}.${id}&select=*`,
        defaultReqHeaders
      );
      setData(result.data);
    } catch (error) {
      toast({
        title: "Xəta baş verdi",
        description: "Biraz sonra yenidən cəhd edin",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return { getCustomerTransactions, loading, data };
};

export const useCreateNewCustomer = () => {
  const toast = useToast();
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>();

  const createNewCustomer = async (data: TSingleCustomerDetails) => {
    const reqData = {
      Name: data.Name,
      Surname: data.Surname,
      BirthDate: dayjs(data.BirthDate).format("DD/MM/YYYY"),
      GSMNumber: "994" + data.GSMNumber,
    };
    try {
      setLoading(true);
      const result = await axios.post(
        `${baseUrl}${serviceList.customers}`,
        reqData,
        {
          headers: {
            apikey: process.env.REACT_APP_ANON_KEY,
            Authorization: "Bearer" + process.env.REACT_APP_ANON_KEY,
            "Content-Type": "application/json",
            Prefer: "return=minimal",
          },
        }
      );
      setData(result.data);
    } catch (error) {
      toast({
        title: "Xəta baş verdi",
        description: "Biraz sonra yenidən cəhd edin",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return { createNewCustomer, loading, data };
};

export const useGetAllCustomers = () => {
  const toast = useToast();
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>();

  const getAllCustomers = async () => {
    try {
      setLoading(true);
      const result = await axios.get(
        `${baseUrl}${serviceList.customers}?select=*`,
        defaultReqHeaders
      );
      setData(result.data);
    } catch (error) {
      toast({
        title: "Xəta baş verdi",
        description: "Biraz sonra yenidən cəhd edin",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return { getAllCustomers, loading, data };
};

export const useChangeCustomerCard = () => {
  const toast = useToast();
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>();

  const changeCustomerCard = async (data: string, id: string) => {
    try {
      setLoading(true);
      const result = await axios.patch(
        `${baseUrl}${serviceList.get_single_customer}.${id}`,
        {
          CardNumber: data,
        },
        {
          headers: {
            apikey: process.env.REACT_APP_ANON_KEY,
            Authorization: "Bearer" + process.env.REACT_APP_ANON_KEY,
            "Content-Type": "application/json",
            Prefer: "return=minimal",
          },
        }
      );
      setData(result.data);
    } catch (error) {
      toast({
        title: "Xəta baş verdi",
        description: "Biraz sonra yenidən cəhd edin",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return { changeCustomerCard, loading, data };
};

export const useDeleteCustomerCardLogger = () => {
  const toast = useToast();
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>();

  const deleteCustomerCardLogger = async (
    data: TSingleCustomerResponse,
    reason: TCardClose
  ) => {
    const reqData = {
      CustomerID: data.id,
      cardCloseReason: reason.cardCloseReason,
      CardNumber: data.CardNumber,
      GSMNumber: data.GSMNumber,
    };
    try {
      setLoading(true);
      const result = await axios.post(
        `${baseUrl}${serviceList.logs}`,
        reqData,
        {
          headers: {
            apikey: process.env.REACT_APP_ANON_KEY,
            Authorization: "Bearer" + process.env.REACT_APP_ANON_KEY,
            "Content-Type": "application/json",
            Prefer: "return=minimal",
          },
        }
      );
      setData(result.data);
    } catch (error) {
      toast({
        title: "Xəta baş verdi",
        description: "Biraz sonra yenidən cəhd edin",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return { deleteCustomerCardLogger, loading, data };
};
