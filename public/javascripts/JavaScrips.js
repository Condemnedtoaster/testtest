var tableData = [
    {
      "id": 100,
      "bygning" : "Femøvej",
      "lokale" : "001",
      "temperatur" : "23.9",
      "luftfugtighed": 37,
      "co2": 466,
      "luftkvalitet" : 3.07,
      "lysniveau" : 346,
      "lysfarve" :  2986,
      "lydniveau" : 36
    },
    {
      "id": 101,
      "bygning" : "Femøvej",
      "lokale" : "002",
      "temperatur" : "12.9",
      "luftfugtighed": 27,
      "co2": 422,
      "luftkvalitet" : 2.07,
      "lysniveau" : 396,
      "lysfarve" :  3111,
      "lydniveau" : 35
    },
    {
      "id": 102,
      "bygning" : "Femøvej",
      "lokale" : "101",
      "temperatur" : "23.5",
      "luftfugtighed": 33,
      "co2": 566,
      "luftkvalitet" : 3.24,
      "lysniveau" : 312,
      "lysfarve" :  2989,
      "lydniveau" : 32
    },
    {
      "id": 103,
      "bygning" : "Maglemølle",
      "lokale" : "101",
      "temperatur" : "34.9",
      "luftfugtighed": 37,
      "co2": 399,
      "luftkvalitet" : 3.17,
      "lysniveau" : 446,
      "lysfarve" :  2532,
      "lydniveau" : 82
    },
    {
      "id": 104,
      "bygning" : "Maglemølle",
      "lokale" : "102",
      "temperatur" : "23.2",
      "luftfugtighed": 32,
      "co2": 189,
      "luftkvalitet" : 3.12,
      "lysniveau" : 336,
      "lysfarve" :  2678,
      "lydniveau" : 44
    } 
  ]
  
/*
	1 - Loop Through Array & Access each value
  2 - Create Table Rows & append to table
*/


for (var i in tableData){
    //Keep in mind we are using "Template Litterals to create rows"
    var row = `<tr>
                                <td>${tableData[i].rank}</td>
                                <td>${tableData[i].first_name}</td>
                  <td>${tableData[i].last_name}</td>
                  `
      var table = $('#table-body')
    table.append(row)
  }
  