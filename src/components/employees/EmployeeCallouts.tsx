const calloutHeader: React.CSSProperties = {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8
}

const calloutRow: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
    height: 80,
}

const callout: React.CSSProperties = {
    borderRadius: 8,
    padding: 8,
    backgroundColor: "lavender",
    border: "1px solid purple",
    fontSize: 14,
    width: 100,
    marginRight: 10
}

export const EmployeeCallouts = () => {
    return (
        <div style={calloutRow}>
            <div style={callout}>
                <div style={calloutHeader}>
                    Number of Employees
                </div>
                <div>fill me in</div>
            </div>

            <div style={callout}>
                <div style={calloutHeader}>
                    Average Tenure
                </div>
                <div>fill me in</div>
            </div>
        </div>
    )
}