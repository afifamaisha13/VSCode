function loadDept(faculty) {
    if (faculty === "") {
        document.getElementById("output").innerHTML = "";
        return;
    }

    fetch("/departments?faculty=" + faculty)
        .then(res => res.json())
        .then(data => {
            let html = "";
            data.forEach(d => {
                html += "<li>" + d.dept + "</li>";
            });
            document.getElementById("output").innerHTML = html;
        });
}