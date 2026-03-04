"use client";

import { NdaFormData } from "@/lib/nda-template";

interface NdaFormProps {
  formData: NdaFormData;
  onChange: (data: NdaFormData) => void;
}

export default function NdaForm({ formData, onChange }: NdaFormProps) {
  function update(fields: Partial<NdaFormData>) {
    onChange({ ...formData, ...fields });
  }

  return (
    <div className="space-y-8">
      {/* Purpose */}
      <section className="animate-in animate-in-delay-1">
        <h3 className="form-section-title text-lg mb-4" style={{ color: "var(--ink)" }}>
          Agreement Details
        </h3>

        <div className="space-y-4">
          <div>
            <label className="form-label block mb-1.5">Purpose</label>
            <textarea
              className="form-input form-textarea"
              value={formData.purpose}
              onChange={(e) => update({ purpose: e.target.value })}
              placeholder="How Confidential Information may be used"
              rows={3}
            />
          </div>

          <div>
            <label className="form-label block mb-1.5">Effective Date</label>
            <input
              type="date"
              className="form-input"
              value={formData.effectiveDate}
              onChange={(e) => update({ effectiveDate: e.target.value })}
            />
          </div>
        </div>
      </section>

      {/* MNDA Term */}
      <section className="animate-in animate-in-delay-2">
        <h3 className="form-section-title text-lg mb-4" style={{ color: "var(--ink)" }}>
          Terms
        </h3>

        <div className="space-y-4">
          <div>
            <label className="form-label block mb-2">MNDA Term</label>
            <div className="space-y-2">
              <div
                className={`radio-option ${formData.mndaTermType === "expires" ? "selected" : ""}`}
                onClick={() => update({ mndaTermType: "expires" })}
              >
                <div className="radio-dot">
                  <div className="radio-dot-inner" />
                </div>
                <div className="flex-1">
                  <span className="text-sm" style={{ color: "var(--ink)" }}>
                    Expires after{" "}
                    <input
                      type="number"
                      min={1}
                      max={99}
                      className="form-input inline-block w-16 text-center mx-1 py-1 px-2"
                      value={formData.mndaTermYears}
                      onChange={(e) =>
                        update({ mndaTermYears: parseInt(e.target.value) || 1 })
                      }
                      onClick={(e) => e.stopPropagation()}
                    />{" "}
                    year(s) from Effective Date
                  </span>
                </div>
              </div>
              <div
                className={`radio-option ${formData.mndaTermType === "untilTerminated" ? "selected" : ""}`}
                onClick={() => update({ mndaTermType: "untilTerminated" })}
              >
                <div className="radio-dot">
                  <div className="radio-dot-inner" />
                </div>
                <span className="text-sm" style={{ color: "var(--ink)" }}>
                  Continues until terminated
                </span>
              </div>
            </div>
          </div>

          <div>
            <label className="form-label block mb-2">Term of Confidentiality</label>
            <div className="space-y-2">
              <div
                className={`radio-option ${formData.confidentialityTermType === "years" ? "selected" : ""}`}
                onClick={() => update({ confidentialityTermType: "years" })}
              >
                <div className="radio-dot">
                  <div className="radio-dot-inner" />
                </div>
                <div className="flex-1">
                  <span className="text-sm" style={{ color: "var(--ink)" }}>
                    <input
                      type="number"
                      min={1}
                      max={99}
                      className="form-input inline-block w-16 text-center mx-1 py-1 px-2"
                      value={formData.confidentialityTermYears}
                      onChange={(e) =>
                        update({
                          confidentialityTermYears:
                            parseInt(e.target.value) || 1,
                        })
                      }
                      onClick={(e) => e.stopPropagation()}
                    />{" "}
                    year(s) from Effective Date
                    <span className="block text-xs mt-1" style={{ color: "var(--ink-muted)" }}>
                      Trade secrets protected until no longer considered trade
                      secrets under applicable laws
                    </span>
                  </span>
                </div>
              </div>
              <div
                className={`radio-option ${formData.confidentialityTermType === "perpetuity" ? "selected" : ""}`}
                onClick={() => update({ confidentialityTermType: "perpetuity" })}
              >
                <div className="radio-dot">
                  <div className="radio-dot-inner" />
                </div>
                <span className="text-sm" style={{ color: "var(--ink)" }}>In perpetuity</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Governing Law */}
      <section className="animate-in animate-in-delay-3">
        <h3 className="form-section-title text-lg mb-4" style={{ color: "var(--ink)" }}>
          Governing Law &amp; Jurisdiction
        </h3>

        <div className="space-y-4">
          <div>
            <label className="form-label block mb-1.5">Governing Law (State)</label>
            <input
              type="text"
              className="form-input"
              value={formData.governingLaw}
              onChange={(e) => update({ governingLaw: e.target.value })}
              placeholder="e.g. Delaware"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="form-label block mb-1.5">Jurisdiction (City/County)</label>
              <input
                type="text"
                className="form-input"
                value={formData.jurisdictionCity}
                onChange={(e) => update({ jurisdictionCity: e.target.value })}
                placeholder="e.g. New Castle"
              />
            </div>
            <div>
              <label className="form-label block mb-1.5">Jurisdiction (State)</label>
              <input
                type="text"
                className="form-input"
                value={formData.jurisdictionState}
                onChange={(e) => update({ jurisdictionState: e.target.value })}
                placeholder="e.g. DE"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Modifications */}
      <section>
        <h3 className="form-section-title text-lg mb-4" style={{ color: "var(--ink)" }}>
          Modifications
        </h3>
        <textarea
          className="form-input form-textarea"
          value={formData.modifications}
          onChange={(e) => update({ modifications: e.target.value })}
          placeholder="Optional: list any modifications to the standard terms"
          rows={3}
        />
      </section>

      {/* Parties */}
      <section>
        <h3 className="form-section-title text-lg mb-4" style={{ color: "var(--ink)" }}>
          Parties
        </h3>

        <div className="space-y-4">
          <div className="party-card">
            <div className="flex items-center gap-2 mb-3">
              <span
                className="inline-block w-6 h-6 rounded-full text-xs font-semibold flex items-center justify-center"
                style={{ background: "var(--seal)", color: "white" }}
              >
                1
              </span>
              <span className="form-label" style={{ textTransform: "none", fontSize: "0.875rem" }}>Party 1</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="form-label block mb-1">Name</label>
                <input
                  type="text"
                  className="form-input"
                  value={formData.party1Name}
                  onChange={(e) => update({ party1Name: e.target.value })}
                  placeholder="Full name"
                />
              </div>
              <div>
                <label className="form-label block mb-1">Title</label>
                <input
                  type="text"
                  className="form-input"
                  value={formData.party1Title}
                  onChange={(e) => update({ party1Title: e.target.value })}
                  placeholder="e.g. CEO"
                />
              </div>
              <div>
                <label className="form-label block mb-1">Company</label>
                <input
                  type="text"
                  className="form-input"
                  value={formData.party1Company}
                  onChange={(e) => update({ party1Company: e.target.value })}
                  placeholder="Company name"
                />
              </div>
              <div>
                <label className="form-label block mb-1">Notice Address</label>
                <input
                  type="text"
                  className="form-input"
                  value={formData.party1Address}
                  onChange={(e) => update({ party1Address: e.target.value })}
                  placeholder="Email or postal"
                />
              </div>
            </div>
          </div>

          <div className="party-card">
            <div className="flex items-center gap-2 mb-3">
              <span
                className="inline-block w-6 h-6 rounded-full text-xs font-semibold flex items-center justify-center"
                style={{ background: "var(--gold)", color: "white" }}
              >
                2
              </span>
              <span className="form-label" style={{ textTransform: "none", fontSize: "0.875rem" }}>Party 2</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="form-label block mb-1">Name</label>
                <input
                  type="text"
                  className="form-input"
                  value={formData.party2Name}
                  onChange={(e) => update({ party2Name: e.target.value })}
                  placeholder="Full name"
                />
              </div>
              <div>
                <label className="form-label block mb-1">Title</label>
                <input
                  type="text"
                  className="form-input"
                  value={formData.party2Title}
                  onChange={(e) => update({ party2Title: e.target.value })}
                  placeholder="e.g. CTO"
                />
              </div>
              <div>
                <label className="form-label block mb-1">Company</label>
                <input
                  type="text"
                  className="form-input"
                  value={formData.party2Company}
                  onChange={(e) => update({ party2Company: e.target.value })}
                  placeholder="Company name"
                />
              </div>
              <div>
                <label className="form-label block mb-1">Notice Address</label>
                <input
                  type="text"
                  className="form-input"
                  value={formData.party2Address}
                  onChange={(e) => update({ party2Address: e.target.value })}
                  placeholder="Email or postal"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
