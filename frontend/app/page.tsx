"use client";

import { useState } from "react";
import { NdaFormData, defaultFormData } from "@/lib/nda-template";
import NdaForm from "@/components/NdaForm";
import NdaPreview from "@/components/NdaPreview";
import DownloadButton from "@/components/DownloadButton";

export default function Home() {
  const [formData, setFormData] = useState<NdaFormData>(defaultFormData);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header
        className="border-b animate-in"
        style={{
          borderColor: "var(--border)",
          background: "linear-gradient(180deg, var(--parchment) 0%, var(--parchment-dark) 100%)",
        }}
      >
        <div className="max-w-[1600px] mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-md flex items-center justify-center"
              style={{ background: "var(--seal)" }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
            </div>
            <div>
              <h1
                className="text-lg font-semibold leading-tight"
                style={{ fontFamily: "'Playfair Display', serif", color: "var(--ink)" }}
              >
                Prelegal
              </h1>
              <p className="text-xs" style={{ color: "var(--ink-muted)" }}>
                Mutual NDA Creator
              </p>
            </div>
          </div>
          <DownloadButton />
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-[1600px] mx-auto px-6 py-6">
        <div className="flex flex-col lg:flex-row gap-6" style={{ minHeight: "calc(100vh - 100px)" }}>
          {/* Left panel — Form */}
          <div className="w-full lg:w-[440px] lg:flex-shrink-0">
            <div
              className="rounded-xl p-6 sticky top-6"
              style={{
                background: "var(--parchment)",
                border: "1px solid var(--border)",
                boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.04)",
              }}
            >
              <NdaForm formData={formData} onChange={setFormData} />
            </div>
          </div>

          {/* Right panel — Preview */}
          <div className="flex-1 min-w-0">
            <div
              className="rounded-xl overflow-hidden"
              style={{
                background: "white",
                border: "1px solid var(--border)",
                boxShadow:
                  "0 1px 3px rgba(0,0,0,0.06), 0 12px 40px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.8)",
              }}
            >
              {/* Document header bar */}
              <div
                className="px-6 py-3 flex items-center justify-between"
                style={{
                  borderBottom: "1px solid var(--border-light)",
                  background: "linear-gradient(180deg, var(--parchment) 0%, var(--parchment-dark) 100%)",
                }}
              >
                <div className="flex items-center gap-2">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ color: "var(--ink-muted)" }}
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                  <span
                    className="text-xs font-medium"
                    style={{ color: "var(--ink-muted)", letterSpacing: "0.03em" }}
                  >
                    LIVE PREVIEW
                  </span>
                </div>
                <span className="text-xs" style={{ color: "var(--ink-muted)" }}>
                  Common Paper MNDA v1.0
                </span>
              </div>

              {/* Document body */}
              <div
                className="preview-scroll overflow-y-auto"
                style={{ maxHeight: "calc(100vh - 160px)" }}
              >
                <div className="px-10 py-8 lg:px-16 lg:py-12">
                  <NdaPreview formData={formData} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-4 text-center">
        <p className="text-xs" style={{ color: "var(--ink-muted)" }}>
          Based on Common Paper Mutual NDA (Version 1.0) &middot; CC BY 4.0
        </p>
      </footer>
    </div>
  );
}
