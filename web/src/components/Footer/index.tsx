import { EnvelopeSimple } from "phosphor-react";

export function Footer() {
  return (
    <footer className="flex justify-between content-center mx-8 mb-8 mt-5 gap-1">
      <a href="mailto:nicolas.pereira.sampaio16@gmail.com">
        <EnvelopeSimple size={52} color="#F04848" />
      </a>

      <span className="text-1.5xs text-lincoliGrey text-center">
        All rights, lefts and nelsons reserved. 2022
      </span>
    </footer>
  );
}
