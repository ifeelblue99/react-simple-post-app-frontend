// encode to base64
export default function encodeImage(fileUrl) {
  const reader = new FileReader();
  reader.onloadend = () => {
    return reader.result;
  };
  reader.readAsDataURL(fileUrl);
}
