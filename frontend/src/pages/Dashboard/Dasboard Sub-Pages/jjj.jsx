  // Sample data for TimelineItems
  const timelineData = [
    {
      date: "2023-02-08",
      time: "10:20 pm",
      icon: <PenLine size={16} className="text-white" />,
      user: "Jasmine Ming • Admin",
      message:
        "Approved an event request by Ethan Kior scheduled for the 2023-03-22",
    },
    {
      date: "2023-02-08",
      time: "12:35 pm",
      icon: <PenLine size={16} className="text-white" />,
      user: "Joachim Anderson • Admin",
      message:
        "Approved an event request by Ethan Kior scheduled for the 2023-03-22",
    },
    {
      date: "2023-02-10",
      time: "3:15 pm",
      icon: <CalendarCheck size={16} className="text-white" />,
      user: "John Doe • User",
      message: "Completed a task on 2023-02-10",
    },
    {
      date: "2023-02-17",
      time: "2:15 pm",
      icon: <CalendarCheck size={16} className="text-white" />,
      user: "Jane Doe • User",
      message: "Completed a task on 2023-02-10",
    },
    // Add more objects with unique data for additional TimelineItems
    {
      date: "2023-03-08",
      time: "10:20 pm",
      icon: <PenLine size={16} className="text-white" />,
      user: "Rashad McCants • Admin",
      message:
        "Approved an event request by Ethan Kior scheduled for the 2023-03-22",
    },
    {
      date: "2023-03-08",
      time: "12:35 pm",
      icon: <PenLine size={16} className="text-white" />,
      user: "Johsiah Johnson • Admin",
      message:
        "Approved an event request by Ethan Kior scheduled for the 2023-03-22",
    },
    {
      date: "2023-03-10",
      time: "3:15 pm",
      icon: <CalendarCheck size={16} className="text-white" />,
      user: "Brandon Jennings • User",
      message: "Completed a task on 2023-02-10",
    },
    {
      date: "2023-03-17",
      time: "2:15 pm",
      icon: <CalendarCheck size={16} className="text-white" />,
      user: "Gilbert Areans • User",
      message: "Completed a task on 2023-02-10",
    },
  ];

  // Group timeline data by month and year
  const groupedTimelineData = timelineData.reduce((groups, item) => {
    const itemDate = new Date(item.date);
    const year = itemDate.getFullYear();
    const month = itemDate.getMonth() + 1; // Months are zero-indexed

    const key = `${year}-${month}`;

    if (!groups[key]) {
      groups[key] = [];
    }

    groups[key].push(item);

    return groups;
  }, {});