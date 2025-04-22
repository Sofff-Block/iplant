export default function ImageUpload({ imageUrl, isEdit }) {
  return (
    <>
      <label htmlFor="image-upload">
        <input name="imageUrl" id="image-upload" type="file" accept="image/*" />
      </label>
    </>
  );
}
