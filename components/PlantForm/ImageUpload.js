import { CldImage, CldUploadButton } from "next-cloudinary";
import styled from "styled-components";
import { useState } from "react";
import Image from "next/image";
import UploadIcon from "@/public/upload.svg";

export default function ImageUpload({ setUploadUrl, editPlant, defaultImage }) {
  const [uploadResults, setUploadResults] = useState("");
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
        {uploadResults?.public_id ? (
          <UploadImage
            sizes="(max-width: 150px)"
            alt="Upload Image"
            src={uploadResults?.public_id || defaultImage}
            fill="true"
            priority
          />
        ) : (
          <EditImage
            sizes="(max-width: 150px)"
            alt="Upload Image"
            src={editPlant?.imageUrl || defaultImage}
            fill="true"
            priority
          />
        )}
      </UploadImageWrapper>
      <label>
        <UploadButton
          uploadPreset="ml_default"
          onSuccess={handleOnUpload}
          name="imageUrl"
          id="image-upload"
          type="file"
          accept="image/*"
        ><StyledUploadIcon />Upload</UploadButton>
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

const UploadButton = styled(CldUploadButton)`
  all: unset;
  background-color: var(--highlight);
  padding: 5px 10px;
  border-radius: 5px;
  color: var(--surface-light);
  display: flex;
  gap: 5px;
  align-items: center;
  /* border-right: 3px solid var(--highlight-light);
  border-bottom: 3px solid var(--highlight-light); */
`;

const UploadImage = styled(CldImage)`
  object-fit: cover;
  border-radius: 10px;
`;

const EditImage = styled(Image)`
  object-fit: cover;
  border-radius: 10px;
`;
const UploadImageWrapper = styled.div`
  position: relative;
  width: 100px;
  height: 150px;
`;

const StyledUploadIcon = styled(UploadIcon)`
  width: 20px;
  color: var(--surface-light);
`;
export { UploadFieldset, UploadLegend };
