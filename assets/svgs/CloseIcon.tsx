export const CloseIcon = ({ className = '', strokeWidth = '' }) => (
  <svg
    className={className}
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 17L17 1M1 1L17 17"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
