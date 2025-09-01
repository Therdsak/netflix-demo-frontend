const ActionButtons = () => (
  <>
    <button className="hidden xl:block hover:text-gray-300" aria-label="Search">
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </button>
    <span className="hidden xl:block text-sm cursor-pointer hover:text-gray-300">
      Kids
    </span>
    <button
      className="hidden xl:block hover:text-gray-300"
      aria-label="Notifications"
    >
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 
            00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 
            6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0a2 2 0 11-4 0m4 0h-4"
        />
      </svg>
    </button>
  </>
);

export default ActionButtons;
