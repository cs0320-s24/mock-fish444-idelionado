export function mockView(loadedData: string){
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

  map.set("data/data1.csv", data1);
  map.set("data/data2.csv", data2);
  map.set("data/data3.csv", data3);
  map.set("data/data4.csv", data4);
  map.set("data/data5.csv", "Empty CSV");

  if(loadedData === null){
    return "Error: No file loaded";
  } else {
    const result = map.get(loadedData);
    return result;
  }
  
}
