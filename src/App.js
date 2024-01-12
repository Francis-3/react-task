import './App.css';
import axios from 'axios';
import moment from 'moment'

var url = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=RIBXT3XYLI69PC0Q';
const { 'Meta Data': data1, 'Time Series (5min)': data2 } = await axios.get(url).then(res => res.data);
function App() {
  return (
    <div className="container">
      <div class='m-4'>
        {
          Object.keys(data1).map((key, idx) => (
            <div class="d-flex justify-self-start" key={idx}><label class='font-bold'>{key}: </label> {data1[key]}</div>
          ))
        }
      </div>

      <div class="relative overflow-x-auto shadow-md sm:rounded-lg mx-4">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                Time Series (5min)
              </th>
              <th scope="col" class="px-3 py-3 bg-gray-50 dark:bg-gray-800">
                Open
              </th>
              <th scope="col" class="px-3 py-3 bg-gray-50 dark:bg-gray-800">
                High
              </th>
              <th scope="col" class="px-3 py-3 bg-gray-50 dark:bg-gray-800">
                Low
              </th>
              <th scope="col" class="px-3 py-3 bg-gray-50 dark:bg-gray-800">
                Close
              </th>
              <th scope="col" class="px-3 py-3 bg-gray-50 dark:bg-gray-800">
                Volume
              </th>
            </tr>
          </thead>
          <tbody>
            {
              Object.keys(data2).map((key, idx) => (
                <tr class="border-b border-gray-200 dark:border-gray-700" key={idx}>
                  <td class="px-3 py-4">
                    {moment(key).format('LLLL')}
                  </td>
                  {
                    Object.keys(data2[key]).map((innerKey, innerId) => (
                      <td class="px-3 py-4" key={innerId}>
                        {data2[key][innerKey]}
                      </td>
                    ))
                  }
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default App;
