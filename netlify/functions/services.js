exports.handler = async () => {
  const params = new URLSearchParams();
  params.append('key', process.env.SMM_API_KEY);
  params.append('action', 'services');
  const res = await fetch(process.env.SMM_API_URL, {
    method: 'POST',
    body: params
  });
  let data = await res.json();
  let profit = parseFloat(process.env.PROFIT_PERCENT || 50) / 100;
  if (Array.isArray(data)) {
    data = data.map(s => {
      let oldRate = parseFloat(s.rate);
      s.rate = (oldRate * (1 + profit)).toFixed(2);
      return s;
    });
  }
  return { statusCode: 200, body: JSON.stringify(data) };
};
