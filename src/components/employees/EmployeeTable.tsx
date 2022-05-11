import {useGetEmployeesQuery} from "../../store/apis/employeesAPI";

const containerStyle = {
    backgroundColor: "lightgray",
    fontSize: 14
}

const column: React.CSSProperties = {
    display: "flex",
    flexDirection: "column"
}

const row: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
}

const cell: React.CSSProperties = {
    border: "1px solid purple",
    padding: 8,
    minWidth: 120
}

export const EmployeeTable = () => {
    const {data: employees} = useGetEmployeesQuery({})

    return (
        <div style={containerStyle}>
            <div style={column}>
                <div style={row}>
                    <div style={cell}>LOCATION</div>
                    <div style={cell}>POSTAL CODE</div>
                </div>
            </div>
            <div style={column}>
                {
                    employees?.map((employee: any) => (
                        <div style={row}>
                            <div style={cell}>
                                {employee?.city}
                            </div>
                            <div style={cell}>
                                {employee?.zipCode}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}