const determineReviewColor = percentage => {
  let color = '';
  switch (true) {
    case percentage >= 70:
      color = '#1cb114';
      break;
    case percentage > 30:
      color = '#c3c737';
      break;
    case percentage === 0:
      color = '#64645b';
      break;
    default:
      color = '#cd1313';
  }
  return color;
};
export default determineReviewColor;
