'use client';

import Link from 'next/link';

const MobileBookButton = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-white via-white to-transparent lg:hidden">
      <Link
        href="/book-appointment"
        className="flex w-full items-center justify-center rounded-full bg-blue-500 px-8 py-4 text-lg font-semibold uppercase tracking-wide text-white shadow-lg shadow-black/30 transition-colors hover:bg-blue-600 active:bg-blue-700"
      >
        Book Now
      </Link>
    </div>
  );
};

export default MobileBookButton;
