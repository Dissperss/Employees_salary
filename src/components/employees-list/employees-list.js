import EmployeesListItem from "../employees-list-item/employees-list-item";

import "./employees-list.css";

const EmployeesList = ({ data }) => {
    const elements = data.map((item) => {
        const { id, ...itemProps } = item;
        return <EmployeesListItem key={id} {...itemProps} />; //spread-оператор (разворачивает объект в формате key: value)
    });

    return <ul className="app-list list_group">{elements}</ul>;
};

export default EmployeesList;
