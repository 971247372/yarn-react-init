function templateFunc(obj, data) {
  let computed = JSON.stringify(obj).replace(/\{(\w+)\}/g, function(
    match,
    key
  ) {
    return data[key];
  });
  return JSON.parse(computed);
}
