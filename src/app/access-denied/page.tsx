import Link from 'next/link';

export default function AccessDeniedPage() {
  return (
    <div style={{ textAlign: 'center', padding: '4rem' }}>
      <h1>Access Denied</h1>
      <p>You do not have permission to view this page.</p>
      <Link href="/" legacyBehavior>
        <a>Go to Home Page</a>
      </Link>
    </div>
  );
}
