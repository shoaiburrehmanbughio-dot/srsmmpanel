exports.handler = async () => {
  const params = new URLSearchParams();
  params.append('key', process.env.SMM_API_KEY);
  params.append('action', 'services');

  const res = await fetch(process.env.SMM_API_URL, {
    method: 'POST',
    body: params
  });
  const data = await res.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data)
  };
};
