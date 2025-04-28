import { CldImage, CldUploadButton } from "next-cloudinary";
import styled from "styled-components";
import { useState } from "react";
import { StyledImage } from "../PlantCard";

export default function ImageUpload({
  setUploadUrl,
  editPlant,
  isEdit,
  defaultImage,
}) {
  const [uploadResults, setUploadResults] = useState();
  function handleOnUpload(result, widget) {
    setUploadResults(result.info);
    widget.close();
    setUploadUrl(result.info.secure_url);
  }
  console.log(uploadResults);
  return (
    <UploadFieldset>
      <UploadLegend>Upload your own plant</UploadLegend>
      <UploadImageWrapper>
        <UploadImage
          sizes="(max-width: 150px)"
          alt="Upload Image"
          src={uploadResults?.public_id || editPlant?.imageUrl || defaultImage}
          fill="true"
          priority
        />
      </UploadImageWrapper>
      <label>
        <UploadButton
          uploadPreset="ml_default"
          onSuccess={handleOnUpload}
          name="imageUrl"
          id="image-upload"
          type="file"
          accept="image/*"
        />
      </label>
    </UploadFieldset>
  );
}

const UploadFieldset = styled.fieldset`
  border-radius: 10px;
  border: 1px solid var(--highlight);
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  font-size: 14px;
`;

const UploadLegend = styled.legend`
  padding: 2px 5px;
  color: var(--highlight);
`;

const UploadButton = styled(CldUploadButton)``;

const UploadImage = styled(CldImage)`
  object-fit: cover;
  border-radius: 10px;
`;

const UploadImageWrapper = styled.div`
  position: relative;
  width: 50px;
  height: 100px;
`;

export {UploadFieldset, UploadLegend}