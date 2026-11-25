exports.handler = async (event) => {
  const { service, link, quantity } = JSON.parse(event.body);

  // FAST SMM STORE ko order bhejo
  const params = new URLSearchParams();
  params.append('key', process.env.SMM_API_KEY);
  params.append('action', 'add');
  params.append('service', service);
  params.append('link', link);
  params.append('quantity', quantity);

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
