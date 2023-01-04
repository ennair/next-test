export default function getCSP(nonce: string, preview: boolean) {
  let contentSecurityPolicy = `
    default-src 'self';
    img-src 'self';
    object-src 'none';
    frame-ancestors 'none';
    form-action 'self';
    style-src 'self';
    font-src 'self';
    connect-src 'self';
    script-src 'strict-dynamic' 'self' 'nonce-${nonce}';
    base-uri 'self';
  `;

  return contentSecurityPolicy.replace(/\s{2,}/g, ' ').trim();
}
