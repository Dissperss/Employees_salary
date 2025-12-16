import EmployeesListItem from "../employees-list-item/employees-list-item";

import "./employees-list.css";

const EmployeesList = ({ data, onDelete, onToggleProp, onEditSalary }) => {
    const elements = data.map((item) => {
        const { id, ...itemProps } = item;
        return (
            <EmployeesListItem
                key={id}
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleProp={(e) =>
                    onToggleProp(
                        id,
                        e.currentTarget.getAttribute("data-toggle")
                    )
                }
                onEditSalary={(e) => onEditSalary(id, e.currentTarget.value)}
            />
        ); //spread-оператор (разворачивает объект в формате key: value)
    });

    return <ul className="app-list list_group">{elements}</ul>;
};

export default EmployeesList;
