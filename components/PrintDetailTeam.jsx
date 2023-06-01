import htmlToImage from 'html-to-image'

export const printHTMLToPNG = (element) => {
  htmlToImage.toPng(element)
    .then(function (dataUrl) {
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = 'detail_team.png';
      link.click();
    })
    .catch(function (error) {
      console.error('Error:', error);
    });
};