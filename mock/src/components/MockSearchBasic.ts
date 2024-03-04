export function mockSearch(file: string | null, column: string | null, value: string | null){
  const map = new Map<string, any>();
  const data1 = [
    ["Name", "Age", "Major"],
    ["Tom", "21", "English"],
    ["Sam", "20", "Math"],
    ["Sally", "19", "Biology" ]

  ];

  const data2 = [
    ["Fruit", "Color", "Price"],
    ["lemon", "yellow", "$1.50"],
    ["cherries", "red", "$3.00"],
    ["apple", "red", "$2.00"],
    ["orange", "orange", "$1.00"]

  ];



  const data3 = [["the", "sky", "is", "blue"]];
  const data4 = [["it"], ["is"], ["cold"], ["outside"]];
  const data5 = [[]];

  const value1 = ["Tom", "21", "English"]
  const value2 = ["cherries", "red", "$3.00"]

  const value1arr = [value]

  map.set("data/data1.csv", data1);
  map.set("data/data2.csv", data2);
  map.set("data/data3.csv", data3);
  map.set("data/data4.csv", data4);
  map.set("data/data5.csv", "Empty file");

  if((file === null) || (column === null) || (value === null)) {
    return "Error: No file loaded";
  } else if ((file == "data/data1.csv")  && (column == "2") && (value == "English")) {
    return [value1];
  } else if ((file == "data/data2.csv") && (column  == "3") && (value == "red")) {
    return [value2];
  }else{
    return "Error: Incorrect column or value"
  }
    
}
