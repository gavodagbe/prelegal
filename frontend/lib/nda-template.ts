export interface NdaFormData {
  purpose: string;
  effectiveDate: string;
  mndaTermType: "expires" | "untilTerminated";
  mndaTermYears: number;
  confidentialityTermType: "years" | "perpetuity";
  confidentialityTermYears: number;
  governingLaw: string;
  jurisdictionCity: string;
  jurisdictionState: string;
  modifications: string;
  party1Name: string;
  party1Title: string;
  party1Company: string;
  party1Address: string;
  party2Name: string;
  party2Title: string;
  party2Company: string;
  party2Address: string;
}

export const defaultFormData: NdaFormData = {
  purpose:
    "Evaluating whether to enter into a business relationship with the other party.",
  effectiveDate: new Date().toISOString().split("T")[0],
  mndaTermType: "expires",
  mndaTermYears: 1,
  confidentialityTermType: "years",
  confidentialityTermYears: 1,
  governingLaw: "",
  jurisdictionCity: "",
  jurisdictionState: "",
  modifications: "",
  party1Name: "",
  party1Title: "",
  party1Company: "",
  party1Address: "",
  party2Name: "",
  party2Title: "",
  party2Company: "",
  party2Address: "",
};

function yearLabel(n: number): string {
  return n === 1 ? "1 year" : `${n} years`;
}

function formatDate(dateStr: string): string {
  if (!dateStr) return "___________";
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function blank(val: string, placeholder: string): string {
  return val.trim() || placeholder;
}

export function renderCoverPage(data: NdaFormData): string {
  const mndaTerm =
    data.mndaTermType === "expires"
      ? `Expires ${yearLabel(data.mndaTermYears)} from Effective Date.`
      : "Continues until terminated in accordance with the terms of the MNDA.";

  const confTerm =
    data.confidentialityTermType === "years"
      ? `${yearLabel(data.confidentialityTermYears)} from Effective Date, but in the case of trade secrets until Confidential Information is no longer considered a trade secret under applicable laws.`
      : "In perpetuity.";

  const jurisdiction = [data.jurisdictionCity, data.jurisdictionState]
    .filter(Boolean)
    .join(", ");

  return `
<h1>Mutual Non-Disclosure Agreement</h1>

<p>This Mutual Non-Disclosure Agreement (the &ldquo;MNDA&rdquo;) consists of: (1) this Cover Page (&ldquo;<strong>Cover Page</strong>&rdquo;) and (2) the Common Paper Mutual NDA Standard Terms Version 1.0 (&ldquo;<strong>Standard Terms</strong>&rdquo;). Any modifications of the Standard Terms should be made on the Cover Page, which will control over conflicts with the Standard Terms.</p>

<h2>Purpose</h2>
<p>${blank(data.purpose, "[Purpose]")}</p>

<h2>Effective Date</h2>
<p>${formatDate(data.effectiveDate)}</p>

<h2>MNDA Term</h2>
<p>${mndaTerm}</p>

<h2>Term of Confidentiality</h2>
<p>${confTerm}</p>

<h2>Governing Law &amp; Jurisdiction</h2>
<p><strong>Governing Law:</strong> ${blank(data.governingLaw, "[State]")}</p>
<p><strong>Jurisdiction:</strong> ${blank(jurisdiction, "[City/County and State]")}</p>

${data.modifications.trim() ? `<h2>MNDA Modifications</h2>\n<p>${data.modifications.trim()}</p>` : ""}

<p>By signing this Cover Page, each party agrees to enter into this MNDA as of the Effective Date.</p>

<table>
  <thead>
    <tr><th></th><th>Party 1</th><th>Party 2</th></tr>
  </thead>
  <tbody>
    <tr><td>Signature</td><td></td><td></td></tr>
    <tr><td>Print Name</td><td>${blank(data.party1Name, "___________")}</td><td>${blank(data.party2Name, "___________")}</td></tr>
    <tr><td>Title</td><td>${blank(data.party1Title, "___________")}</td><td>${blank(data.party2Title, "___________")}</td></tr>
    <tr><td>Company</td><td>${blank(data.party1Company, "___________")}</td><td>${blank(data.party2Company, "___________")}</td></tr>
    <tr><td>Notice Address</td><td>${blank(data.party1Address, "___________")}</td><td>${blank(data.party2Address, "___________")}</td></tr>
    <tr><td>Date</td><td></td><td></td></tr>
  </tbody>
</table>

<p class="text-xs text-stone-400 mt-4">Common Paper Mutual Non-Disclosure Agreement (Version 1.0) free to use under CC BY 4.0.</p>
`;
}

export function renderStandardTerms(data: NdaFormData): string {
  const purpose = blank(data.purpose, "[Purpose]");
  const governingLaw = blank(data.governingLaw, "[Governing Law]");
  const jurisdiction = blank(
    [data.jurisdictionCity, data.jurisdictionState].filter(Boolean).join(", "),
    "[Jurisdiction]"
  );

  const mndaTerm =
    data.mndaTermType === "expires"
      ? `${yearLabel(data.mndaTermYears)} from the Effective Date`
      : "until terminated by either party";

  const confTerm =
    data.confidentialityTermType === "years"
      ? `${yearLabel(data.confidentialityTermYears)} from the Effective Date`
      : "in perpetuity";

  return `
<h1>Standard Terms</h1>

<p><strong>1. Introduction.</strong> This Mutual Non-Disclosure Agreement (which incorporates these Standard Terms and the Cover Page (defined below)) (&ldquo;<strong>MNDA</strong>&rdquo;) allows each party (&ldquo;<strong>Disclosing Party</strong>&rdquo;) to disclose or make available information in connection with the Purpose (<em>${purpose}</em>) which (1) the Disclosing Party identifies to the receiving party (&ldquo;<strong>Receiving Party</strong>&rdquo;) as &ldquo;confidential&rdquo;, &ldquo;proprietary&rdquo;, or the like or (2) should be reasonably understood as confidential or proprietary due to its nature and the circumstances of its disclosure (&ldquo;<strong>Confidential Information</strong>&rdquo;). Each party&rsquo;s Confidential Information also includes the existence and status of the parties&rsquo; discussions and information on the Cover Page. Confidential Information includes technical or business information, product designs or roadmaps, requirements, pricing, security and compliance documentation, technology, inventions and know-how. To use this MNDA, the parties must complete and sign a cover page incorporating these Standard Terms (&ldquo;<strong>Cover Page</strong>&rdquo;). Each party is identified on the Cover Page and capitalized terms have the meanings given herein or on the Cover Page.</p>

<p><strong>2. Use and Protection of Confidential Information.</strong> The Receiving Party shall: (a) use Confidential Information solely for the Purpose; (b) not disclose Confidential Information to third parties without the Disclosing Party&rsquo;s prior written approval, except that the Receiving Party may disclose Confidential Information to its employees, agents, advisors, contractors and other representatives having a reasonable need to know for the Purpose, provided these representatives are bound by confidentiality obligations no less protective of the Disclosing Party than the applicable terms in this MNDA and the Receiving Party remains responsible for their compliance with this MNDA; and (c) protect Confidential Information using at least the same protections the Receiving Party uses for its own similar information but no less than a reasonable standard of care.</p>

<p><strong>3. Exceptions.</strong> The Receiving Party&rsquo;s obligations in this MNDA do not apply to information that it can demonstrate: (a) is or becomes publicly available through no fault of the Receiving Party; (b) it rightfully knew or possessed prior to receipt from the Disclosing Party without confidentiality restrictions; (c) it rightfully obtained from a third party without confidentiality restrictions; or (d) it independently developed without using or referencing the Confidential Information.</p>

<p><strong>4. Disclosures Required by Law.</strong> The Receiving Party may disclose Confidential Information to the extent required by law, regulation or regulatory authority, subpoena or court order, provided (to the extent legally permitted) it provides the Disclosing Party reasonable advance notice of the required disclosure and reasonably cooperates, at the Disclosing Party&rsquo;s expense, with the Disclosing Party&rsquo;s efforts to obtain confidential treatment for the Confidential Information.</p>

<p><strong>5. Term and Termination.</strong> This MNDA commences on the Effective Date (${formatDate(data.effectiveDate)}) and expires at the end of the MNDA Term (${mndaTerm}). Either party may terminate this MNDA for any or no reason upon written notice to the other party. The Receiving Party&rsquo;s obligations relating to Confidential Information will survive for the Term of Confidentiality (${confTerm}), despite any expiration or termination of this MNDA.</p>

<p><strong>6. Return or Destruction of Confidential Information.</strong> Upon expiration or termination of this MNDA or upon the Disclosing Party&rsquo;s earlier request, the Receiving Party will: (a) cease using Confidential Information; (b) promptly after the Disclosing Party&rsquo;s written request, destroy all Confidential Information in the Receiving Party&rsquo;s possession or control or return it to the Disclosing Party; and (c) if requested by the Disclosing Party, confirm its compliance with these obligations in writing. As an exception to subsection (b), the Receiving Party may retain Confidential Information in accordance with its standard backup or record retention policies or as required by law, but the terms of this MNDA will continue to apply to the retained Confidential Information.</p>

<p><strong>7. Proprietary Rights.</strong> The Disclosing Party retains all of its intellectual property and other rights in its Confidential Information and its disclosure to the Receiving Party grants no license under such rights.</p>

<p><strong>8. Disclaimer.</strong> ALL CONFIDENTIAL INFORMATION IS PROVIDED &ldquo;AS IS&rdquo;, WITH ALL FAULTS, AND WITHOUT WARRANTIES, INCLUDING THE IMPLIED WARRANTIES OF TITLE, MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.</p>

<p><strong>9. Governing Law and Jurisdiction.</strong> This MNDA and all matters relating hereto are governed by, and construed in accordance with, the laws of the State of ${governingLaw}, without regard to the conflict of laws provisions of such state. Any legal suit, action, or proceeding relating to this MNDA must be instituted in the federal or state courts located in ${jurisdiction}. Each party irrevocably submits to the exclusive jurisdiction of such courts in any such suit, action, or proceeding.</p>

<p><strong>10. Equitable Relief.</strong> A breach of this MNDA may cause irreparable harm for which monetary damages are an insufficient remedy. Upon a breach of this MNDA, the Disclosing Party is entitled to seek appropriate equitable relief, including an injunction, in addition to its other remedies.</p>

<p><strong>11. General.</strong> Neither party has an obligation under this MNDA to disclose Confidential Information to the other or proceed with any proposed transaction. Neither party may assign this MNDA without the prior written consent of the other party, except that either party may assign this MNDA in connection with a merger, reorganization, acquisition or other transfer of all or substantially all its assets or voting securities. Any assignment in violation of this Section is null and void. This MNDA will bind and inure to the benefit of each party&rsquo;s permitted successors and assigns. Waivers must be signed by the waiving party&rsquo;s authorized representative and cannot be implied from conduct. If any provision of this MNDA is held unenforceable, it will be limited to the minimum extent necessary so the rest of this MNDA remains in effect. This MNDA (including the Cover Page) constitutes the entire agreement of the parties with respect to its subject matter, and supersedes all prior and contemporaneous understandings, agreements, representations, and warranties, whether written or oral, regarding such subject matter. This MNDA may only be amended, modified, waived, or supplemented by an agreement in writing signed by both parties. Notices, requests and approvals under this MNDA must be sent in writing to the email or postal addresses on the Cover Page and are deemed delivered on receipt. This MNDA may be executed in counterparts, including electronic copies, each of which is deemed an original and which together form the same agreement.</p>

<p class="text-xs text-stone-400 mt-4">Common Paper Mutual Non-Disclosure Agreement (Version 1.0) free to use under CC BY 4.0.</p>
`;
}
