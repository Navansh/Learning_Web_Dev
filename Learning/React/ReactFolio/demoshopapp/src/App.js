import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate';
import Card from './components/Card';
function App() {
  const itemTwoName = "Tide";
  const response = [
    {
      itemName : "Nirma",
      itemDate : "203",
      itemMonth : "June",
      itemYear : "1998"
    },
    {
      itemName : "Nirma2",
      itemDate : "202",
      itemMonth : "June2",
      itemYear : "19982"
    },
    {
      itemName : "Nirma3",
      itemDate : "203",
      itemMonth : "June3",
      itemYear : "19983"
    }
  ];
  return (
    <div>
    <Card>
      <Item name={response[0].itemName}>If you want to print this...</Item>
      <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemYear}></ItemDate>

      <Item name={itemTwoName}></Item>
      <ItemDate day="23" month="July" year="1999"></ItemDate>

      <Item name={response[2].itemName}></Item>
      <ItemDate day="24" month="August" year="2000"></ItemDate>
      <div className="App"> Hello Namaste </div>
    </Card>
    </div>
    

  );
}

export default App;
