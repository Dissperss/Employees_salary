import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import Appfilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import "./app.css";

function App() {
    const data = [
        { name: "Antony", salary: 800, increase: true, id: 1 },
        { name: "Nikita", salary: 300, increase: false, id: 2 },
        { name: "Neo", salary: 5000, increase: false, id: 3 },
        { name: "Bea", salary: 50070, increase: true, id: 4 },
        { name: "Leo", salary: 356, increase: false, id: 5 },
    ];

    return (
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <Appfilter />
            </div>

            <EmployeesList data={data} />
            <EmployeesAddForm />
        </div>
    );
}

export default App;
