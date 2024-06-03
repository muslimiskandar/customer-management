import { Tbody, Td, Tr } from "@chakra-ui/react";
import { TSingleCustomerResponse } from "../../../../../models";
import { useNavigate } from "react-router-dom";
import { maskCardNumber } from "../../../../../utils/maskCardNumbers";

interface IProps {
  singleCustomerData: TSingleCustomerResponse[];
}
export const TableBody: React.FC<IProps> = ({ singleCustomerData }) => {
  const navigate = useNavigate();
  const onRowClickHandler = (id: number) => {
    navigate(`/customer-details/${id}`);
  };
  return (
    <Tbody>
      {singleCustomerData?.map((el) => (
        <Tr
          key={el.id}
          onClick={() => onRowClickHandler(el.id)}
          cursor="pointer"
        >
          <Td>{el.Name}</Td>
          <Td>{el.Surname}</Td>
          <Td>{el.BirthDate}</Td>
          <Td>+{el.GSMNumber}</Td>
          <Td>{el.CardNumber ? maskCardNumber(el.CardNumber) : ""}</Td>
        </Tr>
      ))}
    </Tbody>
  );
};
