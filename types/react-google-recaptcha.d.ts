declare module "react-google-recaptcha" {
  import React from "react";

  export interface ReCAPTCHAProps {
    sitekey: string;
    onChange?: (token: string | null) => void;
    grecaptcha?: any;
    theme?: "dark" | "light";
    size?: "compact" | "normal" | "invisible";
    tabindex?: number;
    onExpired?: () => void;
    onErrored?: () => void;
    hl?: string;
  }

  export default class ReCAPTCHA extends React.Component<ReCAPTCHAProps> {
    reset(): void;
    execute(): Promise<string>;
    executeAsync(): Promise<string>;
    getResponse(): string;
  }
}
