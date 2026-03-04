"use client";

import { NdaFormData, renderCoverPage, renderStandardTerms } from "@/lib/nda-template";

interface NdaPreviewProps {
  formData: NdaFormData;
}

export default function NdaPreview({ formData }: NdaPreviewProps) {
  const coverPageHtml = renderCoverPage(formData);
  const standardTermsHtml = renderStandardTerms(formData);

  return (
    <div id="nda-preview" className="nda-document">
      <div dangerouslySetInnerHTML={{ __html: coverPageHtml }} />
      <hr className="document-divider" />
      <div dangerouslySetInnerHTML={{ __html: standardTermsHtml }} />
    </div>
  );
}
