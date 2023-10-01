import React from 'react';

const MyEventItem = ({ title, date, time, status, amount, uniqueKey, textColor, bgColor }) => {
  const statusStyle = {
    color: textColor || 'green', // Default to green if no textColor is provided
    backgroundColor: bgColor || 'lightgreen', // Default to lightgreen if no bgColor is provided
  };

  return (
    <tbody className="text-sm bg-white divide-y divide-gray-200" key={uniqueKey}>
      {/* Row-Item-1 */}
      <tr>
        <td className="w-20 px-3 py-4 text-center">
          <input type="checkbox" name="select" className="w-4 h-4 rounded opacity-50" />
        </td>
        {/* Row Items */}
        <td className="px-3 py-4 text-gray-600 ">{title}</td> 
        <td className="px-3 py-4 text-gray-500 ">{date}</td>
        <td className="px-3 py-4 text-gray-500 ">{time}</td>
        <td className="px-3 py-4">
          <span
            className="px-4 py-1 text-sm rounded-full"
            style={statusStyle}
          >
            {status}
          </span>
        </td>
        <td className="px-3 py-4 text-right text-gray-500 ">{amount}</td>
        {/* //---- end of Row Items ----// */}
        <td className="w-20 px-3 py-2 text-center text-gray-500 ">
          <div className="flex place-content-center">
            <a href="#!">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
              </svg>
            </a>
          </div>
        </td>
      </tr>
      {/* //---- end of Row-Item-1 ----// */}
    </tbody>
  );
}

export default MyEventItem;
