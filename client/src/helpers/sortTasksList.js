const sortTasks = (bikes) => {
  const statusOrder = { Planned: 1, InProgress: 2, Done: 3 };

  return bikes.sort((a, b) => statusOrder[a.status] - statusOrder[b.status]);
};

export default sortTasks;
