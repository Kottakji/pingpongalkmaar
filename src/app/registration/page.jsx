import Script from "next/script";

export default function Page() {
  const identifier = process.env.NEXT_PUBLIC_REGISTRATION_FORM;

  return (
    <>
      {/* Stylesheets */}
      <link rel="stylesheet" href="https://registration-form.foys.tech/foys-bootstrap.min.css" />
      <link rel="stylesheet" href="https://unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.min.css" />
      <link rel="stylesheet" href="https://registration-form.foys.tech/chunk-vendors.css" />
      <link rel="stylesheet" href="https://registration-form.foys.tech/app.css" />

      {/* Vendor scripts - must load before app.js */}
      <Script
        src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.min.js"
        strategy="beforeInteractive"
      />

      {/* Custom element */}
      <registration-form-entry configuration={identifier}></registration-form-entry>

      {/* App scripts */}
      <Script
        src="https://registration-form.foys.tech/chunk-vendors.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://registration-form.foys.tech/app.js"
        strategy="afterInteractive"
      />
    </>
  );
}