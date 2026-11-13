"use client";

import { companyLinks } from "@/data/product";
import { trackInitiateCheckout } from "@/lib/pixel";
import styles from "./BuyButton.module.css";

export function ShoppingBasketIcon({
  size = 20,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="m5 11 4-7" />
      <path d="m19 11-4-7" />
      <path d="M2 11h20" />
      <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4" />
      <path d="m9 11 1 9" />
      <path d="m15 11-1 9" />
    </svg>
  );
}

export interface BuyButtonProps {
  id?: string;
  className?: string;
  fullWidth?: boolean;
  compact?: boolean;
  ariaLabel?: string;
}

export default function BuyButton({
  id,
  className = "",
  fullWidth = false,
  compact = false,
  ariaLabel = "Compre agora",
}: BuyButtonProps) {
  return (
    <a
      id={id}
      href={companyLinks.checkout}
      onClick={() => trackInitiateCheckout()}
      className={`${styles.button} ${fullWidth ? styles.fullWidth : ""} ${compact ? styles.compact : ""} ${className}`.trim()}
      aria-label={ariaLabel}
    >
      <ShoppingBasketIcon size={compact ? 18 : 20} className={styles.icon} />
      <span className={styles.text}>Compre agora</span>
    </a>
  );
}

