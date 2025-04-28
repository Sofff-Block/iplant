import { CldImage, CldUploadButton } from "next-cloudinary";
import styled from "styled-components";
import { useState } from "react";
import { StyledImage } from "../PlantCard";

export default function ImageUpload({ setUploadUrl, editPlant, isEdit }) {
  const [uploadResults, setUploadResults] = useState();
  function handleOnUpload(result, widget) {
    setUploadResults(result.info);
    widget.close();
    setUploadUrl(result.info.secure_url);
  }
  console.log(uploadResults);
  return (
    <>
      {(isEdit || uploadResults?.public_id) && (
        <UploadImageWrapper>
          <UploadImage
            sizes="(max-width: 150px)"
            alt="Upload Image"
            src={uploadResults?.public_id || editPlant?.imageUrl}
            fill="true"
            priority
          />
        </UploadImageWrapper>
      )}
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
    </>
  );
}

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
