"use client";

import { startTransition, useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useRequestDemo } from "./context";

type FormFields = {
  name: string;
  email: string;
  company: string;
  message: string;
};

const EMPTY_FORM: FormFields = { name: "", email: "", company: "", message: "" };

function CloseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path
        d="M1 1L13 13M13 1L1 13"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden>
      <circle cx="24" cy="24" r="23" stroke="var(--n7-blue-500)" strokeWidth="1.5" />
      <path
        d="M14 24L20.5 30.5L34 17"
        stroke="var(--n7-blue-500)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SuccessState({ onClose }: { onClose: () => void }) {
  return (
    <div className="demo-success">
      <CheckIcon />
      <h2 className="demo-success-title">Request Sent!</h2>
      <p className="demo-success-body">
        Thanks for your interest in N7. Our team will reach out within one business day.
      </p>
      <button
        onClick={onClose}
        className="btn-hero-primary inline-flex items-center justify-center px-8"
        style={{ minHeight: "46px" }}
      >
        Done
      </button>
    </div>
  );
}

type DemoFormProps = {
  form: FormFields;
  onChange: (field: keyof FormFields, value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  onClose: () => void;
  firstInputRef: React.RefObject<HTMLInputElement | null>;
};

function DemoForm({ form, onChange, onSubmit, onClose, firstInputRef }: DemoFormProps) {
  return (
    <div className="demo-form-wrap">
      <div className="demo-form-header">
        <div>
          <p className="demo-eyebrow">Get Started</p>
          <h2 id="demo-modal-title" className="demo-title">
            Request a Demo
          </h2>
        </div>
        <button onClick={onClose} className="demo-close-btn" aria-label="Close dialog">
          <CloseIcon />
        </button>
      </div>

      <form onSubmit={onSubmit} noValidate className="demo-form">
        <div className="demo-field">
          <label htmlFor="demo-name" className="demo-label">
            Full Name
          </label>
          <input
            ref={firstInputRef}
            id="demo-name"
            type="text"
            required
            autoComplete="name"
            placeholder="Jane Smith"
            value={form.name}
            onChange={(e) => onChange("name", e.target.value)}
            className="demo-input"
          />
        </div>

        <div className="demo-field">
          <label htmlFor="demo-email" className="demo-label">
            Work Email
          </label>
          <input
            id="demo-email"
            type="email"
            required
            autoComplete="email"
            placeholder="jane@yourbank.com"
            value={form.email}
            onChange={(e) => onChange("email", e.target.value)}
            className="demo-input"
          />
        </div>

        <div className="demo-field">
          <label htmlFor="demo-company" className="demo-label">
            Company / Bank
          </label>
          <input
            id="demo-company"
            type="text"
            required
            autoComplete="organization"
            placeholder="First National Bank"
            value={form.company}
            onChange={(e) => onChange("company", e.target.value)}
            className="demo-input"
          />
        </div>

        <div className="demo-field">
          <label htmlFor="demo-message" className="demo-label">
            What are you looking for?{" "}
            <span className="demo-optional">(optional)</span>
          </label>
          <textarea
            id="demo-message"
            rows={3}
            placeholder="Tell us about your needs…"
            value={form.message}
            onChange={(e) => onChange("message", e.target.value)}
            className="demo-input demo-textarea"
          />
        </div>

        <button
          type="submit"
          className="btn-hero-primary w-full inline-flex items-center justify-center px-8 mt-1"
          style={{ minHeight: "49px" }}
        >
          Submit Request
        </button>
      </form>
    </div>
  );
}

export function RequestDemoModal() {
  const { isOpen, close } = useRequestDemo();
  const [form, setForm] = useState<FormFields>(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => { startTransition(() => setMounted(true)); }, []);

  const handleClose = useCallback(() => {
    close();
    setTimeout(() => {
      setForm(EMPTY_FORM);
      setSubmitted(false);
    }, 300);
  }, [close]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, handleClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && !submitted) {
      const t = setTimeout(() => firstInputRef.current?.focus(), 60);
      return () => clearTimeout(t);
    }
  }, [isOpen, submitted]);

  function handleChange(field: keyof FormFields, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="demo-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={handleClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="demo-modal-title"
        >
          <motion.div
            className="demo-panel"
            initial={{ opacity: 0, y: 28, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {submitted ? (
              <SuccessState onClose={handleClose} />
            ) : (
              <DemoForm
                form={form}
                onChange={handleChange}
                onSubmit={handleSubmit}
                onClose={handleClose}
                firstInputRef={firstInputRef}
              />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
