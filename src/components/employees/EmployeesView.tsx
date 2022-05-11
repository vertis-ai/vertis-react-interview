import { useGetEmployeesQuery } from "../../store/apis/employeesAPI"
import {EmployeeTable} from "./EmployeeTable";
import {EmployeeCallouts} from "./EmployeeCallouts";

export const EmployeesView = () => {
    const {isLoading} = useGetEmployeesQuery({})

    return (
        <div>
            <h2>Employees</h2>

            {isLoading && <span>LOADING...</span>}

            <EmployeeCallouts />
            <EmployeeTable />

        </div>
    )
}