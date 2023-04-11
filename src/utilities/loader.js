const loadedData = async () => {
  const res = await fetch('featured-jobs.json');
  const data = await res.json()
  return data;
};

export default loadedData;
