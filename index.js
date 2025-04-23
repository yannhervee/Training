const data = [
    {region: 'US', model: 'A', sales: 150},
    {region: 'US', model: 'B', sales: 120},
    {region: 'US', model: 'C', sales: 350},
    {region: 'EU', model: 'A', sales: 200},
    {region: 'EU', model: 'B', sales: 100},
    {region: 'EU', model: 'C', sales: 250},
    {region: 'CA', model: 'A', sales: 200},
    {region: 'CA', model: 'B', sales: 100},
    {region: 'CA', model: 'C', sales: 230},
    {region: 'CA', model: 'D', sales: 400},
];


console.log("data" , data);

const sum = data.reduce((acc, ele) =>  {

    if(acc[ele.region] == undefined){
        acc[ele.region] = 0;
    }
        acc[ele.region] = acc[ele.region] + ele.sales;

    return acc;
}, {})

const groupedData = data.reduce((acc, ele) => {
    if (!acc[ele.region]) {
        acc[ele.region] = [];
    }
    acc[ele.region].push(ele);
    return acc;
}, {});

console.log("data by group ", groupedData)

console.log("reduce ", sum);

const tableBody = document.querySelector("#data-table tbody");

Object.keys(groupedData).forEach(region => {
    
    const sumRow = document.createElement("tr");
    sumRow.classList.add("sum-row");
    sumRow.innerHTML = `<td>${region} </td><td>Sale</td><td>${sum[region]}</td>`;
    tableBody.appendChild(sumRow);

    
    groupedData[region].forEach(({ model, sales }) => {
        const detailRow = document.createElement("tr");
        detailRow.innerHTML = `<td>${region}</td><td>${model}</td><td>${sales}</td>`;
        tableBody.appendChild(detailRow);
    });
});


const regionFilter = document.getElementById("region-filter");
const modelFilter = document.getElementById("model-filter");

function applyFilters() {
    const regionFilterVal = regionFilter.value;
    const modelFilterVal = modelFilter.value;

    
    tableBody.innerHTML = "";
   
    const filteredData = data.filter(item => {
        const regionMatch = regionFilterVal ? item.region === regionFilterVal : true;
        const modelMatch = modelFilterVal ? item.model === modelFilterVal : true;
        return regionMatch && modelMatch;
    });

    
    const groupedFilteredData = filteredData.reduce((acc, ele) => {
        if (!acc[ele.region]) {
            acc[ele.region] = [];
        }
        acc[ele.region].push(ele);
        return acc;
    }, {});

   
    Object.keys(groupedFilteredData).forEach(region => {

        const sumRow = document.createElement("tr");
        sumRow.classList.add("sum-row");
        sumRow.innerHTML = `<td>${region} </td><td>Sale</td><td>${sum[region]}</td>`;
        tableBody.appendChild(sumRow);
        groupedFilteredData[region].forEach(({ model, sales }) => {
            const detailRow = document.createElement("tr");
            detailRow.innerHTML = `<td>${region}</td><td>${model}</td><td>${sales}</td>`;
            tableBody.appendChild(detailRow);
        });
    });
}

regionFilter.addEventListener("change", applyFilters);
modelFilter.addEventListener("change", applyFilters);

applyFilters();
