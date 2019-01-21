function templateFunc(obj, data) {
  let computed = JSON.stringify(obj).replace(/\{(\w+)\}/g, function(
    match,
    key
  ) {
    return data[key];
  });
  return JSON.parse(computed);
}

export default canvas => {
  // const imgUri = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream'); // 获取生成的图片的url
  // window.open(imgUri);
  const url = canvas.toDataURL('image/png');
  const a = document.createElement('a');
  const event = new MouseEvent('click');
  // 下载的图片名称
  a.download = new Date().getTime();
  a.href = url;
  a.dispatchEvent(event);
};
