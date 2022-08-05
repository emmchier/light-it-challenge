export const AddIcon = ({ color = '#000000', rotate, ariaLabel }) => (
  <svg
    className={`${rotate}`}
    aria-label={ariaLabel}
    width="19"
    height="19"
    viewBox="0 0 19 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect y="8" width="19" height="3" rx="1.5" fill={color} />
    <rect x="8" y="19" width="19" height="3" rx="1.5" transform="rotate(-90 8 19)" fill={color} />
  </svg>
);

export const AberturasIcon = ({ color = '#000000', rotate, ariaLabel }) => (
  <svg
    className={`${rotate}`}
    aria-label={ariaLabel}
    width="32"
    height="30"
    viewBox="0 0 32 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.5566 7.38998C12.3412 7.17462 11.992 7.17462 11.7767 7.38998L7.50578 11.6609C7.29042 11.8762 7.29042 12.2254 7.50578 12.4408V12.4408C7.72114 12.6561 8.07031 12.6561 8.28567 12.4408L12.5566 8.16988C12.7719 7.95452 12.7719 7.60535 12.5566 7.38998V7.38998Z"
      fill={color}
    />
    <path
      d="M9.86182 7.31342C9.68872 7.14033 9.40807 7.14033 9.23498 7.31342L7.31341 9.23499C7.14032 9.40808 7.14032 9.68873 7.31341 9.86183V9.86183C7.48651 10.0349 7.76716 10.0349 7.94026 9.86183L9.86182 7.94027C10.0349 7.76717 10.0349 7.48652 9.86182 7.31342V7.31342Z"
      fill={color}
    />
    <rect x="2.5" y="0.5" width="27" height="3" stroke={color} />
    <rect x="0.5" y="26.5" width="31" height="3" stroke={color} />
    <rect x="4.5" y="3.5" width="23" height="23" stroke={color} />
    <rect
      x="6.20833"
      y="5.20833"
      width="19.5833"
      height="19.5833"
      stroke={color}
      stroke-width="0.416667"
    />
    <rect x="15" y="5" width="2" height="20" fill={color} />
    <rect x="6" y="16" width="2" height="20" transform="rotate(-90 6 16)" fill={color} />
  </svg>
);

export const ArrowIcon = ({ color = '#000000', rotate, ariaLabel }) => (
  <svg
    className={`${rotate}`}
    aria-label={ariaLabel}
    width="23"
    height="20"
    viewBox="0 0 23 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.5 6.14079C10.6716 6.14079 10 6.81237 10 7.64079L10 17.6408C10 18.4692 10.6716 19.1408 11.5 19.1408V19.1408C12.3284 19.1408 13 18.4692 13 17.6408L13 7.64079C13 6.81237 12.3284 6.14079 11.5 6.14079V6.14079Z"
      fill={color}
    />
    <path
      d="M12.3777 1.07685C11.7919 0.491063 10.8421 0.491063 10.2563 1.07685L1.06067 10.2725C0.474879 10.8583 0.474878 11.8081 1.06066 12.3938V12.3938C1.64645 12.9796 2.5962 12.9796 3.18198 12.3938L12.3777 3.19817C12.9634 2.61238 12.9634 1.66264 12.3777 1.07685V1.07685Z"
      fill={color}
    />
    <path
      d="M10.2769 1.06068C10.8627 0.474889 11.8125 0.474889 12.3983 1.06068L21.6101 10.2725C22.1959 10.8583 22.1959 11.8081 21.6101 12.3939V12.3939C21.0243 12.9796 20.0746 12.9796 19.4888 12.3939L10.2769 3.182C9.69115 2.59621 9.69115 1.64646 10.2769 1.06068V1.06068Z"
      fill={color}
    />
  </svg>
);

export const ChevronIcon = ({ color = '#000000', rotate, ariaLabel }) => (
  <svg
    className={`${rotate}`}
    aria-label={ariaLabel}
    width="12"
    height="19"
    viewBox="0 0 12 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      width="13.0865"
      height="3"
      rx="1.5"
      transform="matrix(0.727329 0.686289 0.686289 -0.727329 0.0667419 9.85394)"
      fill={color}
    />
    <rect
      width="13.6726"
      height="3"
      rx="1.5"
      transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 2.12131 11.7893)"
      fill={color}
    />
  </svg>
);

export const EquipamientoIcon = ({ color = '#000000', rotate, ariaLabel }) => (
  <svg
    className={`${rotate}`}
    aria-label={ariaLabel}
    width="19"
    height="26"
    viewBox="0 0 19 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="9" y="12" width="1" height="12" fill={color} />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4 24H15V26H16V24C16 23.4477 15.5523 23 15 23H4C3.44772 23 3 23.4477 3 24V26H4L4 24Z"
      fill={color}
    />
    <path
      d="M6.15203 0.5H12.848C13.5672 0.5 14.1852 1.01047 14.321 1.71673L16.0517 10.7167C16.2296 11.6418 15.5208 12.5 14.5787 12.5H4.42126C3.47922 12.5 2.77035 11.6418 2.94825 10.7167L4.67902 1.71673C4.81484 1.01047 5.43283 0.5 6.15203 0.5Z"
      stroke={color}
    />
    <path
      d="M4.26737 15.5H14.7326C15.2466 15.5 15.7248 15.7632 15.9999 16.1974L16.6332 17.1974C17.2657 18.1961 16.5481 19.5 15.366 19.5H3.63404C2.45186 19.5 1.73428 18.1961 2.36681 17.1974L3.00014 16.1974C3.27516 15.7632 3.75337 15.5 4.26737 15.5Z"
      stroke={color}
    />
  </svg>
);

export const SustractIcon = ({ color = '#000000', rotate, ariaLabel }) => (
  <svg
    className={`${rotate}`}
    aria-label={ariaLabel}
    width="16"
    height="3"
    viewBox="0 0 16 3"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="16" height="3" rx="1.5" fill={color} />
  </svg>
);

export const TerminacionesIcon = ({ color = '#000000', rotate, ariaLabel }) => (
  <svg
    className={`${rotate}`}
    aria-label={ariaLabel}
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="1" y="1" width="7" height="17" stroke={color} stroke-width="2" />
    <rect x="18" y="8" width="7" height="17" stroke={color} stroke-width="2" />
    <rect
      x="8"
      y="8"
      width="7"
      height="17"
      transform="rotate(-90 8 8)"
      stroke={color}
      stroke-width="2"
    />
    <rect
      x="1"
      y="25"
      width="7"
      height="17"
      transform="rotate(-90 1 25)"
      stroke={color}
      stroke-width="2"
    />
  </svg>
);
