const stringifyDate = (date) => {
    const options = {day: 'numeric', month: 'short', year: 'numeric'};
    const newDate = !date ? "undefined" : new Date(Date.parse(date)).toLocaleDateString('en-GB', options);
    return newDate;
}

const update = (node) => {
    let empPayrollData = employeePayrollList.find(empData => empData._id == node.id);
    if (!empPayrollData) return;
    localStorage.setItem('editEmp', JSON.stringify(employeePayrollList));
    window.location.replace(site_properties.add_emp_page);
  }